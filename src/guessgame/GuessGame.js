import { isClickableInput } from '@testing-library/user-event/dist/utils';
import {useState,useEffect,useRef} from 'react';


function GuessGame(){
      let [show, setShow] = useState(false);
    let [isClick,setIsClick]=useState(true);
    let [guessId, setGuessId] = useState();
    let [answer, setAnswer] = useState(0);
    const guessAnsRef = useRef(null);
    const [msg,setMsg] = useState("Let start the game");
    const [count,setCount]=useState(0);
    
    let doStart=() =>{
        setShow(true);
        setIsClick(false);
        let url = 'http://localhost:8080/guess-game/start';
            let param = { method : 'GET' };
            fetch(url, param)
            .then(response => response.json())
            .then(json => {
                setGuessId(json.id);
                setAnswer(json.answer);
            });
    }

    const guessBox=()=>{
        
        if(msg === "Your answer is correct !"){
            alert("Congratulation! You made it with "+ count + " attempts. New Random number has been generated. Input number to play again.");
            guessAnsRef.current.value = "";
            setCount(0);
            setShow(false);
            setIsClick(true);
            setMsg("Let start the game");
        }

        return(
            <div>
            <input className="card-text" placeholder='Enter your guess here' ref={guessAnsRef}/><br /><br />
            <p>{msg}</p>
            <p>Attempt : {count}</p>
            <button className="btn btn-primary" onClick={doSearch} >Submit</button>
            </div>
        )
    }

    let doSearch= (event)=>{
        let guessAns = guessAnsRef.current.value;
        setCount(count+1);
        let url = 'http://localhost:8080/guess-game/'+ guessId + '/'+guessAns;
        let param = { method : 'GET' };
        fetch(url, param)
            .then(response => response.text())
            .then(data => setMsg(data));
            
    }



    return ( 
        <div className="card text-center mb-10">
            <div className="card-body">
                <h5 className="card-title">Guess Game with React JS</h5><br />
                <p className="card-text">Try and guess a number in the range of 1-100.</p>
                {isClick && <button className="btn btn-primary" onClick={doStart}>Start Play</button>}
                {show && guessBox()}
            </div>
        </div>

     );
    }

export default GuessGame;

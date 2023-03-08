import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function FilmDetails(props){

let [filmActor, setfilmActor] = useState({actors:[]});
let {id} = useParams();

if(id==null)
    {id= props.filmId;}
   
    useEffect(()=> {
    let url = "http://localhost:8080/find-film-actor/"+id;
    let param = { method: 'GET'};

    fetch(url,param).then((data) => {
        return data.json();
    }) .then((json) => {
        console.log(json);
        setfilmActor(json);
    }).catch((err)=>{
    console.log(err);
    })
    },[]);


    return (  
            <div className="card border-dark mb-3">
            <div className="card-header">filmActor Details</div>
            <div className="card-body text-dark">
                <h5 className="card-title">{ filmActor.title }</h5>
                <p className="card-text">{ filmActor.description }</p>
                <ul className="card-text">
                    {
                        filmActor.actors.map((actor) => (
                            <li key={actor.actorId}>{actor.firstName} {actor.lastName}</li>
                        ))}
                </ul>
            </div>
            </div>
        );
}

export default FilmDetails;
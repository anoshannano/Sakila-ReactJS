import { useEffect, useState } from "react";    

function FilmSearch() {
    let [film, setFilm] = useState([]);
    let[title,setTitle] = useState('');
    let[show,setShow]=useState(false);

    let doSearch= (event) => {
        let newTitle = event.target.value;
        setTitle(newTitle);

        if(newTitle.length >2){
            setShow(true);
            
        }
        else{
            setShow(false)
        };
    }

    useEffect(()=> {
        let url = "http://localhost:8080/all-film";
        let param = { method: 'GET'};

        fetch(url,param).then((data) => {
            return data.json();
        }) .then((json) => {
            console.log(json);
            setFilm(json);
        }).catch((err)=>{
        console.log(err);
        })
    },[]);

    return (  
        <div className="container">
            <h1>Film List</h1>
            <input type="text" placeholder="Search Film Title" onChange={doSearch} />
            {show && <table className="table table-striped">
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {film.map((f,no)=>(
                        <tr key={f.filmId}>
                        <td>{no+1}.</td>
                        <td>{f.title}</td>
                        <td>{f.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>}
        </div>
    );
}

export default FilmSearch;
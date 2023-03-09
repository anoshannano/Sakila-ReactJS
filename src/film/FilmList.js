import { useEffect, useState } from "react";    
import FilmDetails from "./FilmDetails";

function FilmList() {
    let [film, setFilm] = useState([]);
    let[filmId,setFilmId]= useState([1]);

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

    const doClick =(filmId) =>{
        setFilmId(filmId);
        console.log("film id " + filmId);
    }

    return (  
        <div className="row">
        <div className="col-md-8" id="search-list">
            <h1>Film List</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {film.map((f,no)=>(
                        <tr key={f.filmId}>
                        <td>{no+1}.</td>
                        <td>{f.title}</td>
                        <td>{f.description}</td>
                        {/* <a onClick={()=> {setFilmId(film.filmId); setShowDetail(true);}} /> */}
                        <td><button onClick={() => doClick(f.filmId)}>Details</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="col-md-4">
            <FilmDetails filmId={filmId} key={filmId} />
        </div>
        </div>
    );
}

export default FilmList;
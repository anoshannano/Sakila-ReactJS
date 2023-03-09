import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function FilmDetail(props) {
    let [film, setFilm] = useState({ actors: []});
    let {id} = useParams();
    
    // read from props only if no param passed
    if (id == null)
        id = props.filmId;

    useEffect(() => {
        let url = 'http://localhost:8080/find-film-actor/'+id;
        let param = { method : 'GET' };
        fetch(url, param)
        .then(data => data.json())
        .then(json => {
            console.log(json);
            setFilm(json)
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Film Detail</h1>
            <div>Title : { film.title }</div>
            <br />
            <div>Description : { film.description }</div>
            <ul>
                { film.actors.map((actor) => (
                    <li key={actor.actorId}>{ actor.firstName } { actor.lastName }</li>
                ))}
            </ul>
        </div>
    );
}

export default FilmDetail;
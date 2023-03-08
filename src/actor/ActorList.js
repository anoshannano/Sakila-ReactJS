import { useEffect, useState } from "react";    

function ActorList() {
    let [actor, setActor] = useState([]);

    useEffect(()=> {
        let url = "http://localhost:8080/all-actor";
        let param = { method: 'GET'};

        fetch(url,param).then((data) => {
            return data.json();
        }) .then((json) => {
            console.log(json);
            setActor(json);
        }).catch((err)=>{
        console.log(err);
        })
    },[]);

    return (  
        <div className="container">
            <h1>Actor List</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {actor.map((f,no)=>(
                        <tr key={f.actorId}>
                        <td>{no+1}.</td>
                        <td>{f.firstName}</td>
                        <td>{f.lastName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ActorList;
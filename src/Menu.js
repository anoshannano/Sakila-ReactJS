import { Link } from "react-router-dom";

function Menu() {
    return ( 
        <div className="navbar">
            <h1>Sakila Store</h1>
            <div className="links">
            <Link to ="/film">Film</Link>
            <Link to ="/actor">Actor</Link>
            <Link to ="/film-search">Film Search</Link>
            <Link to ="/rental">Rental</Link>
            </div>
        </div>
     );
}

export default Menu;
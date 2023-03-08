import { Link } from "react-router-dom";

function Menu() {
    return ( 
        <nav>
            <Link to ="/film">Film</Link>
            <Link to ="/actor">Actor</Link>
            <Link to ="/film-details/:id">Film Details</Link>
            <Link to ="/film-search">Film Search</Link>
            <Link to ="/rental">Rental</Link>
        </nav>
     );
}

export default Menu;
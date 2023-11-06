import { Link } from "react-router-dom";

function Discover(){
    return(
        <div className="test3">
            <h1>Find your family.</h1>
            <h1>Discover yourself.</h1>
            <p>Bring to life your family’s history by exploring the lives of those that came before you.</p>
            <Link to="/contact"><button>GET STARTED</button></Link>
        </div>
    )
}

export default Discover;

import logo from "../assets/img/logo.png"
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="navbar-items">
                <Link to='/'><li>HOME</li></Link>
                <Link to='/aboutus'><li>ABOUT</li></Link>
                <Link to='/contact'><li>CONTACT</li></Link>
            </div>
            <div className="login-button">
                {/* <p>LOGIN</p> */}
                <Link to='/login'><button>Login</button></Link>
            </div>
        </div>
    )
}

export default Navbar;
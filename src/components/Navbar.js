import logo from "../assets/img/logo.png"
import { useRef } from "react";
import { FaBars, FaTimes} from "react-icons/fa"
import { Link } from "react-router-dom";

function Navbar(){
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
                 "responsive_nav"
            );
    };

    const hideNavbar =()=>{
        navRef.current.classList.remove(
                  "responsive_nav"
            );
    };

    return(
        <header>
            <img src={logo}></img>
            <nav ref={navRef}>
                <Link to='/'><a onClick={hideNavbar}>HOME</a></Link>
                <Link to='/aboutus'><a onClick={hideNavbar}>ABOUT</a></Link>
                <Link to='/contact'><a onClick={hideNavbar}>CONTACT</a></Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <Link to='/login'><button className="login-btn" onClick={hideNavbar}>Login</button></Link>
            <button 
                    className="nav-btn" 
                    onClick={showNavbar}>
                    <FaBars />
            </button>
        </header>
    );
}

export default Navbar;

import logo from "../assets/img/logo.png"

function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="navbar-items">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </div>
            <div className="login-button">
                <p>LOGIN</p>
            </div>
        </div>
    )
}

export default Navbar;
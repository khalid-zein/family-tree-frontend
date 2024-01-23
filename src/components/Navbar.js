import logo from "../assets/img/logo.png";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ loggedIn, setLoggedIn}) {
  const navRef = useRef();
  const navigate = useNavigate()

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("twt-token");
    setLoggedIn(false);

    // Redirect to the login page or any other page after logout
    navigate("/login");
  };


  return (
    <header>
      <img src={logo} alt='Logo' />
      <nav ref={navRef}>
        <Link to="/">
          <a onClick={hideNavbar}>HOME</a>
        </Link>
        <Link to="/aboutus">
          <a onClick={hideNavbar}>ABOUT</a>
        </Link>
        <Link to="/contact">
          <a onClick={hideNavbar}>CONTACT</a>
        </Link>
        {loggedIn ? (
          <>
            <Link to="/admin">
              <a onClick={hideNavbar}>ADMIN</a>
            </Link>
            <Link onClick={handleLogout} to="/">
              <a className="login-btn">LOG OUT</a>
            </Link>
          </>
        ) : (
          <></>
        )}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      <div className="login-btn-box">
        {loggedIn ? (
          <></>
        ) : (
          <Link to="/login">
            <a onClick={hideNavbar} className="login-btn">Admin's Dashboard</a>
          </Link>
        )}
        
      </div>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;


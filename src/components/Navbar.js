import logo from "../assets/img/logo.png";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { userUrl } from "../data/ApiUrls";

function Navbar({ loggedIn, setLoggedIn}) {
  const navRef = useRef();
  const navigate = useNavigate()

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  const handleLogOut = () => {
    localStorage.clear()
    setLoggedIn(false)

      fetch(`${userUrl}/logout`, {
        method: "DELETE"
      })
      .then((res) => res.json())
      .then(data => {
        navigate('/')
      })
      .catch(error => console.error(error));
    
  }

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
          <a onClick={hideNavbar}>CONTACT US</a>
        </Link>
        {loggedIn ? (
          <>
            <Link to="/admin            ">
              <a onClick={hideNavbar}>ADMIN</a>
            </Link>
            <Link to="/admin/create-members">
              <a onClick={hideNavbar}>CREATE MEMBERS</a>
            </Link>
            <Link onClick={handleLogOut} to="/">
              <a className="login-btn">Log Out</a>
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


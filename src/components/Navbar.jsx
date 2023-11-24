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
        console.log(data)
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
        {loggedIn ? (
          <>
            <Link to="/admin            ">
              <a onClick={hideNavbar}>ADMIN</a>
            </Link>
            <Link to="/admin/create-members">
              <a onClick={hideNavbar}>CREATE MEMBERS</a>
            </Link>
          </>
        ) : (
          <></>
        )}
        <Link to="/contact">
          <a onClick={hideNavbar}>CONTACT</a>
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <div className="login-btn-box">
        <i class="fa-regular fa-user"></i>
        {loggedIn ? (
          <Link onClick={handleLogOut} to="/">
            <button className="login-btn">Log Out</button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        )}
        
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;

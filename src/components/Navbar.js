import logo from "../assets/img/logo.png";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../config/supabaseConfig";

function Navbar({session}) {
  const navRef = useRef();
  const navigate = useNavigate()

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()

    console.log(error)
    navigate('/')
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
        {session ? (
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
          <a onClick={hideNavbar}>CONTACT US</a>
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      <div className="login-btn-box">
        {session ? (
          <Link onClick={handleLogout} to="/">
            <button className="login-btn">Log Out</button>
          </Link>
        ) : (
          <Link to="/login">
            <button onClick={hideNavbar} className="login-btn">Admin's Dashboard</button>
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

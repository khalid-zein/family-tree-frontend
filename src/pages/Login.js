import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { userUrl } from "../data/ApiUrls";

const Login = ({loggedIn, setLoggedIn}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (loggedIn) {
      navigate("/admin/create-members");
    }
  }, [loggedIn, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        const response = await fetch(`${userUrl}/login/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // credentials: "include",
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          throw new Error("Login failed");
        }

        const data = await response.json();

        localStorage.setItem("loggedIn", true);
        localStorage.setItem("twt-token", data.token);
        console.log(data.token)
        setEmail("");
        setPassword("");
        setLoggedIn(true);

        toast.success("User logged in successfully!");

        navigate("/admin-create");

      } catch (error) {
        toast.error("Login failed. Please try again!");
      }
    } else {
      toast.error("Please fill in all fields!");
    }
  }

  return (
    <>
      <ToastContainer 
        position = 'top-center'
        autoClose = {3000}
        hideProgressBar = {true}
        closeOnClick = {true}
        pauseOnHover = {true}
        draggable = {true}
        progress = {undefined}
        theme= 'colored'
    />
    <div className="login">
      <div className="login-container">

        <div className="login-one">
          <div>
            <h3><i className="fa-solid fa-triangle-exclamation"></i></h3>
            <p className="p-one">Limited access</p>
          </div>
        </div>

        <div className="login-two">
          <div className="login-child">
            <p>Sign in</p>
            <form onSubmit={handleLogin}>
              <div>
                <input
                  name="email"
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  className="entry" 
                  placeholder="Enter email ..."
                />
                <input
                  name="password"
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  className="entry" 
                  placeholder="Enter password ..."
                />
              </div>
              <button>Submit</button><br></br>
              <a href="#">forgot password ?</a>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;

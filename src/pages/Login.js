import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { userUrl } from "../data/ApiUrls";

const Login = ({loggedIn, setLoggedIn}) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    if (loggedIn) {
      navigate('/admin')
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    
    if (email && password) {
      if (email === 'nodhiambo01@gmail.com' && password === '@nickoch96') {
        fetch(`${userUrl}/login`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({email, password}),
        })
        .then((res) => res.json())
        .then((data) => {
            localStorage.setItem('loggedIn', true)
            localStorage.setItem('twt-token', data.token)
            setEmail("")
            setPassword("")
            setLoggedIn(true)
            setTimeout(() => {
              toast.success('User logged in successfully!')
            }, 1000);
            setTimeout(() => {
              navigate('/admin/create-members')
            } , 2000);
        })
      } else {
      toast.error('The email & password entered is not correct. Please try again!')
      }
    } else {
      toast.error('Please fill in all fields!')
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
            <h3><i class="fa-solid fa-triangle-exclamation"></i></h3>
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

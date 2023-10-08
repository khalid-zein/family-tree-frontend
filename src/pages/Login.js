import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../config/supabaseConfig";
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function Login() {
const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()
    
    try {
      if (email && password) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password
        })      
        
        if (data) {
          setEmail('') 
          setPassword('')
          navigate('/admin')
        } 
        
        if (error) {
          console.log(error)
        }
        toast.success('User logged in successfully')
      } else {
        toast.error('Please fill in all fields')
      }

    } catch (err) {
      console.log(err)
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
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  className="entry" 
                  type="email" 
                  placeholder="Email"
                />
                 <input
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  className="entry" 
                  type="password" 
                  placeholder="password"
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

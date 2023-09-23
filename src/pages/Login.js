import { useEffect, useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    axios.post(process.env.REACT_APP_LOGIN_USER , {
      email, password
    })
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    handleLogin()
  })

  return (
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
  );
}

export default Login;

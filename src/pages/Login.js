import { useEffect, useState } from "react";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({email: "", password: ""})

  const handleInputChange = (e) => {
    setFormData((prevFormItem) => ({
      ...prevFormItem, [e.target.value]: e.target.value
    }))
  }

  const handleLogin = async (e) => {
    // e.preventDefault()
    
    try {
      const res = await axios.post(process.env.REACT_APP_CREATE_MEMBER , {
        formData
      })
      console.log(res)
    } catch (err) {
      console.log()
    }
    
    
    console.log(formData)
    setFormData({email: '', password: ''})
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
                  value={formData.email} 
                  onChange={handleInputChange}
                  className="entry" 
                  type="email" 
                  placeholder="Email"
                />
                 <input
                  value={formData.password} 
                  onChange={handleInputChange}
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

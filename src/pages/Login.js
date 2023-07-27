function Login() {
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
            <form>
              <div>
                 <input className="entry" type="email" placeholder="Email"></input>
                 <input className="entry" type="password" placeholder="password"></input>
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

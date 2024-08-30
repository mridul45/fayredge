import "../Css/Login.css";
import LoginImg from "/loginImg.png";

function Login() {
  return (
    <div className="login_container">

      <div className="login_container_part1">
        <img className="img_class" src={LoginImg} />
      </div>

      <div className="login_container_part2">

        <div className="part2_logo">
          <img src="/logo.png" className="part2_logo" />
        </div>

        <div className="part2_form">

          welcome!!!
          <h2 className="h2">Sign in</h2>

          <form className="form">

            <div className="form_email">
              <label>Email</label>
              <input type="text" placeholder="Enter email" />
            </div>

            <div className="form_password">
              <label>Password</label>
              <input type="password" placeholder="Enter password" />
            </div>

          </form>
          
        </div>
        <button className="btn">SIGN IN</button>
        <h5>
          Having trouble signining in? <a href="#">click here</a>
        </h5>
      </div>
    </div>
  );
}

export default Login;

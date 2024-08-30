import "../Css/Components/Login.css";
import LoginImg from "/loginImg.png";
import Logo from "/logo.png";


function Login() {
  return (

    <div className="login_container">

      <div className="login_container_part1">
        <img className="img_class" src={LoginImg} />
      </div>

      <div className="login_container_part2">

        <div className="part2_logo">
          <img src={Logo} className="logo" />
        </div>

        <div className="part2_form">

          <h3 className="h3">welcome!!!</h3>
          <h2 className="h2">Sign in</h2>

          <form className="form">

            <div className="form_input_div">

              <label htmlFor="email" className="form_label">
                Email
              </label>

              <input
                className="form-input"
                id="email"
                type="text"
                placeholder="Enter email"
              />

            </div>

            <div className="form_input_div">

              <div className="form_password_input form_label">

                <label htmlFor="password">Password</label>
                <p>Forgot Password?</p>

              </div>

              <input
                className="form-input"
                id="password"
                type="password"
                placeholder="Enter password"
              />

            </div>

            <div className="button_container">
              <button className="btn">SIGN IN</button>
            </div>

            <div className="centered-text">
              <h5>
                Having trouble signing in? <a href="#">Click here</a>
              </h5>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

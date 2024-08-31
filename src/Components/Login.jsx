import { useState, useEffect } from "react";
import "../Css/Components/Login.css";
import LoginImg from "/loginImg.png";
import Logo from "/logo.png";
import { HiEye, HiEyeOff } from "react-icons/hi";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@fayredge\.com$/;
    if (!emailRegex.test(email)) {
      setEmailError("Email must be in the format: yourname@fayredge.com");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
    } else if (!/[\W_]/.test(password)) {
      setPasswordError("Password must contain at least one symbol.");
    } else {
      setPasswordError("");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  useEffect(() => {
    if (!emailError && !passwordError && email && password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password, emailError, passwordError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Done");
  };

  return (
    <div className="login_container">
      <div className="login_container_part1">
        <img className="img_class" src={LoginImg} alt="Login" />
      </div>

      <div className="login_container_part2">
        <div className="part2_logo">
          <img src={Logo} className="logo" alt="Logo" />
        </div>

        <div className="part2_form">
          <h3 className="h3">welcome!!!</h3>
          <h2 className="h2">Sign in</h2>

          <form className="form" onSubmit={handleSubmit}>
            <div className="form_input_div">
              <label htmlFor="email" className="form_label">
                Email
              </label>
              <input
                className="form-input"
                id="email"
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && <p className="error-message">{emailError}</p>}
            </div>

            <div className="form_input_div">
              <div className="form_password_input">
                <label htmlFor="password" className="form_label">
                  Password
                </label>
                <p>Forgot Password?</p>
              </div>

              <div className="relativeBox">
                <input
                  className="form-input"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {showPassword ? (
                    <HiEyeOff className="text-gray-500" />
                  ) : (
                    <HiEye className="text-gray-500" />
                  )}
                </button>
              </div>
              {passwordError && (
                <p className="error-message">{passwordError}</p>
              )}
            </div>

            <div className="button_container">
              <button
                className={isButtonDisabled ? "btn-d" : "btn-a"}
                disabled={isButtonDisabled}
              >
                SIGN IN
              </button>
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

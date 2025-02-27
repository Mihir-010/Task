import React from "react";

const Signin = ({ toggleForm }) => {
  return (
    <div className="form-box">
      <h1>Sign In</h1>
      <div className="social-container">
        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
      </div>
      <span>or use your account</span>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <a href="#">Forgot your password?</a>
      <button>Sign In</button>
      <p>
        Don't have an account?{" "}
        <span className="toggle-link" onClick={toggleForm}>Sign Up</span>
      </p>
    </div>
  );
};

export default Signin;

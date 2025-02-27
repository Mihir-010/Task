import React from "react";

const Register = ({ toggleForm }) => {
  return (
    <div className="form-box">
      <h1>Create Account</h1>
      <div className="social-container">
        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
      </div>
      <span>or use your email for registration</span>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign Up</button>
      <p>
        Already have an account?{" "}
        <span className="toggle-link" onClick={toggleForm}>Sign In</span>
      </p>
    </div>
  );
};

export default Register;

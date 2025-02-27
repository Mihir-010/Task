import React, { useState } from "react";
import Signin from "./Signin";
import Register from "./Register";
import "../styles/LoginRegister.css";

const AuthContainer = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className={`container ${isRegister ? "right-panel-active" : ""}`}>
      {/* Register Form */}
      <div className="form-container sign-up-container">
        <Register toggleForm={() => setIsRegister(false)} />
      </div>

      {/* Signin Form */}
      <div className="form-container sign-in-container">
        <Signin toggleForm={() => setIsRegister(true)} />
      </div>

      {/* Overlay */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected, please login with your personal info</p>
            <button className="ghost" onClick={() => setIsRegister(false)}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your details and start your journey with us</p>
            <button className="ghost" onClick={() => setIsRegister(true)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;

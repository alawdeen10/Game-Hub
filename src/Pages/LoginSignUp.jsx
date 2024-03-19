import React from "react";
import "./css/LoginSignUp.css";

const LoginSignUp = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignip-fields">
          <input type="text" placeholder="Your Name..." />
          <input type="email" placeholder="Email address..." />
          <input type="password" placeholder="Password..." />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login in</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;

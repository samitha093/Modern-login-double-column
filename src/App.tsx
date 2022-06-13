import "./styles.css";
import { useState } from "react";
import ReactDOM from "react-dom";

export default function App() {
  const container = document.getElementById("container");
  const signUpButton = () => {
    if (container !== null) {
      container.classList.add("right-panel-active");
    }
  };
  const signInButton = () => {
    if (container !== null) {
      container.classList.remove("right-panel-active");
    }
  };
  return (
    <div style={{ backgroundColor: "#FBFBF4" }}>
      <div className="main-background">
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form className="modern-form" action="#">
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="#" className="social modern-a">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social modern-a">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#" className="social modern-a">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span className="new-span">
                or use your email for registration
              </span>
              <input
                className="inputbox-modern"
                type="text"
                placeholder="Name"
              />
              <input
                className="inputbox-modern"
                type="email"
                placeholder="Email"
              />
              <input
                className="inputbox-modern"
                type="password"
                placeholder="Password"
              />
              <button className="modern-btn">Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form className="modern-form" action="#">
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="#" className="social modern-a">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social modern-a">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#" className="social modern-a">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span className="new-span">or use your account</span>
              <input
                className="inputbox-modern"
                type="email"
                placeholder="Email"
              />
              <input
                className="inputbox-modern"
                type="password"
                placeholder="Password"
              />
              <a href="#" className="modern-a">
                Forgot your password?
              </a>
              <button className="modern-btn">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button className="ghost modern-btn" onClick={signInButton}>
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost modern-btn" onClick={signUpButton}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

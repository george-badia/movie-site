
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./LoginAndSignUp.css";

const LoginAndSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSignUp) {
      const userData = {
        name,
        email,
        password,
      };

      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("User registered:", data);
          navigate("/");
        })
        .catch((error) => console.error("Error registering user:", error));
    } else {
      fetch("http://localhost:5000/users")
        .then((response) => response.json())
        .then((users) => {
          const user = users.find(
            (u) => u.email === email && u.password === password
          );

          if (user) {
            setLoginError("");
            alert("Login successful!");
            navigate("/");
          } else {
            setLoginError("Invalid email or password");
          }
        })
        .catch((error) => {
          console.error("Error during login:", error);
          setLoginError("An error occurred. Please try again.");
        });
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-image"></div>
      <div className="auth-main">
        <div className="auth-container">
          <h2>{isSignUp ? "Create an Account" : "Welcome back!"}</h2>
          <p className="SignUp-info">
            {isSignUp
              ? "Please enter your details to sign up"
              : "Please enter your details to log in"}
          </p>
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="pass-input-div">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {showPassword ? (
                <FaEyeSlash
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEye
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            <button type="submit">{isSignUp ? "Sign Up" : "Log In"}</button>
            {loginError && <p className="login-error">{loginError}</p>}
          </form>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="toggle-auth"
          >
            {isSignUp
              ? "Already have an account? Log In"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginAndSignUp;

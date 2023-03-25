import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    const params = {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    };
    const loginBody = {
      email: username,
      password: password,
    };
    console.log(loginBody);
    const loginUrl = "http://localhost:3000/api/users/login";
    axios
      .post(loginUrl, loginBody, params)
      .then((response) => {
        // handle successful login
       
          console.log(response);
          localStorage.setItem('token',response.data.token)
        
      })
      .catch((error) => {
        // handle login error

      });
  };

  return (
    <div className="container">
      <h1 className="highlight">Login Page</h1>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <br />
      <input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br />
      <button className="submit-button" onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <Link to="/Register">Register</Link>
      </p>
    </div>
  );
}

export default Login;

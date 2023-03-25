import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from '../../shared/services/crud-service';


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const displayLoginNotification = (type, message) => {
    if (type === 'success') {
      toast.success(message);
    } else if (type === 'error') {
      toast.error(message);
    }
  };
  const handleLogin = () => {
    loginUser(username, password)
    .then((response) => {
      console.log(response);
      displayLoginNotification("success", "Succesfully Logged In!");
      localStorage.setItem('token',response.data.token);
      localStorage.setItem('userId',response.data.userId);
    })
    .catch((error) => {
      displayLoginNotification("error", "Unauthorized user!! Please check your username and password!!");
    })
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
      <ToastContainer />
    </div>
    
  );
}

export default Login;

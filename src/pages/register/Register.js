import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerUser } from "../../shared/services/crud-service";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNo, setContactNo] = useState("");

  const displayLoginNotification = (type, message) => {
    if (type === 'success') {
      toast.success(message);
    } else if (type === 'error') {
      toast.error(message);
    }
  };

  const handleRegister = () => {
    registerUser(firstname, lastName, email, password, contactNo)
    .then(response => {
      displayLoginNotification("success", "User Created Successfully.");
    })
    .catch(error => {
      // handle Register error
      displayLoginNotification("error", "Please check your details!");
    });
  };

  return (
    <div div className="container">
      <h1 className='highlight'>Register Page</h1>

      <input
        placeholder="Enter First Name"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
        required="true"
      ></input>
      <br />

      <input
        placeholder="Enter Last Name"
        required="true"
        value={lastName}
        onChange={(e) => setlastName(e.target.value)}
      ></input>
      <br />

      <input
        placeholder="Enter Email"
        type="String"
        required="true"
        unique="true"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <br />

      <input
        placeholder="Enter New Password"
        id="password"
        type="String"
        required="true"
        unique="true"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br />

      <input
        placeholder="Confirm Password"
        id="confirm_password"
        type="String"
        required="true"
        unique="true"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      ></input>
      <br />

      <input placeholder="Contact No" type="number" required="true" value={contactNo}
        onChange={(e) => setContactNo(e.target.value)}></input>
      <br />

      <button className="submit-button" onClick={handleRegister}>Register</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <ToastContainer />
    </div>
  );
}

export default Register;

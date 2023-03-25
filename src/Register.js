import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
// import { handleRegister } from "./Commonapis";
import axios from "axios";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNo, setContactNo] = useState("");


  const handleRegister = () => {
    const params = {
      headers: {
        'Content-Type': 'application/json',
        'accept':'application/json'
      },

    }
    const registerBody = {
      firstName:firstname,
      lastName:lastName,
      email:email,
      password:password,
      username:email,
      contactNumber:contactNo
     
    };
    console.log(registerBody);
    const registerUrl = "http://localhost:3000/api/users/register";
      axios.post(registerUrl,registerBody,params )
      .then(response => {
       console.log(response.data);
      })
      .catch(error => {
        // handle Register error
      });
    };

  return (
    <div div className="container">
      <h1>Register Page</h1>

      <input
        placeholder="Enter First Name"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
        required="true"
      ></input>
      <br />

      <input
        placeholder="Enter Middle Name"
        value={middlename}
        onChange={(e) => setMiddlename(e.target.value)}
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

      <button onClick={handleRegister}>Register</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { handleRegister } from './Commonapis';

function Register() {
  const [username,setUsername]=useState('');
  // const [password,setPassword]=useState('');
  // const [password,setPassword]=useState('');
  // const [password,setPassword]=useState('');
  // const [password,setPassword]=useState('');
  // const [password,setPassword]=useState('');
  // const [password,setPassword]=useState('');

  return (
    <div div className='container'>
      <h1>Register Page</h1>
      <input placeholder="Enter First Name" value={username} onChange={(e) => setUsername(e.target.value)} required="true"></input><br />
      <input placeholder="Enter Middle Name"></input><br />
      <input placeholder="Enter Last Name" required="true"></input><br />
      <input placeholder='Enter Email' type='String' required='true' unique='true'></input><br />
      <input placeholder='Enter New Password' id="password" type='String' required='true' unique='true'></input><br />
      <input placeholder='Confirm Password' id="confirm_password" type='String' required='true' unique='true'></input><br />
      <input placeholder='Contact No' type='number' required='true' ></input><br />
      <button onClick={handleRegister}>Register</button>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Register;

import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className='container'>
      <h1>Login Page</h1>
      <input placeholder='Username'></input><br/>
      <input placeholder='password'></input><br/>
      <button>Login</button>
      <p>Don't have an account? <Link to="/Register">Register</Link></p>
    </div>
  );
}

export {Login};

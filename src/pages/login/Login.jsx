import React, { useState } from 'react';
import Style from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'



function Login() {
  
  const [email, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate()

  function handleEmailChange(event) {
    setUserEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleLogin(event) {
    event.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = storedUsers.find(user => user.email === email && user.password === password && user.subscriptionData.isActive === false );

    
    if (existingUser) {
      const confirmation = toast.success('You are successfully logged in.')
      if (confirmation) {
        existingUser.subscriptionData.isActive = true;
        localStorage.setItem('users', JSON.stringify(storedUsers))
        localStorage.setItem('logged', true)
        navigate('/cart');
      }
    } 
    else if(storedUsers.password !== password) {
      setLoginError('Email or Password is incorrect');
    }else{
      setLoginError('')
      return 
    }
  }

  return (
    <div className={Style.container}>
      
    <div className={Style.form}>
      <h1>Login</h1>
      <form onSubmit={handleLogin} className={Style.data}>
        <div className={Style.inputContainer}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required={true}
          />
        </div>
        <div className={Style.inputContainer}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required={true}
          />
        </div>
        {loginError && <span>{loginError}</span>}
        <button type="submit" className={Style.loginButton}>
          Login
        </button>
        <p className={Style.linkText}>
          Don't have an account?{' '}
          <Link to="/signup" className={Style.registrationLink}>
            Register here
          </Link>
          .
        </p>
      </form>
    </div>
  </div>
);
}

export default Login;
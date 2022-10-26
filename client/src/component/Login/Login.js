import React from 'react'
import "./style.css";
function Login() {
  return (
    <div className='login'>
      <form className='Form Main'>
      <h1>Login</h1>
        <input type="email" placeholder="Enter your mail" autoComplete='off'></input>
        <input type="password" placeholder="Enter your password" autoComplete='off'></input>
        <div className='button'>Login</div>
        <div>OR</div>
        <div className='button'>Register</div>
      </form>
    </div>
  )
}

export default Login
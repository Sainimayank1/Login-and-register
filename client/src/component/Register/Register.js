import React from 'react'
import './style.css'

function Register() {
  return (
    <div className='register'>
      <form className='Form Main'>
        <h1>Register</h1>
        <input type="text" placeholder="Your Name" autoComplete='off'></input>
        <input type="email" placeholder="Your Email" autoComplete='off'></input>
        <input type="password" placeholder="Your Password" autoComplete='off'></input>
        <input type="password" placeholder="Re-enter Password" autoComplete='off'></input>
        <div className='button'>Register</div>
        <div>OR</div>
        <div className='button'>Login</div>
      </form>
    </div>
  )
}

export default Register
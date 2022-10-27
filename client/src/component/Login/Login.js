import React from 'react'
import { useState } from 'react';

import "./style.css";
function Login() {
  const [user,setUser] = useState(
    {
      email:"",
      password:""
    }
  )

  const handlechange = (e) =>
  {
    const {name , value } = e.target;
      setUser({...user,
        [name]:value})
  }

  return (
    <div className='login'>
    {console.log(user)}
      <form className='Form Main'>
      <h1>Login</h1>
        <input type="email" name='email' value={user.email} placeholder="Enter your mail" autoComplete='off' onChange={handlechange}></input>
        <input type="password" name="password" value={user.password} placeholder="Enter your password" autoComplete='off' onChange={handlechange}></input>
        <div className='button'>Login</div>
        <div>OR</div>
        <div className='button'>Register</div>
      </form>
    </div>
  )
}

export default Login
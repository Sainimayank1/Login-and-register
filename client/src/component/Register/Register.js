import React from 'react'
import './style.css'
import { useState } from 'react'


function Register() {
  const [user , setUser] = useState({
    name:"",
    email:"",
    password:"",
    repassword:""
  })

  const handlechange = (e) =>
  {
      const { name,value } = e.target;
      setUser({...user,
        [name]:value});
  }
  return (
    <div className='register'>
      <form className='Form Main'>
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder="Your Name" autoComplete='off' onChange={handlechange}></input>
        <input type="email" name="email" value={user.email} placeholder="Your Email" autoComplete='off' onChange={handlechange}></input>
        <input type="password" name="password" value={user.password} placeholder="Your Password" autoComplete='off' onChange={handlechange}></input>
        <input type="password" name="repassword" value={user.repassword} placeholder="Re-enter Password" autoComplete='off' onChange={handlechange}></input>
        <div className='button'>Register</div>
        <div>OR</div>
        <div className='button'>Login</div>
      </form>
    </div>
  )
}

export default Register
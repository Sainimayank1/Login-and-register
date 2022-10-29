import React from 'react'
import './style.css'
import { useState } from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    repassword: ""
  })

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  }

  const handleRegister = () => {
    const { name, email, password, repassword } = user;
    if (name && email && password) {

      if (password === repassword) {

        axios.post("http://localhost:5000/register", user)
        .then(()=>{navigate('/')})
        .catch((err)=>{console.log(err)})
      }
      else {
        setUser({ name: "", email: "", password: "", repassword: "" });
        alert("Invaild Credential");
      }
    }
    else {
      setUser({ name: "", email: "", password: "", repassword: "" });
      alert("Invaild Credential");
    }
  }
  return (
    <div className='register'>
      <form className='Form Main'>
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder="Your Name" autoComplete='off' onChange={handlechange}></input>
        <input type="email" name="email" value={user.email} placeholder="Your Email" autoComplete='off' onChange={handlechange}></input>
        <input type="password" name="password" value={user.password} placeholder="Your Password" autoComplete='off' onChange={handlechange}></input>
        <input type="password" name="repassword" value={user.repassword} placeholder="Re-enter Password" autoComplete='off' onChange={handlechange}></input>
        <div className='button' onClick={handleRegister}>Register</div>
        <div>OR</div>
        <div className='button' onClick={()=>{navigate("/")}}>Login</div>
      </form>
    </div>
  )
}

export default Register
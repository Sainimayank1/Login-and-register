import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

import "./style.css";
function Login({confirmUser}) {
  const navigate = useNavigate();

  const [user, setUser] = useState(
    {
      email: "",
      password: ""
    }
  )

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleLogin = () => {
    if (user.email && user.password) {
      axios.post("http://localhost:5000/login", user)
        .then((res) => { 
          switch (res.data.message) {
            case "Login succesfull":
              confirmUser(res.data.user);
              navigate("/");
              break;
            case "User don't registered":
              alert("User don't registered");
              navigate("/register")
              break;
            default:
              alert("Invaild Detail")
              setUser({
                email: "",
                password: ""
              })
              break;
          }
         })
        .catch(err => { console.log(err) });
    }
    else {
      setUser({
        email: "",
        password: ""
      })
      alert("Invaild Credentail");
    }

  }

  return (
    <div className='login'>
      <form className='Form Main'>
        <h1>Login</h1>
        <input type="email" name='email' value={user.email} placeholder="Enter your mail" autoComplete='off' onChange={handlechange}></input>
        <input type="password" name="password" value={user.password} placeholder="Enter your password" autoComplete='off' onChange={handlechange}></input>
        <div className='button' onClick={handleLogin}>Login</div>
        <div>OR</div>
        <div className='button' onClick={()=>{navigate("/register")}}>Register</div>
      </form>
    </div>
  )
}

export default Login
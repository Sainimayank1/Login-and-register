import React from 'react'
import "./style.css"
import { useNavigate } from 'react-router'
function Home({User , confirmUser}) {
  const navigate = useNavigate();
 

  return (
    <div className='homepage'>
        <div className='Main'>
            <h1>Hello {User.name}</h1>
            <div className='button' onClick={()=>{confirmUser({}); navigate("/");}}>Logout</div>
        </div>
    </div>
  )
}

export default Home
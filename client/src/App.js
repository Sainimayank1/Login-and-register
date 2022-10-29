import './App.css';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import React from 'react';
import { useState } from 'react';
function App() {
  const [User,confirmUser]=useState({});
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={
              User && User._id ? <Home User={User} confirmUser={confirmUser}/> : <Login confirmUser={confirmUser}/>
          }/>
          <Route path='/login' element={<Login confirmUser={confirmUser}/>} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

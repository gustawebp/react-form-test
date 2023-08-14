import React from 'react';
import {FaArrowLeft , FaDoorOpen, FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa';


const Login = ({ logVisible, setLogVisible }) => {
  return (

    <>



    <div className="log-page-main">
    <div className="seta">
      <FaArrowLeft onClick={() => setLogVisible(true)} />
    </div>
      <form action="" className="form-main">
    <FaDoorOpen className='h1-icon' /> <br />
      <input placeholder='Email' type="email" name="" id="" /> <br />
        <input placeholder='Password' type="password" name="" id="" /> <br /> 
        <button>Log In</button>
        <p onClick={() => setLogVisible(true)}>
          <span id="span-i-dont-have">I don't have an account</span>
        </p>
      </form>
    </div>
    </>


  );
};

export default Login;

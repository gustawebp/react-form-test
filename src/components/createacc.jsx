import React from 'react';
import {FaDoorOpen, FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa';

const CreateAcc = ({ logVisible, setLogVisible }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Realize o processamento necessário para a criação de conta aqui
    // Após o processamento, mude o estado para exibir o componente de login
    setLogVisible(false);
  };

  return (
    <div className="log-page-main">
      <form action="" className="form-main">
        <h1>Hi! Welcome to Something Enterprises</h1>
        <input required placeholder='First Name' type="text" name="" id="" /> <br />
        <input required placeholder='Last Name' type="text" name="" id="" /> <br /> 
        <input required placeholder='Email' type="email" name="" id="" /> <br />
        <input required placeholder='Password' type="password" name="" id="" /> <br /> {/* Corrigi o tipo de input para senha */}
        <input type="checkbox" name="" id="" /> <span>I agree terms & conditions</span> <br />
       
        <button type="button" onClick={() => setLogVisible(false)}>Submit</button> {/* Use type="button" para evitar o envio do formulário */}
      <p onClick={() => setLogVisible(false)}>
        <span id="span-i-have">I've already an account</span>
      </p>
      </form>

      <hr />

      <div className="icons">
        <p>Or Sign Up</p>
        <FaFacebook className='icon-i' />
        <FaTwitter className='icon-i' />
        <FaGoogle className='icon-i' />
      </div>
    </div>
  );
}

export default CreateAcc;



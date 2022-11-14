import React from 'react'
import { useNavigate } from 'react-router-dom';
import './register.scss'

const Register = () => {
  const navigate = useNavigate();
  const handlePageRegister = () => {
    navigate("/location");
  };
  return (
    <div className='register'>
        <h1>Create account</h1>
        <button onClick={handlePageRegister} className="register__button">
        Sing In
      </button>
    </div>
  )
}

export default Register
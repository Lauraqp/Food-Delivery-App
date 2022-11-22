import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./register.scss";
import { useDispatch } from "react-redux";
import { actionAuthenticationSync, actionUserCreateAsync } from "../../redux/actions/userActions";

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { uid } = useParams();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(actionUserCreateAsync(data))
    dispatch(actionAuthenticationSync())
    navigate("/home")
  }
  return (
    <div className="register">
      Register
      <form onSubmit={handleSubmit(onSubmit)} className="register__form">
        <input type="text" {...register("name")} placeholder="NAME" />
        <input type="email" {...register("email")} placeholder="EMAIL" />
        <input type="password" {...register("password")} placeholder="PASSWORD"
        />
        <button type="submit" className="register__button">Sing In</button>
      </form>
      <span>{uid}</span>
    </div>
  );
};

export default Register;

//url del uid para filtrar, realizar busquedas Registeryb3wHggziKeAVejnIDpIMI8VUll2

// const navigate = useNavigate();
//   const handlePageRegister = () => {
//     navigate("/location");
//   };
//   return (
//     <div className='register'>
//         <h1>Create account</h1>
//         <button onClick={handlePageRegister} className="register__button">
//         Sing In
//       </button>
//     </div>
//   )

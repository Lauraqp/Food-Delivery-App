import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../../assest/Logo.png";
import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handlePageLogin = () => {
    navigate("/verification");
  };
  return (
    <div className="login">
      <section className="login__section">
      <figure>
        <img src={logo} alt="" className="login__image" />
      </figure>
      <h1>Sing in</h1>
      <p>Login or create an account with your phone number to start ordering</p>
      <input type="number" className="login__input" placeholder="+1"/>
      </section>

      <article className="login__article">
        <span>
        By clicking the button next you accept
        </span>
        <Link>Terms of use</Link>
      </article>
      <button onClick={handlePageLogin} className="login__button">
        Login
      </button>
    </div>
  );
};

export default Login;

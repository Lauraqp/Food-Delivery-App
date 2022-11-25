import React, { useState } from "react";
import logo from "../../assest/Logo.png";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import googleLogo from "../../assest/google.png"
import { loginProviderAsync } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const Login = () => {
  const dispatch= useDispatch()
  const navigate = useNavigate();
  const [numberPhone, setNumberPhone] = useState("");

  const validationPhone = (phoneNumbers, lengthString) => {
    //validatephone: cuantos números hay
    if (!phoneNumbers) {
      //si no hay números retornar false, si hay ingresa en value
      return false;
    }
    const value = phoneNumbers.replace(/\D/g, ""); //replace: eliminar espacios en blanco
    const valueLength = value.length;
    return {
      //esta funcion retorna un objeto con dos propiedades
      isValid: valueLength === lengthString, //comparación: longitud es igual a la cantidad de numeros condicionados
      value, //segunda propiedad
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, value: validNumber } = validationPhone(numberPhone, 10);
    console.log(isValid, validNumber);
    if (!isValid) {
      alert("El número debe contener mínimo 10 carácteres");
    }
    generateReCaptcha();
    const captchaValue = window.recaptchaVerifier; //guardar en const el captcha value
    signInWithPhoneNumber(auth,`+57${validNumber}`, captchaValue) //metodo con tres parametros
      .then((confirmationResult) => {//si se cumple promesa llamar confirmation
        window.confirmationResult = confirmationResult; //respuesta de la promesa de signinwithphonenumber
        console.log(confirmationResult);
        navigate("/codeverification");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire('Hubo un error, intenta de nuevo', 'error'

        )
        navigate("/slide")
      });
  };

  const generateReCaptcha = () => {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptch-container", //recaptch container hacer referencia a un div que debemos crear en el formulario
        {
          size:"invisible",
          callback: (response) => {
            //reCAPTCHA solver, allow signInWithPhoneNumber,
            //onSignInSubmit();
            //console.log(response)
          },
        },
        auth
      );
    } catch (error) {
      console.log(error);
    }
  };
  //GOOGLE
  const handleLoginGoogle = ()=>{
    dispatch(loginProviderAsync('google'))
    navigate('/home')
  }

  return (
    <div className="login">
      <section className="login__section">
        <figure>
          <img src={logo} alt="" className="login__image" />
        </figure>
        <h1>Sign in</h1>
        <p>
          Login or create an account with your phone number to start ordering
        </p>

        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="number"
              onChange={(e) => {
                setNumberPhone(e.target.value);
              }}
              value={numberPhone}
              className="login__input"
              placeholder="+1"
            />
            <img src={googleLogo} onClick={handleLoginGoogle} alt="Logo Google" className="login__logo" />


            <article className="login__article">
              <span>By clicking the button next you accept</span>
              <Link>Terms of use</Link>
            </article>
          </label>
          <button type="submit" className="login__button">
            Login
          </button>
          <div id="recaptch-container"></div>
        </form>
      </section>
    </div>
  );
};

export default Login;

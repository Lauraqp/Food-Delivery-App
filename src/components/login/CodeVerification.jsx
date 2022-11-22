import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assest/Logo.png";
import { actionSignPhoneAsync } from "../../redux/actions/userActions";
import "./login.scss";

const CodeVerification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [codigo, setCodigo] = useState("");
  const user = useSelector((store) => store.userStore);
  const validateCode = ({ target }) => {
    const code = target.value;
    setCodigo(code);
    if (code.length === 6) {
      //si longitud de valor ingresado esta en target
      dispatch(actionSignPhoneAsync(code));
      if (!user.name && !user.email) { //si no existen es la primera vez que ingresa el usuario
        navigate(`/register/${user.uid}`) //si el usuario no tiene datos, redireccionar a register 
      }
      else{
        navigate(`/home`)
      }
    }
  };
  return (
    <div className="verification">
      <section className="verification__section">
        <figure>
          <img src={logo} alt="" className="verification__image" />
        </figure>
        <h1>Verification</h1>
        <p>Enter the four-digit code from SMS SMS not received. Send again?</p>

        <form>
          <label>
            <input
              type="number"
              onChange={validateCode}
              value={codigo}
              className="verification__input"
              placeholder="Confirmation code"
            />
          </label>
        </form>
      </section>
    </div>
  );
};

export default CodeVerification;

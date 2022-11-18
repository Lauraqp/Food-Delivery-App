import React, { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../../assest/Logo.png";
import { actionSignPhoneAsync } from "../../redux/actions/userActions";
import "./login.scss";

const CodeVerification = () => {
  const dispatch = useDispatch();
  const [codigo, setCodigo] = useState("");

  const validateCode = ({ target }) => {
    const code = target.value;
    setCodigo(code);
    if (code.length === 6) {
      //si longitud de valor ingresado esta en target
      dispatch(actionSignPhoneAsync(code));
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

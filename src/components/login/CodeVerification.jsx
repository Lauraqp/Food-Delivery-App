import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assest/Logo.png";
import { actionSignPhoneAsync } from "../../redux/actions/userActions";
import "./login.scss";

const CodeVerification = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [codigo, setCodigo] = useState("");
  const user = useSelector((store) => store.userStore);
  console.log(user);
  const validateCodigo = ({ target }) => {
    const code = target.value;
    setCodigo(code);
    if (code.length === 6) {
      dispatch(actionSignPhoneAsync(code));
      if(!user.name && !user.email ){
       
        if (user.uid) {
          console.log(user.uid);
          
        }
        navigate(`/register/${user.uid}`)


      }
      else{
        navigate(`/home`)
      
      }
    }
  };
  useEffect(() => {
    setTimeout(()=>{navigate("/login")},20000)
  }, [])
  
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
              onChange={validateCodigo}
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

import React from "react";
import { useNavigate } from "react-router-dom";
import imagelocation from "../../assest/map.png";
import "./location.scss";

const Location = () => {
  const navigate = useNavigate();
  const handlePageHome = () => {
    navigate("/Home");
  };
  return (
    <div className="location">
      <section className="location__section">
        <p>
          Allow access to geo data on the device mark your address on the map
        </p>
        <figure>
          <img src={imagelocation} alt="" />
        </figure>
      </section>
      <button onClick={handlePageHome} className="location__button">
        Sing In
      </button>
    </div>
  );
};

export default Location;

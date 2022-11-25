import React, { useEffect } from "react";
import iconoLocation from "../../assest/Svgl.png";
import "./home.scss";
import hamburgers from "../../assest/hamburguers.png";
import pizza from "../../assest/pizza.png";
import { useDispatch, useSelector } from "react-redux";
import { actionLogoutAsync } from "../../redux/actions/userActions";
import { actionsPrintRestaurantsAsync } from "../../redux/actions/restaurantsActions";
import { Card } from "react-bootstrap";
import Footer from "./Footer";
import CarouselHome from "./CarouselHome";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { restaurantes } = useSelector((store) => store.restaurantsStore);
  console.log(restaurantes);
  useEffect(() => {
    dispatch(actionsPrintRestaurantsAsync());
  }, [dispatch]);

  const logOut = () => {
    dispatch(actionLogoutAsync());
  };

  const sendPlatos = (restaurante) => {
    navigate(`/FoodsPage${restaurante}`);
  };

  return (
    <div className="home">
      <section className="home__location">
        <figure>
          <img src={iconoLocation} alt="icono Location" />
        </figure>
        <article>
          <h1 className="home__h1">DELIVER TO</h1>
          <p className="home__p">882 Well St, New-york</p>
        </article>
        <button onClick={logOut}>Logout</button>
      </section>

      <CarouselHome />

      <section className="home__categorys">
        <h2 className="home__h2">Restaurants and cafes</h2>
        <article className="home__buttons">
          <button className="home__button">All</button>
          <button className="home__button">
            <img src={hamburgers} alt="" /> Fast Food
          </button>
          <button className="home__button">
            <img src={pizza} alt="" /> Pizza
          </button>
        </article>
      </section>

      {restaurantes && restaurantes.length ? (
        restaurantes.map((restaurante, index) => (
          <Card
            key={index}
            className="home__card"
            onClick={() => sendPlatos(restaurante.name)}
          >
            <Card.Img
              className="home__img"
              variant="top"
              src={restaurante.image}
            />
            <Card.Body>
              <Card.Title>{restaurante.name}</Card.Title>
              <Card.Text>{`${restaurante.foodCategory}:${restaurante.hours}`}</Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <></>
      )}
      <Footer />
    </div>
  );
};

export default Home;

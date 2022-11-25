import React, { useEffect } from "react";
import iconoLocation from "../../assest/Svgl.png";
import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
import { actionLogoutAsync } from "../../redux/actions/userActions";
import { actionFilterRestaurantsAsync, actionsPrintRestaurantsAsync } from "../../redux/actions/restaurantsActions";
import { Card } from "react-bootstrap";
import Footer from "./Footer";
import CarouselHome from "./CarouselHome";
import {  useNavigate } from "react-router-dom";
import Stars from "./Stars";
import { Button } from "react-bootstrap";
import { category } from "../../services/data";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { restaurantes } = useSelector((store) => store.restaurantsStore);
  console.log(restaurantes);
  useEffect(() => {
    dispatch(actionsPrintRestaurantsAsync());
  }, [dispatch]);
  
  const onFiltered = (searchValue) => {
    const searchParam = "category";
    dispatch(actionFilterRestaurantsAsync(searchParam, searchValue));
  };

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
      <div className="d-flex justify-content-evenly mb-3">
      <Button
        variant="warning"
        onClick={() => {
          dispatch(actionsPrintRestaurantsAsync());
        }}
      >
        All
      </Button>
      {category.map((item) => (
        <Button
          key={item.value}
          variant="warning"
          onClick={() => {
            onFiltered(item.label);
          }}
        >
          {item.label}
        </Button>
      ))}
    </div>

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
              <Card.Text>{`Category: ${restaurante.category}`}</Card.Text>
              <Card.Text>{`${restaurante.hours}`}</Card.Text>
              <Stars/>
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

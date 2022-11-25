import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./home.scss";
import image1 from '../../assest/Promo1.png'
import image2 from '../../assest/Promo2.png'
import image3 from '../../assest/promo3.jpg'
import image4 from '../../assest/promo4.jpg'



const CarouselHome = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselHome
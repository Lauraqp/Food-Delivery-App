import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image from "../../assest/Svg.png";
import image1 from "../../assest/Svg (1).png";
import image2 from "../../assest/Svg (2).png";
import "./slide.scss";
import { useNavigate } from "react-router-dom";

const Slide = () => {
  const navigate = useNavigate();
  const changeImage = () => {
    navigate("/login");
  };
  return (
    <div className="slide">
      <Carousel>
        <Carousel.Item className="slide__item">
          <img className="d-block w-100" src={image} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item className="slide__item">
          <img className="d-block w-200" src={image1} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item className="slide__item">
          <img className="d-block w-100" src={image2} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <button onClick={changeImage} className="slide__button">
        Next
      </button>
    </div>
  );
};

export default Slide;

// // import React, { useEffect, useState } from 'react'
// import React from 'react'
// import image from '../../assest/Svg.png'
// import image1 from '../../assest/Svg (1).png'
// import image2 from '../../assest/Svg (2).png'
// // import { useNavigate } from 'react-router-dom'
// import Home from '../Home/Home'
// import './slide.scss'

// // const Slide = () => {
// //   const navigate = useNavigate();
// //   const [index, setIndex]= useState(0);
// //   const [render, setRender]= useState(image);
// //   console.log(index);

// // useEffect(() => {
// //   if(index <2){
// //     setTimeout(()=>{setIndex(index+1)},2000)
// //   }
// //   if(index === 2){
// //     //vuelva a comenzar
// //     setTimeout(()=>{setIndex(0)},2000)
// //   }
// // }, [index])

// // useEffect(() => {
// //   switch (index) {
// //     case 0 :
// //     setRender(image)

// //     break;

// //     case 1 :
// //     setRender(image1)

// //     break;

// //     case 2 :
// //     setRender(image2)

// //     break;
// //   }
// // }, [index])

// // const changeImage = ()=>{
// //   setIndex(index === 2)
// //   navigate('/login')
// // }

// //   return (
// //     <div className='slide'>
// //       <img src={render} alt="" className='slide__image'/>
// //       <button onClick={changeImage} className="slide__button">Next</button>
// //     </div>
// //   )
// // }

// // export default Slide

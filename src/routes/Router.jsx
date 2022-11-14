import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Slide from "../components/slide/Slide";
import SplashScreen from "../components/splash/SplashScreen";
import Verification from "../components/verification/Verification";
import Location from "../components/location/Location";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen/>}/>
        <Route path="Slide" element={<Slide/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='verification' element={<Verification/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='location' element={<Location/>}/>

      </Routes>
    </BrowserRouter>
  );
};

export default Router;

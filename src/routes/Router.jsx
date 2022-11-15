import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Slide from "../components/slide/Slide";
import SplashScreen from "../components/splash/SplashScreen";
import Verification from "../components/verification/Verification";
import Location from "../components/location/Location";
import PublicRouter from "./PublicRouter";
import CodeVerification from "../components/login/CodeVerification";
import PrivateRouter from "./PrivateRouter";

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
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

{
  /* <Route path="/" element={<SplashScreen/>}/>
        <Route path="Slide" element={<Slide/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='verification' element={<Verification/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='location' element={<Location/>}/> */
}


{/* <Route element={<PublicRouter isAuthentication={isLoggedIn} />}>
          <Route path="/" element={<Login />} />
          <Route path="/verification" element={<CodeVerification />} />
          <Route path="/register/:uid" element={<Register />} />
        </Route>

        <Route element={<PrivateRouter isAuthentication={isLoggedIn} />}>
          <Route path="/home" element={<Home/>}/>
        </Route> */}
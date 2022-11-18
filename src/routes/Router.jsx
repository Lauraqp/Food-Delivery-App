import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Slide from "../components/slide/Slide";
import SplashScreen from "../components/splash/SplashScreen";
import Location from "../components/location/Location";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import CodeVerification from "../components/login/CodeVerification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useSelector } from "react-redux";

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [check, setCheck] = useState(true);
  const userStore = useSelector(store=>store.userStore)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //observador de firebase para verificacion de autenticacion
      if (user?.uid) {
        // setIsLoggedIn(true);  ESTA PARTE ES LA QUE ME GENERA ERROR EN EL PROYECTO
        console.log(user);
      } else {
        setIsLoggedIn(false);
      }
      setCheck(false)
      // if (condition) {
        
      // }
    });
  }, [setIsLoggedIn, setCheck]);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<SplashScreen />} />
        <Route path="Slide" element={<Slide />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="verification" element={<Verification />} />
        <Route path="home" element={<Home />} />
        <Route path="location" element={<Location />} /> */}

        <Route element={<PublicRouter isAuthentication={isLoggedIn} />}>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/codeverification" element={<CodeVerification />} />
          <Route path="/register/:uid" element={<Register />} />
          <Route path="Slide" element={<Slide />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route element={<PrivateRouter isAuthentication={isLoggedIn} />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

/* <Route path="/" element={<SplashScreen/>}/>
        <Route path="Slide" element={<Slide/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='verification' element={<Verification/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='location' element={<Location/>}/> */

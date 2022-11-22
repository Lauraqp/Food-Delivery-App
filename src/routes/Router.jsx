import React, { Profiler, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { actionSignPhoneSync } from "../redux/actions/userActions";
import { Spinner } from "react-bootstrap";
import Home from "../components/Home/Home";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Slide from "../components/slide/Slide";
import SplashScreen from "../components/splash/SplashScreen";
import Location from "../components/location/Location";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import CodeVerification from "../components/login/CodeVerification";
import Profile from "../components/profile/Profile";
import Orders from "../components/orders/Orders";
import Filters from "../components/Home/Filters";

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [check, setCheck] = useState(true);
  const userStore = useSelector((store) => store.userStore);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //observador de firebase para verificacion de autenticacion
      if (user?.uid && userStore.authentication) { //si hay esto, se actualiza o setea en true
        setIsLoggedIn(true);
        console.log(user);
      } else {
        setIsLoggedIn(false);
      }
      setCheck(false);
      if (Object.entries(userStore).length === 0) {
        const { displayName, email, accessToken, phoneNumber, photoURL, uid } =
          user.auth.currentUser;
        dispatch(
          actionSignPhoneSync({
            name: displayName,
            email,
            accessToken,
            phoneNumber,
            avatar: photoURL,
            uid,
            error: false,
          })
        );
      }
    });
  }, [setIsLoggedIn, setCheck]);
  if (check) {
    return(
      <Spinner animation="border" role="status">Loading...</Spinner>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRouter isAuthentication={isLoggedIn} />}>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/codeverification" element={<CodeVerification />} />
          <Route path="/register/:uid" element={<Register />} />
          <Route path="Slide" element={<Slide />} />
          <Route path="location" element={<Location />} />
          <Route path="/home" element={<Home />} />
          <Route path="/filters" element={<Filters/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Route>

        <Route element={<PrivateRouter isAuthentication={isLoggedIn} />}>
        <Route path="/home" element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

/* <Route path="/" element={<SplashScreen />} />
        <Route path="Slide" element={<Slide />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="verification" element={<Verification />} />
        <Route path="home" element={<Home />} />
        <Route path="location" element={<Location />} /> */

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { actionSignPhoneSync } from "../redux/actions/userActions";
import { Spinner } from "react-bootstrap";
import SlidePage from "../components/slide/Slide";
import Login from "../components/login/Login";
import CodeVerification from "../components/login/CodeVerification";
import Register from "../components/register/Register";
import Home from "../components/Home/Home";
import FoodsPage from "../components/foods/FoodsPage";
import Orders from "../components/orders/Orders";
import Location from "../components/location/Location";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import SplashScreen from "../components/splash/SplashScreen";
import Profile from "../components/profile/Profile";
import FiltersPage from "../components/Home/Filters";

const Router = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [check, setCheck] = useState(true);
  const userStore = useSelector((store) => store.userStore);
  const dispatch = useDispatch();
  // user?.uid
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setCheck(false);
      if (user.auth.currentUser) {
        if (Object.entries(userStore).length === 0) {
          const {
            displayName,
            email,
            phoneNumber,
            accessToken,
            photoURL,
            uid,
          } = user.auth.currentUser;
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
      }
    });
  }, [setIsLoggedIn, check]);
  if (check) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRouter isAuthentication={isLoggedIn} />}>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/slide" element={<SlidePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/codeverification" element={<CodeVerification />} />
        </Route>
        <Route element={<PrivateRouter isAuthentication={isLoggedIn} />}>
          <Route path="/register/:uid" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/location" element={<Location />} />
          <Route path="/foodspage:name" element={<FoodsPage />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/filters" element={<FiltersPage />} />
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

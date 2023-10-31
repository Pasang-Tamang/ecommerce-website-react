import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const SecureRoute = () => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  //console.log(isLoggedIn, typeof isLoggedIn);
  const loggedIn = Boolean(isLoggedIn);
  //console.log(loggedIn, typeof loggedIn);
  return <div>{loggedIn ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default SecureRoute;

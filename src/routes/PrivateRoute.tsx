import React from "react";
import { Navigate, Outlet, RouteProps } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";




const PrivateRoute: React.FC<RouteProps> = () => {
  const userState = useAppSelector((state) => state.authentificate);

  return userState.isAuth ? <Outlet /> : <Navigate to={{ pathname: '/login' }} />
};

export default PrivateRoute;

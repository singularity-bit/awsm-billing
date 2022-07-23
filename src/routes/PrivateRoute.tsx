import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ICheckAuth } from "../models";

type Props = {
  user: ICheckAuth;
  redirectPath: string;
  children?: JSX.Element;
};

const PrivateRoute = ({ user, redirectPath = "/login", children }: Props) => {
  if (!user.isAuth) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

export default PrivateRoute;

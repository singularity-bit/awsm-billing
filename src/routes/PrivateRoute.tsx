import React, { useEffect } from "react";
import { Navigate, Outlet, RouteProps } from "react-router-dom";
import LoadingOverlay from "../Components/LoadingOverlay";
import { useAppSelector } from "../hooks/redux";
import { useAction } from "../hooks/requests/useAction";
import { usePublicUserData } from "../hooks/requests/usePublicUserData";




const PrivateRoute: React.FC<RouteProps> = () => {
  const userState = useAppSelector((state) => state.authentificate);
  const { setUserAction } = useAction();
  const { data, loading } = usePublicUserData();

  useEffect(() => {
    if (data?.currentUser.user) {
      setUserAction({
        email: data?.currentUser.user.email,
        firstName: data?.currentUser.user.firstName,
        lastName: data?.currentUser.user.lastName,
        permissions: data?.currentUser.user.permissions,
        role: data?.currentUser.user.role
      })
    }
  }, [data?.currentUser.user])


  return (
    <>
      {loading ? <LoadingOverlay isLoading={loading} />
        :
        userState.isAuth ? <Outlet /> : <Navigate to={{ pathname: '/login' }} />}
    </>
  )
};

export default PrivateRoute;

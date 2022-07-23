import { Dispatch } from "@reduxjs/toolkit";
import {
  ActionTypes,
  ICheckAuth,
  AuthAction,
  ICheckTokenAction,
} from "../../models";

export const loginAction = ({ token, isAuth }: ICheckAuth) => {
  return (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: ActionTypes.LOGIN,
      payload: {
        token,
        isAuth,
      },
    });
  };
};

export const logoutAction = () => {
  return (dispatch: Dispatch<AuthAction>) => {
    dispatch({
      type: ActionTypes.LOGOUT,
      payload: {},
    });
  };
};
export const checkTokenAction = () => {
  return (dispatch: Dispatch<ICheckTokenAction>) => {
    dispatch({
      type: ActionTypes.CHECK_TOKEN,
    });
  };
};

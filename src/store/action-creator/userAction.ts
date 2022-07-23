import { Dispatch } from "@reduxjs/toolkit";
import {
  ILoginAction,
  ActionTypes,
  GetUserAction,
  IUserData,
} from "../../models";

export const setUserAction = ({ email, id, permissions, role }: IUserData) => {
  return (dispatch: Dispatch<GetUserAction>) => {
    dispatch({
      type: ActionTypes.SET_USER,
      payload: {
        id,
        email,
        role,
        permissions,
      },
    });
  };
};
export const clearUserAction = () => {
  return (dispatch: Dispatch<GetUserAction>) => {
    dispatch({
      type: ActionTypes.CLEAR_USER,
    });
  };
};

export const getUserAction = () => {
  return (dispatch: Dispatch<GetUserAction>) => {
    dispatch({
      type: ActionTypes.GET_USER,
    });
  };
};

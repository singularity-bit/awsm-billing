import { Dispatch } from "@reduxjs/toolkit";
import {
  ActionTypes,
  GetUserAction,
  IUserPublicData,
} from "../../models";

export const setUserAction = ({ email,  permissions, role ,firstName,lastName}: IUserPublicData) => {
  return (dispatch: Dispatch<GetUserAction>) => {
    dispatch({
      type: ActionTypes.SET_USER,
      payload: {
        email,
        role,
        permissions,
        firstName,
        lastName
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

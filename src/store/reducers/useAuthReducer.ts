import { ActionTypes, AuthAction, ICheckAuth } from "../../models";

let model: ICheckAuth = {
  isAuth: false,
  token: null,
};

export const useAuthReducer = (
  state = model,
  action: AuthAction
): ICheckAuth => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      action.payload.token &&
        localStorage.setItem("token", action.payload.token);
      return (state = {
        token: action.payload.token,
        isAuth: true,
      });
    case ActionTypes.LOGOUT:
      localStorage.removeItem("token");
      return (state = {
        isAuth: false,
        token: null,
      });
    case ActionTypes.CHECK_TOKEN:
      const token = localStorage.getItem('token');

      return (state = {
        isAuth: action.payload.isAuth,
        token: token,
      });
    default:
      return state;
  }
};

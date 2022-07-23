import { ActionTypes, GetUserAction, IUserData } from "../../models";

let model: IUserData = {
  id: null,
  email: null,
  role: null,
  permissions: null,
};

export const useUserReducer = (
  state = model,
  action: GetUserAction
): IUserData => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return (state = {
        email: action.payload?.email,
        id: action.payload?.id,
        permissions: action.payload?.permissions,
        role: action.payload?.role,
      });
    case ActionTypes.GET_USER:
      return state;
    case ActionTypes.CLEAR_USER:
      return (state = {
        id: null,
        email: null,
        role: null,
        permissions: null,
      });

    default:
      return state;
  }
};

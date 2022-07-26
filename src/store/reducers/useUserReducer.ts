import { ActionTypes, GetUserAction, IUserPublicData } from "../../models";

let model: IUserPublicData = {
  email: null,
  role: null,
  permissions: null,
  firstName:null,
  lastName:null
};

export const useUserReducer = (
  state = model,
  action: GetUserAction
): IUserPublicData => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return (state = {
        email: action.payload?.email,
        permissions: action.payload?.permissions,
        role: action.payload?.role,
        firstName:action.payload.firstName,
        lastName:action.payload.lastName
      });
    case ActionTypes.GET_USER:
      return state;
    case ActionTypes.CLEAR_USER:
      return (state = {
        email: null,
        role: null,
        permissions: null,
        firstName:null,
        lastName:null
      });

    default:
      return state;
  }
};

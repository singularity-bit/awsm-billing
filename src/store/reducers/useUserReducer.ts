import { ActionTypes, IUser, UserAuthAction } from "../../models";

let model:IUser = {
    token:null,
    id:null,
    email:null,
    role:null,
    permissions:null
  };

export const useUserReducer=(state=model,action:UserAuthAction)=>{
    switch(action.type){
        case ActionTypes.LOGIN:
            return state={...action.payload}
        case ActionTypes.LOGOUT:
            return state={
                token:null,
                id:null,
                email:null,
                role:null,
                permissions:null
              };

        default:
            return state
    }
}
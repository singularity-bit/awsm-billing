import { Dispatch } from "@reduxjs/toolkit"
import { IUser,ILoginAction, ActionTypes } from "../../models"


export const login=({
    token,
    id,
    email,
    role,
    permissions
  }:IUser)=>{
    return (dispatch:Dispatch<ILoginAction>)=>{
        dispatch({
            type:ActionTypes.LOGIN,
            payload:{ 
                token,
                id,
                email,
                role,
                permissions
            }})
    }
}
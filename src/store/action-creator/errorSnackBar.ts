import { Dispatch } from "react"
import { ActionTypes, ErrorAction, ISnackBar } from "../../models"


export const triggerError=({error}:Pick<ISnackBar,'error'>)=>{
    return (dispatch:Dispatch<ErrorAction>)=>{
        dispatch({
            type:ActionTypes.TRIGGER_ERROR,
            payload:{error}
        })
    }
}

export const closeError=()=>{
    return (dispatch:Dispatch<ErrorAction>)=>{
        dispatch({
            type:ActionTypes.CLEAR_ERROR,
            payload:{ 
                error:{
                    title:null,
                    message:null
            } }
        })
    }
}
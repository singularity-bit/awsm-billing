import { Dispatch } from "react"
import { ActionTypes, ErrorAction, ISnackBar } from "../../models"


export const triggerError=({message}:Pick<ISnackBar,'message'>)=>{
    return (dispatch:Dispatch<ErrorAction>)=>{
        dispatch({
            type:ActionTypes.TRIGGER_ERROR,
            payload:{message}
        })
    }
}

export const closeError=()=>{
    return (dispatch:Dispatch<ErrorAction>)=>{
        dispatch({
            type:ActionTypes.CLEAR_ERROR,
            payload:{ message:null }
        })
    }
}
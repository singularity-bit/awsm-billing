import { ActionTypes, ErrorAction, ISnackBar, SnackBarModel } from "../../models";

  const model: SnackBarModel = {
    snackbar: {
      open: false,
      message: null
    }
  };

  
export const useErrorReducer=(state=model,action:ErrorAction):SnackBarModel=>{
    switch(action.type){
        case ActionTypes.TRIGGER_ERROR:
            return handleTriggerError({open:true,message:action.payload.message},state)
        case ActionTypes.CLEAR_ERROR:
            return handleTriggerError({open:false,message:null},state)

        default:
            return state
    }
}

const handleTriggerError =({open,message}:ISnackBar,state:SnackBarModel)=>{
  return state={
    snackbar:{
      open,
    message
    }
  }
}
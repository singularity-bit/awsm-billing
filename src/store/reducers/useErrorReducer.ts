import { ActionTypes, ErrorAction, ISnackBar, SnackBarModel } from "../../models";

  const model: SnackBarModel = {
    snackbar: {
      open: false,
      error: {
        title: null,
        message:null
      }
    }
  };

  
export const useErrorReducer=(state=model,action:ErrorAction):SnackBarModel=>{
    switch(action.type){
        case ActionTypes.TRIGGER_ERROR:
            return handleTriggerError({open:true,error:action.payload.error},state)
        case ActionTypes.CLEAR_ERROR:
            return handleTriggerError({open:false,error:{
              title:null,
              message:null
            }},state)

        default:
            return state
    }
}

const handleTriggerError =({open,error:{title,message}}:ISnackBar,state:SnackBarModel)=>{
  return state={
    snackbar:{
      open,
      error:{
        title,
        message
      }
    }
  }
}
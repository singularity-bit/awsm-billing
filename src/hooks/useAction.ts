import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as ActionCreators from '../store/action-creator/errorSnackBar'
export const useAction=()=>{
    const dispatch=useDispatch()
    return bindActionCreators(ActionCreators,dispatch)
}
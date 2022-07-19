import { combineReducers } from "redux";
import { useErrorReducer } from "./useErrorReducer";

export const rootReducer=combineReducers({
    errorSnackBar:useErrorReducer
})

export type RootState=ReturnType<typeof rootReducer>
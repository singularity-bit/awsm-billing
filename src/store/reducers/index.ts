import { combineReducers } from "redux";
import { useErrorReducer } from "./useErrorReducer";
import { useUserReducer } from "./useUserReducer";

export const rootReducer=combineReducers({
    errorSnackBar:useErrorReducer,
    login:useUserReducer
})

export type RootState=ReturnType<typeof rootReducer>
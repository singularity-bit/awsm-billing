import { combineReducers } from "redux";
import { useErrorReducer } from "./useErrorReducer";
import { useAuthReducer } from "./useAuthReducer";
import { useUserReducer } from "./useUserReducer";

export const rootReducer = combineReducers({
  errorSnackBar: useErrorReducer,
  authentificate: useAuthReducer,
  user: useUserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

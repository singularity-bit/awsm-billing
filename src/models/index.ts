import { ServerError, ServerParseError } from "@apollo/client";
import { GraphQLError } from "graphql";


export type Links={
    name:string;
    path:string;
  }
export type DataResponse={
    navigation:Links[];
    profileSettings:Links[];
  }
export interface HeaderProps{
    settings: Links[],
    onClick?: (event: React.MouseEvent<HTMLElement>) => void,
    onClose?: () => void,
    anchorEl?: null | HTMLElement
}

export interface ISnackBar{
  open: boolean;
  message: string | string[]| Error | ServerError | ServerParseError|  GraphQLError[] | null;
}
export interface ISnackbarModel {
  handleClose: ()=>void;
  handleOpen: ({message}:ISnackBar)=>void;
}

export interface SnackBarModel{
  snackbar: ISnackBar;
}

export enum ActionTypes{
  TRIGGER_ERROR='TRIGGER_ERROR',
  CLEAR_ERROR='CLEAR_ERROR'
}

interface TriggerErrorAction{
  type:ActionTypes.TRIGGER_ERROR
  payload:Pick<ISnackBar,'message'>;
}
interface ClearErrorAction{
  type:ActionTypes.CLEAR_ERROR
  payload:Pick<ISnackBar,'message'>;
}

export type ErrorAction=TriggerErrorAction | ClearErrorAction



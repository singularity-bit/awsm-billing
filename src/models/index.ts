
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

interface IMessage{
  title:string | null;
  message:string | null;
}
export interface ISnackBar{
  open: boolean;
  error: IMessage;
}
export interface ISnackbarModel {
  handleClose: ()=>void;
  handleOpen: ({error}:ISnackBar)=>void;
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
  payload:Pick<ISnackBar,'error'>;
}
interface ClearErrorAction{
  type:ActionTypes.CLEAR_ERROR
  payload:Pick<ISnackBar,'error'>;
}

export type ErrorAction=TriggerErrorAction | ClearErrorAction



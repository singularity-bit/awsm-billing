import React from "react";

export type Children={
  children:React.ReactNode | React.ReactNode[]
}

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
  CLEAR_ERROR='CLEAR_ERROR',
  LOGIN='LOGIN',
  LOGOUT='LOGOUT',
}

interface TriggerErrorAction{
  type:ActionTypes.TRIGGER_ERROR
  payload:Pick<ISnackBar,'error'>;
}
interface ClearErrorAction{
  type:ActionTypes.CLEAR_ERROR
  payload:Pick<ISnackBar,'error'>;
}

export interface ILoginAction{
  type:ActionTypes.LOGIN
  payload: IUser
}

export interface ILogoutAction{
  type:ActionTypes.LOGOUT
  payload: IUser
}
export type UserAuthAction=ILoginAction | ILogoutAction
export type ErrorAction=TriggerErrorAction | ClearErrorAction

export enum Roles{
  ADMIN='ADMIN',
  CLIENT='CLIENT',
  GUEST='GUEST'
}
export enum Permissions{
  ANY='ANY',
  OWN='OWN'
}
interface IUserData{
  id:string | null;
  email:string | null;
  role:Roles | null;
  permissions:Permissions | null ;
  
}
export type LoginData={
  email:string;
  password:string;
}
export interface IUser extends IUserData{
  token:string | null;

}

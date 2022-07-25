import React from "react";

export type Children = {
  children: React.ReactNode | React.ReactNode[];
};

export type Links = {
  name: string;
  path: string;
};
export type DataResponse = {
  navigation: Links[];
  profileSettings: Links[];
};
export interface HeaderProps {
  settings: Links[];
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onClose?: () => void;
  anchorEl?: null | HTMLElement;
}

interface IMessage {
  title: string | null;
  message: string | null;
}
export interface ISnackBar {
  open: boolean;
  error: IMessage;
}
export interface ISnackbarModel {
  handleClose: () => void;
  handleOpen: ({ error }: ISnackBar) => void;
}

export interface SnackBarModel {
  snackbar: ISnackBar;
}

export enum ActionTypes {
  TRIGGER_ERROR = "TRIGGER_ERROR",
  CLEAR_ERROR = "CLEAR_ERROR",
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  SET_USER = "SET_USER",
  GET_USER = "GET_USER",
  CLEAR_USER = "CLEAR_USER",
  CHECK_TOKEN = "CHECK_TOKEN",
}

interface TriggerErrorAction {
  type: ActionTypes.TRIGGER_ERROR;
  payload: Pick<ISnackBar, "error">;
}
interface ClearErrorAction {
  type: ActionTypes.CLEAR_ERROR;
  payload: Pick<ISnackBar, "error">;
}

export interface ILoginAction {
  type: ActionTypes.LOGIN;
  payload: ICheckAuth;
}
export interface ICheckAuth {
  isAuth: boolean;
  token: string | null;
}
export interface ICheckTokenAction {
  type: ActionTypes.CHECK_TOKEN;
}

export interface ILogoutAction {
  type: ActionTypes.LOGOUT;
}

export interface IGetUserAction {
  type: ActionTypes.GET_USER;
}
export interface IClearUserAction {
  type: ActionTypes.CLEAR_USER;
}

export interface ISetUserAction {
  type: ActionTypes.SET_USER;
  payload: IUserData;
}
export type GetUserAction = IGetUserAction | IClearUserAction | ISetUserAction;
export type AuthAction = ILoginAction | ILogoutAction | ICheckTokenAction;
export type ErrorAction = TriggerErrorAction | ClearErrorAction;

export enum Roles {
  ADMIN = "ADMIN",
  CLIENT = "CLIENT",
  GUEST = "GUEST",
}
export enum Permissions {
  ANY = "ANY",
  OWN = "OWN",
}
export interface IUserData {
  id: string | null;
  email: string | null;
  role: Roles | null;
  permissions: Permissions | null;
}
export type LoginData = {
  email: string;
  password: string;
};

export interface IUserPublicData{
  email: string;
  firstName: string;
  lastName: string;
  role: Roles;
  permissions: Permissions;
}
export interface TokenData{
  currentUser:{
    user:IUserPublicData
  }
}

export enum LayoutAlign{
  CENTER='center',
  LEFT='left',
  RIGHT='right',
  SPACE_BETWEEN='space_between'
}

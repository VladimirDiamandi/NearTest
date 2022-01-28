export interface IUser{
  email:string
  phone:string
  fullName:string
  accountID: string
}
export interface UserState {
  user: IUser;
  isAuth: boolean;
  isLoading: boolean;
  error: null | string;
}
export enum UserActionTypes {
  SET_USER = 'SET_USER',
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_ERROR = 'SET_USERS',
}
interface SetUserAction {
  type: UserActionTypes.SET_USER;
  payload: IUser
}
interface SetIsLoadingAction {
  type: UserActionTypes.SET_IS_LOADING;

}
interface SetErrorAction {
  type: UserActionTypes.SET_ERROR;
}

export type UserAction = SetUserAction | SetErrorAction | SetIsLoadingAction
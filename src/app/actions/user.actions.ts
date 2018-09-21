import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

export const GOOGLE_LOGIN = '[Auth] Login';
export const LOGOUT = '[Auth] Logout';

export const GET_USER = '[Auth] Get';
export const UPDATE_USER_DATA = '[Auth] Update User Data';

export const AUTHENTICATED = '[Auth] Authenticated';
export const NOT_AUTHENTICATED = '[Auth] Not Authenticated';

export const AUTH_ERROR = '[Auth] Error';

export class GetUser implements Action {
  readonly type = GET_USER;
  constructor(public payload?: any) { }
}

export class UpdateUserData implements Action {
  readonly type = UPDATE_USER_DATA;
  constructor(public payload?: any) { }
}

export class Authenticated implements Action {
  readonly type = AUTHENTICATED;
  constructor(public payload: User) { }
}

export class NotAuthenticated implements Action {
  readonly type = NOT_AUTHENTICATED;
  constructor(public payload?: any) { }
}

export class AuthError implements Action {
  readonly type = AUTH_ERROR;
  constructor(public payload?: any) { }
}

export class GoogleLogin implements Action {
  readonly type = GOOGLE_LOGIN;
  constructor(public payload?: any) { }
}

export class Logout implements Action {
  readonly type = LOGOUT;
  constructor(public payload?: any) { }
}

export type Actions =
  GoogleLogin
  | UpdateUserData
  | Logout
  | Authenticated
  | NotAuthenticated
  | AuthError
  | GetUser;

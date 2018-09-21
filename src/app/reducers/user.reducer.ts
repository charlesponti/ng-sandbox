import * as userActions from '../actions/user.actions';
import { User } from '../models/user.model';

export type Action = userActions.Actions;

export const initialState: UserState = {
  uid: '',
  email: '',
  loading: false
};

interface UserState extends User {
  uid: string;
  loading: boolean;
}

export function userReducer(state: User = initialState, action: Action): UserState {
  switch (action.type) {
    case userActions.GET_USER:
    case userActions.GOOGLE_LOGIN:
      return { ...state, loading: true };
    case userActions.LOGOUT:
    case userActions.NOT_AUTHENTICATED:
      return { ...state, ...initialState, loading: false };
    case userActions.AUTHENTICATED:
    case userActions.AUTH_ERROR:
    default:
      return { ...state, ...action.payload, loading: false };
  }
}

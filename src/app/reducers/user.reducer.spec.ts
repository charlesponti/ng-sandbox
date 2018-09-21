import { userReducer } from './user.reducer';
import { Authenticated, Logout, GoogleLogin, NotAuthenticated, AuthError, UpdateUserData } from '../actions/user.actions';

describe('userReducer', () => {
  it('should return initial state', () => {
    const state = userReducer(undefined, { type: '@@init' } as any);
    expect(state.uid).toBeFalsy();
    expect(state.email).toBeFalsy();
    expect(state.loading).toBe(false);
  });
  it('should return initial state if not authenticated', () => {
    const state = userReducer(undefined, new NotAuthenticated());
    expect(state.uid).toBeFalsy();
    expect(state.email).toBeFalsy();
    expect(state.loading).toBe(false);
  });
  it('should return state with user if authenticated', () => {
    const state = userReducer(undefined, new Authenticated({ uid: 'foo', email: 'foo@foo.com' }));
    expect(state.uid).toBe('foo');
    expect(state.email).toBe('foo@foo.com');
    expect(state.loading).toBe(false);
  });
  it('should set loading to true while logging in', () => {
    const state = userReducer(undefined, new GoogleLogin());
    expect(state.loading).toBe(true);
  });
  it('should return initial state if logout', () => {
    const state = userReducer(undefined, new Logout());
    expect(state.uid).toBeFalsy();
    expect(state.email).toBeFalsy();
    expect(state.loading).toBe(false);
  });
  it('should return initial state if authentication error', () => {
    const state = userReducer(undefined, new AuthError());
    expect(state.uid).toBeFalsy();
    expect(state.email).toBeFalsy();
    expect(state.loading).toBe(false);
  });
  it('should update user information for UpdateUserData', () => {
    const state = userReducer(undefined, new Authenticated({ uid: 'foo', email: 'foo@foo.com' }));
    expect(state.uid).toBe('foo');
    expect(state.email).toBe('foo@foo.com');
    expect(state.loading).toBe(false);

    const state2 = userReducer(undefined, new UpdateUserData({ uid: 'bar', email: 'bar@foo.com' }));
    expect(state2.uid).toBe('bar');
    expect(state2.email).toBe('bar@foo.com');
    expect(state2.loading).toBe(false);
  });
});

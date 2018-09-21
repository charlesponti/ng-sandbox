import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable, of, from } from 'rxjs';
import { map, delay, switchMap, catchError, pluck } from 'rxjs/operators';

import { User } from '../models/user.model';
import * as userActions from '../actions/user.actions';
import { AuthService } from '../core/auth/auth.service';

export type Action = userActions.Actions;

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private afs: AngularFirestore,
    private authService: AuthService
  ) { }

  @Effect()
  getUser: Observable<Action> =
    this.actions$
      .ofType(userActions.GET_USER)
      .pipe(
        switchMap(() => this.authService.authState),
        delay(2000),
        map((authData: firebase.User) => {
          if (authData) {
            // User logged in 👍
            return new userActions.Authenticated(authData);
          }

          // User no bueno 👎
          return new userActions.NotAuthenticated();
        }),
        catchError(err => of(new userActions.AuthError({ err: err.message })))
      );

  @Effect()
  login: Observable<Action> =
    this.actions$
      .ofType(userActions.GOOGLE_LOGIN)
      .pipe(switchMap(() => from(this.authService.googleLogin())))
      .pipe(map(() => new userActions.GetUser()))
      .pipe(catchError(err => of(new userActions.AuthError({ err: err.message }))));

  @Effect()
  logout: any =
    this.actions$
      .ofType(userActions.LOGOUT)
      .pipe(switchMap(() => from(this.authService.signOut())))
      .pipe(map(() => new userActions.GetUser()))
      .pipe(catchError(err => of(new userActions.AuthError({ err: err.message }))));

  @Effect()
  updateUserData: Observable<Action> =
    this.actions$
      .ofType(userActions.UPDATE_USER_DATA)
      .pipe(pluck('payload'))
      .pipe(switchMap(payload => of(this.updateUserDoc(payload))))
      .pipe(catchError(err => of(new userActions.AuthError({ err: err.message }))));

  private updateUserDoc(user): any {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoUrl: user.photoUrl
    };

    return userRef.set(data, { merge: true });
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { UpdateUserData } from '../../actions/user.actions';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user: Observable<User>;

  get authState(): Observable<firebase.User> {
    return this.afAuth.authState;
  }

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private store: Store<AppState>,
    private router: Router
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  googleLogin() {
    return this.oAuthLogin(new auth.GoogleAuthProvider()).then(() => {
      this.router.navigate(['/members']);
    });
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then(credential => this.store.dispatch(new UpdateUserData(credential.user)));
  }

  signOut() {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }
}

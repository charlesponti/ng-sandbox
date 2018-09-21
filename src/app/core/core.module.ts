import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { UserEffects } from '../effects/user.effects';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from '../reducers/user.reducer';
import { StoreModule } from '@ngrx/store';


@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    StoreModule.forRoot({
      user: userReducer
    }),
    EffectsModule.forRoot([
      UserEffects
    ]),
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  declarations: []
})
export class CoreModule { }

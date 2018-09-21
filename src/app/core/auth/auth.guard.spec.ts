import { TestBed, inject } from '@angular/core/testing';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { StoreModule } from '@ngrx/store';

import { AuthGuard } from './auth.guard';
import { FirestoreStub } from '../../firestore-stub';
import { userReducer } from '../../reducers/user.reducer';
import { AppRoutingModule } from '../../app-routing.module';
import { HomeComponent } from '../../home/home.component';
import { MembersComponent } from '../../members/members.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';


describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatProgressSpinnerModule,
        AngularFireAuthModule,
        StoreModule.forRoot({
          users: userReducer
        }),
        AppRoutingModule
      ],
      providers: [
        AuthGuard,
        { provide: AngularFireAuth, useValue: FirestoreStub },
        { provide: AngularFirestore, useValue: FirestoreStub },
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
      declarations: [
        HomeComponent,
        MembersComponent
      ]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});

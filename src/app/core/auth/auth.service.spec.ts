import { TestBed, inject } from '@angular/core/testing';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

import { AuthService } from './auth.service';
import { FirestoreStub } from '../../firestore-stub';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../../reducers/user.reducer';
import { AppRoutingModule } from '../../app-routing.module';
import { HomeComponent } from '../../home/home.component';
import { MembersComponent } from '../../members/members.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireAuthModule,
        AppRoutingModule,
        MatProgressSpinnerModule,
        StoreModule.forRoot({ users: userReducer })
      ],
      declarations: [
        HomeComponent,
        MembersComponent
      ],
      providers: [
        AuthService,
        { provide: AngularFireAuth, useValue: FirestoreStub },
        { provide: AngularFirestore, useValue: FirestoreStub },
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});

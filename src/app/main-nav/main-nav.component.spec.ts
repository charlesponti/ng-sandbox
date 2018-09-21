import { fakeAsync, ComponentFixture, TestBed, inject, tick, flush, flushMicrotasks } from '@angular/core/testing';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMainNavComponent } from './main-nav.component';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from '../home/home.component';
import { MembersComponent } from '../members/members.component';
import { AuthService } from '../core/auth/auth.service';
import { By } from '@angular/platform-browser';
import { AppState } from '../app.state';
import { Authenticated, NotAuthenticated } from '../actions/user.actions';
import { DebugElement } from '@angular/core';
import { CoreModule } from '../core/core.module';

describe('AppMainNavComponent', () => {
  let component: AppMainNavComponent;
  let fixture: ComponentFixture<AppMainNavComponent>;
  let authService: AuthService;
  let store: Store<AppState>;
  let el: DebugElement;

  const user = {
    displayName: 'displayName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    photoURL: 'photoURL',
    providerId: 'provider',
    uid: 'uid'
  };

  beforeEach(fakeAsync(() => {
    TestBed
      .configureTestingModule({
        imports: [
          MatSidenavModule,
          MatToolbarModule,
          MatButtonModule,
          MatSidenavModule,
          MatIconModule,
          MatListModule,
          MatProgressSpinnerModule,
          RouterModule,
          BrowserAnimationsModule,
          CoreModule,
          AppRoutingModule
        ],
        declarations: [
          AppMainNavComponent,
          HomeComponent,
          MembersComponent
        ],
        providers: [
          { provide: APP_BASE_HREF, useValue: '/' },
          {
            provide: AuthService,
            useValue: jasmine.createSpyObj('authService', ['googleLogin'])
          }
        ]
      })
      .compileComponents();

    fixture = TestBed.createComponent(AppMainNavComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  }));

  beforeEach(inject([AuthService], (service: AuthService) => {
    authService = service;
    store = fixture.debugElement.injector.get(Store) as Store<AppState>;
  }));

  it('should should log in button if not authenticated', () => {
    store.dispatch(new NotAuthenticated());
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(store).toBeDefined();
    expect(el.queryAll(By.css('#login-button')).length).toEqual(1);
  });

  it('should should log out button if authenticated', () => {
    store.dispatch(new Authenticated(user));
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(store).toBeDefined();
    expect(el.queryAll(By.css('#logout-button')).length).toEqual(1);
  });
});

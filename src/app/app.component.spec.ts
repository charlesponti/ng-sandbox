import { APP_BASE_HREF } from '@angular/common';
import { TestBed, async } from '@angular/core/testing';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { AppMainNavComponent } from './main-nav/main-nav.component';

import { StoreModule } from '@ngrx/store';
import { userReducer } from './reducers/user.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreModule
      ],
      declarations: [
        AppComponent,
        AppMainNavComponent,
        HomeComponent,
        MembersComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'ng-sandbox'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng-sandbox');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar').textContent)
      .toContain('Menu');
  }));
});

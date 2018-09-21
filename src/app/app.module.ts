import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Components
import { AppComponent } from './app.component';
import { AppMainNavComponent } from './main-nav/main-nav.component';

// Reducers
import { userReducer } from './reducers/user.reducer';
import { UserEffects } from './effects/user.effects';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { MembersComponent } from './members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMainNavComponent,
    HomeComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CoreModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

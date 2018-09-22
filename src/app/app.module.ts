import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { StoreModule } from '@ngrx/store';

// Modules
import { TutorialsModule } from './tutorials/tutorials.module';

// Components
import { AppComponent } from './app.component';

// Reducers
import { tutorialReducer } from './reducers/tutorial.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppMainNavModule } from './app-main-nav/app-main-nav.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TutorialsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      tutorials: tutorialReducer
    }),
    LayoutModule,
    AppMainNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

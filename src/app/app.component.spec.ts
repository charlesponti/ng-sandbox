import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { AppMainNavModule } from './app-main-nav/app-main-nav.module';
import { routes } from './app-routing.module';
import { TutorialsModule } from './tutorials/tutorials.module';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Location } from '@angular/common';

describe('AppComponent', () => {
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          AppMainNavModule,
          TutorialsModule,
          BrowserAnimationsModule,
          RouterTestingModule.withRoutes(routes)
        ],
        declarations: [
          AppComponent
        ],
      })
      .compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  }));

  it('should navigate to tutorials', fakeAsync(() => {
    router.navigate(['tutorials']);
    tick();
    expect(location.path()).toEqual('/tutorials');
  }));

  it('should navigate to tutorials/create', fakeAsync(() => {
    router.navigate(['tutorials', 'create']);
    tick();
    expect(location.path()).toEqual('/tutorials/create');
  }));
});

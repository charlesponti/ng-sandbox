
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMainNavComponent } from './app-main-nav.component';
import { AppMainNavModule } from './app-main-nav.module';
import { TutorialsModule } from '../tutorials/tutorials.module';

describe('AppMainNavComponent', () => {
  let component: AppMainNavComponent;
  let fixture: ComponentFixture<AppMainNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed
      .configureTestingModule({
        imports: [
          AppMainNavModule,
          TutorialsModule,
          BrowserAnimationsModule,
          RouterTestingModule
        ]
      })
      .compileComponents();

    fixture = TestBed.createComponent(AppMainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

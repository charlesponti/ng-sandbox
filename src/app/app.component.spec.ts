import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppMainNavComponent } from './app-main-nav/app-main-nav.component';
import { MaterialModule } from './app.module';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        declarations: [
          AppComponent,
          AppMainNavComponent
        ],
        imports: [
          MaterialModule,
          RouterTestingModule.withRoutes(routes)
        ]
      })
      .compileComponents();
      fixture = TestBed.createComponent(AppComponent);
      debugElement = fixture.debugElement;
  }));

  it('should render title in a h1 tag', async(() => {
    const span = debugElement.queryAll(By.css('span'));
    expect(span[0].references.appTitle.textContent).toContain('ng-sandbox');
  }));
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { TutorialsModule } from '../../tutorials.module';
import { StoreModule, Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../../../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { AppState } from '../../../app.state';
import { AddTutorial } from '../../../actions/tutorial.actions';
import { tutorialReducer } from '../../../reducers/tutorial.reducer';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          TutorialsModule,
          StoreModule.forRoot(tutorialReducer),
          BrowserAnimationsModule,
          RouterTestingModule.withRoutes(routes)
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    store = TestBed.get(Store);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should submit tests', () => {
    const nameInput = fixture.debugElement.queryAll(By.css('[name="name"]'))[0];
    const urlInput = fixture.debugElement.queryAll(By.css('[name="url"]'))[0];
    const value = {
      name: 'foo',
      url: 'http://www.google.com'
    };

    component.formGroup.patchValue(value);
    fixture.detectChanges();

    expect(nameInput.references.name.value).toEqual(value.name);
    expect(urlInput.references.url.value).toEqual(value.url);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.nativeElement.querySelector('form button').click();
    expect(store.dispatch).toHaveBeenCalledWith(new AddTutorial(value));
  });
});

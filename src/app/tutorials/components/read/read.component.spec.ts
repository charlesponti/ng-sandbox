import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadComponent } from './read.component';
import { TutorialsModule } from '../../tutorials.module';
import { Store, StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../../../app-routing.module';
import { tutorialReducer } from '../../../reducers/tutorial.reducer';
import { AppState } from '../../../app.state';
import { AddTutorial } from '../../../actions/tutorial.actions';
import { By } from '@angular/platform-browser';

describe('ReadComponent', () => {
  let component: ReadComponent;
  let fixture: ComponentFixture<ReadComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          TutorialsModule,
          RouterTestingModule.withRoutes(routes),
          StoreModule.forRoot({ tutorials: tutorialReducer })
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(ReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render tutorials', () => {
    store.dispatch(new AddTutorial({ name: 'cats', url: 'www.cats.com' }));
    store.dispatch(new AddTutorial({ name: 'dogs', url: 'www.dogs.com' }));
    fixture.detectChanges();
    const titles = fixture.debugElement.queryAll(By.css('mat-card-title'));
    expect(titles[0].nativeElement.textContent).toContain('Initial Tutorial');
    expect(titles[1].nativeElement.textContent).toContain('cats');
    expect(titles[2].nativeElement.textContent).toContain('dogs');
  });
});

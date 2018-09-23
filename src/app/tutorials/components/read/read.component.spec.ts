import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadComponent } from './read.component';
import { TutorialsModule } from '../../tutorials.module';
import { Store, StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../../../app-routing.module';
import { tutorialReducer } from '../../../reducers/tutorial.reducer';
import { AppState } from '../../../app.state';
import { AddTutorial, RemoveTutorial } from '../../../actions/tutorial.actions';
import { By } from '@angular/platform-browser';
import { TutorialsEffects } from '../../../effects/tutorial.effects';
import { EffectsModule } from '@ngrx/effects';

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
          EffectsModule.forRoot([TutorialsEffects]),
          StoreModule.forRoot({ tutorials: tutorialReducer })
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get(Store);
    fixture = TestBed.createComponent(ReadComponent);
    component = fixture.componentInstance;
    store.dispatch(new AddTutorial([{ id: 1, name: 'cats', url: 'www.cats.com' }]));
    store.dispatch(new AddTutorial([{ id: 2, name: 'dogs', url: 'www.dogs.com' }]));
    fixture.detectChanges();
  });

  it('should render tutorials', () => {
    const titles = fixture.debugElement.queryAll(By.css('mat-card-title'));
    expect(titles[0].nativeElement.textContent).toContain('Initial Tutorial');
    expect(titles[1].nativeElement.textContent).toContain('cats');
    expect(titles[2].nativeElement.textContent).toContain('dogs');
  });

  it('should remove tutorial', () => {
    spyOn(store, 'dispatch').and.callThrough();
    let buttons = fixture.debugElement.queryAll(By.css('mat-card button'));
    expect(buttons.length).toEqual(3);
    buttons[1].nativeElement.click();
    expect(store.dispatch).toHaveBeenCalledWith(
      new RemoveTutorial([{ id: 1, name: 'cats', url: 'www.cats.com' }])
    );
    fixture.detectChanges();
    buttons = fixture.debugElement.queryAll(By.css('mat-card button'));
    expect(buttons.length).toEqual(2);
  });
});

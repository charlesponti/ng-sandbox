import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { ADD_TUTORIAL, REMOVE_TUTORIAL, GET_TUTORIALS, LoadTutorials } from '../actions/tutorial.actions';
import { map, pluck, switchMap, tap } from 'rxjs/operators';
import { TutorialsService } from '../services/tutorials.service';
import { Tutorial } from '../models/tutorial.model';

@Injectable()
export class TutorialsEffects {
  constructor(
    private actions$: Actions,
    private service: TutorialsService
  ) {}

  @Effect()
  getTutorials = this.actions$
    .ofType(GET_TUTORIALS)
    .pipe(
      switchMap(() => this.service.getTutorials()),
      map(value => new LoadTutorials(value))
    );

  @Effect()
  add = this.actions$
    .ofType(ADD_TUTORIAL)
    .pipe(
      pluck('payload'),
      switchMap((tutorials: Tutorial[]) => this.service.addTutorials(tutorials)),
      switchMap(() => this.service.getTutorials()),
      map(value => new LoadTutorials(value))
    );

  @Effect()
  remove = this.actions$
    .ofType(REMOVE_TUTORIAL)
    .pipe(
      pluck('payload'),
      switchMap((tutorials: Tutorial[]) => this.service.removeTutorials(tutorials)),
      switchMap(() => this.service.getTutorials()),
      map(value => new LoadTutorials(value))
    );
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as TutorialActions from '../../../actions/tutorial.actions';
import { Router } from '@angular/router';
import { TutorialState } from '../../../reducers/tutorial.reducer';
import { Tutorial } from '../../../models/tutorial.model';
import { AppState } from '../../../app.state';

@Component({
  selector: 'app-tutorials-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent implements OnInit {
  data$: Observable<TutorialState>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.data$ = store.select('tutorials');
    this.store.dispatch(new TutorialActions.GetTutorials());
  }

  ngOnInit() { }

  onRemove(tutorial: Tutorial) {
    this.store.dispatch(new TutorialActions.RemoveTutorial([tutorial]));
  }

  navigateToCreate() {
    this.router.navigate(['/tutorials/create']);
  }
}

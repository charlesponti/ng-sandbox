import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Tutorial } from '../../../models/tutorial.model';
import { AppState } from '../../../app.state';
import * as TutorialActions from '../../../actions/tutorial.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorials-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent implements OnInit {

  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.tutorials = store.select('tutorials');
  }

  ngOnInit() { }

  onRemove(index: number) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }

  navigateToCreate() {
    this.router.navigate(['/tutorials/create']);
  }
}

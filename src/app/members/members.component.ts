import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import * as userActions from '../actions/user.actions';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  user$: Observable<User>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.user$ = this.store.select('user');
    this.store.dispatch(new userActions.GetUser());
  }
}

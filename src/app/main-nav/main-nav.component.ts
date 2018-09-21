import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState } from '../app.state';
import { User } from '../models/user.model';
import * as userActions from '../actions/user.actions';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class AppMainNavComponent implements OnInit {
  user$: Observable<User>;
  user: User;
  @Input() title: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private store: Store<AppState>) {
    this.user$ = this.store.select('user');
  }

  ngOnInit() {
    this.store.dispatch(new userActions.GetUser());
  }

  login() {
    this.store.dispatch(new userActions.GoogleLogin());
  }

  logout() {
    this.store.dispatch(new userActions.Logout());
  }
}

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '../../../app.state';
import * as TutorialActions from '../../../actions/tutorial.actions';
import { Tutorial } from '../../../models/tutorial.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tutorials-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  formGroup: FormGroup;
  values: Tutorial;

  constructor(private store: Store<AppState>, private fb: FormBuilder, private router: Router) {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      url: ['', Validators.required]
    });

    this.formGroup.valueChanges.subscribe(values => {
      this.values = values;
    });
  }

  addTutorial() {
    const { name, url } = this.values;
    this.store.dispatch(new TutorialActions.AddTutorial([{ name, url }]));
    // this.formGroup.reset();
    this.router.navigate(['/tutorials']);
  }

  navigateBackToList() {
    this.router.navigate(['/tutorials']);
  }
}

import { Injectable } from '@angular/core';
import { Tutorial } from '../models/tutorial.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorialsService {
  tutorials: Tutorial[];
  initialState: Tutorial = {
    id: 0,
    name: 'Initial Tutorial',
    url: 'https://www.google.com'
  };

  constructor() {
    this.tutorials = [this.initialState];
  }

  getTutorials(): Observable<Tutorial[]> {
    return of(this.tutorials);
  }

  addTutorials(tutorials: Tutorial[]): Observable<boolean> {
    let currentId = this.tutorials.length;

    this.tutorials = this.tutorials.concat(
      tutorials.map(t => ({ ...t, id: currentId++}))
    );

    return of(true);
  }

  removeTutorials(tutorials: Tutorial[]): Observable<boolean> {
    const ids = tutorials.map(t => t.id);
    this.tutorials = this.tutorials.filter(t => ids.indexOf(t.id) === -1);
    return of(true);
  }
}

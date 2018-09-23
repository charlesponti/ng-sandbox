import { Tutorial } from './models/tutorial.model';
import { TutorialState } from './reducers/tutorial.reducer';

export interface AppState {
    readonly tutorials: TutorialState;
}

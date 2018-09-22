import { Tutorial } from '../models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.actions';

const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'https://www.google.com'
};

export function tutorialReducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [ ...state, action.payload ];
        case TutorialActions.REMOVE_TUTORIAL:
            return  state.filter((i, index) => index !== action.payload);
        default:
            return state;
    }
}

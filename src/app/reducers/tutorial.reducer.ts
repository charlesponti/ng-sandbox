import { Tutorial } from '../models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.actions';

export interface TutorialState {
  loading: boolean;
  tutorials: Tutorial[];
}

const initialState = { loading: false, tutorials: [] };

export function tutorialReducer(state: TutorialState = initialState, action: TutorialActions.Actions): TutorialState {
    switch (action.type) {
        case TutorialActions.GET_TUTORIALS:
        case TutorialActions.ADD_TUTORIAL:
        case TutorialActions.REMOVE_TUTORIAL:
            return { ...state, loading: true };
        case TutorialActions.LOAD_TUTORIALS:
          return { ...state, loading: false, tutorials: action.payload };
        default:
          return state;
    }
}

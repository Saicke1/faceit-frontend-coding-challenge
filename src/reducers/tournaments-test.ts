import { legacy_createStore as createStore } from 'redux';
import {
  FETCH_TOURNAMENTS_BEGIN,
  FETCH_TOURNAMENTS_SUCCESS,
  FETCH_TOURNAMENTS_FAILURE,
} from '../actions/actions';
import { Tournament } from '../App';

// const initialState = {};
const initialState = {
  items: [] as Tournament[],
  loading: false,
  error: null,
};

export default function tournaments(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_TOURNAMENTS_BEGIN:
      console.log('Start to fetch tournaments');
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_TOURNAMENTS_SUCCESS:
      console.log('Tournaments fetch was successful');
      console.log('state', state);
      console.log('action', action);
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case FETCH_TOURNAMENTS_FAILURE:
      console.log('Fetching the tournaments was a failure');
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };

    default:
      return state;
  }
}

// export const storeTournaments = createStore(tournaments);

// storeTournaments.subscribe(() => {
//   console.log('storeTournaments.getState()', storeTournaments.getState());
// });

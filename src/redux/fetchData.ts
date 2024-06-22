import {
  fetchTournamentsBegin,
  fetchTournamentsSuccess,
  fetchTournamentsFailure,
} from '../actions/actions';
import { API_TOURNAMENTS_URL } from '../constants/api';

export function fetchTournaments() {
  return async (dispatch: any) => {
    dispatch(fetchTournamentsBegin());
    /* return fetch(API_TOURNAMENTS_URL)
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchTournamentsSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchTournamentsFailure(error))); */
    try {
      const response = await fetch(API_TOURNAMENTS_URL);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      dispatch(fetchTournamentsSuccess(data));
      return data;
    } catch (error) {
      dispatch(fetchTournamentsFailure(error));
    }
  };
}

// Helper function for error handling
function handleErrors(response: any) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_TOURNAMENTS_BEGIN = 'FETCH_TOURNAMENTS_BEGIN';
export const FETCH_TOURNAMENTS_SUCCESS = 'FETCH_TOURNAMENTS_SUCCESS';
export const FETCH_TOURNAMENTS_FAILURE = 'FETCH_TOURNAMENTS_FAILURE';

export const fetchTournamentsBegin = () => ({
  type: FETCH_TOURNAMENTS_BEGIN,
});

export const fetchTournamentsSuccess = (tournaments: any) => ({
  type: FETCH_TOURNAMENTS_SUCCESS,
  payload: tournaments,
});

export const fetchTournamentsFailure = (error: any) => ({
  type: FETCH_TOURNAMENTS_FAILURE,
  payload: { error },
});

import { combineReducers } from 'redux';
// import tournaments from './tournaments';
import tournaments from './tournaments-test';

const rootReducer = combineReducers({
  tournaments,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const tournamentsStore = createStore(rootReducer, applyMiddleware(thunk));

export default tournamentsStore;

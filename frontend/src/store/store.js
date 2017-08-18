import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import board from './reducers/board';

const store = createStore(
  combineReducers({ board }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

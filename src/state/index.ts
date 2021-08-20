import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import persisted from './reducers';

const middlewares = [logger, thunk];

const store = createStore(persisted, applyMiddleware(...middlewares));

export default store;

import { applyMiddleware, createStore } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from "./reducers";

const middlewares = [logger, thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
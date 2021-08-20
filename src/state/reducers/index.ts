import { combineReducers } from 'redux';
import productsReducer from './products.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const rootConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  allProducts: productsReducer,
});

const persisted = persistReducer(rootConfig, reducers);
export default persisted;
export type RootState = ReturnType<typeof reducers>;

import { combineReducers } from "redux";
import productsReducer from "./products.reducer";

const reducers = combineReducers({
  allProducts: productsReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;

import { Product } from "../reducers/products.reducer";

export interface Action {
  type: string;
  payload: Product;
}
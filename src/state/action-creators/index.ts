import {Product} from '../reducers/products.reducer';
import {Action} from '../actions';
import {Dispatch} from 'react';

export const addProduct = (item:Product) => {
  return (dispatch:Dispatch<Action>) => {
    dispatch({type: 'ADD_PRODUCT', payload: item});
  };
};

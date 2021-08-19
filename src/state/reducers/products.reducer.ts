import {Action} from '../actions';

export interface Product {
  name: string;
  description: string;
  price: number;
  inventoryDate: string;
}

export const allProducts: Product[] = [{
  name: 'Suzuki',
  description: 'The Suzuki Ciaz is a subcompact sedan produced by Suzuki since 2014.',
  price: 60000,
  inventoryDate: '2020-12-20',
},
{
  name: 'Ducati',
  description: 'Ducati Motor Holding S.p.A. is the motorcycle-manufacturing division.',
  price: 20000,
  inventoryDate: '2020-12-20',
},
{
  name: 'Chevrolet',
  description: 'Chevy trucks are built with capability in mind.',
  price: 100000,
  inventoryDate: '2020-12-20',
},
{
  name: 'Pheonix',
  description: 'From the classic bicycles in the early modern China.',
  price: 5000,
  inventoryDate: '2020-12-20',
},
{
  name: 'FAW',
  description: 'FAW Group Corporation is a Chinese state-owned automotive manufacturing company.',
  price: 9000,
  inventoryDate: '2020-12-20',
},
{
  name: 'FORD',
  description: 'Built Ford Tough. It\'s synonymous with the rugged capability.',
  price: 500000,
  inventoryDate: '2020-12-20',
},
{
  name: 'FIAT',
  description: 'Whatever business you\'re thinking about, Fiat Professional trucks are right for you.',
  price: 510000,
  inventoryDate: '2020-12-20',
},
];

const productsReducer = (state: Product[] = allProducts, action: Action): Product[] => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      state.push({
        name: action.payload.name,
        description: action.payload.description,
        price: action.payload.price,
        inventoryDate: action.payload.inventoryDate,
      });
      return [...state];
    case 'ADD_PRODUCT_FAILURE':
    default:
      return state;
  }
};
export default productsReducer;

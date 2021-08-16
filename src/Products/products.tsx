import React, { useState } from 'react';


interface FormElements extends HTMLFormControlsCollection {
  productInput: HTMLInputElement
}
interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

interface Product {
  name: string;
  description: string;
  price: number;
  inventoryDate: string;
}

interface AllProducts {
  allproducts: Product[];
}

const Products = (allproducts: AllProducts) => {
  const [item, setItem] = useState('');
  const allProducts = [{
    name: 'Honda',
    description: "The Honda Civic is a series of automobiles manufactured by Honda since 1972. Since 2000, the Civic has been categorized as a compact car, while previously it occupies the subcompact class. Currently, the Civic is positioned between the Honda City and Honda Accord in Honda's car line-up.",
    price: 50000,
    inventoryDate: '20-12-2020'
  },
  {
    name: 'Suzuki',
    description: "The Suzuki Ciaz is a subcompact sedan produced by Suzuki since 2014. It is developed to replace the Suzuki SX4 sedan in several Asian, African and Latin American markets. It went on sale for the first time in India, the largest market for Suzuki in September 2014. It is currently the larger sedan of two sedans currently produced by Suzuki, the other being the Dzire.",
    price: 60000,
    inventoryDate: '20-12-2020'
  },
  {
    name: 'Ducati',
    description: "Ducati Motor Holding S.p.A. is the motorcycle-manufacturing division of Italian company Ducati, headquartered in Bologna, Italy. The company is owned by Italian automotive manufacturer Lamborghini, through its German parent company Audi, itself owned by the Volkswagen Group.",
    price: 20000,
    inventoryDate: '20-12-2020'
  },
  {
    name: 'Chevrolet.',
    description: "Chevy trucks are built with capability in mind. Find 4x4, work trucks, and light duty trucks with the strength, towing, and payload needed for work & play.",
    price: 100000,
    inventoryDate: '20-12-2020'
  },
  {
    name: 'Pheonix',
    description: "From the classic bicycles in the early modern China, to the 28'' bicycle and to the present-day FNIX high-end sports bikes, the China Phoenix urban",
    price: 5000,
    inventoryDate: '20-12-2020'
  },
  {
    name: 'FAW',
    description: "FAW Group Corporation is a Chinese state-owned automotive manufacturing company headquartered in Changchun, Jilin, China. Its principal products are automobiles, buses, light, medium and heavy-duty trucks, and auto parts.",
    price: 9000,
    inventoryDate: '20-12-2020'
  },
  {
    name: 'FORD',
    description: "Built Ford Tough. It's synonymous with the rugged capability, outstanding performance and dependability of Ford trucks. ",
    price: 500000,
    inventoryDate: '20-12-2020'
  },
  {
    name: 'FIAT',
    description: "Whatever business you're thinking about, Fiat Professional trucks are right for you. From load capacity to attention to interiors details, every truck has",
    price: 510000,
    inventoryDate: '20-12-2020'
  },
  ];

  const addProduct = (e:React.FormEvent<UsernameFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.elements.productInput);
    const obj = {name: e.currentTarget.elements.productInput.value, description: '', price: 1, inventoryDate: '20-12-2020'}
    allProducts.push(obj);
  }
  
  return (
    <div className="container">
      <ul>
        {
          allProducts.map((item, idx) => <li key={idx}>{item.name}</li>)
        }
      </ul>
      <form onSubmit={addProduct}>
      <label htmlFor="productInput">
        Enter Product Name:
        <input className="input" type="text" id="productInput" value={item} onChange={e => setItem(e.target.value)} />
      </label>
      <button type="submit" className="btn">Add a product</button>
      </form>
    </div>
  );
}

export default Products;
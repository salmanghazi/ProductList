import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../state/action-creators';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Products:React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [inventoryDate, setInventoryDate] = useState('');

  const dispatch = useDispatch();
  const { allProducts } = useTypedSelector((state) => (state));
  
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    var today = new Date();
    var dateInFormat = new Date(inventoryDate);
    const item = { name, description, price, inventoryDate };
    if (name === '' || description === ''){
      alert('Kindly fill all of the fields');
    } 
    else if(price === 0){
      alert('Price can\'t be 0');
    }
    else if(today < dateInFormat){
      alert('Kindly add correct date');
    }
    else {
      dispatch(addProduct(item));
      setName('');
      setDescription('');
      setPrice(0);
      setInventoryDate('');
    } 
  }
  
  return (
    <div className="container">
      <ul>
        {allProducts.map((item, idx) => <li key={idx}>{item.name}</li>)}
      </ul>
      <form onSubmit={onSubmit}>
      <label>
        Enter Product's Name:
        <input className="input" type="text" value={name} onChange={e => setName(e.target.value)} />
        <br/>
      </label>
      <label htmlFor="productInput">
        Enter Product's Description:
        <input className="input" type="text" id="productInput" value={description} onChange={e => setDescription(e.target.value)} />
        <br/>
    
      </label>
      <label htmlFor="productInput">
        Enter Product's Price ($):
        <input className="input" type="text" id="productInput" value={price} onChange={e => setPrice(+e.target.value)} />
        <br/>
      </label>
      <label htmlFor="productInput">
        Enter Product's Inventory Date (YYYY-MM-DD):
        <input className="input" type="date" id="productInput" value={inventoryDate} onChange={e => setInventoryDate(e.target.value)} />
        <br/>
      </label>
      <br/>
      <button type="submit" className="btn">Add a product</button>
      </form>
    </div>
  );
}

export default Products;
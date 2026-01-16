import { useState } from 'react';
import './App.css';
import FoodCart from './components/FoodCart';
import Header from './components/Header';

function App() {
  const [addedItem, setAddedItem] = useState([]);

  function handleAddCart(meal) {
    setAddedItem((pervItems) => [meal, ...pervItems]);
  }

  function handleShowCart() {}
  // console.log(addedItem);

  return (
    <>
      <Header handleShowCart={handleShowCart} />
      <FoodCart handleAddCart={handleAddCart} />
    </>
  );
}

export default App;

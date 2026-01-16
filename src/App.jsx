import './App.css';
import FoodCart from './components/FoodCart';
import Header from './components/Header';
import { CartContextProvider } from './store/CartContext';

function App() {
  return (
    <CartContextProvider>
      <Header />
      <FoodCart />
    </CartContextProvider>
  );
}

export default App;

import './App.css';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import FoodCart from './components/FoodCart';
import Header from './components/Header';
import { CartContextProvider } from './store/CartContext';
import { UserProgressContextProvider } from './store/UserProgressContext';

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <FoodCart />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;

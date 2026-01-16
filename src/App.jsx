import './App.css';
import Cart from './components/Cart';
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
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;

import { useContext } from 'react';
import foodLogo from '../assets/logo.jpg';
import CartContext from '../store/CartContext';
import Button from './Button';
export default function Header({ handleShowCart }) {
  const cartCntx = useContext(CartContext);
  const totalCartItems = cartCntx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={foodLogo} alt="Food app logo" />
        <h1> ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}

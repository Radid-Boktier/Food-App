import { useContext } from 'react';
import foodLogo from '../assets/logo.jpg';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';
import Button from './Button';

export default function Header() {
  const cartCntx = useContext(CartContext);
  const userProgressCntx = useContext(UserProgressContext);

  const totalCartItems = cartCntx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCntx.showCart();
  }
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

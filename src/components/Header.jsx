import foodLogo from '../assets/logo.jpg';
import Button from './Button';
export default function Header({ handleShowCart }) {
  return (
    <div id="main-header">
      <div id="title">
        <img src={foodLogo} alt="Food app logo" />
        <h1> REACTFOOD</h1>
      </div>
      <Button className="button" onClick={handleShowCart}>
        Cart()
      </Button>
    </div>
  );
}

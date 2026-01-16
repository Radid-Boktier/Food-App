import foodLogo from '../assets/logo.jpg';
import Button from './Button';
export default function Header({ handleShowCart }) {
  return (
    <header id="main-header">
      <div id="title">
        <img src={foodLogo} alt="Food app logo" />
        <h1> ReactFood</h1>
      </div>
      <nav>
        <Button className="button" onClick={handleShowCart}>
          Cart()
        </Button>
      </nav>
    </header>
  );
}

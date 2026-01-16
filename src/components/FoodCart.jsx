import { meals } from '../data/meals.js';
import Button from './Button.jsx';
export default function FoodCart({ handleAddCart }) {
  return (
    <div id="meals">
      {meals.map((meal) => {
        return (
          <div className="meal-item" key={meal.id}>
            <article>
              <img src={meal.image} alt={meal.name} />
              <h3>{meal.name}</h3>
              <span className="meal-item-price">{meal.price}</span>
              <p className="meal-item-description">{meal.description}</p>
              <div className="meal-item-actions">
                <Button className="button" onClick={() => handleAddCart(meal)}>
                  Add to Cart
                </Button>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
}

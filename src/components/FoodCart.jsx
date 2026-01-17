import useHTTP from '../hooks/useHTTP.js';
import MealItem from './MealItem.jsx';

const requestConfig = {};
export default function FoodCart() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHTTP('http://localhost:3000/meals', requestConfig, []);
  // console.log(loadedMeals);

  if (isLoading) {
    return <p>Featching meals....</p>;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => {
        return <MealItem key={meal.id} meal={meal} />;
      })}
    </ul>
  );
}

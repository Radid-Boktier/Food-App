import useHTTP from '../hooks/useHTTP.js';
import Error from './Error.jsx';
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
    return <p className="center">Featching meals....</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => {
        return <MealItem key={meal.id} meal={meal} />;
      })}
    </ul>
  );
}

import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Recommended Recipes</h2>
      {recommendations.map(recipe => (
        <div key={recipe.id} className="mb-4 p-4 border rounded">
          <h3 className="text-lg font-semibold">
            <Link to={`/recipes/${recipe.id}`} className="text-blue-500 hover:underline">
              {recipe.title}
            </Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
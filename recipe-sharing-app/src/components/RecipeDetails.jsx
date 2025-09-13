import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes?.find(r => r.id === id);

  if (!recipe) return <div>Recipe not found.</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
      <p>{recipe.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};
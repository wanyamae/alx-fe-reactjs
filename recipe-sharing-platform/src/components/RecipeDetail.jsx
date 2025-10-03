
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function RecipeDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => {
                const foundRecipe = data.find(item => String(item.id) === String(id));
                setRecipe(foundRecipe);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching recipe:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="text-xl text-gray-500 animate-pulse">Loading recipe...</span>
            </div>
        );
    }

    if (!recipe) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <span className="text-2xl text-red-500 mb-4">Recipe not found</span>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                    onClick={() => navigate(-1)}
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10 animate-fade-in">
            <button
                className="mb-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                onClick={() => navigate(-1)}
            >
                &larr; Back
            </button>
            <div className="flex flex-col md:flex-row gap-8">
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md mb-4 md:mb-0"
                />
                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{recipe.title}</h1>
                    <p className="text-gray-600 mb-4 text-lg">{recipe.summary}</p>
                    {/* Example: ingredients and steps, if available */}
                    {recipe.ingredients && (
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">Ingredients</h2>
                            <ul className="list-disc list-inside text-gray-600">
                                {recipe.ingredients.map((ing, idx) => (
                                    <li key={idx}>{ing}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {recipe.steps && (
                        <div>
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">Steps</h2>
                            <ol className="list-decimal list-inside text-gray-600">
                                {recipe.steps.map((step, idx) => (
                                    <li key={idx}>{step}</li>
                                ))}
                            </ol>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default RecipeDetail;
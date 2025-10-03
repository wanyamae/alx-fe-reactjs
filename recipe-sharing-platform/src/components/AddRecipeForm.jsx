import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required.';
    if (!ingredients.trim()) newErrors.ingredients = 'Ingredients are required.';
    else if (ingredients.split('\n').length < 2) newErrors.ingredients = 'Please enter at least two ingredients.';
    if (!steps.trim()) newErrors.steps = 'Preparation steps are required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    if (validate()) {
      // Here you would send the data to your backend or update state
      setSuccess(true);
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({});
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Recipe Title</label>
          <input
            type="text"
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="e.g. Spaghetti Carbonara"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Ingredients (one per line)</label>
          <textarea
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.ingredients ? 'border-red-500' : 'border-gray-300'}`}
            value={ingredients}
            onChange={e => setIngredients(e.target.value)}
            rows={4}
            placeholder="e.g. Pasta\nEggs\nCheese\nBacon"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Preparation Steps (one per line)</label>
          <textarea
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.steps ? 'border-red-500' : 'border-gray-300'}`}
            value={steps}
            onChange={e => setSteps(e.target.value)}
            rows={4}
            placeholder="e.g. Boil pasta\nMix eggs and cheese\nCook bacon\nCombine all"
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Submit Recipe
        </button>
        {success && <p className="text-green-600 text-center font-semibold mt-2">Recipe submitted successfully!</p>}
      </form>
    </div>
  );
}

export default AddRecipeForm;

import { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
    const searchTerm = useRecipeStore(state => state.searchTerm);
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);

    useEffect(() => {
        filterRecipes();
    }, [searchTerm, filterRecipes]);

    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className="mb-6">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    placeholder="Search recipes..."
                    className="w-full p-3 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
                />
                {/* Placeholder for additional filters */}
                <div className="flex gap-4 mb-2">
                    <input
                        type="text"
                        placeholder="Filter by ingredient (coming soon)"
                        className="flex-1 p-2 border rounded"
                        disabled
                    />
                    <input
                        type="text"
                        placeholder="Filter by cooking time (coming soon)"
                        className="flex-1 p-2 border rounded"
                        disabled
                    />
                </div>
            </div>
            <div className="bg-white rounded shadow p-4">
                {filteredRecipes.length === 0 ? (
                    <p className="text-gray-500">No recipes found.</p>
                ) : (
                    filteredRecipes.map(recipe => (
                        <div key={recipe.id} className="border-b py-4 last:border-b-0">
                            <h3 className="text-lg font-semibold">{recipe.title}</h3>
                            <p className="text-gray-700">{recipe.description}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default RecipeList
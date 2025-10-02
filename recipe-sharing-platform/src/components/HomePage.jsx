import { useState, useEffect } from 'react';

function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('./src/data.json')
            .then(response => response.json())
            .then(data => setRecipes(data))
            .catch(error => console.error('Error fetching recipes:', error));
    }, []);

    return (
        <div className="container mx-auto p-4">
             <section className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Our Recipes
                    <span className="block w-16 h-1 bg-red-600 mx-auto mt-2 rounded"></span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                    {recipes.map((recipe, idx) => {
                        // Assign random card size classes for variety
                        const cardSizes = [
                            'lg:col-span-3 md:col-span-2 col-span-1 h-80',
                            'lg:col-span-2 md:col-span-1 col-span-1 h-64',
                            'lg:col-span-1 md:col-span-1 col-span-1 h-64',
                            'lg:col-span-2 md:col-span-2 col-span-1 h-80',
                            'lg:col-span-4 md:col-span-2 col-span-1 h-96',
                            'lg:col-span-2 md:col-span-2 col-span-1 h-72',
                            'lg:col-span-1 md:col-span-2 col-span-1 h-56',
                            'lg:col-span-3 md:col-span-1 col-span-1 h-64',
                            'lg:col-span-2 md:col-span-1 col-span-1 h-96',
                            'lg:col-span-1 md:col-span-2 col-span-1 h-80',
                            'lg:col-span-4 md:col-span-3 col-span-1 h-72',
                            'lg:col-span-2 md:col-span-1 col-span-1 h-56',
                            'lg:col-span-3 md:col-span-2 col-span-1 h-96',
                            'lg:col-span-1 md:col-span-1 col-span-1 h-72',
                        ];
                        const cardClass = cardSizes[idx % cardSizes.length];
                        return (
                            <div
                                key={recipe.id}
                                tabIndex={0}
                                className={`relative overflow-hidden shadow-lg group focus:outline-none transition-all duration-300 ${cardClass} cursor-pointer transform hover:scale-105 focus:scale-110`}
                            >
                                <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-focus:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                                    <span className="text-xs text-gray-200 mb-1">Top Recipe</span>
                                    <h3 className="text-xl font-bold text-white mb-2">{recipe.title}</h3>
                                    <p className="text-gray-200 text-base">{recipe.summary}</p>
                                    <a href="#" className="text-red-400 text-sm mt-2 underline">Learn More</a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}

export default HomePage;


import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommednationList';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  // Dummy recipes array for routing example
  const recipes = [
    { id: '1', title: 'Recipe 1', description: 'Description 1' },
    { id: '2', title: 'Recipe 2', description: 'Description 2' }
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <header className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-blue-700 mb-2">Recipe Sharing App</h1>
                <p className="text-gray-600">Discover, share, and save your favorite recipes!</p>
              </header>
              <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section>
                  <AddRecipeForm />
                  <RecipeList />
                </section>
                <aside>
                  <FavoritesList />
                  <RecommendationsList />
                </aside>
              </main>
            </>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails recipes={recipes} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
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
              <div>
                <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              </div>
              <h1>Vite + React</h1>
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
                </p>
              </div>
              <AddRecipeForm />
              <RecipeList />
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
            </>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetails recipes={recipes} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

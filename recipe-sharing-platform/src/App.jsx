import './App.css'
import HomePage from './components/HomePage'

function App() {
    return (
        <div className="min-h-screen w-full overflow-y-auto bg-white">
            {/* Navigation Bar */}
            <nav className="flex justify-between items-center bg-white shadow px-8 py-4 sticky top-0 z-10">
                <div className="font-bold text-xl text-blue-600 text-decoration-italic">Recipes Sharing</div>
                <div className="flex space-x-6 text-gray-700">
                    <a href="#" className="hover:underline">New Recipes</a>
                    <a href="#" className="hover:underline">Add Recipe</a>
                    <a href="#" className="hover:underline">About Recipes Sharing</a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative w-full h-[320px] md:h-[400px] lg:h-[480px] mb-12">
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" alt="Hero" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-40 p-8 rounded-lg">
                        <h1 className="text-white text-2xl md:text-4xl font-bold mb-2 text-center">Bring digital to every person,<br />home and organization<br />for a fully connected, intelligent world</h1>
                    </div>
                </div>
            </section>
            <HomePage />

            
        </div>
    );
}

export default App

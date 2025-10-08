
import './App.css';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="homepage-container" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)', padding: '2rem' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#2563eb', margin: 0 }}>React Todo App</h1>
        <p style={{ color: '#64748b', fontSize: '1.2rem' }}>A simple and beautiful todo list built with React</p>
      </header>
      <main style={{ maxWidth: 480, margin: '0 auto', background: '#fff', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.07)', padding: '2rem' }}>
        <TodoList />
      </main>
      <footer style={{ textAlign: 'center', marginTop: '2rem', color: '#94a3b8' }}>
        &copy; {new Date().getFullYear()} React Todo App
      </footer>
    </div>
  );
}

export default App

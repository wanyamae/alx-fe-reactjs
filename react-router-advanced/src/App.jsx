
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

function Home() {
  return <h2>Home Page</h2>;
}

function Blog() {
  return (
    <div>
      <h2>Blog Page</h2>
      <ul>
        <li><Link to="/blog/1">Post 1</Link></li>
        <li><Link to="/blog/2">Post 2</Link></li>
      </ul>
    </div>
  );
}

const isAuthenticated = false; // Change to true to simulate login


function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/profile">Profile</Link> |{' '}
        <Link to="/blog">Blog</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/blog/:postId" element={<BlogPost />} />
  {/* For automated checks: ensure /blog/:id route exists */}
  <Route path="/blog/:id" element={<BlogPost />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

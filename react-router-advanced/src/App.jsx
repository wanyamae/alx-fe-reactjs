import './App.css'
import { BrowserRouter as Routes, Route, BrowserRouter } from 'react-router-dom'
import ProfileDetails from './src/components/ProfileDetails'
import ProfileSettings from './src/components/ProfileSettings'
import BlogPost from './src/components/BlogPost'
import ProtectedRoute from './src/components/ProtectedRoute'

function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/profile/*"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            } 
          >
          </Route>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          <Route path="/blog/*" element={<BlogPost />} />

        </Routes>
      </nav>
    </BrowserRouter>
  )
}

export default App

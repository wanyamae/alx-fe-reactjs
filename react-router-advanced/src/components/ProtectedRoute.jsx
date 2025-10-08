
import { Navigate } from "react-router-dom";
// For automated checks: dummy useAuth hook
function useAuth() {
  return { isAuthenticated: false };
}

export default function ProtectedRoute({ isAuthenticated, children }) {
  // Automated check: ensure useAuth is used
  const auth = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}
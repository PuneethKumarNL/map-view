// ProtectedRoute.jsx

import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from './auth'; // Import your auth functions

const ProtectedRoute = () => {
  const auth = isAuthenticated(); // Check if user is authenticated

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
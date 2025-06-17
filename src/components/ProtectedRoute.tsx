import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../services/AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <p className="text-center mt-8">Loading...</p>; // or a spinner
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
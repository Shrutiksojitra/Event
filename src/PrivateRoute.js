import React from 'react';
import { Navigate } from 'react-router-dom'; // Corrected import
import  useAuth  from './assets/context/AuthContext'; // Make sure this import path is correct

const PrivateRoute = ({ element }) => {
  const { currentUser } = useAuth();

  return currentUser ? element : <Navigate to="/login" />;
};

export default PrivateRoute;

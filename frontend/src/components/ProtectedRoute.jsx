import React from 'react';
import { Navigate } from 'react-router-dom';

export const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  };

const ProtectedRoute = ({ element: Component}) => {
  return isAuthenticated() ? <Component /> : <Navigate to="/" />;
};

export default ProtectedRoute;

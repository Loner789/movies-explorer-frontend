// IMPORTS:
import React from 'react';
import { Navigate } from 'react-router-dom';

// PROTECTED-ROUTE COMPONENT:
function ProtectedRoute({ loggedIn, children }) {
  return localStorage.loggedIn === 'true' ? children : <Navigate to='./' />;
}

export default ProtectedRoute;

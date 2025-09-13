import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Lazy load pages
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

// Auth check
const isAuthenticated = () => !!localStorage.getItem('token');

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen bg-gray-100 text-gray-700 text-lg">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route
            path="/login"
            element={
              <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200">
                <Login />
              </div>
            }
          />
          <Route
            path="/register"
            element={
              <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-green-200">
                <Register />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <div className="min-h-screen bg-gray-50">
                  <Dashboard />
                </div>
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
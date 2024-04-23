import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ClerkProvider, SignedIn, SignedOut, UserButton, useUser } from '@clerk/clerk-react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}


const AuthenticatedRoute = ({ element }) => {
  const { signedIn } = useUser();

  if (!signedIn) {
    // Redirect to login if user is not signed in
    return <Navigate to="/login" replace />;
  }

  // If user is signed in, render the requested element (e.g., <Dashboard />)
  return element;
};


const ClerkWithRoutes = () => {
  return (

    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" AuthenticatedRoute element={<Dashboard />} />

      </Routes>
    </ClerkProvider>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkWithRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();

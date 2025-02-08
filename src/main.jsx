import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import CartAdminPage from './pages/CartAdminPage';
import CartPage from './pages/CartPage';
import DetailVillaPage from './pages/DetailVillaPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserPage from './pages/UserPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/villa/:id',
    element: <DetailVillaPage />,
  },
  {
    path: '/user',
    element: <UserPage />,
  },
  {
    path: '/cartAdmin',
    element: <CartAdminPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

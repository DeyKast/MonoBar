import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import SharedLayout from './SharedLayout/SharedLayout';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MenuPage = lazy(() => import('../pages/MenuPage/MenuPage'));
const CartPage = lazy(() => import('../pages/CartPage/CartPage'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route index path="/" element={<HomePage />} />

        {/* Усі шляхи, які мають спільний SharedLayout */}
        <Route path="/" element={<SharedLayout />}>
          <Route path="menu" element={<MenuPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

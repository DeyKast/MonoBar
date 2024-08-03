import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import SharedLayout from './SharedLayout/SharedLayout';
import Loader from './Loader/Loader';


const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MenuPage = lazy(() => import('../pages/MenuPage/MenuPage'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/menu" element={<SharedLayout />}>
          <Route index element={<MenuPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

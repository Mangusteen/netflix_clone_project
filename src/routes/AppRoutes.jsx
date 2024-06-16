import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Account from '../pages/Account.jsx';
import { ROUTES } from '../utils/routes.js';
import LoginPage from '../pages/LoginPage.jsx';
import RegisterPage from '../pages/RegisterPage.jsx';
import MoviePage from '../pages/MoviePage.jsx';
// import ProtectedRoutes from '../components/ProtectedRoutes.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.SIGN_UP} element={<RegisterPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.ACCOUNT} element={<Account />} />
      <Route path={ROUTES.MOVIE} element={<MoviePage />} />
    </Routes>
  )
}

export default AppRoutes;
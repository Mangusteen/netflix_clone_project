import React from 'react'
import { useAuth } from '../hooks/use-auth';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
import Account from '../pages/Account'

const ProtectedRoutes = () => {
  const { isAuth } = useAuth();

  return isAuth ? (
    <Routes>
      <Route path={ROUTES.ACCOUNT} element={<Account />} />
    </Routes>
  ) : ((<Routes>
    <Route path='*' element={<Navigate to={ROUTES.LOGIN} replace />} />
  </Routes>))
}

export default ProtectedRoutes
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));
const Contacts = lazy(() => import('./pages/Contacts/Contacts'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Load Page</p>}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;

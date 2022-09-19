import { NavLink } from 'react-router-dom';

import style from './auth.module.css';

import useAuth from 'shared/hooks/useAuth';
import AuthUser from './AuthUser';

const Auth = () => {
  const isLogin = useAuth();
  return (
    <nav className={style.nav}>
      {isLogin ? (
        <AuthUser />
      ) : (
        <div>
          <NavLink className={style.link} to="/">
            Home
          </NavLink>
          <NavLink className={style.link} to="/register">
            Register
          </NavLink>
          <NavLink className={style.link} to="/login">
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Auth;

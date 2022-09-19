import { NavLink } from 'react-router-dom';

import style from './auth.module.css';

const Auth = () => {
  return (
    <nav className={style.nav}>
      <NavLink className={style.link} to="/register">
        Register
      </NavLink>
      <NavLink className={style.link} to="/login">
        Login
      </NavLink>
    </nav>
  );
};

export default Auth;

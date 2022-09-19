import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getUser } from 'redux/auth/auth-selector';

import { logout } from 'redux/auth/auth-operations';

import style from './auth.module.css';

const AuthUser = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <div className={style.container}>
      <NavLink className={style.link} to="/">
        Home
      </NavLink>
      <NavLink className={style.link} to="/contacts">
        Contact
      </NavLink>
      <p className={style.text}>
        {name}
        <button className={style.btn} onClick={onLogout} type="button">
          Logout
        </button>
      </p>
    </div>
  );
};

export default AuthUser;

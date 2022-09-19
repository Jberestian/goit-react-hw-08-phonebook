import { useSelector, useDispatch } from 'react-redux';
// import { NavLink } from 'react-router-dom';

import { getUser } from 'redux/auth/auth-selector';

import { logout } from 'redux/auth/auth-operations';

const AuthUser = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <div>
      {/* <NavLink to="/Contacts">Contact</NavLink> */}
      <p>
        {name}
        <button onClick={onLogout} type="button">
          Logout
        </button>
      </p>
    </div>
  );
};

export default AuthUser;

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from 'redux/auth/auth-operations';
import { isLogin } from 'redux/auth/auth-selector';

import style from './login.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const isUserLogin = useSelector(isLogin);

  const OnLogin = event => {
    event.preventDefault();

    const data = {
      email: event.currentTarget.elements['email'].value,
      password: event.currentTarget.elements['password'].value,
    };

    dispatch(login(data));
  };

  if (isUserLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div>
      <h1 className={style.description}>Login</h1>
      <form className={style.form} onSubmit={OnLogin}>
        <label htmlFor="email" className={style.label}>
          Email
        </label>
        <input
          className={style.input}
          type="text"
          placeholder="Enter your email"
          name="email"
          required
        />
        <label htmlFor="password" className={style.label}>
          Password
        </label>
        <input
          className={style.input}
          type="text"
          placeholder="Enter your pass"
          name="password"
          required
        />

        <button className={style.btn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

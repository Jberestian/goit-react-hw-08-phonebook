import { NavLink } from 'react-router-dom';
import useIsLogin from 'shared/hooks/useAuth';
import style from './home-page.module.css';

const HomePage = () => {
  const isLogin = useIsLogin();

  return (
    <div className="container">
      <div className={style.info}>
        <h1 className={style.title}>
          To use the application, log in with your login or registered
        </h1>
      </div>
      <div className={style.linkWrapper}>
        {!isLogin && (
          <NavLink className={style.link} to="/register">
            Register
          </NavLink>
        )}
        {!isLogin && (
          <NavLink className={style.link} to="/login">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default HomePage;

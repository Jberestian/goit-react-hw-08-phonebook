import Auth from './Auth/Auth';
import UserRoutes from 'UserRoutes';

const App = () => {
  return (
    <div className="container">
      <Auth />
      <UserRoutes />
    </div>
  );
};

export default App;

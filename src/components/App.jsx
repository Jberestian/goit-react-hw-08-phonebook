import Auth from './Auth/Auth';
import UserRoutes from 'UserRoutes';
// import Contacts from '../pages/Contacts/Contact';

const App = () => {
  return (
    <div className="container">
      <Auth />
      <UserRoutes />
      {/* <Contacts /> */}
    </div>
  );
};

export default App;

import { Outlet, NavLink } from 'react-router-dom';
import './styles/App.css';

const App = () => {

  let activeClassName = "activePage";

  return (
    <div 
      className="container" 
      style={{ 
        backgroundImage: "url(/background.png)",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right bottom'
      }}>
      <div className="nav">
        <p className="brand">My Bakery</p>
        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => 
            isActive ? activeClassName : undefined
            } 
          >
            Home
          </NavLink> |{" "}
          <NavLink 
            to="/shop"
            className={({ isActive }) => 
            isActive ? activeClassName : undefined
            }
          >
            Shop
          </NavLink>
        </div>
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer">
        <span>Copyright © 2021 <a href="https://github.com/keithching" target="_blank">keithching</a></span>
      </div>
    </div>
  );
};

export default App;

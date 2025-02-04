import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, userRole, onLogout }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {!isAuthenticated ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        ) : (
          <>
            {userRole === 'admin' && <li><Link to="/admin-dashboard">Admin Dashboard</Link></li>}
            {userRole === 'user' && <li><Link to="/user-dashboard">User Dashboard</Link></li>}
            <li><button onClick={onLogout}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

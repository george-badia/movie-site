import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // one can perform any additional logout logic in this function (e.g., clearing user session)
    navigate('/login'); // Redirect to the login/signup page
  };

  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <a href="https://github.com/">
            <h1>Arcane</h1>
          </a>
        </div>
        <nav className='navbar'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tvSeries">TV Series</Link></li>
            <li><Link to="/movie">Movies</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><button className='logout-btn' onClick={handleLogout}>Logout</button></li>
          </ul>
        </nav>

        <div className='searchbox'>
          <i className="search-icon fa fa-search" aria-hidden="true"></i>
          <input type="text" name='search' placeholder="Search" />
        </div>

        <button className='btn'>Subscribe</button>
      </div>
    </header>
  );
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const routes = [
    {
      id: 1,
      name: 'Home',
      path: '/'
    },
    {
      id: 2,
      name: 'Statistics',
      path: '/statistics'
    },
    {
      id: 3,
      name: 'Applied Jobs',
      path: '/applied-jobs'
    },
    {
      id: 4,
      name: 'Blog',
      path: '/blog'
    }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container sticky top-0 flex items-center justify-between px-6 lg:px-16">
        <h1 className="navbar-logo text-2xl">Jobs Solution</h1>
        <ul className="navbar-menu hidden lg:flex space-x-4">
          {routes.map(route => (
            <li key={route.id} className="navbar-item">
              <Link to={route.path} className="navbar-link">
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="navbar-button px-4 py-2 bg-indigo-500 text-white rounded-md hidden lg:block">
          Start Applying
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

function Navbar() {
  const location = useLocation();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUser = Cookies.get('username');
    if (storedUser) {
      setUsername(storedUser);
    }
  }, []);

  const isActive = (path) =>
    location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="text-xl font-bold text-gray-800">
          Unimark Apartments
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/committee" className={isActive('/committee')}>Committee</Link>
          <Link to="/payments" className={isActive('/payments')}>Payments</Link>
          <Link to="/maintenance" className={isActive('/maintenance')}>Maintenance</Link>
          <Link to="/meetings" className={isActive('/meetings')}>Meetings</Link>
          <Link to="/documents" className={isActive('/documents')}>Documents</Link>
          <Link to="/budget" className={isActive('/budget')}>Budget Trend</Link>
          <Link to="/login" className={isActive('/login')}>Login</Link>
        </div>

        {username && (
          <span className="text-sm text-gray-600 ml-4">Hi, {username}!</span>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
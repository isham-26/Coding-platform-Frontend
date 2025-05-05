import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Problems', path: '/problems' },
    { name: 'capsul', path: '/capsul' },
    { name: 'Leaderboard', path: '/leaderboard' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <nav className="bg-blue-700 text-white px-6 py-4 shadow-md flex justify-center">
      <div className="w-[85%] flex justify-between items-center max-w-7xl mx-auto">
        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Logo */}
        <Link to="/">
          <div className="text-xl font-bold tracking-wider">CodeSphere</div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link to={link.path} className="hover:text-blue-300">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden mt-4 px-6 space-y-3 text-sm font-medium">
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link to={link.path} className="hover:text-blue-300" onClick={() => setOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

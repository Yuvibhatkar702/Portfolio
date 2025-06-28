import React, { useState } from 'react';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const links = ['about', 'skills', 'projects', 'education', 'certifications', 'contact'];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-gradient-to-r from-gray-900/80 to-gray-800/80 border-b border-gray-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Brand Name */}
        <Link
          to="home"
          smooth
          duration={500}
          offset={-70}
          className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent cursor-pointer select-none"
        >
          YuviStack
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {links.map(link => (
            <Link
              key={link}
              to={link}
              smooth
              duration={500}
              offset={-70}
              activeClass="active"
              spy={true}
              className="relative text-white capitalize font-medium cursor-pointer transition duration-300 hover:text-indigo-400 group"
            >
              {link}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Animated Hamburger */}
        <button
          className="md:hidden z-50 focus:outline-none relative w-8 h-8 flex flex-col justify-between items-center"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span
            className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${open ? 'rotate-45 translate-y-2' : ''
              }`}
          />
          <span
            className={`block h-0.5 w-full bg-white transition-all duration-300 ease-in-out ${open ? 'opacity-0' : ''
              }`}
          />
          <span
            className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-2' : ''
              }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-lg px-6 pb-4 pt-2 space-y-3 transition-all duration-300">
          {links.map(link => (
            <Link
              key={link}
              to={link}
              smooth
              duration={500}
              offset={-70}
              spy={true}
              onClick={closeMenu}
              activeClass="active"
              className="block py-2 text-white capitalize font-medium transition duration-300 hover:text-indigo-400"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

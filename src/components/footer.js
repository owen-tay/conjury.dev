import React from 'react';
import { Link } from 'react-router-dom';
import ConjuryLogo from './images/ConjuryLogo.svg'; // Assuming you have this logo file

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-slate-800 py-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and company info */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src={ConjuryLogo} alt="Conjury Logo" className="h-10 mr-3" />
              <span className="text-xl font-semibold text-gray-900 dark:text-white">Conjury</span>
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 max-w-xs">
              Web development and design agency based in Glasgow, creating exceptional digital experiences.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div>
              <ul className="space-y-2">
                <li>
                  <Link to="/Services" className="text-gray-600 dark:text-gray-300 hover:text-pink-conjury dark:hover:text-pink-conjury transition-colors duration-300">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" className="text-gray-600 dark:text-gray-300 hover:text-pink-conjury dark:hover:text-pink-conjury transition-colors duration-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              © {currentYear} Conjury. All rights reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
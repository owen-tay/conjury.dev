import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { Link } from "react-router-dom";
import SunSvg from "./images/sun.svg";
import MoonSvg from "./images/moon.svg";
import SunlightSvg from "./images/sunlight.svg";
import MoonlightSvg from "./images/moonlight.svg";
import ConjuryLogo from "./images/ConjuryLogo.svg";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const menuRef = useRef(null);

  useLayoutEffect(() => {
    if (menuRef.current) {
      menuRef.current.style.height = isMobileMenuOpen
        ? `${menuRef.current.scrollHeight}px`
        : "0";
    }
  }, [isMobileMenuOpen]);

  // Initialize theme before component mounts
  useEffect(() => {
    // Run this immediately on first mount
    const initializeTheme = () => {
      // Check localStorage first
      if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark');
        setIsDarkMode(true);
        return;
      } else if (localStorage.theme === 'light') {
        document.documentElement.classList.remove('dark');
        setIsDarkMode(false);
        return;
      }
      
      // If no localStorage setting, check system preference
      try {
        // This is the most direct way to check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (prefersDark) {
          document.documentElement.classList.add('dark');
          setIsDarkMode(true);
          // IMPORTANT FIX: Save to localStorage even when using system preference
          localStorage.theme = 'dark';
        } else {
          document.documentElement.classList.remove('dark');
          setIsDarkMode(false);
          // IMPORTANT FIX: Save to localStorage even when using system preference
          localStorage.theme = 'light';
        }
      } catch (e) {
        console.error("Error checking color scheme preference:", e);
        // Default to light mode if detection fails
        document.documentElement.classList.remove('dark');
        setIsDarkMode(false);
        // IMPORTANT FIX: Always set localStorage
        localStorage.theme = 'light';
      }
    };
    
    initializeTheme();
    
    // Add listener for system changes
    try {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleSystemThemeChange = (event) => {
        // IMPORTANT FIX: Store a flag for auto mode in localStorage
        // We'll add a user preference flag to indicate if this was explicitly set by the user
        if (!localStorage.userThemePreference) {
          setIsDarkMode(event.matches);
          if (event.matches) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
          } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
          }
        }
      };
      
      // Add the listener
      mediaQuery.addEventListener('change', handleSystemThemeChange);
      
      // Clean up
      return () => {
        mediaQuery.removeEventListener('change', handleSystemThemeChange);
      };
    } catch (e) {
      console.error("Error setting up theme listener:", e);
    }
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleDarkMode = () => {
    // Toggle the state
    const newDarkMode = !isDarkMode;
    
    // Update the state first for immediate UI update
    setIsDarkMode(newDarkMode);
    
    // Apply the theme to the document
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
    
    // IMPORTANT FIX: Set user preference flag
    localStorage.userThemePreference = 'true';
    
    // OPTIONAL FIX: Remove the page reload which might be causing issues
    // Instead, just update the class on documentElement which will affect all components
    // window.location.reload(); - Remove this line
  };

  const getMoonIcon = () => {
    if (isDarkMode) {
      return (
        <img
          src={MoonlightSvg}
          className="h-5 w-6 dark:text-white"
          alt="Moon Icon"
        />
      );
    } else {
      return (
        <img
          src={MoonSvg}
          className="h-6 w-6 dark:text-white"
          alt="Moon Icon"
        />
      );
    }
  };

  const getSunIcon = () => {
    if (isDarkMode) {
      return (
        <img
          src={SunlightSvg}
          className="h-6 w-6 dark:text-white"
          alt="Sun Icon"
        />
      );
    } else {
      return (
        <img src={SunSvg} className="h-6 w-6 dark:text-black" alt="Sun Icon" />
      );
    }
  };

  return (
    <nav
      className={`bg-white ${
        isDarkMode ? "dark:bg-slate-800" : "dark:bg-white"
      } mb-3 fixed top-0 left-0 w-full z-50`}
    >
      <div className="max-w-7xl mx-auto md:px-6 lg:px-8 text-2xl">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center px-4 md:px-0">
            <Link to="/" onClick={closeMobileMenu}>
              <img
                src={ConjuryLogo}
                className="h-28 pb-2 hover:stroke-pink-conjury duration-200 hover:scale-105 rounded-2xl transition-colors"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              to="/Contact"
              className="block transition-colors duration-300 dark:text-white hover:text-pink-conjury dark:hover:text-pink-conjury"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            <Link
              to="/Services"
              className="block transition-colors duration-300 dark:text-white hover:text-pink-conjury dark:hover:text-pink-conjury"
            >
              Services
            </Link>

            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-200 ${
                isDarkMode
                  ? "dark:text-white dark:hover:bg-slate-600"
                  : "dark:text-black"
              } focus:outline-none focus:ring-3 focus:ring-inset`}
              onClick={toggleDarkMode}
            >
              <span className="sr-only">Toggle Dark Mode</span>
              {isDarkMode ? getMoonIcon() : getSunIcon()}
            </button>
          </div>
          <div className="flex md:hidden items-center px-4">
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-200 ${
                isDarkMode
                  ? "dark:text-white dark:hover:bg-slate-600"
                  : "dark:text-black"
              } focus:outline-none focus:ring-3 focus:ring-inset`}
              onClick={toggleDarkMode}
            >
              <span className="sr-only">Toggle Dark Mode</span>
              {isDarkMode ? getMoonIcon() : getSunIcon()}
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-200 stroke-black dark:stroke-white dark:hover:bg-slate-600 focus:outline-none focus:ring-3 focus:ring-inset"
              aria-expanded="false"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "h-screen" : "h-0"
          }`}
          style={{
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
        >
          <div
            id="navDiv"
            className="bg-white dark:bg-slate-800 px-4 md:px-0 text-5xl"
            ref={menuRef}
            style={{
              transition: "height 0.3s, opacity 2s",
              opacity: isMobileMenuOpen ? 1 : 0,
              height: isMobileMenuOpen ? "max-content" : 0,
              display: isMobileMenuOpen ? "block" : "block",
            }}
          >
            <div className="flex flex-col items-end gap-5 mt-5">
              <Link
                to="/Contact"
                className="mt-1 block transition-colors duration-200 text-black dark:text-white hover:text-pink-conjury dark:hover:text-pink-conjury"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <Link
                to="/Services"
                className="block transition-colors duration-300 dark:text-white hover:text-pink-conjury dark:hover:text-pink-conjury"
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
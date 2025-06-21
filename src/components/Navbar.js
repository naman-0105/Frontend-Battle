import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Menu items
  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'Programs', path: '/programs' },
    { title: 'Verify Certificate', path: '/verify-certificate' },
    { title: 'What\'s Special', path: '/whats-special' },
    { title: 'Contact Us', path: '/contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const navbarVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } }
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-light/90 backdrop-blur-lg py-3' : 'bg-transparent py-5'
      }`}
      initial="initial"
      animate="animate"
      variants={navbarVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div 
              className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
            <span className="ml-3 text-xl font-display font-bold">Inlighn Tech</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-white bg-dark-lighter'
                      : 'text-gray-300 hover:text-white hover:bg-dark-lighter'
                  }`}
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden lg:flex items-center">
            <motion.button
              className="bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-md font-medium"
              whileHover={{ scale: 1.05, boxShadow: '0 0 8px rgba(108, 99, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden mt-4 bg-dark-lighter rounded-lg py-2"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className={`block px-4 py-2 text-sm ${
                    location.pathname === item.path
                      ? 'bg-dark-light text-white'
                      : 'text-gray-300 hover:bg-dark-light hover:text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <div className="px-4 py-2 mt-2 border-t border-dark-light">
                <button className="w-full bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-md text-sm font-medium">
                  Login
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
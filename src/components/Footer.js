import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  // Social media links
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com', 
      icon: 'linkedin' 
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com', 
      icon: 'instagram' 
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com', 
      icon: 'youtube' 
    }
  ];

  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const socialIconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.15, rotate: 5, transition: { duration: 0.3 } }
  };

  // Render social media icon based on name
  const renderIcon = (iconName) => {
    switch(iconName) {
      case 'linkedin':
        return (
          <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        );
      case 'instagram':
        return (
          <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        );
      case 'youtube':
        return (
          <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.footer 
      className="bg-dark-light pt-12 pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary"></div>
              <span className="ml-3 text-xl font-display font-bold">Inlighn Tech</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Revolutionizing the tech industry with innovative solutions and cutting-edge technologies. We help businesses transform their digital presence.
            </p>
          </motion.div>

          {/* Column 2: Menu Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-display font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-white transition-colors">Programs</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">Disclaimer</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">FAQs</Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Social Media and Address */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-display font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-lighter p-2 rounded-full text-gray-400 hover:text-white"
                  variants={socialIconVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  {renderIcon(social.icon)}
                </motion.a>
              ))}
            </div>
            <h3 className="text-lg font-display font-semibold mb-2">Office Address</h3>
            <address className="text-gray-400 text-sm not-italic">
              123 Tech Avenue, Silicon Valley<br />
              California, USA 94024<br />
              <a href="mailto:info@inlighntech.com" className="hover:text-white transition-colors">info@inlighntech.com</a><br />
              <a href="tel:+1234567890" className="hover:text-white transition-colors">+1 (234) 567-890</a>
            </address>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-dark-lighter mt-8 pt-6 text-center text-gray-500 text-sm"
          variants={itemVariants}
        >
          <p>&copy; {new Date().getFullYear()} Inlighn Tech. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
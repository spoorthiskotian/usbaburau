import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import logo from '../assets/logo.jpeg';
import './Navbar.css';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Sustainability', path: '/sustainability' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    // Check on mount too (in case page is already scrolled)
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="nav-container">
        {/* REPLACE THIS DIV WITH YOUR <img src={logo} /> */}
        <Link to="/" className="nav-logo">
          <div className="logo-placeholder">
            <span className="logo-full">U.S.Babu Rau</span>
            <span className="logo-estd">Estd. 1949</span>
          </div>
        </Link>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}>
                {link.label}
                <span className="nav-underline" />
              </Link>
            </li>
          ))}
        </ul>

        <a href="tel: +91 96861 41856" className="nav-cta">
          <FiPhone size={16} /> Call an Expert
        </a>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.div key={link.path} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}>
                <Link to={link.path} className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}>{link.label}</Link>
              </motion.div>
            ))}
            <a href="tel:+91 96861 41856" className="mobile-cta"><FiPhone size={16} /> Call an Expert</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

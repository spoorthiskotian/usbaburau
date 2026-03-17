import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiPrinter, FiMail, FiGlobe, FiMapPin } from 'react-icons/fi';

import { FaMobileAlt } from "react-icons/fa";
import './Footer.css';

const groupCompanies = [
  'Shishir Enterprises',
  'Design Block – Interior Solutions',
  'Dwarka Real Estate – Services',
  'New Bharath School Supplies',
  'Savithri Devi Memorial Charitable Trust (R)',
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-sub">U.S.Babu Rau</span>
              <span className="footer-estd">Estd. 1949</span>
            </div>
            <p className="footer-tagline">Get all materials under one roof</p>
            <p className="footer-desc">
              Serving South Canara and beyond since 1949, we are the most trusted
              supplier of interior materials, plywoods, and industrial chemicals in
              Dakshina Kannada.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {[
                ['Home', '/'],
                ['Products', '/products'],
                ['Sustainability', '/sustainability'],
                ['About Us', '/about'],
                ['Contact Us', '/contact'],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Head Office */}
          <div className="footer-col">
            <h4>Head Office</h4>
            <address>
              <span>
                <FiMapPin />
                #13/7/858/1, Felix Pai Bazaar,<br />
                Next to Janatha Bazaar,<br />
                G.H.S Road, Mangalore – 575 001
              </span>
              <span><FiPhone  /> +91 824 2420949, 2424249</span>
              <span><FiPrinter  /> Fax: +91 824 4279949</span>

              <span><FaMobileAlt />Mobile: +91 9448144949</span>
              <span><FiMail  /> usbinfo@usbaburau.com</span>
              <span><FiGlobe/> www.usbaburau.com</span>
            </address>

            <h4 style={{ marginTop: '1.25rem' }}>Branches</h4>
            <address>
              <span>UDUPI | MANIPAL</span>
              <span><FiPhone /> 0820 2529649</span>
              <span><FaMobileAlt />Mobile: +91 99643 80653</span>
            </address>
          </div>

          {/* Group Companies */}
          <div className="footer-col">
            <h4>Group Companies</h4>
            <ul>
              {groupCompanies.map((company) => (
                <li key={company}>
                  <span className="dot" />
                  {company}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} U.S. Babu Rau. All rights reserved.</p>
        <p>Designed with love for quality and trust.</p>
      </div>
    </footer>
  );
}

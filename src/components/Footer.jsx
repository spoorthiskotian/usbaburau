import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiPrinter, FiMail, FiGlobe, FiMapPin } from 'react-icons/fi';

import { FaMobileAlt } from "react-icons/fa";
import './Footer.css';

const groupCompanies = [
  'Wantspace Real Estate Services',
  'Design Block – Interior Solutions',
  'USB Sales and Services - interior, exterior products and Turnkey projects',
  'Pritvi Mitr- Industrial and Domestic Scrap Recyclers',
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
                15-5-248/1, Sai Ashraya,<br />
                Arya Samaj Rd, Mallikatte, Kadri, <br />
                 Mangaluru, Karnataka 575003
              </span>
              <span><FiPhone  /> +91 96861 41856</span>
             
              <span><FiMail  /> Usbinfo@usbaburau.com </span>
       
            </address>

            {/* <h4 style={{ marginTop: '1.25rem' }}>Branches</h4>
            <address>
              <span>UDUPI | MANIPAL</span>
              <span><FiPhone /> 0820 2529649</span>
              <span><FaMobileAlt />Mobile: +91 99643 80653</span>
            </address> */}
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

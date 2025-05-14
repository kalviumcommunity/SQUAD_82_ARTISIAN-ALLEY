
// /components/Footer.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-10 pt-8 pb-4 text-gray-700 text-sm">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h4 className="font-semibold text-lg mb-2">About Artisan Alley</h4>
          <p>
            Artisan Alley is a curated marketplace for handmade, locally crafted goods from artisans across the country. We support local talent and traditional crafts.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/products" className="hover:text-indigo-500">Browse Products</Link></li>
            <li><Link to="/about" className="hover:text-indigo-500">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-500">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-indigo-500">FAQs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-2">Connect With Us</h4>
          <div className="flex gap-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
          <p className="mt-4">Email: support@artisanalley.com</p>
          <p></p>
        </div>
      </div>

      <div className="text-center mt-6 border-t pt-4 text-gray-500">
        © {new Date().getFullYear()} Artisan Alley. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
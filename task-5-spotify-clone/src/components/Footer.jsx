import React from 'react';

const Footer = () => (
  <footer className="w-full py-6 bg-gradient-to-r from-[#232946] to-[#191624] text-center mt-8 shadow-inner">
    <p className="text-indigo-200 text-sm">
      © {new Date().getFullYear()} Wavly. Crafted with passion by <span className="font-semibold text-indigo-300">Pradeep Misal</span>.
    </p>
  </footer>
);

export default Footer;

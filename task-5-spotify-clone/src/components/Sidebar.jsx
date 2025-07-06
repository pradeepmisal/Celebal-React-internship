import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineHome, HiOutlineMenu, HiOutlineMusicNote, HiOutlineUser, HiOutlineStar } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';

import { logo } from '../assets';

const navItems = [
  { label: 'Home', to: '/', icon: HiOutlineHome },
  { label: 'Explore', to: '/explore', icon: HiOutlineMusicNote },
  { label: 'Artists', to: '/artists', icon: HiOutlineUser },
  { label: 'Favorites', to: '/favorites', icon: HiOutlineStar },
];

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {navItems.map((item) => (
      <NavLink
        key={item.label}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-base font-semibold text-gray-300 hover:text-indigo-400 transition-colors"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.label}
      </NavLink>
    ))}
  </div>
);

const NavPanel = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-gradient-to-b from-[#232946] to-[#191624] shadow-lg">
        <img src={logo} alt="Wavly logo" title="Wavly" className="w-full h-16 object-contain rounded-lg mb-4" />
        <span className="text-2xl font-bold text-indigo-300 tracking-wide text-center">Wavly</span>
        <NavLinks />
      </div>

      {/* Mobile nav panel */}
      <div className="absolute md:hidden block top-6 right-3">
        {!mobileMenuOpen ? (
          <HiOutlineMenu className="w-7 h-7 text-indigo-200" onClick={() => setMobileMenuOpen(true)} />
        ) : (
          <RiCloseLine className="w-7 h-7 text-indigo-200" onClick={() => setMobileMenuOpen(false)} />
        )}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#232946] backdrop-blur-lg z-10 p-6 md:hidden transition-all duration-300 ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="Wavly logo" title="Wavly" className="w-full h-16 object-contain rounded-lg mb-4" />
        <span className="text-2xl font-bold text-indigo-300 tracking-wide text-center block">Wavly</span>
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default NavPanel;

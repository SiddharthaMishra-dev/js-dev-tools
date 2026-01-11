import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
 IconHome,
 IconNumber64Small,
 IconPhoto,
 IconBolt,
 IconCrop,
 IconBraces,
 IconFileTypePdf,
 IconMenu2,
 IconX,
} from '@tabler/icons-react';

const navItems = [
 { path: '/', label: 'Home', icon: <IconHome size={18} /> },
 { path: '/image-to-base64', label: 'Base64', icon: <IconNumber64Small size={18} /> },
 { path: '/image-format-converter', label: 'Convert', icon: <IconPhoto size={18} /> },
 { path: '/image-compressor', label: 'Compress', icon: <IconBolt size={18} /> },
 { path: '/image-cropper', label: 'Crop', icon: <IconCrop size={18} /> },
 { path: '/json-formatter', label: 'JSON', icon: <IconBraces size={18} /> },
 { path: '/image-to-pdf', label: 'PDF', icon: <IconFileTypePdf size={18} /> },
];

const Header: React.FC = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 return (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/70 backdrop-blur-xl border-b border-white/5 shadow-lg">
   <div className="max-w-7xl mx-auto px-4 md:px-6">
    <div className="flex items-center justify-between h-16">
     <Link to="/" className="no-underline text-xl font-bold text-gray-100">
      JS<span className="text-amber-200">DevTools</span>
     </Link>

     {/* Desktop Navigation */}
     <div className="hidden md:flex gap-1 lg:gap-2">
      {navItems.map((item) => (
       <NavLink
        key={item.path}
        to={item.path}
        className={({ isActive }) =>
         `flex items-center gap-2 px-3 py-2 no-underline text-sm font-medium rounded-lg transition-all duration-200 ease-in-out ${
          isActive ? 'text-amber-200 bg-amber-700/20' : 'text-gray-300 hover:text-amber-200 hover:bg-white/5'
         }`
        }
       >
        <span>{item.icon}</span>
        <span>{item.label}</span>
       </NavLink>
      ))}
     </div>

     {/* Mobile Menu Toggle */}
     <button
      className="block md:hidden bg-transparent border-none text-gray-100 cursor-pointer p-2 transition-colors hover:text-amber-200"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Toggle menu"
     >
      {isMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
     </button>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
     <div className="md:hidden flex flex-col gap-1 py-4 border-t border-white/5">
      {navItems.map((item) => (
       <NavLink
        key={item.path}
        to={item.path}
        className={({ isActive }) =>
         `flex items-center gap-3 p-3 no-underline text-base font-medium rounded-lg transition-colors duration-200 ${
          isActive ? 'text-amber-200 bg-amber-700/20' : 'text-gray-300 hover:text-amber-200 hover:bg-white/5'
         }`
        }
        onClick={() => setIsMenuOpen(false)}
       >
        <span>{item.icon}</span>
        <span>{item.label}</span>
       </NavLink>
      ))}
     </div>
    )}
   </div>
  </nav>
 );
};

export default Header;

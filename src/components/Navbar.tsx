
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

interface NavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navbar = ({ isOpen, onClose }: NavbarProps) => {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', label: 'BLOCK' },
    { path: '/validator', label: 'VALIDATOR' },
    { path: '/transactions', label: 'TRANSACTIONS' }
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 bg-purple-600 text-white transform transition-transform duration-300 ${
      isOpen ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-bold">🌙</div>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-semibold hover:text-purple-200 transition-colors ${
                  location.pathname === item.path ? 'text-white' : 'text-purple-200'
                }`}
                onClick={onClose}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">Made by 0xMukti_w</span>
            <button
              onClick={onClose}
              className="p-2 hover:bg-purple-700 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

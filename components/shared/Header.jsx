'use client'
import { useState, useEffect } from 'react';
import { MenuIcon, X } from 'lucide-react';
import LogoSection from './LogoSection';
import BellIcon from '@/public/static/assets/icons/bell.svg';
import UserIcon from '@/public/static/assets/icons/user.svg';
import Sidebar from './Sidebar';
import Image from 'next/image';

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleSidebar = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    window.dispatchEvent(new CustomEvent('sidebarChange', { 
      detail: { isExpanded: newState } 
    }));
  };

  if (!isMounted) {
    return null; // Return null on server-side and first render
  }

  return (
    <>
      <div className="flex justify-between items-center py-4 px-4 md:px-10 bg-white fixed w-full top-0 z-10">
        <div className="flex items-center space-x-2 md:space-x-4">
          <button 
            className="p-1 hover:bg-gray-100 rounded-md hidden md:block"
            onClick={toggleSidebar}
          >
            <MenuIcon className="h-6 w-6 text-gray-600" />
          </button>
          <button 
            className="p-1 hover:bg-gray-100 rounded-md md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <MenuIcon className="h-6 w-6 text-gray-600" />
          </button>
          <LogoSection />
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <button className="p-1 hover:bg-gray-100 rounded-md">
            <Image src={BellIcon} height={28} width={28} alt="Bell" className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-md">
            <Image src={UserIcon} height={32} width={32} alt="User" className="w-7 h-7 md:w-9 md:h-9" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-20 md:hidden">
          <div className="flex justify-end p-4">
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          <Sidebar isExpanded={true} isMobile={true} onClose={() => setIsMobileMenuOpen(false)} />
        </div>
      )}

      <div className="hidden md:block">
        <Sidebar isExpanded={isExpanded} />
      </div>

      <div className={`
        pt-16 
        w-full
        ${isExpanded ? 'md:ml-64' : 'md:ml-16'}
        transition-all duration-300 ease-in-out
      `}>
      </div>
    </>
  );
};

export default Header;

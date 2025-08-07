'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

export default function MobileNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Navigation Header - Clear purpose and hierarchy */}
      <header className="fixed top-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo - Clear brand identity */}
          <div className="flex-shrink-0">
            <Logo variant="rich-emerald" height={32} />
          </div>

          {/* Hamburger Button - Clear action and state */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0F2F2E] focus:ring-offset-2"
            aria-label="Open mobile menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-6 relative">
              {/* Animated hamburger icon - Clear motion and feedback */}
              <AnimatePresence mode="wait">
                {!isMenuOpen ? (
                  <motion.div
                    key="hamburger"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-1.5"
                  >
                    <div className="w-6 h-0.5 bg-gray-600 rounded-full"></div>
                    <div className="w-6 h-0.5 bg-gray-600 rounded-full"></div>
                    <div className="w-6 h-0.5 bg-gray-600 rounded-full"></div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    className="w-6 h-6 flex items-center justify-center"
                  >
                    <svg 
                      className="w-6 h-6 text-gray-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12" 
                      />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu - Clear navigation and accessibility */}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
} 
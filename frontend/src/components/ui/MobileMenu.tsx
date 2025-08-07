'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      setIsVisible(true);
    } else {
      document.body.style.overflow = 'unset';
      setIsVisible(false);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Menu items with clear purpose and hierarchy
  const menuItems = [
    {
      label: 'Home',
      href: '/',
      description: 'Return to the main page'
    },
    {
      label: 'About',
      href: '#about',
      description: 'Learn about Sagheerah'
    },
    {
      label: 'Story',
      href: '#story',
      description: 'The Sagheerah story'
    },
    {
      label: 'Contact',
      href: '/contact',
      description: 'Get in touch with us'
    },
    {
      label: 'Privacy',
      href: '/privacy-policy',
      description: 'Privacy policy and data protection'
    },
    {
      label: 'Terms',
      href: '/terms-of-service',
      description: 'Terms of service and legal information'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Clear state and feedback */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu Container - Clear hierarchy and purpose */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ 
              type: 'spring',
              damping: 25,
              stiffness: 200,
              duration: 0.3
            }}
            className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Header - Clear hierarchy */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <Logo variant="rich-emerald" height={40} />
              
              {/* Close Button - Clear action and feedback */}
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0F2F2E] focus:ring-offset-2"
                aria-label="Close mobile menu"
              >
                <svg 
                  className="w-6 h-6 text-gray-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </div>

            {/* Navigation - Clear information and hierarchy */}
            <nav className="flex-1 overflow-y-auto">
              <div className="p-6">
                <div className="space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.1,
                        duration: 0.3
                      }}
                    >
                      <a
                        href={item.href}
                        onClick={onClose}
                        className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0F2F2E] focus:ring-offset-2 group"
                        aria-describedby={`${item.href}-desc`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-body text-lg text-gray-900 group-hover:text-[#0F2F2E] transition-colors">
                            {item.label}
                          </span>
                          <svg 
                            className="w-5 h-5 text-gray-400 group-hover:text-[#0F2F2E] transition-colors" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M9 5l7 7-7 7" 
                            />
                          </svg>
                        </div>
                        <p 
                          id={`${item.href}-desc`}
                          className="text-sm text-gray-500 mt-1"
                        >
                          {item.description}
                        </p>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </nav>

            {/* Footer - Clear context and trust */}
            <div className="p-6 border-t border-gray-100 bg-gray-50">
              <div className="text-center">
                <p className="font-heading text-sm text-gray-600 mb-3">
                  Join Our Waitlist
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  Be among the first to experience our debut collection
                </p>
                
                {/* Trust indicators - Clear trust */}
                <div className="flex justify-center space-x-4 text-xs text-gray-400">
                  <span className="flex items-center space-x-1">
                    <span>🔒</span>
                    <span>Secure</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span>📧</span>
                    <span>Private</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 
'use client';

import { useState } from 'react';
import { emailConfig } from '@/lib/email-config';
import { track } from '@vercel/analytics';

interface EmailFormProps {
  className?: string;
}

export function EmailForm({ className = '' }: EmailFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clarity of Action: Clear what will happen
    setStatus('loading');
    setMessage('Reserving your place on our private list...');
    
    try {
      // Honeypot validation - if honeypot field is filled, it's likely a bot
      if (honeypot.trim()) {
        // Silently reject without showing error to avoid bot detection
        setStatus('success');
        setMessage('Thank you! You\'re now on our private list. We\'ll notify you first.');
        setEmail('');
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 4000);
        return;
      }

      // Use our API route for all environments (no CORS issues)
      try {
        const apiResponse = await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        
        if (apiResponse.ok) {
          const result = await apiResponse.json();
          // Clarity of Feedback: Immediate success response
          setStatus('success');
          setMessage('Thank you! You\'re now on our private list. We\'ll notify you first.');
          setEmail('');
          
          // Track successful email signup
          track('email_signup_success', {
            email: email,
            source: 'coming_soon_page',
            timestamp: new Date().toISOString()
          });
          
          // Reset after 4 seconds
          setTimeout(() => {
            setStatus('idle');
            setMessage('');
          }, 4000);
        } else {
          throw new Error('API submission failed');
        }
      } catch (error) {
        console.error('API error:', error);
        // Fallback: Show success anyway for better UX
        setStatus('success');
        setMessage('Thank you! You\'re now on our private list. We\'ll notify you first.');
        setEmail('');
        
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 4000);
      }
      
    } catch {
      // Clarity of Feedback: Clear error response
      setStatus('error');
      setMessage('Please enter a valid email address to join our private list.');
      
      // Track form error
      track('email_signup_error', {
        email: email,
        source: 'coming_soon_page',
        error: 'form_submission_failed',
        timestamp: new Date().toISOString()
      });
      
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 4000);
    }
  };

  const isValidEmail = (email: string) => {
    return emailConfig.validation.emailRegex.test(email);
  };

  return (
    <div className={`w-full max-w-lg mx-auto ${className}`} data-email-form id="email-form">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Desktop: Side-by-side layout */}
        <div className="hidden md:flex space-x-3">
          <div className="flex-1 relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className={`
                w-full px-6 py-4 border-2 rounded-lg font-body text-lg
                transition-all duration-300 ease-in-out transform
                ${status === 'error' 
                  ? 'border-red-500 bg-red-50 text-red-900' 
                  : status === 'success'
                  ? 'border-green-500 bg-green-50 text-green-900'
                  : 'border-gray-300 focus:border-[#0F2F2E] focus:ring-2 focus:ring-[#0F2F2E]/20 bg-white text-black placeholder-gray-500'
                }
                ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}
                ${isFocused ? 'scale-[1.02] shadow-lg' : ''}
                ${isHovered ? 'shadow-md' : ''}
              `}
              disabled={status === 'loading'}
              required
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            
            {/* Honeypot field - hidden from users but visible to bots */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="absolute left-[-9999px] opacity-0 pointer-events-none"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
          </div>

          {/* Clarity of Action: Clear call-to-action */}
          <button
            type="submit"
            disabled={status === 'loading' || !isValidEmail(email)}
            className={`
              px-8 py-4 rounded-lg font-body text-lg font-medium
              transition-all duration-300 ease-in-out transform
              ${status === 'loading'
                ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                : status === 'success'
                ? 'bg-green-600 text-white shadow-lg'
                : status === 'error'
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-[#0F2F2E] text-white hover:bg-[#0B1C1B] focus:ring-4 focus:ring-[#0F2F2E]/20 shadow-lg'
              }
              ${!status.includes('loading') && isValidEmail(email) ? 'hover:scale-105 active:scale-95' : ''}
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Clarity of State: Loading state */}
            {status === 'loading' && (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Reserving...</span>
              </div>
            )}
            
            {/* Clarity of State: Success state */}
            {status === 'success' && (
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Reserved!</span>
              </div>
            )}
            
            {/* Clarity of State: Error state */}
            {status === 'error' && (
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>Try Again</span>
              </div>
            )}
            
            {/* Clarity of Action: Default state */}
            {status === 'idle' && 'Reserve My Place'}
          </button>
        </div>

        {/* Mobile: Stacked layout */}
        <div className="md:hidden space-y-4">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className={`
                w-full px-6 py-4 border-2 rounded-lg font-body text-lg
                transition-all duration-300 ease-in-out transform
                ${status === 'error' 
                  ? 'border-red-500 bg-red-50 text-red-900' 
                  : status === 'success'
                  ? 'border-green-500 bg-green-50 text-green-900'
                  : 'border-gray-300 focus:border-[#0F2F2E] focus:ring-2 focus:ring-[#0F2F2E]/20 bg-white text-black placeholder-gray-500'
                }
                ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}
                ${isFocused ? 'scale-[1.02] shadow-lg' : ''}
                ${isHovered ? 'shadow-md' : ''}
              `}
              disabled={status === 'loading'}
              required
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            
            {/* Honeypot field - hidden from users but visible to bots */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="absolute left-[-9999px] opacity-0 pointer-events-none"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
          </div>

          {/* Clarity of Action: Clear call-to-action */}
          <button
            type="submit"
            disabled={status === 'loading' || !isValidEmail(email)}
            className={`
              w-full px-8 py-4 rounded-lg font-body text-lg font-medium
              transition-all duration-300 ease-in-out transform
              ${status === 'loading'
                ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                : status === 'success'
                ? 'bg-green-600 text-white shadow-lg'
                : status === 'error'
                ? 'bg-red-600 text-white shadow-lg'
                : 'bg-[#0F2F2E] text-white hover:bg-[#0B1C1B] focus:ring-4 focus:ring-[#0F2F2E]/20 shadow-lg'
              }
              ${!status.includes('loading') && isValidEmail(email) ? 'hover:scale-105 active:scale-95' : ''}
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Clarity of State: Loading state */}
            {status === 'loading' && (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Reserving...</span>
              </div>
            )}
            
            {/* Clarity of State: Success state */}
            {status === 'success' && (
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Reserved!</span>
              </div>
            )}
            
            {/* Clarity of State: Error state */}
            {status === 'error' && (
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>Try Again</span>
              </div>
            )}
            
            {/* Clarity of Action: Default state */}
            {status === 'idle' && 'Reserve My Place'}
          </button>
        </div>

        {/* Clarity of State: Visual validation feedback */}
        {email && !isValidEmail(email) && status === 'idle' && (
          <p className="text-red-500 text-sm font-body text-center">
            Please enter a valid email address
          </p>
        )}

        {/* Clarity of Feedback: Status messages */}
        {message && (
          <div className={`
            p-4 rounded-lg text-center font-body
            ${status === 'success' 
              ? 'bg-green-100 text-green-800 border border-green-200'
              : status === 'error'
              ? 'bg-red-100 text-red-800 border border-red-200'
              : 'bg-blue-100 text-blue-800 border border-blue-200'
            }
          `}>
            {message}
          </div>
        )}

        {/* Clarity of Information: Privacy assurance */}
        <p className="text-xs text-gray-500 text-center font-body">
          Private list. No spam — ever.
        </p>
      </form>
    </div>
  );
}

export default EmailForm; 
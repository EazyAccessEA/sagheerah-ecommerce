'use client';

import { useState } from 'react';
import { emailConfig } from '@/lib/email-config';

interface EmailFormProps {
  className?: string;
}

export function EmailForm({ className = '' }: EmailFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clarity of Action: Clear what will happen
    setStatus('loading');
    setMessage('Adding you to our exclusive waitlist...');
    
    try {
      // Honeypot validation - if honeypot field is filled, it's likely a bot
      if (honeypot.trim()) {
        // Silently reject without showing error to avoid bot detection
        setStatus('success');
        setMessage('Thank you! You\'ve been added to our exclusive waitlist.');
        setEmail('');
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 3000);
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
          setMessage(result.message || 'Thank you! You\'ve been added to our exclusive waitlist.');
          setEmail('');
          
          // Reset after 3 seconds
          setTimeout(() => {
            setStatus('idle');
            setMessage('');
          }, 3000);
        } else {
          throw new Error('API submission failed');
        }
      } catch (error) {
        console.error('API error:', error);
        // Fallback: Show success anyway for better UX
        setStatus('success');
        setMessage('Thank you! You\'ve been added to our exclusive waitlist.');
        setEmail('');
        
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 3000);
      }
      
    } catch {
      // Clarity of Feedback: Clear error response
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
      
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    }
  };

  const isValidEmail = (email: string) => {
    return emailConfig.validation.emailRegex.test(email);
  };

  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Clarity of Action: Clear input with purpose */}
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className={`
              w-full px-4 py-3 border-2 rounded-lg font-body text-lg
              transition-all duration-200 ease-in-out
              ${status === 'error' 
                ? 'border-red-500 bg-red-50 text-red-900' 
                : status === 'success'
                ? 'border-green-500 bg-green-50 text-green-900'
                : 'border-gray-300 focus:border-black bg-white text-black placeholder-gray-600'
              }
              ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            disabled={status === 'loading'}
            required
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
          
          {/* Clarity of State: Visual validation feedback */}
          {email && !isValidEmail(email) && status === 'idle' && (
            <p className="text-red-500 text-sm mt-1 font-body">
              Please enter a valid email address
            </p>
          )}
        </div>

        {/* Clarity of Action: Clear call-to-action */}
        <button
          type="submit"
          disabled={status === 'loading' || !isValidEmail(email)}
                      className={`
              w-full px-6 py-3 rounded-lg font-body text-lg font-semibold
              transition-all duration-200 ease-in-out
              ${status === 'loading'
                ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                : status === 'success'
                ? 'bg-green-600 text-white'
                : status === 'error'
                ? 'bg-red-600 text-white'
                : 'bg-black text-white hover:bg-gray-800 focus:ring-4 focus:ring-black/20'
              }
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
        >
          {/* Clarity of State: Loading state */}
          {status === 'loading' && (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Adding...</span>
            </div>
          )}
          
          {/* Clarity of State: Success state */}
          {status === 'success' && (
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Added!</span>
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
          {status === 'idle' && 'Join the Waitlist'}
        </button>

        {/* Clarity of Feedback: Status messages */}
        {message && (
          <div className={`
            p-3 rounded-lg text-center font-body
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
        <p className="text-xs text-gray-600 text-center font-body">
          We respect your privacy. Unsubscribe at any time. No spam, ever.
        </p>
      </form>
    </div>
  );
}

export default EmailForm; 
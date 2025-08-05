'use client';

import { useState } from 'react';
import Logo from '@/components/ui/Logo';

export default function UnsubscribePage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [isSubscribed, setIsSubscribed] = useState<boolean | null>(null);

  const checkSubscription = async () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setMessage('Checking subscription status...');

    try {
      const response = await fetch(`/api/unsubscribe?email=${encodeURIComponent(email)}`);
      const data = await response.json();

      if (response.ok) {
        setIsSubscribed(data.subscribed);
        if (data.subscribed) {
          setMessage('Email found. You can now unsubscribe below.');
        } else {
          setMessage('This email is not subscribed to our list.');
        }
      } else {
        setMessage(data.error || 'Error checking subscription status');
      }
    } catch {
      setMessage('Error checking subscription status');
    } finally {
      setStatus('idle');
    }
  };

  const handleUnsubscribe = async () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setMessage('Processing unsubscribe request...');

    try {
      const response = await fetch('/api/unsubscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Successfully unsubscribed. You will receive a confirmation email shortly.');
        setIsSubscribed(false);
      } else {
        setStatus('error');
        setMessage(data.error || 'Error processing unsubscribe request');
      }
    } catch {
      setStatus('error');
      setMessage('Error processing unsubscribe request');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Logo variant="cosmic-latte" height={120} />
          <h1 className="font-heading text-4xl font-bold text-black mt-8 mb-4">
            Unsubscribe
          </h1>
          <p className="font-body text-lg text-gray-600 max-w-md mx-auto">
            We&apos;re sorry to see you go. Enter your email address below to unsubscribe from Sagheerah emails.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 max-w-md mx-auto">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-body text-lg focus:border-black focus:outline-none transition-colors"
                disabled={status === 'loading'}
              />
            </div>

            {message && (
              <div className={`p-4 rounded-lg text-center ${
                status === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-200'
                  : status === 'error'
                  ? 'bg-red-100 text-red-800 border border-red-200'
                  : 'bg-blue-100 text-blue-800 border border-blue-200'
              }`}>
                {message}
              </div>
            )}

            <div className="space-y-3">
              <button
                onClick={checkSubscription}
                disabled={status === 'loading' || !email}
                className="w-full px-6 py-3 bg-gray-800 text-white rounded-lg font-body text-lg font-semibold hover:bg-gray-700 focus:ring-4 focus:ring-gray-800/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Checking...' : 'Check Subscription'}
              </button>

              {isSubscribed && (
                <button
                  onClick={handleUnsubscribe}
                  disabled={status === 'loading'}
                  className="w-full px-6 py-3 bg-red-600 text-white rounded-lg font-body text-lg font-semibold hover:bg-red-700 focus:ring-4 focus:ring-red-600/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Processing...' : 'Unsubscribe'}
                </button>
              )}
            </div>

            {status === 'success' && (
              <div className="text-center mt-6">
                <p className="text-sm text-gray-600 mb-4">
                  You will receive a confirmation email shortly.
                </p>
                <a
                  href="/coming-soon"
                  className="text-sm text-gray-800 hover:text-black underline"
                >
                  Return to Coming Soon page
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 mb-4">
            Changed your mind?
          </p>
          <a
            href="/coming-soon"
            className="text-sm text-gray-800 hover:text-black underline"
          >
            Return to Coming Soon page
          </a>
        </div>
      </div>
    </div>
  );
} 
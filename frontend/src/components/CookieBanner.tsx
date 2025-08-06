'use client';

import { useState, useEffect } from 'react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          {!showPreferences ? (
            // Main Banner View
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-primary">Cookie Preferences</h3>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <p className="text-text-secondary leading-relaxed">
                  We use cookies to enhance your experience on Sagheerah. Some cookies are necessary for the website to function properly, while others help us improve our services and provide you with relevant content.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">Necessary Cookies</span>
                    <span className="text-xs text-text-muted bg-green-100 text-green-800 px-2 py-1 rounded">Always Active</span>
                  </div>
                  <p className="text-xs text-text-secondary">
                    Essential for website functionality. Cannot be disabled.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-sm"
                >
                  Accept All Cookies
                </button>
                <button
                  onClick={handleAcceptNecessary}
                  className="flex-1 px-6 py-3 bg-gray-100 text-primary rounded-lg hover:bg-gray-200 transition-colors font-medium"
                >
                  Accept Necessary Only
                </button>
                <button
                  onClick={() => setShowPreferences(true)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-primary rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Customize Preferences
                </button>
              </div>

              {/* Links */}
              <div className="text-xs text-text-muted text-center pt-2">
                <span>Learn more about our </span>
                <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>
                <span> and </span>
                <a href="/terms-of-service" className="text-primary hover:underline">Terms of Service</a>
              </div>
            </div>
          ) : (
            // Detailed Preferences View
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-primary">Cookie Preferences</h3>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="text-text-muted hover:text-primary transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Cookie Categories */}
              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-primary">Necessary Cookies</h4>
                      <p className="text-sm text-text-secondary">Essential for website functionality</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">Always Active</span>
                      <input
                        type="checkbox"
                        checked={preferences.necessary}
                        disabled
                        className="h-4 w-4 text-primary focus:ring-primary/20 border-gray-300 rounded"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-text-muted">
                    These cookies are required for the website to function properly. They include security features, 
                    session management, and basic functionality. They cannot be disabled.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-primary">Analytics Cookies</h4>
                      <p className="text-sm text-text-secondary">Help us understand how visitors use our website</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => handlePreferenceChange('analytics')}
                      className="h-4 w-4 text-primary focus:ring-primary/20 border-gray-300 rounded"
                    />
                  </div>
                  <p className="text-xs text-text-muted">
                    These cookies help us analyze website traffic and understand how visitors interact with our site. 
                    This information helps us improve our website and user experience.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-primary">Marketing Cookies</h4>
                      <p className="text-sm text-text-secondary">Used to deliver personalized content and advertisements</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={() => handlePreferenceChange('marketing')}
                      className="h-4 w-4 text-primary focus:ring-primary/20 border-gray-300 rounded"
                    />
                  </div>
                  <p className="text-xs text-text-muted">
                    These cookies are used to deliver personalized content and advertisements based on your interests. 
                    They may be set by our advertising partners to build a profile of your interests.
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-sm"
                >
                  Save Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium shadow-sm"
                >
                  Accept All Cookies
                </button>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-primary rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
} 
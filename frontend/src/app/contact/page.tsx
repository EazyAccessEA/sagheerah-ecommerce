'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    privacy: false,
    website: '' // Honeypot field
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const [emailStatus, setEmailStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacy) {
      setSubmitStatus({
        type: 'error',
        message: 'Please agree to the Privacy Policy and Terms of Service.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          website: formData.website // Include honeypot field
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
          privacy: false,
          website: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Minimal Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/coming-soon" className="text-[#0F2F2E] font-medium hover:underline">
              ← Back to Home
            </a>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-gray-600 hover:text-[#0F2F2E] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-600 hover:text-[#0F2F2E] transition-colors">
                Terms of Service
              </a>
              <span className="text-gray-400">Contact</span>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-[#0F2F2E] mb-4">Contact Us</h1>
          <p className="text-gray-700 text-lg">
            We&apos;d love to hear from you. Get in touch with our team for any questions or support.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Email Contact */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0F2F2E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0F2F2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0F2F2E] mb-2">Email Us</h3>
              <p className="text-gray-700 mb-4">
                Send us an email and we&apos;ll get back to you as soon as possible.
              </p>
                            {emailStatus.type && (
                <div className={`mb-4 p-3 rounded-lg text-sm ${
                  emailStatus.type === 'success'
                    ? 'bg-green-50 border border-green-200 text-green-800'
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}>
                  <span>{emailStatus.message.split('click here to copy:')[0]}</span>
                  {emailStatus.message.includes('click here to copy:') && (
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText('hello@sagheerah.com').then(() => {
                          // Show a brief "copied" message
                          const originalMessage = emailStatus.message;
                          setEmailStatus({
                            type: 'success',
                            message: 'Email copied to clipboard!'
                          });
                          setTimeout(() => {
                            setEmailStatus({
                              type: originalMessage.includes('successfully') ? 'success' : 'error',
                              message: originalMessage
                            });
                          }, 2000);
                        }).catch(() => {
                          // Fallback for older browsers
                          const textArea = document.createElement('textarea');
                          textArea.value = 'hello@sagheerah.com';
                          document.body.appendChild(textArea);
                          textArea.select();
                          document.execCommand('copy');
                          document.body.removeChild(textArea);
                          
                          const originalMessage = emailStatus.message;
                          setEmailStatus({
                            type: 'success',
                            message: 'Email copied to clipboard!'
                          });
                          setTimeout(() => {
                            setEmailStatus({
                              type: originalMessage.includes('successfully') ? 'success' : 'error',
                              message: originalMessage
                            });
                          }, 2000);
                        });
                      }}
                      className="text-blue-600 hover:text-blue-800 underline font-medium ml-1"
                    >
                      click here to copy: hello@sagheerah.com
                    </button>
                  )}
                </div>
              )}
              
              <button 
                onClick={() => {
                  try {
                    // Clear previous status
                    setEmailStatus({ type: null, message: '' });
                    
                    // Create a temporary link element for better compatibility
                    const mailtoLink = document.createElement('a');
                    mailtoLink.href = 'mailto:hello@sagheerah.com?subject=Contact%20Inquiry%20from%20Sagheerah%20Website';
                    mailtoLink.style.display = 'none';
                    document.body.appendChild(mailtoLink);
                    
                    // Trigger the click
                    mailtoLink.click();
                    
                    // Clean up
                    document.body.removeChild(mailtoLink);
                    
                    // Show success message with copy functionality
                    setEmailStatus({
                      type: 'success',
                      message: 'Email client opened! If it didn\'t open, click here to copy: hello@sagheerah.com'
                    });
                    
                    // Clear message after 8 seconds
                    setTimeout(() => {
                      setEmailStatus({ type: null, message: '' });
                    }, 8000);
                    
                  } catch (error) {
                    // Show error message with copy functionality
                    setEmailStatus({
                      type: 'error',
                      message: 'Email client not detected. Click here to copy: hello@sagheerah.com'
                    });
                  }
                }}
                className="inline-flex items-center px-6 py-3 bg-[#0F2F2E] text-white rounded-lg hover:bg-[#0F2F2E]/90 transition-colors"
              >
                Send Email
              </button>
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0F2F2E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0F2F2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0F2F2E] mb-2">Response Time</h3>
              <p className="text-gray-700 mb-4">
                We typically respond to all inquiries within 24-48 hours during business days.
              </p>
              <div className="text-sm text-gray-600">
                <p>Monday - Friday</p>
                <p>9:00 AM - 6:00 PM EST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-semibold text-[#0F2F2E] mb-6 text-center">Send Us a Message</h2>
          
          {/* Status Message */}
          {submitStatus.type && (
            <div className={`mb-6 p-4 rounded-lg ${
              submitStatus.type === 'success' 
                ? 'bg-green-50 border border-green-200 text-green-800' 
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}>
              {submitStatus.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-[#0F2F2E] mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2F2E]/20 focus:border-[#0F2F2E] transition-colors"
                  placeholder="Your first name"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-[#0F2F2E] mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2F2E]/20 focus:border-[#0F2F2E] transition-colors"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#0F2F2E] mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2F2E]/20 focus:border-[#0F2F2E] transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-[#0F2F2E] mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2F2E]/20 focus:border-[#0F2F2E] transition-colors"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="newsletter">Newsletter Subscription</option>
                <option value="support">Technical Support</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="press">Press & Media</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#0F2F2E] mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F2F2E]/20 focus:border-[#0F2F2E] transition-colors resize-none"
                placeholder="Please describe your inquiry in detail..."
              ></textarea>
            </div>

            {/* Honeypot field - hidden from users but visible to bots */}
            <div className="absolute left-[-9999px] opacity-0 pointer-events-none">
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                checked={formData.privacy}
                onChange={handleInputChange}
                className="mt-1 h-4 w-4 text-[#0F2F2E] focus:ring-[#0F2F2E]/20 border-gray-300 rounded"
              />
              <label htmlFor="privacy" className="text-sm text-gray-700">
                I agree to the{' '}
                <a href="/privacy-policy" className="text-[#0F2F2E] hover:underline">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="/terms-of-service" className="text-[#0F2F2E] hover:underline">
                  Terms of Service
                </a>
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center px-8 py-3 rounded-lg font-medium transition-colors ${
                  isSubmitting
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-[#0F2F2E] text-white hover:bg-[#0F2F2E]/90'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-semibold text-[#0F2F2E] mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-[#0F2F2E] mb-2">When will Sagheerah launch?</h3>
              <p className="text-gray-700">
                We&apos;re planning to launch our luxury modest fashion collection in Q4 2025. Subscribe to our newsletter 
                to be the first to know when we go live!
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-[#0F2F2E] mb-2">How can I stay updated?</h3>
              <p className="text-gray-700">
                The best way to stay updated is to subscribe to our newsletter. You&apos;ll receive exclusive updates, 
                behind-the-scenes content, and early access to our collection.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-[#0F2F2E] mb-2">What makes Sagheerah unique?</h3>
              <p className="text-gray-700">
                Sagheerah combines luxury design with modest fashion principles, creating elegant pieces that celebrate 
                dignity and sophistication. Our designs are crafted with attention to detail and quality materials.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-[#0F2F2E] mb-2">Do you ship internationally?</h3>
              <p className="text-gray-700">
                Yes! We plan to offer worldwide shipping to bring our luxury modest fashion to customers around the globe. 
                More details will be available closer to our launch.
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
} 
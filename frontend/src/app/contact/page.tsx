import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Sagheerah',
  description: 'Get in touch with the Sagheerah team. We\'re here to answer your questions and provide support.',
  keywords: 'contact, support, help, Sagheerah, customer service',
  openGraph: {
    title: 'Contact Us - Sagheerah',
    description: 'Get in touch with the Sagheerah team for questions and support.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Sagheerah',
    description: 'Get in touch with the Sagheerah team for questions and support.',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-primary mb-4">Contact Us</h1>
                      <p className="text-text-secondary text-lg">
              We&apos;d love to hear from you. Get in touch with our team for any questions or support.
            </p>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Email Contact */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Email Us</h3>
              <p className="text-text-secondary mb-4">
                Send us an email and we&apos;ll get back to you as soon as possible.
              </p>
              <a 
                href="mailto:hello@sagheerah.com"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                hello@sagheerah.com
              </a>
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Response Time</h3>
              <p className="text-text-secondary mb-4">
                We typically respond to all inquiries within 24-48 hours during business days.
              </p>
              <div className="text-sm text-text-muted">
                <p>Monday - Friday</p>
                <p>9:00 AM - 6:00 PM EST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Send Us a Message</h2>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Your first name"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
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
              <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                placeholder="Please describe your inquiry in detail..."
              ></textarea>
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                required
                className="mt-1 h-4 w-4 text-primary focus:ring-primary/20 border-gray-300 rounded"
              />
              <label htmlFor="privacy" className="text-sm text-text-secondary">
                I agree to the{' '}
                <a href="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="/terms-of-service" className="text-primary hover:underline">
                  Terms of Service
                </a>
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-primary mb-2">When will Sagheerah launch?</h3>
              <p className="text-text-secondary">
                We&apos;re planning to launch our luxury modest fashion collection in Q4 2025. Subscribe to our newsletter 
                to be the first to know when we go live!
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-primary mb-2">How can I stay updated?</h3>
              <p className="text-text-secondary">
                The best way to stay updated is to subscribe to our newsletter. You&apos;ll receive exclusive updates, 
                behind-the-scenes content, and early access to our collection.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-primary mb-2">What makes Sagheerah unique?</h3>
              <p className="text-text-secondary">
                Sagheerah combines luxury design with modest fashion principles, creating elegant pieces that celebrate 
                dignity and sophistication. Our designs are crafted with attention to detail and quality materials.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-primary mb-2">Do you ship internationally?</h3>
              <p className="text-text-secondary">
                Yes! We plan to offer worldwide shipping to bring our luxury modest fashion to customers around the globe. 
                More details will be available closer to our launch.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <a 
            href="/coming-soon" 
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
} 
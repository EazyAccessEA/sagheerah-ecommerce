import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Sagheerah',
  description: 'Read Sagheerah\'s terms of service to understand your rights and obligations when using our website and services.',
  keywords: 'terms of service, user agreement, legal terms, Sagheerah',
  openGraph: {
    title: 'Terms of Service - Sagheerah',
    description: 'Read Sagheerah\'s terms of service to understand your rights and obligations.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service - Sagheerah',
    description: 'Read Sagheerah\'s terms of service to understand your rights and obligations.',
  },
};

export default function TermsOfServicePage() {
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
              <span className="text-gray-400">Terms of Service</span>
              <a href="/contact" className="text-gray-600 hover:text-[#0F2F2E] transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-[#0F2F2E] mb-4">Terms of Service</h1>
          <p className="text-gray-700 text-lg">Last updated: August 6, 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Agreement to Terms</h2>
            <p className="text-text-secondary mb-4">
              By accessing and using the Sagheerah website and services, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Description of Service</h2>
            <p className="text-text-secondary mb-4">
              Sagheerah is a luxury modest fashion brand that provides information about our upcoming collection and 
              allows users to subscribe to our newsletter for updates and exclusive offers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">User Accounts</h2>
            <p className="text-text-secondary mb-4">
              When you subscribe to our newsletter, you may be required to provide certain information. You are responsible 
              for maintaining the confidentiality of your account information and for all activities that occur under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Acceptable Use</h2>
            <p className="text-text-secondary mb-4">
              You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc list-inside text-text-secondary ml-4 space-y-2">
              <li>Use the service in any way that violates any applicable federal, state, local, or international law</li>
              <li>Transmit any material that is defamatory, offensive, or otherwise objectionable</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Interfere with or disrupt the service or servers</li>
              <li>Use automated systems to access the service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Intellectual Property</h2>
            <p className="text-text-secondary mb-4">
              The content on this website, including but not limited to text, graphics, images, logos, and software, 
              is the property of Sagheerah and is protected by copyright and other intellectual property laws. 
              You may not reproduce, distribute, or create derivative works without our express written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Privacy Policy</h2>
            <p className="text-text-secondary mb-4">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, 
              to understand our practices regarding the collection and use of your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Newsletter Subscription</h2>
            <p className="text-text-secondary mb-4">
              By subscribing to our newsletter, you agree to receive email communications from us. You can unsubscribe 
              at any time by following the unsubscribe link in our emails or contacting us directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Disclaimers</h2>
            <p className="text-text-secondary mb-4">
              The information on this website is provided &quot;as is&quot; without warranties of any kind. We do not warrant that:
            </p>
            <ul className="list-disc list-inside text-text-secondary ml-4 space-y-2">
              <li>The service will be uninterrupted or error-free</li>
              <li>Defects will be corrected</li>
              <li>The service or server is free of viruses or other harmful components</li>
              <li>The information is accurate, complete, or current</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Limitation of Liability</h2>
            <p className="text-text-secondary mb-4">
              In no event shall Sagheerah be liable for any indirect, incidental, special, consequential, or punitive damages, 
              including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from 
              your use of the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Indemnification</h2>
            <p className="text-text-secondary mb-4">
              You agree to defend, indemnify, and hold harmless Sagheerah and its affiliates from and against any claims, 
              damages, obligations, losses, liabilities, costs, or debt arising from your use of the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Governing Law</h2>
            <p className="text-text-secondary mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which 
              Sagheerah operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Changes to Terms</h2>
            <p className="text-text-secondary mb-4">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes 
              by posting the new Terms on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary mb-4">Contact Information</h2>
            <p className="text-text-secondary mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> Contact us through our contact form<br />
                <strong>Subject:</strong> Terms of Service Inquiry
              </p>
            </div>
          </section>
        </div>


      </div>
    </div>
  );
} 
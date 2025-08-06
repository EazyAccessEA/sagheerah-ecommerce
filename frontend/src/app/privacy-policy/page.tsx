'use client';

import BrandBackground from '@/components/ui/BrandBackground';

export default function PrivacyPolicyPage() {
  return (
    <BrandBackground className="bg-gray-50">
      {/* Minimal Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/coming-soon" className="text-[#0F2F2E] font-medium hover:underline">
              ← Back to Home
            </a>
            <div className="flex space-x-6 text-sm">
              <span className="text-gray-400">Privacy Policy</span>
              <a href="/terms-of-service" className="text-gray-600 hover:text-[#0F2F2E] transition-colors">
                Terms of Service
              </a>
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
          <h1 className="text-4xl font-light text-[#0F2F2E] mb-4">Privacy Policy</h1>
          <p className="text-gray-700 text-lg">Last updated: August 6, 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F2F2E] mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              At Sagheerah, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or interact with our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F2F2E] mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-[#0F2F2E] mb-2">Personal Information</h3>
                <p className="text-gray-700">
                  We may collect personal information that you voluntarily provide to us, such as:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 ml-4">
                  <li>Email address (for newsletter subscriptions)</li>
                  <li>Name and contact information</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-[#0F2F2E] mb-2">Automatically Collected Information</h3>
                <p className="text-gray-700">
                  When you visit our website, we may automatically collect certain information, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 ml-4">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent</li>
                  <li>Device information</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F2F2E] mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Send you updates about our launch and exclusive offers</li>
              <li>Improve our website and user experience</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F2F2E] mb-4">Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>With your explicit consent</li>
              <li>To comply with legal requirements</li>
              <li>To protect our rights and safety</li>
              <li>With trusted service providers who assist in our operations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F2F2E] mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
              internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F2F2E] mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with supervisory authorities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F2F2E] mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience and analyze website usage. 
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F2F2E] mb-4">Third-Party Links</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices 
              or content of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F2F2E] mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal 
              information from children under 13. If you believe we have collected such information, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F2F2E] mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
              new policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0F2F2E] mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong> Contact us through our contact form<br />
                <strong>Subject:</strong> Privacy Policy Inquiry
              </p>
            </div>
          </section>
        </div>


      </div>
    </BrandBackground>
  );
} 
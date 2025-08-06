import { Metadata } from 'next';
import BrandBackground from '@/components/ui/BrandBackground';
import ContactForm from '@/components/ui/ContactForm';

export const metadata: Metadata = {
  title: "Contact Us - Sagheerah",
  description: "Get in touch with Sagheerah. We're here to answer your questions about our luxury modest fashion collection and help you with any inquiries.",
  keywords: "contact Sagheerah, luxury modest fashion contact, customer service, inquiry",
  openGraph: {
    title: "Contact Us - Sagheerah",
    description: "Get in touch with Sagheerah. We're here to answer your questions about our luxury modest fashion collection.",
    type: "website",
    url: "https://sagheerah.com/contact",
    siteName: "Sagheerah",
  },
  twitter: {
    card: "summary",
    title: "Contact Us - Sagheerah",
    description: "Get in touch with Sagheerah. We're here to answer your questions about our luxury modest fashion collection.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
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

        {/* Contact Form Component */}
        <ContactForm />
      </div>
    </BrandBackground>
  );
} 
import { Metadata } from 'next';
import Logo from '@/components/ui/Logo';
import EmailForm from '@/components/ui/EmailForm';
import AnimatedSection from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Sagheerah | A New Standard in Modest Luxury Fashion',
  description: 'Rooted in reverence, refined by design. Sagheerah is modest fashion without compromise — elegant, minimal, and spiritually anchored. Join the waitlist.',
  keywords: ['modest fashion', 'luxury fashion', 'hijab', 'jilbab', 'khimar', 'niqab', 'modest clothing', 'islamic fashion', 'elegant fashion', 'ḥayāʾ'],
  authors: [{ name: 'Sagheerah' }],
  creator: 'Sagheerah',
  publisher: 'Sagheerah',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sagheerah.com'),
  alternates: {
    canonical: '/coming-soon',
  },
  openGraph: {
    type: 'website',
    url: 'https://sagheerah.com/coming-soon',
    title: 'Sagheerah | Dignity is Her Design',
    description: 'A new standard in modest luxury. We craft timeless jilbābs, khimārs, and niqābs for the woman who walks with reverence and power. Coming Soon.',
    siteName: 'Sagheerah',
    images: [
      {
        url: '/Sagheerah-Logo-—-Rich-Emerald.svg',
        width: 1200,
        height: 630,
        alt: 'Sagheerah - Luxury Modest Fashion',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sagheerah | Dignity is Her Design',
    description: 'A new standard in modest luxury. We craft timeless jilbābs, khimārs, and niqābs for the woman who walks with reverence and power. Coming Soon.',
    images: ['/Sagheerah-Logo-—-Rich-Emerald.svg'],
    creator: '@sagheerah',
    site: '@sagheerah',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

// JSON-LD Schema Markup for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sagheerah',
  url: 'https://sagheerah.com',
  logo: 'https://sagheerah.com/Sagheerah-Logo-—-Rich-Emerald.svg',
  description: 'Sagheerah is a luxury modest fashion house creating timeless jilbābs, khimābs, and niqābs. We craft refined garments that honour the legacy of ḥayāʾ (modesty) for the modern woman who seeks balance between faith and beauty.',
  foundingDate: '2024',
  industry: 'Fashion',
  brand: 'Sagheerah',
  slogan: 'Dignity is Her Design',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@sagheerah.com',
  },
  sameAs: [
    'https://instagram.com/sagheerah',
    'https://pinterest.com/sagheerah',
    'https://facebook.com/sagheerah',
  ],
  offers: {
    '@type': 'Offer',
    availability: 'PreOrder',
    priceCurrency: 'USD',
    description: 'Luxury modest fashion collection - Coming Soon',
  },
};

export default function ComingSoonPage() {
  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-16">
              <Logo variant="rich-emerald" height={220} priority />
            </div>
            
            {/* Coming Soon Message */}
            <div className="mb-12">
              <h1 className="font-heading text-5xl md:text-7xl font-bold text-black mb-8">
                Coming Soon
              </h1>
              
              <div className="w-24 h-1 bg-gray-400 mx-auto mb-8"></div>
              
              <p className="font-body text-xl md:text-2xl text-gray-800 mb-6 max-w-3xl mx-auto leading-relaxed">
                Discover sophisticated modest fashion that celebrates elegance and dignity.
              </p>
              
              <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
                Rooted in reverence, refined by design.
              </p>
            </div>
            
            {/* Email Collection Form */}
            <AnimatedSection delay={300} direction="up">
              <EmailForm />
            </AnimatedSection>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={200} direction="up">
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-black mb-6">
                  About Sagheerah
                </h2>
                <div className="w-16 h-1 bg-gray-400 mx-auto mb-8"></div>
                <p className="font-body text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed">
                  A luxury modest fashion house for women who walk with dignity and intention. 
                  We believe that true modesty, or ḥayāʾ, is not a restriction, but a profound form of strength.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Social Proof Section */}
        <section className="py-20 px-4 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Community
            </h2>
            <div className="w-16 h-1 bg-gray-400 mx-auto mb-8"></div>
            <p className="font-body text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Be among the first to experience our timeless collection.
            </p>
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-md mx-auto border-2 border-gray-300">
              <p className="font-heading text-2xl font-bold text-black mb-2">
                Early Access
              </p>
              <p className="font-body text-gray-600">
                Be the first to know when we launch
              </p>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-12 px-4 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Logo variant="cosmic-latte" height={80} />
            </div>
            <p className="font-body text-gray-300 mb-4">
              © 2025 Sagheerah. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
} 
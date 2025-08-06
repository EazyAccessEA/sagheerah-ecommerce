'use client';

import Logo from '@/components/ui/Logo';
import EmailForm from '@/components/ui/EmailForm';
import AnimatedSection from '@/components/ui/AnimatedSection';

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
        {/* Hero Section - Above the Fold */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Logo */}
            <AnimatedSection delay={200} direction="down">
              <div className="mb-16">
                <Logo variant="rich-emerald" height={180} priority />
              </div>
            </AnimatedSection>
            
            {/* Coming Soon Badge */}
            <AnimatedSection delay={300} direction="up">
              <div className="inline-flex items-center px-4 py-2 bg-[#0F2F2E] text-white text-sm font-medium rounded-full mb-8">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                Coming Soon
              </div>
            </AnimatedSection>
            
            {/* Headline */}
            <AnimatedSection delay={400} direction="up">
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-black mb-8 tracking-wide">
                Your Invitation to Timeless Elegance
              </h1>
            </AnimatedSection>
            
            {/* Subheading */}
            <AnimatedSection delay={600} direction="up">
              <p className="font-body text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                We&apos;re crafting something extraordinary. Join our exclusive waitlist to be among the first to experience our debut collection of sophisticated modest fashion — crafted for women who value elegance, dignity, and refinement.
              </p>
            </AnimatedSection>
            
            {/* Tagline */}
            <AnimatedSection delay={800} direction="up">
              <p className="font-heading text-xl md:text-2xl text-black mb-12 tracking-wider">
                Rooted in reverence, refined by design.
              </p>
            </AnimatedSection>
            
            {/* Email Collection Form */}
            <AnimatedSection delay={1000} direction="up">
              <div className="max-w-md mx-auto">
                <EmailForm />
                <p className="text-xs text-gray-500 mt-3">
                  Private list. No spam — ever.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* About Sagheerah Section */}
        <section className="py-24 px-4 bg-[#FAF9F6]">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={200} direction="up">
              <div className="text-center">
                {/* Decorative Line */}
                <div className="w-24 h-px bg-gray-300 mx-auto mb-12"></div>
                
                <p className="font-body text-lg md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
                  A luxury modest fashion house for women who walk with dignity and intention. 
                  We believe that true modesty, or ḥayāʾ, is not a restriction, but a profound form of strength.
                </p>
                
                {/* Decorative Line */}
                <div className="w-24 h-px bg-gray-300 mx-auto mt-12"></div>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* The Sagheerah Story Section */}
        <section className="py-24 px-4 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection delay={200} direction="up">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 tracking-wide">
                The Sagheerah Story
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={400} direction="up">
              <p className="font-body text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Where tradition meets contemporary elegance. Every piece is crafted with intention, 
                honoring the legacy of ḥayāʾ while embracing modern sophistication.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={600} direction="up">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl text-white">Timeless Design</h3>
                  <p className="text-gray-400 text-sm">Elegant pieces that transcend trends</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl text-white">Crafted with Love</h3>
                  <p className="text-gray-400 text-sm">Every detail thoughtfully considered</p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl text-white">Sacred Modesty</h3>
                  <p className="text-gray-400 text-sm">Honoring ḥayāʾ with dignity</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-16 px-4 bg-[#0B1C1B] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection delay={200} direction="up">
              <div className="mb-8">
                <Logo variant="cosmic-latte" height={80} />
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={400} direction="up">
              <p className="font-heading text-lg text-gray-300 mb-6 tracking-wide">
                Sagheerah — Timeless Modesty, Refined.
              </p>
              <p className="text-sm text-gray-400 mb-6">
                Our debut collection is launching soon. Join the waitlist for early access.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={600} direction="up">
              <div className="flex justify-center space-x-8 text-sm">
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
            </AnimatedSection>
          </div>
        </footer>
      </div>
    </>
  );
} 
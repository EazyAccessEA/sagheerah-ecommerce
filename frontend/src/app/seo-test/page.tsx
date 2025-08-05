import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Test - Sagheerah',
  description: 'Testing SEO metadata generation',
};

export default function SeoTestPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading text-3xl font-bold text-primary mb-6">
          SEO Metadata Test
        </h1>
        
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="font-heading text-xl font-semibold text-primary mb-3">
              Coming Soon Page SEO
            </h2>
            <p className="font-body text-text-secondary">
              Visit <a href="/coming-soon" className="text-camel underline">/coming-soon</a> to see the enhanced SEO metadata in action.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="font-heading text-xl font-semibold text-primary mb-3">
              SEO Features Implemented
            </h2>
            <ul className="font-body text-text-secondary space-y-2">
              <li>✅ Enhanced meta title and description</li>
              <li>✅ Open Graph tags for social sharing</li>
              <li>✅ Twitter Card metadata</li>
              <li>✅ JSON-LD schema markup</li>
              <li>✅ Canonical URL</li>
              <li>✅ Robots meta tags</li>
              <li>✅ Keywords meta tag</li>
              <li>✅ Author and publisher information</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 
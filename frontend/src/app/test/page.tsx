import { Logo } from '@/components/ui/Logo';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold text-primary mb-4">
            Sagheerah Design System Test
          </h1>
          <p className="font-body text-lg text-text-secondary">
            Testing brand colors, typography, and components
          </p>
        </div>

        {/* Logo Test */}
        <section className="space-y-6">
          <h2 className="font-heading text-2xl font-semibold text-primary">
            Logo Variants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Logo variant="rich-emerald" height={120} />
              <p className="font-body text-sm text-text-muted mt-2">Rich Emerald</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Logo variant="camel" height={120} />
              <p className="font-body text-sm text-text-muted mt-2">Camel</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Logo variant="cosmic-latte" height={120} />
              <p className="font-body text-sm text-text-muted mt-2">Cosmic Latte</p>
            </div>
          </div>
        </section>

        {/* Color Palette Test */}
        <section className="space-y-6">
          <h2 className="font-heading text-2xl font-semibold text-primary">
            Brand Colors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-20 h-20 bg-rich-emerald rounded-lg mx-auto mb-2"></div>
              <p className="font-body text-sm font-medium text-primary">Rich Emerald</p>
              <p className="font-body text-xs text-text-muted">#073331</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-camel rounded-lg mx-auto mb-2"></div>
              <p className="font-body text-sm font-medium text-primary">Camel</p>
              <p className="font-body text-xs text-text-muted">#AC8C6A</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-cosmic-latte rounded-lg mx-auto mb-2 border border-gray-200"></div>
              <p className="font-body text-sm font-medium text-primary">Cosmic Latte</p>
              <p className="font-body text-xs text-text-muted">#FFF7E6</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gainsboro rounded-lg mx-auto mb-2"></div>
              <p className="font-body text-sm font-medium text-primary">Gainsboro</p>
              <p className="font-body text-xs text-text-muted">#D6D8D7</p>
            </div>
          </div>
        </section>

        {/* Typography Test */}
        <section className="space-y-6">
          <h2 className="font-heading text-2xl font-semibold text-primary">
            Typography
          </h2>
          <div className="space-y-4">
            <div>
              <h1 className="font-heading text-4xl font-bold text-primary">
                Heading 1 - Caslon Font
              </h1>
              <p className="font-body text-sm text-text-muted">Font: Caslon, serif</p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold text-primary">
                Heading 2 - Caslon Font
              </h2>
              <p className="font-body text-sm text-text-muted">Font: Caslon, serif</p>
            </div>
            <div>
              <p className="font-body text-lg text-text-primary">
                Body Text - Century Gothic Font
              </p>
              <p className="font-body text-sm text-text-muted">Font: Century Gothic, sans-serif</p>
            </div>
          </div>
        </section>

        {/* Background Test */}
        <section className="space-y-6">
          <h2 className="font-heading text-2xl font-semibold text-primary">
            Background Test
          </h2>
          <div className="p-8 bg-background border border-gray-200 rounded-lg">
            <p className="font-body text-lg text-text-primary">
              This section uses the plain off-white background (#FAFAFA)
            </p>
            <p className="font-body text-sm text-text-muted mt-2">
              The background should be a clean, minimal off-white color
            </p>
          </div>
        </section>

      </div>
    </div>
  );
} 
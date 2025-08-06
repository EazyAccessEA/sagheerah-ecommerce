'use client';

import Image from 'next/image';

interface BrandBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function BrandBackground({ children, className = '' }: BrandBackgroundProps) {
  return (
    <div className={`relative min-h-screen ${className}`}>
      {/* Brand Motif Background - PuredgeOS™ Compliant */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary Brand Motif - Strategic Placement */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.08] transform rotate-12">
          <Image
            src="/brand-motif.png"
            alt=""
            width={384}
            height={384}
            className="w-full h-full object-contain filter brightness-0 saturate-100 invert-[0.2] sepia-[0.3] saturate-[2] hue-rotate-[120deg] brightness-[0.8]"
            aria-hidden="true"
          />
        </div>
        
        {/* Secondary Brand Motif - Complementary Position */}
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-[0.06] transform -rotate-6">
          <Image
            src="/brand-motif.png"
            alt=""
            width={256}
            height={256}
            className="w-full h-full object-contain filter brightness-0 saturate-100 invert-[0.2] sepia-[0.3] saturate-[2] hue-rotate-[120deg] brightness-[0.8]"
            aria-hidden="true"
          />
        </div>
        
        {/* Tertiary Brand Motif - Center Accent */}
        <div className="absolute top-1/2 left-1/2 w-48 h-48 opacity-[0.04] transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/brand-motif.png"
            alt=""
            width={192}
            height={192}
            className="w-full h-full object-contain filter brightness-0 saturate-100 invert-[0.2] sepia-[0.3] saturate-[2] hue-rotate-[120deg] brightness-[0.8]"
            aria-hidden="true"
          />
        </div>
      </div>
      
      {/* Content Layer - Maintains Perfect Readability */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 
import Image from 'next/image';

interface LogoProps {
  variant?: 'rich-emerald' | 'camel' | 'cosmic-latte' | 'gainsboro' | 'raisin-black';
  height?: number;
  width?: number;
  className?: string;
  priority?: boolean;
}

const logoVariants = {
  'rich-emerald': '/Sagheerah-Logo-—-Rich-Emerald.svg',
  'camel': '/Sagheerah-Logo-—-Camel.svg',
  'cosmic-latte': '/Sagheerah-Logo-—-Cosmic-Latte.svg',
  'gainsboro': '/Sagheerah-Logo-—-Gainsboro-06.svg',
  'raisin-black': '/Sagheerah-Logo-—-Raisin-Black.svg',
};

export function Logo({ 
  variant = 'rich-emerald', 
  height = 200, 
  width, 
  className = '',
  priority = false 
}: LogoProps) {
  const src = logoVariants[variant];
  const aspectRatio = 2.5; // Approximate aspect ratio of the logo
  const calculatedWidth = width || height * aspectRatio;

  return (
    <div className={`flex justify-center ${className}`}>
      <Image
        src={src}
        alt="Sagheerah - Elegant Modest Fashion"
        width={calculatedWidth}
        height={height}
        priority={priority}
        className="object-contain"
      />
    </div>
  );
}

export default Logo; 
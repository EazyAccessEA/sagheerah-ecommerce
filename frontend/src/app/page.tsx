import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sagheerah - Luxury Modest Fashion House',
  description: 'Timeless jilbābs, khimārs, and niqābs crafted with reverence and intention. Dignity is Her Design.',
  keywords: 'modest fashion, luxury, jilbab, khimar, niqab, hijab, islamic fashion, sagheerah',
  openGraph: {
    title: 'Sagheerah - Luxury Modest Fashion House',
    description: 'Timeless jilbābs, khimārs, and niqābs crafted with reverence and intention. Dignity is Her Design.',
    type: 'website',
    url: 'https://sagheerah.com',
    siteName: 'Sagheerah',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sagheerah - Luxury Modest Fashion House',
    description: 'Timeless jilbābs, khimārs, and niqābs crafted with reverence and intention. Dignity is Her Design.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  // Redirect to coming soon page with ClarityOS™ compliance
  // Clear purpose: Direct users to the main brand experience
  // Immediate action: No confusion about where to go
  redirect('/coming-soon');
}

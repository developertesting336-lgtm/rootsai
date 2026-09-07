import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Header from '@/lib/components/Header';
import Footer from '@/lib/components/Footer';

export const metadata: Metadata = {
  title: 'ROOTS-AI | Educational Biological Assessment Platform',
  description:
    'ROOTS-AI provides an educational biological assessment and reporting service based on self-reported answers.',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: [
    'biological assessment',
    'wellness',
    'educational',
    'health',
    'ROOTS-AI',
  ],
  authors: [
    {
      name: 'ROOTS AI HEALTH SYSTEMS, Inc.',
      url: 'https://roots-ai.com',
    },
  ],
  creator: 'ROOTS AI HEALTH SYSTEMS, Inc.',
  publisher: 'ROOTS AI HEALTH SYSTEMS, Inc.',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-roots-white">
      {/* Header with Navigation */}
      <Header />

      {/* Main Content */}
      <main id="main" className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

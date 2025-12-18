import type { Metadata } from 'next';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });

export const metadata: Metadata = {
  title: 'Rao Filmwala - Glass Film & Etching Works',
  description: 'Premium glass film installation, etching, and signage services in Bilaspur, Chhattisgarh.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${jakarta.variable} font-sans flex flex-col min-h-screen bg-slate-50 relative`}>
        <Navbar />
        <main className="flex-grow z-10 relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

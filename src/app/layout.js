import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GrainOverlay from '@/components/GrainOverlay';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'Estah Society — Run for a Child\'s Future',
  description:
    'Estah Society empowers communities through education, entrepreneurship, and sustainability under the WE HEAL THE EARTH framework.',
  keywords: ['Estah Society', 'education', 'sustainability', 'WE HEAL THE EARTH', 'non-profit', 'India'],
  openGraph: {
    title: 'Estah Society — Run for a Child\'s Future',
    description:
      'Empowering communities through education, entrepreneurship, and sustainability.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body style={{ fontFamily: 'var(--font-body)' }}>
        <GrainOverlay />
        <Navbar />
        <main className="page-wrapper">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

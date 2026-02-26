import { Syne, Nunito } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GrainOverlay from '@/components/GrainOverlay';
import { ToastProvider } from '@/components/MobileToast';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'Events MVP — Run for a Child\'s Future',
  description:
    'Events MVP empowers communities through education, entrepreneurship, and sustainability under the WE HEAL THE EARTH framework.',
  keywords: ['Events MVP', 'education', 'sustainability', 'WE HEAL THE EARTH', 'non-profit', 'India'],
  openGraph: {
    title: 'Events MVP — Run for a Child\'s Future',
    description:
      'Empowering communities through education, entrepreneurship, and sustainability.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${nunito.variable}`}>
      <body style={{ fontFamily: 'var(--font-body)' }}>
        <ToastProvider>
          <GrainOverlay />
          <Navbar />
          <main className="page-wrapper">
            {children}
          </main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}

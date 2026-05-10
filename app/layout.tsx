import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  style: ['normal', 'italic'], 
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HOMZindia - Premium B2B Furniture',
  description: 'Premium B2B Furniture Solutions for Office, Hospitality, Restaurant, and Education.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased text-[#1A1A1A] bg-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

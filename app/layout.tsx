import type { Metadata } from 'next';
import { Inter, Literata } from 'next/font/google';

import { cn } from '@/lib/utils';
import { Navbar } from '@/components/navbar';

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
export const literata = Literata({ subsets: ['latin'], variable: '--font-literata' });

import './globals.css';

export const metadata: Metadata = {
  title: 'Nathan Marcellous Web Developer',
  description: 'Nathan Marcellous Web Developer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body className={cn('min-h-screen bg-background fonts-inter antialiased', inter.variable)}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

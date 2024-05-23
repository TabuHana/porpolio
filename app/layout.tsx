import type { Metadata } from 'next';

import { cn } from '@/lib/utils';
import { inter } from '@/lib/fonts';
import { Navbar } from '@/components/navbar';

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

import type { Metadata } from 'next';

import { cn } from '@/lib/utils';
import { inter } from '@/lib/fonts';
import { Navbar } from '@/components/navbar';

import './globals.css';

export const metadata: Metadata = {
  title: 'Nathan Marcellous Web Dev',
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
        <main className='max-w-screen-md mx-auto px-6 md:px-0'>

        {children}
        </main>
      </body>
    </html>
  );
}

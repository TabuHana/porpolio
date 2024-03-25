import type { Metadata } from 'next';
import Link from 'next/link';
import { Literata } from 'next/font/google';

import { cn } from '@/lib/utils';

const literata = Literata({ subsets: ['latin'] });

import './globals.css';

import { Navbar } from '@/components/navbar';
import { SpaceBlock } from '@/components/space-block';
import { Separator } from '@/components/ui/separator';

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
        <html lang='en'>
            <body className={cn('min-h-screen overflow-hidden flex flex-col', literata.className)}>
                <SpaceBlock direction='top' />
                <div className='flex flex-1'>
                    <SpaceBlock direction='left' />
                    <main className=' flex flex-col md:flex-row flex-1'>
                        <div className='md:flex-1 p-5'>
                            <div className='flex md:h-[200px] mb-2 md:mb-5'>
                                <div className='flex flex-col justify-center mx-auto'>
                                    <div className='flex md:flex-col gap-x-3 justify-center'>
                                        <h1 className='text-5xl md:text-6xl font-semibold'>Nathan</h1>
                                        <h1 className='text-5xl md:text-6xl font-semibold'> Marcellous</h1>
                                    </div>
                                    <p className='text-md italic text-right'>Web Developer</p>
                                </div>
                                <div className='hidden lg:block flex-1'> img goes here</div>
                            </div>
                            <Separator className='bg-black' />
                            {/* navbar */}
                            <Navbar />
                        </div>
                        {children}
                    </main>
                    <SpaceBlock direction='right' />
                </div>
                <SpaceBlock direction='bottom' />
            </body>
        </html>
    );
}

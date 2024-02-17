import type { Metadata } from 'next';

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
        <html lang='en'>
            <body className='bg-[#CFCDBE]'>{children}</body>
        </html>
    );
}

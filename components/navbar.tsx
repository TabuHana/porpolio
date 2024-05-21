'use client';

import { Logo } from '@/components/logo';

import { Separator } from '@/components/ui/separator';

import { AlignJustify } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const navlinks = [
  {
    href: '/',
    text: 'About me',
  },
  {
    href: '/',
    text: 'Education',
  },
  {
    href: '/',
    text: 'Experience',
  },
  {
    href: '/',
    text: 'Faq',
  },
  {
    href: '/',
    text: 'Projects',
  },
  {
    href: '/',
    text: 'Contact',
  },
];

export const Navbar = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return isDesktop ? (
    <div>
      <DesktopNav />
    </div>
  ) : (
    <div>
      <MobileNav />
    </div>
  );
};

const DesktopNav = () => {
  return (
    <>
      <nav className='max-w-screen-md mx-auto py-6 flex justify-between items-center'>
        <Logo />
        <div className='flex items-center gap-12 text-xs tracking-widest'>
          {navlinks.map(link => (
            <Link
              key={link.text}
              href={link.href}
              className='hover:underline'
            >
              {link.text}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

const MobileNav = () => {
  return (
    <>
      <nav className='mx-auto p-6 flex justify-between items-center'>
        <Logo />
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent className='pt-16 flex flex-col gap-5 tracking-widest'>
            {navlinks.map(link => (
              <Link
                key={link.text}
                href={link.href}
                className='hover:underline'
              >
                {link.text}
              </Link>
            ))}
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
};

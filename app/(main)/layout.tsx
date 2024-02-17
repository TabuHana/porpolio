import Link from 'next/link';
import { Literata } from 'next/font/google';

import { cn } from '@/lib/utils';

const literata = Literata({ subsets: ['latin'] });

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={cn('h-full flex flex-col', literata.className)}>
            <div className='w-full h-10 border-b border-black' />
            <div className='flex flex-1'>
                <div className='w-10 border-r border-black' />
                <div className=' flex flex-col md:flex-row flex-1'>
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
                        <div className='bg-black h-[1px] mx-auto' />
                        {/* navbar */}
                        <ol className='grid grid-cols-2 gap-x-5 md:gap-y-2 mx-auto mt-5 list-decimal list-inside'>
                            <li>
                                <Link href='/'>About Me</Link>
                            </li>
                            <li>
                                <Link href='/bombers'>Bombers Notebook</Link>
                            </li>
                            <li>
                                <Link href='/rivening'>League Guide Site</Link>
                            </li>
                            <li>
                                <Link href='/devmo'>Devmo</Link>
                            </li>
                            <li>
                                <Link href='/store-cms'>Store-CMS</Link>
                            </li>
                            <li>
                                <Link href='/touchgrassgg'>TouchGrass.gg</Link>
                            </li>
                            <li>
                                <Link href='/fun-site'>Fun Site</Link>
                            </li>
                        </ol>
                    </div>
                    {children}
                </div>
                <div className='w-10 border-l border-black' />
            </div>
            <div className='w-full h-10 border-t border-black' />
        </div>
    );
};
export default MainLayout;

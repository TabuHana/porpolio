import { cn } from '@/lib/utils';
import { literata } from '@/lib/fonts';

export const Logo = () => {
  return <div className={cn('font-bold font-literata text-2xl tracking-tighter', literata.variable)}>Tabu<span className='text-pink-300'>Hana</span></div>;
};

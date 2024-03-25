import { cn } from '@/lib/utils';

type SpaceBlockProps = {
    className?: string;
    direction?: 'left' | 'right' | 'top' | 'bottom';
};

export const SpaceBlock = ({ className, direction = 'top' }: SpaceBlockProps) => {
    return (
        <div
            className={cn(
                'border-black',
                (!direction || direction === 'top') && 'w-full min-h-10 border-b border-black',
                direction === 'bottom' && 'w-full min-h-10 border-t border-black',
                direction === 'right' && 'hidden md:block w-10 border-l border-black',
                direction === 'left' && 'hidden md:block w-10 border-r border-black',
                className
            )}
        />
    );
};

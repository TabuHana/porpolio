import * as React from 'react';

import { cn } from '@/lib/utils';
import { Separator } from './separator';

const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <>
      <Separator className='bg-muted-foreground' />
      <div
        ref={ref}
        className={cn('my-8 grid grid-cols-3 gap-4', className)}
        {...props}
      />
    </>
    // <div
    //   ref={ref}
    //   className={cn('text-card-foreground', className)}
    //   {...props}
    // />
  )
);
Container.displayName = 'Container';

const ContainerFull = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('h-full w-full col-span-3', className)}
      {...props}
    />
  )
);
ContainerFull.displayName = 'ContainerFull';

const ContainerLeft = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('h-full w-full pr-4', className)}
      {...props}
    />
  )
);
ContainerLeft.displayName = 'ContainerLeft';

interface ContainerRightProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'sidebar';
}

const ContainerRight = React.forwardRef<HTMLDivElement, ContainerRightProps>(
  ({ className, variant, ...props }, ref) => (
    <div className='h-full w-full col-span-2 flex'>
      {variant === 'sidebar' ? (
        <>
          <Separator orientation='vertical' />
          <div
            ref={ref}
            className={cn('pl-4', className)}
            {...props}
          />
        </>
      ) : (
        <div
          ref={ref}
          className={cn(className)}
          {...props}
        />
      )}
    </div>
  )
);
ContainerRight.displayName = 'ContainerRight';

export { Container, ContainerFull, ContainerLeft, ContainerRight };

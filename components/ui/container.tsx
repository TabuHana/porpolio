import * as React from 'react';

import { cn } from '@/lib/utils';
import { Separator } from './separator';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'secondary';
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({ className, variant, ...props }, ref) => (
  <div>
    {variant === 'secondary' ? (
      <>
        <div
          ref={ref}
          className={cn('my-8 grid grid-cols-3 gap-4', className)}
          {...props}
        />
      </>
    ) : (
      <>
        <Separator className='bg-muted-foreground' />
        <div
          ref={ref}
          className={cn('my-8 grid grid-cols-3 gap-4', className)}
          {...props}
        />
      </>
    )}
  </div>
));
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

interface ContainerLeftProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'secondary';
}

const ContainerLeft = React.forwardRef<HTMLDivElement, ContainerLeftProps>(({ className, variant, ...props }, ref) => (
  <div className='h-full w-full'>
    {variant === 'secondary' ? (
      <>
        <div
          ref={ref}
          className={cn('h-full w-full', className)}
          {...props}
        />
      </>
    ) : (
      <>
        <div
          ref={ref}
          className={cn('h-full w-full pr-4', className)}
          {...props}
        />
      </>
    )}
  </div>
));
ContainerLeft.displayName = 'ContainerLeft';

interface ContainerRightProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'secondary';
}

const ContainerRight = React.forwardRef<HTMLDivElement, ContainerRightProps>(
  ({ className, variant, ...props }, ref) => (
    <div className='h-full w-full col-span-2 flex'>
      {variant === 'secondary' ? (
        <>
          <div
            ref={ref}
            className={cn(className)}
            {...props}
          />
        </>
      ) : (
        <>
          <Separator orientation='vertical' />
          <div
            ref={ref}
            className={cn('pl-4', className)}
            {...props}
          />
        </>
      )}
    </div>
  )
);
ContainerRight.displayName = 'ContainerRight';

export { Container, ContainerFull, ContainerLeft, ContainerRight };

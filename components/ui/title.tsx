import * as React from 'react';

import { cn } from '@/lib/utils';

const Title = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-xs tracking-widest text-muted-foreground', className)}
    {...props}
  />
));
Title.displayName = 'Title';

export { Title };

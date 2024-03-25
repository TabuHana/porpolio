import * as React from 'react';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export function ScrollAreaDemo() {
    return (
        <ScrollArea className='h-[50%] w-48 text-white'>
            <div className='p-4'>
                <h4 className='mb-4 text-sm font-medium leading-none'>Tags</h4>
                {tags.map((tag, index) => (
                    <div key={`${tag}-${index}`}>
                        <div className='text-sm'>{tag}</div>
                        <Separator className='my-2' />
                    </div>
                ))}
            </div>
        </ScrollArea>
    );
}

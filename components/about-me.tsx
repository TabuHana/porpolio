import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { Button } from './ui/button';
import { ToolSlider } from './tool-slider';

export const AboutMe = () => {
  return (
    <>
      <div
        id='#about-me'
        className='h-[430px]'
      >
        <div className='h-full flex gap-8'>
          {/* Left side */}
          <div className='bg-blue-200 relative h-full w-[300px]'>
            <Image
              src='/images/about-me-img.png'
              alt='Me'
              fill
            />
          </div>
          {/* Right side */}
          <div className='flex-1'>
            <div className='py-2'>
              <div className='text-xs text-muted-foreground'>About Me</div>
              <div className='space-y-4'>
                <div className='text-3xl font-semibold'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam adipisci repudiandae esse
                </div>
                <div className='text-sm text-muted-foreground'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla veritatis vero pariatur asperiores, non
                  atque saepe delectus sint error neque vitae, illum molestiae iste numquam a, debitis distinctio
                  eveniet. Quisquam!
                </div>
                <Button className='rounded-none font-semibold'>Download Resume</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-[80px] mb-4'>
        <ToolSlider />
      </div>
      <Separator />
    </>
  );
};

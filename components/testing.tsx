import { Separator } from './ui/separator';

export const Testing = () => {
  return (
    <>
      <Separator className='my-8' />
      <div className='flex h-[400px] bg-blue-200'>
        <div className='bg-red-200 w-[180px] py-8'>left side</div>
        <Separator
          orientation='vertical'
          className='mx-14'
        />
        <div className='bg-red-200 flex-1 py-8'>right side</div>
      </div>
      <Separator className='my-8' />
    </>
  );
};

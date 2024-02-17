import Image from 'next/image';

const MainPage = () => {
    return (
        <div className='flex-1 relative'>
            <Image
                src='/images/image-main.jpg'
                alt='image'
                fill
            />
        </div>
    );
};
export default MainPage;

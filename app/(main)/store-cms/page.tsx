import Image from "next/image";

const StoreCMSPage = () => {
    return (
        <div className='flex-1 relative'>
            <Image
                src='/images/image-store.jpg'
                alt='image'
                fill
            />
        </div>
    );
}
export default StoreCMSPage;
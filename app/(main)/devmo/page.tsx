import Image from "next/image";

const DevmoPage = () => {
    return (
        <div className='flex-1 relative'>
            <Image
                src='/images/image-devmo.jpg'
                alt='image'
                fill
            />
        </div>
    );
}
export default DevmoPage;
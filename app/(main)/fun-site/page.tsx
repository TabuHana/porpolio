import Image from "next/image";

const FunSitePage = () => {
    return (
        <div className='flex-1 relative'>
            <Image
                src='/images/image-black.jpg'
                alt='image'
                fill
            />
        </div>
    );
}
export default FunSitePage;
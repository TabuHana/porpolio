import Image from "next/image";

const TouchGrassGGPage = () => {
    return (
        <div className='flex-1 relative'>
            <Image
                src='/images/image-touch.jpg'
                alt='image'
                fill
            />
        </div>
    );
}
export default TouchGrassGGPage;
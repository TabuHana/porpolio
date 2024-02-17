import Image from "next/image";

const RiveningPage = () => {
    return (
        <div className='flex-1 relative'>
            <Image
                src='/images/image-rivening.jpg'
                alt='image'
                fill
            />
        </div>
    );
}
export default RiveningPage;
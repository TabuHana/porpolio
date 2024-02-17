import Image from "next/image";

const BombersNotebookPage = () => {
    return (
        <div className='flex-1 relative'>
            <Image
                src='/images/image-bombers.jpg'
                alt='image'
                fill
            />
        </div>
    );
}
export default BombersNotebookPage;
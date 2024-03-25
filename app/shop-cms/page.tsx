const StoreCMSPage = () => {
    return (
        <div
            className='flex-1 relative bg-no-repeat bg-cover bg-center'
            style={{ backgroundImage: `url(/images/image-store.jpg)` }}
        >
            <div className='absolute inset-0 bg-black/50' />
            <div className='relative h-full text-white p-5 flex flex-col gap-y-4 justify-center'>
                <p>Shop CMS is a small content management app for small businesses to quickly integrate into their websites .</p>
                <p>
                    Since writing my first line of code at the age of 15, I have had an unbound curiosity for
                    programming and the problem-solving it encapsulates. While pursuing a Bachelor's in Computer
                    Science, I began developing indie games. After years of dedication and over 100,000 lines of code, I
                    was able to release two completely-independent games for the Xbox 360 Indie Games platform. I also
                    collaborated with others in testing and developing their dream games.
                </p>
                <p>
                    My passion for programming finally led me to where I am now: a Frontend Web Developer. After years
                    of disciplined self-learning of HTML, CSS, JavaScript, and React, I am eager to help connect the
                    world through fully-responsive, impactful web applications.
                </p>
            </div>
        </div>
    );
};
export default StoreCMSPage;

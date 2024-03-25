import { ScrollAreaDemo } from '@/components/scroll-area-demo';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const MainPage = () => {
    return (
        <div
            className='flex-1 relative bg-no-repeat bg-cover bg-center'
            style={{ backgroundImage: `url(/images/image-main.jpg)` }}
        >
            <div className='absolute inset-0 bg-black/65' />
            <ScrollArea className='h-[670px] p-4 bg-green-500/50 text-white'>
                <div className='bg-red-500 space-y-4'>
                    <p>
                        Ive always been interested with programming since I was a kid. Since my first time turning on my
                        Nintendo 64, Ive always wanted to be come a software engineer or do something with computers.
                    </p>
                    <p>
                        Being a kid with limited internet access, I had no idea where to start. I didnt know what HTML
                        or CSS were, all I had known was Java and C++. I had no idea what a web developer was until I
                        got my first laptop in middle school. I started to learn ruby on rails to help a now defunct
                        website grow. I was so fasinated with all the things you could do with a website, but I had no
                        idea how to do it and was overall on my own to learn. I eventually gave up on learning ruby on
                        rails, but I still had a passion for programming so I moved on to learning C++ and Java. I still
                        had no idea what I was doing, but I was still learning and having fun.
                    </p>
                    <p>
                        Later I took classes in college on Java and C++ and I was able to learn a lot more about
                        programming, however I never felt like I could build anything I wanted to. Most of the time I
                        was building simple programs like a calculator or a simple game that would display on the
                        terminal. I had no idea how to build interfaces or anything about how to build a website. I was
                        beginning to lose my passion for programming, until I learned about javascript, HTML and CSS.
                        This sparked my passion for programming again and I was able to build my first website. I later
                        learned about tools such as React and Next.js which made building websites even easier.
                    </p>
                    <p>
                        My goal is to dive deeper into tech, become a full stack engineer who is able to build anything.
                        I want to connect with others and build my knownledge with others who are also passionate. Feel
                        free to contact me, I would love to work with you!
                    </p>
                </div>
            </ScrollArea>
        </div>
    );
};
export default MainPage;

import Link from "next/link";

export const Navbar = () => {
    return (
        <div>
            <ol className='grid grid-cols-2 gap-x-5 md:gap-y-2 mx-auto mt-5 list-decimal list-inside'>
                <li>
                    <Link href='/'>About Me</Link>
                </li>
                {/* <li>
                    <Link href='/bombers'>Bombers Notebook</Link>
                </li>
                <li>
                    <Link href='/rivening'>League Guide Site</Link>
                </li>
                <li>
                    <Link href='/devmo'>Devmo</Link>
                </li> */}
                <li>
                    <Link href='/shop-cms'>Shop-CMS</Link>
                </li>
                {/* <li>
                    <Link href='/touchgrassgg'>TouchGrass.gg</Link>
                </li>
                <li>
                    <Link href='/fun-site'>Fun Site</Link>
                </li> */}
            </ol>
        </div>
    );
};

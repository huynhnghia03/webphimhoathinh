import { ItemNavbar, Search, Menu } from '@/components/layout';
import Image from 'next/image';
import Link from 'next/link';


export default function Navbar() {
    return (
        <div className='text-white flex gap-6 h-24 px-2 items-center justify-between'>
            <div className='md:mb-0'>
                <Link href={'/'}>
                    <Image src={'/logo.png'} alt='logo' width={200} height={100}
                        priority
                        className='w-30 h-20 object-cover rounded-md' />
                </Link>
                {/* <h1 className='bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
                    background-animate'>HH3d</h1> */}
            </div>
            <div><ItemNavbar /></div>
            <div className='flex gap-4'>
                <Search />
                <Menu />
            </div>
        </div>
    )
}
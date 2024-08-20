
import Image from 'next/image';
import Link from 'next/link';
export default function Footer() {
    return (
        <footer className='p-4 text-white'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <div className='flex items-center mb-4 md:mb-0'>
                    <Image
                        src='/logo.png'
                        alt='logo'
                        width={200}
                        height={100}
                        className='w-30 h-20 object-cover rounded-md'
                    />
                </div>
                <div className='flex gap-4 items-center'>
                    <Link href='https://www.facebook.com/profile.php?id=100083601408184' passHref>

                        <Image
                            src='/facebook.png'
                            alt='facebook'
                            width={40}
                            height={40}
                            className='w-8 h-8 object-cover'
                        />

                    </Link>
                    <Link href='https://www.youtube.com/@DoraDoreemon' passHref>

                        <Image
                            src='/youtube.png'
                            alt='youtube'
                            width={40}
                            height={40}
                            className='w-8 h-8 object-cover'
                        />

                    </Link>
                    <Link href='https://www.tiktok.com/@review.dora' passHref>

                        <Image
                            src='/social-media.png'
                            alt='social-media'
                            width={40}
                            height={40}
                            className='w-8 h-8 object-cover'
                        />
                    </Link>
                    <Link href={'/'}>
                        <Image
                            src='/arrow-up.png'
                            alt='arrow-up'
                            width={40}
                            height={40}
                            className='w-8 h-8 object-cover'
                        />
                    </Link>
                </div >
            </div >
        </footer >
    )
}
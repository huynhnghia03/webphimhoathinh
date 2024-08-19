import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
    return <div className='m-auto flex flex-col font-bold text-2xl text-white items-center p-8 cl gap-4 bg-[#5e5f61]'>
        <h1>Not found – 404!</h1>
        <Button className=' bg-gradient-to-r from-pink-600 via-red-500 to-yellow-600 
                    background-animate hover:opacity-[0.9]'>
            <Link href="/">Go Home</Link>
        </Button>
    </div>
}
'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ItemNavbar() {
    const pathname = usePathname();

    // Function to check if the current path matches exactly or starts with the specified path
    const isActive = (href: string) => pathname === href || pathname.startsWith(`/${href}`);

    return (
        <div className="hidden lg:flex gap-6 font-bold items-center">
            <Link href={'/'} passHref className={isActive('/') ? 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 rounded-md' : 'hover:bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300 p-2 rounded-md'}>
                Trang Chủ
            </Link>
            <Link href={'/doraemon'} passHref className={isActive('/Doraemon') ? 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 rounded-md' : 'hover:bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300 p-2 rounded-md'}>
                Doraemon
            </Link>
            <Link href={'/AllFilm/1'} passHref className={isActive('AllFilm') ? 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 rounded-md' : 'hover:bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300 p-2 rounded-md'}>
                HH Trung Quốc
            </Link>
        </div>
    );
}

import { Movie } from "@/common/dataTopicDto";
import { getHotMovie } from "@/lib/moviesAPI";
import Image from "next/image";
import Link from "next/link";

export default async function SideBar() {
    const hotMovies: Movie[] = await getHotMovie()
    return (
        <div className={`sidebar flex flex-col gap-4 mb-3`}>
            <span className={`font-bold text-white text-lg bg-gradient-to-r from-pink-600 via-red-500 to-yellow-600 
                    background-animate w-[120px] rounded-lg p-2`}>Xem Nhiều</span>
            <div className="flex flex-col gap-0 text-white font-bold ">
                {
                    hotMovies?.map((item, ind) => (
                        <div key={ind} className="relative overflow-hidden group cursor-pointer">
                            <Link href={`/${item.slug}`}>
                                <div className={`bg-gradient-to-r from-[#3f3f43] to-[#0c0c0e] group-hover:bg-black ${ind === 0 ? "rounded-t-lg" : ind === hotMovies.length - 1 ? "rounded-b-lg" : ""} flex gap-5 `}>
                                    <Image
                                        src={`/${item.image}`}
                                        alt="anh"
                                        width={75}
                                        height={250}
                                        className={`w-20 h-30 object-cover ${ind === 0 ? "rounded-tl-md" : ind === hotMovies.length - 1 ? "rounded-bl-md" : ""} transform transition-transform duration-300 ease-in-out group-hover:scale-105`}
                                    />
                                    <span className="transition-colors transform duration-300 ease-in-out group-hover:translate-y-1 group-hover:scale-105 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#ff8a00] group-hover:via-[#ff2070] group-hover:to-[#ff2070]">
                                        {item.name}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

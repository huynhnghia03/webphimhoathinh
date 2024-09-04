
import { Movie } from "@/common/dataTopicDto"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"

export default function EpisodenFilm({ detailFilm }: { detailFilm: Movie }) {
    return (
        detailFilm && <div className=" border-gray-500">
            <div className="text-white flex mt-5 bg-[#40404c] w-[100px] p-3 items-center gap-1 rounded-t-lg">
                <Menu width={15} height={15} />
                <span>Full HD</span>
            </div>
            <div className="border border-gray-500 rounded-md">
                <div>
                    <div className="p-2 border border-gray-500 grid grid-cols-4 sm:grid-cols-8 md:grid-cols-12 gap-2 ">
                        {
                            Array(parseInt(detailFilm.totalEpiso)).fill(0).map((_, i) => (
                                <Link key={i} href={`/${detailFilm.slug}/tap-${parseInt(detailFilm.newEpiso) - (i)}.html`}>
                                    <Button className="hover:bg-gradient-to-r from-pink-600 via-red-500 to-yellow-600 
                    background-animate w-[100%]">{parseInt(detailFilm.newEpiso) - (i)}</Button>
                                </Link>
                            ))
                        }
                    </div>
                    <div className="p-4">
                        <h2 className="bg-gradient-to-r from-pink-600 via-red-500 to-yellow-600 
                    background-animate w-[140px] p-2 rounded-md text-white font-bold">Nội Dung Phim</h2>
                        <div className="mt-6 flex flex-col gap-5 text-gray-300 font-bold">
                            <span>{detailFilm.name}</span>
                            <span>{detailFilm.description}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

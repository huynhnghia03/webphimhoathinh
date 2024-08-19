
import { DetailMovie } from "@/common/dataMovie";
import { Movie } from "@/common/dataTopicDto";
import EpisodenFilm from "@/components/layout/components/contentFilm/episodenFilm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function ContentDetail({ detailMovie, episoden = false }: { detailMovie: Movie, episoden?: boolean }) {
    return (
        <div >
            <div className="flex flex-col">
                {
                    !episoden ?

                        detailMovie && <div className="flex gap-5 text-white ">
                            <Card className="bg-[#2c2c33] relative">
                                <Image src={`${process.env.NEXT_PUBLIC_API_URL_UPLOAD + detailMovie?.image}`} alt="nnvh" width={300} height={449} className="w-auto h-auto object-cover" style={{ borderRadius: "inherit" }} />
                                <Link href={`/${detailMovie?.slug}/tap-${detailMovie?.newEpiso}.html`}>
                                    <Button className=" absolute bottom-5 right-0 left-0 m-auto w-[60%] bg-gradient-to-r from-pink-600 via-red-500 to-yellow-600 
                    background-animate bg-orange-500 shadow-lg shadow-orange-500/60 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Xem Phim</Button>
                                </Link>
                            </Card>
                            <div className="flex flex-col gap-2">
                                <h1 className="font-bold text-2xl">{`${detailMovie?.name}`}</h1>
                                <span className="flex text-xs items-center gap-2">
                                    <Clock width={15} height={15} />
                                    <span>{`${detailMovie?.time}`}</span>
                                </span>
                                <span className="text-xs">
                                    <span>Mới Nhất: </span>
                                    <span className="bg-gradient-to-r from-pink-600 via-red-500 to-yellow-600 
                    background-animate  rounded-lg p-1">{`${detailMovie?.newEpiso}`}</span>
                                </span>
                                <span className="text-xs">
                                    <span>Thể Loại: </span>
                                    <span>{`${detailMovie?.category}`}</span>
                                </span>
                            </div>
                        </div> :

                        detailMovie.episodens && <div className="flex flex-col gap-5 text-white items-center">
                            <div className="flex gap-2 items-center font-bold">
                                <span className="bg-gradient-to-r from-pink-600 via-red-500 to-yellow-600 
                   p-1 rounded-sm">Đổi link: </span>
                                <span className="cursor-pointer opacity-[0.9] bg-gradient-to-r from-blue-700 via-blue-700 to-blue-900 
                   hover:opacity-[1] p-1 rounded-sm">Link 1</span>
                            </div>
                            <div className="w-full relative pt-[60%]">
                                <iframe
                                    src={detailMovie?.episodens[0].urlVideo}
                                    allowFullScreen
                                    className="absolute top-0 left-0 w-[100%] h-[100%]"
                                />
                            </div>

                        </div>
                }
            </div>
            <div className="mt-10">
                <EpisodenFilm detailFilm={detailMovie} />

            </div>
        </div>
    )
}
export default ContentDetail
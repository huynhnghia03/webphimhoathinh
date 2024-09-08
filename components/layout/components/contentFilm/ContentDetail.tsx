"use client"
import { Movie } from "@/common/dataTopicDto";
import EpisodenFilm from "@/components/layout/components/contentFilm/episodenFilm";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import VideoEncrypt from "./videoEncrypt";
function ContentDetail({ detailMovie, episoden = false }: { detailMovie: Movie, episoden?: boolean }) {
    // console.log(detailMovie)
    return (
        <div >
            <div className="flex flex-col">
                {
                    !episoden ?

                        detailMovie && <div className="flex gap-5 text-white ">
                            <Card className="bg-[#2c2c33] relative">
                                <Image src={`/${detailMovie?.image}`} alt="nnvh" width={300} height={500} className="w-auto h-auto object-cover" style={{ borderRadius: "inherit" }} />
                                <Link href={`/${detailMovie?.slug}/tap-${detailMovie?.newEpiso}.html`}>
                                    <Button className="text-[0.7rem] sm:text-lg absolute bottom-5 right-0 left-0 m-auto w-[60%] bg-gradient-to-r from-pink-600 via-red-500 to-yellow-600 
                    background-animate bg-orange-500 shadow-lg shadow-orange-500/60 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Xem Phim</Button>
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

                        <div className="flex flex-col gap-5 text-white items-center">
                            <div className="flex gap-2 items-center font-bold">
                                <span className="bg-gradient-to-r from-pink-600 via-red-500 to-yellow-600 
                   p-1 rounded-sm">Đổi link: </span>
                                <span className="cursor-pointer opacity-[0.9] bg-gradient-to-r from-blue-700 via-blue-700 to-blue-900 
                   hover:opacity-[1] p-1 rounded-sm">Link 1</span>
                            </div>
                            {detailMovie.episodens && <div className={`w-full relative ${detailMovie?.episodens[0].urlVideo.startsWith("upload/episoden") ? 'h-[350px]' : "pt-[60%]"}`}>
                                {detailMovie?.episodens[0].urlVideo.startsWith("upload/episoden") ?
                                    <VideoEncrypt url={detailMovie?.episodens[0].urlVideo} />
                                    :
                                    <iframe
                                        src={detailMovie?.episodens[0].urlVideo}
                                        allowFullScreen
                                        className="absolute top-0 left-0 w-[100%] h-[100%]"
                                    />
                                }
                            </div>}
                            <div className=" flex items-center gap-1 self-start font-bold text-xl">
                                {/* <svg width="50px" height="50px"  viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.16"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0H2V16H4L8 12L12 16H14V0ZM7 3V5H5V7H7V9H9V7H11V5H9V3H7Z" fill="#f2f2f2"></path> </g></svg> */}
                                <svg width="50px" height="50px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#E05D5D" stopOpacity="1" />
                                            <stop offset="50%" stopColor="#FF416C" stopOpacity="1" />
                                            <stop offset="100%" stopColor="#FF4B2B" stopOpacity="1" />
                                        </linearGradient>
                                    </defs>

                                    <g fill="url(#gradient1)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14 0H2V16H4L8 12L12 16H14V0Z" />
                                    </g>

                                    <g fill="#ffffff">
                                        <path d="M7 3V5H5V7H7V9H9V7H11V5H9V3H7Z" />
                                    </g>
                                </svg>

                                <h1>{detailMovie?.episodens[0].description}</h1>
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
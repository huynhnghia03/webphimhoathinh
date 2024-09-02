
import { notFound } from "next/navigation";

export async function getVideo(date: string, slug: string) {
    console.log(date, slug)
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_FRONTEND}episoden/stream/${date}/${slug}`, {
            method: 'GET',
            // cache: "no-cache"
        });
        // console.log(res)
        if (!res.ok) {
            return notFound();
        }
        console.log(res)
        // return res.json();
        // console.log(await res.blob())
        const videoBlob = await res.blob();
        // console.log(URL.createObjectURL(videoBlob))
        // return URL.createObjectURL(videoBlob);
        return videoBlob;
    } catch (error) {
        return notFound();
    }
}
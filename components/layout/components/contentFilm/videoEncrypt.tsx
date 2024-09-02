// 'use client'
// import { getVideo } from "@/lib/videoAPI";
// import { useEffect, useState } from "react";
import Player from "./VideoPlayer";
import { LoadingPage } from "../common/loading";

export default function VideoEncrypt({ url }: { url: string }) {
    // const [videoUrl, setVideoUrl] = useState<string>('');
    const videoJsOptions = {
        techOrder: ["html5"], // Sử dụng "html5" cho Video.js
        autoplay: true,
        controls: true,
        sources: [
            {
                src: '/' + url,
                type: "video/mp4",
            },
        ],
    };
    // console.log(videoJsOptions)
    // useEffect(() => {
    //     const fetchVideo = async () => {
    //         try {
    //             const data = url.split('/');
    //             const response = await getVideo(data[2], data[3]);

    //             const blobUrl = URL.createObjectURL(response);
    //             setVideoUrl(blobUrl);

    //             return () => {
    //                 URL.revokeObjectURL(blobUrl);
    //             };
    //         } catch (error) {
    //             console.error('Failed to load video:', error);
    //         }
    //     };

    //     fetchVideo();
    // }, [url]);

    return (
        <>
            {url ? (
                <Player {...videoJsOptions} />
            ) : (
                <LoadingPage isLoading={true} />
            )}
        </>
    );
}

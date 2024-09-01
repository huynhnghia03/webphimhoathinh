// 'use client'
// import { getVideo } from "@/lib/videoAPI";
// import { useEffect, useState } from "react";

export default function VideoEncrypt({ url }: { url: string }) {
    // const [videoUrl, setVideoUrl] = useState<string>('');

    // useEffect(() => {
    //     const fetchVideo = async () => {
    //         try {
    //             const data = url.split('/');
    //             const response = await getVideo(data[2], data[3])

    //             const blobUrl = URL.createObjectURL(response);
    //             setVideoUrl(blobUrl);

    //             return () => {
    //                 URL.revokeObjectURL(blobUrl);
    //             };
    //         } catch (error) {
    //             console.error('Failed to load video:', error);
    //         }
    //     };
    //     //minio

    //     fetchVideo();
    // }, [url]);

    return (
        <video
            src={"/" + url}
            controls
            className="absolute top-0 left-0 w-[100%] h-[100%]"
        />
    );
}
// 'use client'
// import { useEffect, useState } from "react";
// import { getVideo } from "@/lib/videoAPI";

// export default function VideoEncrypt({ url }: { url: string }) {
//     const [blobUrl, setBlobUrl] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchVideo = async () => {
//             try {
//                 const data = url.split('/');
//                 console.log(data)
//                 const videoBlob = await getVideo(data[2], data[3]);
//                 const newBlobUrl = URL.createObjectURL(videoBlob);
//                 setBlobUrl(newBlobUrl);
//             } catch (error) {
//                 console.error("Failed to fetch video:", error);
//             }
//         };

//         fetchVideo();

//         // Clean up the Blob URL when the component unmounts
//         return () => {
//             if (blobUrl) {
//                 URL.revokeObjectURL(blobUrl);
//             }
//         };
//     }, [url]);

//     return (
//         <div className="relative w-full h-full">
//             {blobUrl ? (
//                 <video
//                     src={blobUrl}
//                     controls
//                     className="absolute top-0 left-0 w-[100%] h-[100%]"
//                 />
//             ) : (
//                 <p>Loading video...</p>
//             )}
//         </div>
//     );
// }




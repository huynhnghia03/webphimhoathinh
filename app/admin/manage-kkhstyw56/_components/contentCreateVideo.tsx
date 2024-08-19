'use client'
import { DetailMovie } from "@/common/dataMovie";
import ImageUploader from "@/components/layout/components/ImageUploader";
import { useToast } from "@/components/ui/use-toast";
import { createVideo, updateVideo } from "@/lib/moviesAPI";
import { useState } from "react";

export default function ContentCreateVideo({ slug, getDetailTopic, activeUpdate = false }: { slug: string, getDetailTopic?: DetailMovie, activeUpdate?: boolean }) {
    const [video, setVideo] = useState('');
    const [title, setTitle] = useState(getDetailTopic?.tiltle || '');
    const [description, setDescription] = useState(getDetailTopic?.description || '');
    const [episoden, setEpisoden] = useState(getDetailTopic?.episoden || '');
    const [urlVideo, setUrlVideo] = useState(getDetailTopic?.urlVideo || '');
    const { toast } = useToast();

    const handleSubmit = async () => {
        try {
            const data = {
                tiltle: title,
                description,
                episoden,
                urlVideo,
                slug: "",
                thumbImg: ""
            };

            const response = await createVideo(slug, data);
            if (response) {
                toast({
                    title: "Create successful",
                    description: "The video was successfully created.",
                    variant: "default",
                });
            } else {
                throw new Error("Operation failed");
            }
        } catch (error) {
            toast({
                title: "Create failed",
                description: "There was an error processing your request.",
                variant: "destructive",
            });
            console.error('Operation failed:', error);
        }
    };
    const handleUpdateVideo = async () => {
        try {
            const data = {
                tiltle: title,
                description,
                episoden,
                urlVideo,
                slug: "",
                thumbImg: ""
            }
            const response = await updateVideo(getDetailTopic?.id || "", data)
            if (response) {
                toast({
                    title: "updated successfull",
                    description: "updated successfull",
                    variant: "default",  // Adjusting to success variant for successful logout
                });
            } else {
                toast({
                    title: "updated failed",
                    description: "updated failed",
                    variant: "default",  // Adjusting to success variant for successful logout
                });
            }
        } catch (error) {
            console.error('updated failed:', error);
            toast({
                title: "updated failed",
                description: "updated failed",
                variant: "default",  // Adjusting to success variant for successful logout
            });
        }
    };

    return (
        <>
            <div className="col-span-5 xl:col-span-3">
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke px-7 py-4 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">Video Information</h3>
                    </div>
                    <div className="p-7">
                        <div className="mb-5.5">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor="title">Title</label>
                            <input
                                className="p-2 w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-[4.5px] text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                id="title"
                                type="text"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="mb-5.5">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor="episoden">Episode Number</label>
                            <input
                                className="p-2 w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-[4.5px] text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                id="episoden"
                                type="text"
                                name="episoden"
                                value={episoden}
                                onChange={(e) => setEpisoden(e.target.value)}
                            />
                        </div>

                        <div className="mb-5.5">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor="urlVideo">Video URL</label>
                            <input
                                className="p-2 w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-[4.5px] text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                id="urlVideo"
                                type="text"
                                name="urlVideo"
                                value={urlVideo}
                                onChange={(e) => setUrlVideo(e.target.value)}
                            />
                        </div>

                        <div className="mb-5.5">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white" htmlFor="description">Description</label>
                            <input
                                className="p-2 w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-[4.5px] text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                name="description"
                                id="description"
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="flex mt-3 justify-end gap-[4.5px]">
                            <button className="flex justify-center rounded border border-stroke px-6 py-2 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white">Cancel</button>
                            {!activeUpdate ? <button
                                className="flex justify-center rounded bg-green-500 px-6 py-2 font-medium text-white hover:bg-opacity-90"
                                onClick={handleSubmit}
                            >
                                Add Video
                            </button>
                                : <button
                                    className="flex justify-center rounded bg-green-500 px-6 py-2 font-medium text-white hover:bg-opacity-90"
                                    onClick={handleUpdateVideo}
                                >
                                    Update Video
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <ImageUploader setImage={setVideo} />
        </>
    )
}

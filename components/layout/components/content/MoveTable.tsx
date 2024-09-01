'use client';
import { useRouter } from 'next/navigation';
import { Movie } from '@/common/dataTopicDto';
import { DeleteIcon } from 'lucide-react';
import { deleteVideo } from '@/lib/moviesAPI';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';

function MovieTable({ episodens, slug }: { episodens: Movie, slug: string }) {
    console.log(episodens)
    const router = useRouter();
    const [videos, setVideos] = useState(episodens.episodens);

    const { toast } = useToast();

    const handleRowClick = (movieSlug: string) => {
        router.push(`/admin/manage-kkhstyw56/${slug}/${movieSlug}`);
    };

    const handleDeleteVideo = async (id: string) => {
        try {
            const response = await deleteVideo(id);
            if (response) {
                toast({
                    title: "Delete successful",
                    description: "The movie was successfully deleted.",
                    variant: "default",
                });
                setVideos(videos.filter(video => video.id !== id));
            } else {
                toast({
                    title: "Delete failed",
                    description: "Failed to delete the movie.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Delete failed",
                description: "Failed to delete the movie.",
                variant: "destructive",
            });
        }
    };

    return (
        <div className="col-span-5 xl:col-span-2 max-h-[900px] overflow-x-auto" style={{ msOverflowX: "hidden", scrollbarWidth: "revert" }}>
            <div className="bg-white shadow-sm rounded-b-lg">
                <table className="w-full table-auto text-left">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700">
                            <th className="min-w-[150px] px-6 py-4 font-medium">Slug</th>
                            <th className="min-w-[150px] px-6 py-4 font-medium">Name</th>
                            <th className="min-w-[150px] px-6 py-4 font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {videos.length > 0 && videos.map((video, index) => (
                            <tr
                                key={index}
                                className="border-b last:border-b-0 border-gray-300"
                            >
                                <td onClick={() => handleRowClick(video.slug)} className='px-6 py-4 xl:pl-8 hover:bg-gray-100 cursor-pointer'>
                                    <p className="text-gray-700">{video.slug}</p>
                                </td>
                                <td onClick={() => handleRowClick(video.slug)} className='px-6 py-4 hover:bg-gray-100 cursor-pointer'>
                                    <p className="text-gray-700">{video.tiltle}</p>
                                </td>
                                <td className="px-6 py-4">
                                    <button onClick={() => handleDeleteVideo(video.id)} className="text-gray-500 hover:text-red-600">
                                        <DeleteIcon width={24} height={24} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MovieTable;

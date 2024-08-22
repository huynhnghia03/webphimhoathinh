'use client';
import { Movie } from "@/common/dataTopicDto";
import { useToast } from "@/components/ui/use-toast";
import { deleteTopic, getMovies } from "@/lib/moviesAPI";
import { DeleteIcon, EditIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import useSWR from 'swr';

export default function ContentDeleteTopic() {
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(10); // Number of movies per page
    const { toast } = useToast();

    const fetchMovies = async (page: number) => {
        const { datas, total } = await getMovies(page);
        return { datas, total };
    };

    const { data, error, mutate } = useSWR(['movies', currentPage], () => fetchMovies(currentPage));

    const movies = data?.datas || [];
    const totalMovies = data?.total || 0;

    if (error) {
        console.error("Failed to fetch movies:", error);
    }

    const handleDeleteMovie = async (id: string) => {
        try {
            const response = await deleteTopic(id);
            if (response) {
                toast({
                    title: "Delete successful",
                    description: "The movie was successfully deleted.",
                    variant: "default",
                });
                mutate(); // Re-fetch the movies after deleting one
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

    const totalPages = useMemo(() => Math.round(totalMovies / moviesPerPage), [totalMovies, moviesPerPage]);

    return (
        <div>
            <table className="w-full table-auto text-left">
                <thead>
                    <tr className="bg-gray-200 text-gray-700">
                        <th className="min-w-[220px] px-6 py-4 font-medium xl:pl-8">Image</th>
                        <th className="min-w-[150px] px-6 py-4 font-medium">Name</th>
                        <th className="min-w-[120px] px-6 py-4 font-medium">Slug</th>
                        <th className="px-6 py-4 font-medium">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie: Movie) => (
                        <tr key={movie.id} className="border-b last:border-b-0 border-gray-300">
                            <td className="px-6 py-4 xl:pl-8">
                                <Image
                                    src={movie.image}
                                    alt={movie.name}
                                    width={100}
                                    height={100}
                                    placeholder="blur"
                                    blurDataURL="/path-to-placeholder-image.jpg"
                                    loading="lazy"
                                />
                            </td>
                            <td className="px-6 py-4">
                                <p className="text-gray-700">{movie.name}</p>
                            </td>
                            <td className="px-6 py-4">
                                <p className="text-gray-700">{movie.slug}</p>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center space-x-4">
                                    <Link href={`/admin/manage-kkhstyw56/${movie.slug}`}>
                                        <button className="text-gray-500 hover:text-blue-600">
                                            <EditIcon width={24} height={24} />
                                        </button>
                                    </Link>
                                    <button onClick={() => handleDeleteMovie(movie.id)} className="text-gray-500 hover:text-red-600">
                                        <DeleteIcon width={24} height={24} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`mx-1 px-3 py-1 rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

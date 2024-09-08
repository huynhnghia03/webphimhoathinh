import { Movie } from "@/common/dataTopicDto";
import ContentDetail from "@/components/layout/components/contentFilm/ContentDetail";
import { getMovieById, getMovies } from "@/lib/moviesAPI";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from 'next/navigation';

// This function is used to generate static paths
// export async function generateStaticParams() {
//     const { datas } = await getMovies()

//     return datas.map((post: Movie) => {
//         return {
//             slug: post.slug.toString(),
//         };
//     });
// }

// This function generates metadata for each page
export async function generateMetadata(
    { params }: { params: { slug: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { datas } = await getMovies(); // Lấy tất cả các phim
    const detailMovie = await getMovieById(params.slug); // Lấy chi tiết phim theo slug

    if (!detailMovie) {
        return {
            title: "Not Found",
            description: "Movie not found",
        };
    }

    // Tìm phim theo slug từ danh sách datas
    const detail = datas.find((val: Movie) => val.slug === detailMovie.slug);

    // Nếu không tìm thấy, trả về metadata mặc định
    if (!detail) {
        return {
            title: `${detailMovie.name} | Tập ${detailMovie.newEpiso} | ${detailMovie.category}`,
            description: `Xem phim ${detailMovie.name} Tập mới nhất ${detailMovie.newEpiso} vietsub ${detailMovie.description}`,
            openGraph: {
                title: `${detailMovie.name} | Tập ${detailMovie.newEpiso} | ${detailMovie.category}`,
                description: `Xem phim ${detailMovie.name} Tập mới nhất ${detailMovie.newEpiso} vietsub ${detailMovie.description}`,
                url: `/${params.slug}`,
                images: [
                    {
                        url: detailMovie.image ? `/${detailMovie.image}` : "/logo.png", // Fallback to logo.png
                        width: 800,
                        height: 600,
                        alt: detailMovie.name,
                    },
                ],
            },
        };
    }

    // Trường hợp tìm thấy chi tiết trong dữ liệu
    return {
        title: `${detail.name} | Tập ${detail.newEpiso} | ${detail.category}`,
        description: `Xem phim ${detail.name} Tập mới nhất ${detail.newEpiso} vietsub ${detail.description}`,
        openGraph: {
            title: `${detail.name} | Tập ${detail.newEpiso} | ${detail.category}`,
            description: `Xem phim ${detail.name} Tập mới nhất ${detail.newEpiso} vietsub ${detail.description}`,
            url: `/${params.slug}`,
            images: [
                {
                    url: detail.image ? `/${detail.image}` : "/logo.png", // Fallback to logo.png
                    width: 800,
                    height: 600,
                    alt: detail.name,
                },
            ],
        },
    };
}

// This is your page component
export default async function DetailFilm({ params }: { params: { slug: string } }) {
    const { datas } = await getMovies()
    const detailMovie = await getMovieById(params.slug);
    if (!detailMovie) {
        return notFound();
    }
    const detail = datas.find((val: Movie) => val.slug == detailMovie.slug)
    if (!detail) {
        return <ContentDetail detailMovie={detailMovie} />;
    }
    return <ContentDetail detailMovie={detail} />;

}

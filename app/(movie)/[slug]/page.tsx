import { Movie } from "@/common/dataTopicDto";
import ContentDetail from "@/components/layout/components/contentFilm/ContentDetail";
import { getDataMovies, getMovieById, getMovies } from "@/lib/moviesAPI";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from 'next/navigation';

// This function is used to generate static paths
export async function generateStaticParams() {
    const { dataAll } = await getDataMovies();

    return dataAll.map((post: Movie) => {
        return {
            slug: post.slug.toString(),
        };
    });
}

// This function generates metadata for each page
export async function generateMetadata(
    { params }: { params: { slug: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { dataAll } = await getDataMovies(); // Lấy tất cả các phim
    // const datas = await getMovieById(params.slug); // Lấy chi tiết phim theo slug
    const detail = dataAll.find((val: Movie) => val.slug == params.slug)
    if (!detail) {
        return {
            title: "Not Found",
            description: "Movie not found",
        };
    }

    return {
        title: `${detail.name} | Tập ${detail.newEpiso} | ${detail.category}`,
        description: `Xem phim ${detail.name} Tập mới nhất ${detail.newEpiso} vietsub ${detail.description}`,
        openGraph: {
            type: 'website',
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

    }

}

// This is your page component
export default async function DetailFilm({ params }: { params: { slug: string } }) {
    const { datas } = await getMovies(); // Lấy tất cả các phim
    // const { dataAll } = await getDataMovies();
    // console.log(dataAll)
    const detailID = await getMovieById(params.slug); // Lấy chi tiết phim theo slug
    const detail = datas.find((val: Movie) => val.slug == params.slug)
    // const detail1 = dataAll.find((val: Movie) => val.slug == params.slug)
    if (!detailID && !detail) {
        return notFound();
    }
    return <ContentDetail detailMovie={detail || detailID} />;


}

import ContentDetail from "@/components/layout/components/contentFilm/ContentDetail";
import { getMovieById } from "@/lib/moviesAPI";
import { notFound } from 'next/navigation';

async function DetailFilm({ params }: { params: { slug: string } }) {
    console.log(params.slug)
    const detailMovie = await getMovieById(params.slug)
    if (!detailMovie) {
        return notFound()
    }
    return (
        <ContentDetail detailMovie={detailMovie} />
    );
}
export default DetailFilm
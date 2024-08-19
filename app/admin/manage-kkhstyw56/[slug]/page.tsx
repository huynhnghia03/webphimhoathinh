import { Movie } from "@/common/dataTopicDto";
import { MoveTable } from "@/components/layout/components/content";
import { getMovieBySlugRelation } from "@/lib/moviesAPI";
import Link from "next/link";
import ContentAddTopic from "../_components/contentAddTopic";
export default async function AddMovie({ params }: { params: { slug: string } }) {
   const getDetailTopic: Movie = await getMovieBySlugRelation(params.slug)
   return (
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 bg-white">
         <div className="mx-auto  max-w-270">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
               <h2 className="text-title-md2 font-semibold text-black dark:text-white">Update Topic</h2>
               <nav>
                  <ol className="flex items-center gap-2">
                     <li><Link className="font-medium" href="/admin/manage-kkhstyw56">mangeTopic /</Link></li>
                     <li className="font-medium text-primary">updatetopic</li>
                  </ol>
               </nav>
            </div>
            <div className="grid grid-cols-5 gap-8">
               <div className="col-span-5 xl:col-span-3">

                  <ContentAddTopic detailMovie={getDetailTopic} />

               </div>
               <div className="col-span-5 xl:col-span-2">
                  <Link href={`/admin/manage-kkhstyw56/${getDetailTopic.slug}/addVideo`}>
                     <button className="m-2 text-gray-200 py-2 px-3 rounded-md bg-red-600 hover:text-white hover:font-bold">Add Video</button>
                  </Link>
                  <MoveTable episodens={getDetailTopic} slug={params.slug} />
               </div>
            </div>
         </div>
      </div>
   )
}
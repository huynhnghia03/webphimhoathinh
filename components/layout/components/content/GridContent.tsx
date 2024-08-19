
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Movie } from "@/common/dataTopicDto";

export default function GridContent({ movies }: { movies: Movie[] }) {
    return (
        <BentoGrid className="mx-auto">
            {movies?.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.name}
                    episoden={item.newEpiso}
                    description={item.description}
                    image={item.image}
                    slug={item.slug}
                // className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
            ))}
        </BentoGrid>
    );
}



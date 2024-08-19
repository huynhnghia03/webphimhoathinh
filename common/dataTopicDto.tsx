import { DetailMovie } from "./dataMovie";

export interface Movie {
    id: string;
    name: string;
    description: string;
    image: string;
    slug: string;
    finish: boolean;
    category: string;
    newEpiso: string;
    time: string;
    moreInteres: boolean;
    schedule: string
    totalEpiso: string;
    episodens: DetailMovie[]
}
export interface createMoive {
    name: string;
    description: string;
    image: string;
    finish: boolean;
    category: string;
    time: string;
}

// Định nghĩa interface cho props của component
export interface MoviesProps {
    movies: Movie[];
}
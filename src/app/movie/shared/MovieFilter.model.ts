import { MovieGenre } from "./MovieGenre.model";

export interface MovieFilter {
 page: number;
 with_genres: [MovieGenre];
}

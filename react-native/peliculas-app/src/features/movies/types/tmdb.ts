export interface TMDBMoviesResponse{
    page:number;
    results: TMDBMovie[];
    total_pages: number;
    total_results: number;
}

export interface TMDBMovie{
    adult: boolean;
    backdrop_path: string|null;
    genre_ids: number[];
    id:number;
    original_language: string;
    original_title: string;
    overview: string|null;
    popularity: number;
    poster_path: string|null;
    release_date: string;
    title:string;
    video:boolean;
    vote_average:number;
    vote_count:number;
}

export interface TMDBMovieDetail extends TMDBMovie {
    budget: number;
    genres: { id: number; name: string }[];
    production_companies: { id: number; name: string; logo_path: string | null; origin_country: string }[];
    runtime: number | null;
}

export interface TmdbCastMember {
    id: number;
    name: string;
    character: string;
    order: number;
    profile_path: string | null;
}

export interface TMDBCreditsResponse {
    id: number;
    cast: TmdbCastMember[];
}

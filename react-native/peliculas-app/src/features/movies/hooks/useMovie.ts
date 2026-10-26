import {useQuery} from '@tanstack/react-query';
import { getMovieById, getMovieCast } from '@/features/movies/api/movies.api';

const ONE_DAY = 1000 *60 *60*24;

export const useMovie = (id:number)=> {

    const enabled = Number.isInteger(id) && id > 0;

    const movieQuery = useQuery({
        queryKey:['movie', id],
        queryFn: () => getMovieById(id),
        enabled,
        staleTime: ONE_DAY,
    });

    const castQuery = useQuery({
        queryKey:['movie', id, 'cast'],
        queryFn: () => getMovieCast(id),
        enabled,
        staleTime: ONE_DAY,
    });

    return { movieQuery, castQuery };
    

};

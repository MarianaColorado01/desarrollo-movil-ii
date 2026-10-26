import axios from 'axios';
export const movieApi = axios.create({
    baseURL: process.env.EXPO_PUBLIC_MOVIE_DB_URL ?? 'https://api.themoviedb.org/3/movie',
    headers:{
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_DB_TOKEN ?? ''}`,
    },
});

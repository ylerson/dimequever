const url = new URL('https://api.themoviedb.org/3/movie/');

export const getMovieDetail = async (id) => {
    const urlWithId = new URL(id, url);
    urlWithId.searchParams.set('api_key', import.meta.env.VITE_TMDB_API_KEY);
    urlWithId.searchParams.set('language', 'es-ES');
    try {
        const response = await fetch(urlWithId);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};

export const getMovieTrailer = async (id) => {
    const urlWithId = new URL(`${id}/videos`, url);
    urlWithId.searchParams.set('api_key', import.meta.env.VITE_TMDB_API_KEY);
    urlWithId.searchParams.set('language', 'es-ES');

    try {
        const response = await fetch(urlWithId);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};
export const getMovieImage = async (id) => {
    const urlWithId = new URL(`${id}/images`, url);

    urlWithId.searchParams.set('language', 'es-ES');
    urlWithId.searchParams.set('api_key', import.meta.env.VITE_TMDB_API_KEY);

    try {
        const response = await fetch(urlWithId);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};

import {
    getMovieCast,
    getMovieDetail,
    getMovieImage,
    getMovieTrailer,
} from '../services/getMovie';
import {generateRandomId} from '../utils/GenerateRandomId';
import Header from './components/Header';
import Trailer from './components/TrailerYoutube';

export default async function App() {
    const id = generateRandomId();

    const movieDetail = await getMovieDetail(id);

    const movieTrailer = await getMovieTrailer(id);
    const movieImage = await getMovieImage(id);
    const movieCast = await getMovieCast(id);
    if (movieDetail.success === false) return location.reload();

    return `
    <main class='h-screen w-full relative'>
        <h1 class="text-white text-3xl absolute top-8 left-8 md:left-80 z-10 font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-red-400 to-pink-600">QUE VER HOY?<h1>
        ${Trailer(movieTrailer)}
        ${Header(movieImage, movieDetail, movieCast)}
    
    <main>`;
}

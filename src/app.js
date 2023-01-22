import {
    getMovieDetail,
    getMovieImage,
    getMovieTrailer,
} from '../services/getMovie';
import {generateRandomId} from '../utils/GenerateRandomId';
import Header from './components/Header';
import Trailer from './components/TrailerYoutube';

export default async function App() {
    const id = generateRandomId();

    const movieDetail = await getMovieDetail(22676);

    console.log(movieDetail.success);
    const movieTrailer = await getMovieTrailer(id);
    const movieImage = await getMovieImage(id);

    return `
    <main class='h-screen w-full relative'>
        <h1 class="text-white text-3xl absolute top-8 left-80  z-10 font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-red-400 to-pink-600">QUE VER HOY?<h1>
        ${Trailer()}
        ${Header()}
    
    <main>`;
}

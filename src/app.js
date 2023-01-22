import {
    getMovieDetail,
    getMovieImage,
    getMovieTrailer,
} from '../services/getMovie';
import {generateRandomId} from '../utils/GenerateRandomId';
import Header from './components/Header';
import Trailer from './components/TrailerYoutube';

export default function App() {
    const id = generateRandomId();
    const movieDetail = getMovieDetail(id).then((data) => console.log(data));

    // const movieTrailer = getMovieTrailer(id).then((data) => data);
    const movieImage = getMovieImage(id);

    return `
    <main class='h-screen w-full relative'>
        <h1 class="text-white text-3xl absolute top-8 left-80  z-10 font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-red-400 to-pink-600">QUE VER HOY?<h1>
        ${Trailer()}
        ${Header()}
    
    <main>`;
}

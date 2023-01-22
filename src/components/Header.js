import MovieInfo from './MovieInfo';
import MovieMedia from './MovieMedia';

export default function Header(movieImage, movieDetail, movieCast) {
    const imagenBackground = movieImage?.backdrops[0];
    if (imagenBackground?.file_path === undefined) return location.reload();
    const setBackground =
        imagenBackground?.file_path === undefined
            ? './dark-wood.jpg'
            : `https://image.tmdb.org/t/p/original/${imagenBackground?.file_path}`;

    return `
    <div class="w-full h-full fixed top-0 left-0">
        <img class="w-full h-full object-cover " src=${setBackground}></img>
        <div class="absolute w-full h-96 bottom-0 from-gray-900  bg-gradient-to-t ">
            <section class="flex justify-between gap-6 w-8/12 max-w-full m-auto">
            
           ${MovieInfo(movieDetail)}

            ${MovieMedia(movieImage, movieCast)}
            
            </section>
        
       
        <div>
    
    </div>`;
}

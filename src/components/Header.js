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
    <div class="w-full h-full ">
        <img class="w-full h-full object-cover fixed top-0 left-0" src=${setBackground}></img>
        <div class="absolute w-full h-full md:h-96 bottom-0 max-sm:top-52  from-gray-900  bg-gradient-to-t ">
            <section class="flex flex-col md:flex-row justify-end p-4 md:p-0 md:justify-between gap-6 md:w-8/12 max-w-full md:m-auto h-full">
            
           ${MovieInfo(movieDetail)}

            ${MovieMedia(movieImage, movieCast)}
            
            </section>
        
       
        <div>
    
    </div>`;
}

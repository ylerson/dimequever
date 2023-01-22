import ActorInfo from './ActorInfo';
import PosterImagen from './PosterImage';

export default function MovieMedia(movieImage, movieCast) {
    return `<section class="flex flex-col gap-8 md:basis-1/2">
    <div>
    <h2 class="text-white text-xl mb-2 font-bold">Imagenes</h2>
        <div class="flex gap-4 scrollbar-hide overflow-x-scroll">
        ${PosterImagen(movieImage)}
        </div>
    </div>
    <div >
    <h2 class="text-white text-xl mb-4 ">Actores</h2>
    ${ActorInfo(movieCast)}
    </div>
    </section>`;
}

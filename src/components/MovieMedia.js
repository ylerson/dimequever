import ActorInfo from './ActorInfo';
import PosterImagen from './PosterImage';

export default function MovieMedia() {
    return `<section class="flex flex-col gap-8">
    <div>
    <h2 class="text-white text-xl mb-2 font-bold">Imagenes</h2>
        <div class="flex gap-4 ">
        ${PosterImagen()}
        </div>
    </div>
    <div >
    <h2 class="text-white text-xl mb-4">Actores</h2>
    ${ActorInfo()}
    </div>
    </section>`;
}

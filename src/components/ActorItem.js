export default function ActorItem(cast) {
    const urlImagen = `https://www.themoviedb.org/t/p/original/${cast.profile_path}`;

    return ` <li class="flex flex-col items-center">
<img class="w-12 h-12 object-cover rounded-full grayscale" src=${urlImagen}></img>
<p class="text-white text-sm text-center">${cast.name}</p>
</li>
`;
}

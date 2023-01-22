import PosterImagenItem from './ImagenItem';

export default function PosterImagen(movieImage) {
    if (movieImage?.success === false || movieImage.backdrops.length < 0)
        return PosterImagen(
            'https://placehold.co/600?text=No%20imagen&font=roboto'
        );

    return movieImage?.backdrops
        .map((imagen) => {
            const url = `https://image.tmdb.org/t/p/original/${imagen.file_path}`;
            return `${PosterImagenItem(url)}`;
        })
        .join('');
}

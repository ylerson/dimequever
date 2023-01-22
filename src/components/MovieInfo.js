export default function MovieInfo(movieDetail) {
    const title = movieDetail?.title;
    const originalTitle = movieDetail?.original_title;
    const overview = movieDetail?.overview;
    const vote_average = movieDetail?.vote_average;
    const vote_count = movieDetail?.vote_count;
    const genre = movieDetail?.genres;
    const year = movieDetail?.release_date;

    const justwatch = originalTitle
        .replace(/[:,.!?()]/g, '')
        .toLowerCase()
        .split(' ')
        .join('-');

    const duration = Math.floor(movieDetail?.runtime / 60);

    return ` <section class="flex flex-col gap-4 basis-1/2">
    <h1 class="text-white text-6xl font-bold drop-shadow">${title}</h1>
    <div class="flex text-white text-sm gap-4"><p> ⭐${vote_average} | ${vote_count}</p><p>${duration}H</p>${genre
        .map((gen) => `<p>${gen.name}</p>`)
        .join('')}<p>${year.split('-')[0]}</p>  </div>
    <p class="text-white text-sm">${overview}</p>
    <div class="flex gap-2 items-center">
    <a href=${`https://www.justwatch.com/us/movie/${justwatch}`} target="_blank" class="bg-yellow-500 px-4 py-2 rounded">Ver en justwatch</a>
    </div>
    </section>`;
}

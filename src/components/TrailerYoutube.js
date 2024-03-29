export default function Trailer(results) {
    if (results?.success === false || results.length < 0)
        return `<div class="absolute top-44 z-10 right-64 p-2 bg-white rounded flex justify-center items-center w-[560px] h-[315px]"> <p>No hay Trailer</p> </div>`;

    const key = results.results[0]?.key;
    return `
    <div class="absolute top-32 w-[360px] h-[215px] md:w-[560px] md:h-[315px]  md:top-44 z-10 right-2 md:right-96 p-2 bg-white rounded">
    <iframe class="w-full h-full" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
    </div>
    
    `;
}

export default function Trailer(results) {
    if (results?.success === false || results.length < 0)
        return `<div class="absolute top-44 z-10 right-64 p-2 bg-white rounded flex justify-center items-center w-[560px] h-[315px]"> <p>No hay Trailer</p> </div>`;

    const key = results.results[0]?.key;
    return `
    <div class="absolute top-44 z-10 right-64 p-2 bg-white rounded">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
    </div>
    
    `;
}

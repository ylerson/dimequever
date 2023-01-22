import ActorItem from './ActorItem';

export default function ActorInfo(movieCast) {
    if (movieCast.success === false) return;

    return ` <ul class="flex items-center gap-4">

    ${movieCast?.cast
        .splice(0, 6)
        .map((cast) => {
            return `${ActorItem(cast)}`;
        })
        .join('')}
    
    </ul>`;
}

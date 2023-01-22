import ActorItem from './ActorItem';

export default function ActorInfo() {
    return ` <ul class="flex items-center gap-4">
    ${ActorItem()}
    </ul>`;
}

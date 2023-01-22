import MovieInfo from './MovieInfo';
import MovieMedia from './MovieMedia';

export default function Header() {
    return `
    <div class="w-full h-full fixed top-0 left-0">
        <img class="w-full h-full object-cover " src="https://www.themoviedb.org/t/p/original/xRzYU69uoZeYkQhDU8tsFCQRac7.jpg"></img>
        <div class="absolute w-full h-96 bottom-0 from-gray-900  bg-gradient-to-t ">
            <section class="flex justify-between w-8/12 max-w-full m-auto">
            
           ${MovieInfo()}

            ${MovieMedia()}
            
            </section>
        
       
        <div>
    
    </div>`;
}

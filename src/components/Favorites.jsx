import MovieCard from "./MovieCard";


export default function Favorites() {




    let item = localStorage.getItem('a') ?? "{}";
    let turn = JSON.parse(item);

    let take = Object.keys(turn)
  
    if(!take.length){
        return null
    }
    
    return <div className="favorite-film">
       <h3 >Любимые фильмы</h3>
        <div className="movie-list">
            {take.map((value) => <MovieCard film={turn[value]} />)
}
        </div>
         
        </div>




}


import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Favorites from "./components/Favorites";





export default function App() {
    const [films, setFilms] = useState(null)

  

    return (

        <div className="search_wrapper">
            <SearchBar set={setFilms} />
            <Favorites/>
            {films !== null && <MovieList films={films} />}
        </div>
    )


}
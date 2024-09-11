import MovieCard from "./MovieCard";




export default function MovieList({ films }) {
    if (films.length === 0) {
        return <div> Фильм не найден</div>
    }


    return (
        <div>

            <div className="movie-list">
                {films.map(film => (
                    <MovieCard key={film.filmId} film={film} />
                ))}
            </div>
        </div>
    )





}
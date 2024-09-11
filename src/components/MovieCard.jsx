import { useNavigate } from "react-router-dom"



export default function MovieCard({film}){
  
    const navigate =useNavigate()

    return(
        <div className="list-item"
         onClick={()=>{
            navigate(`/${film.filmId ?? film.kinopoiskId}`);
        }}>
        <img src={film.posterUrl} alt="" width={200} />
        <div>{film.nameRu}</div>
        

    </div>
    )
}
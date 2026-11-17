import { useNavigate } from "react-router-dom"
import { useState } from "react";


export default function MovieCard({film}){
  
    const navigate =useNavigate()
    const [posterError, setPosterError] = useState(false);

    return(
        <div className="list-item"
         onClick={()=>{
            navigate(`/${film.filmId ?? film.kinopoiskId}`);
        }}>
     {film.posterUrl && !posterError ? (
    <img
        src={film.posterUrl}
        alt={film.nameRu || film.nameEn || "Постер фильма"}
        width={200}
        onError={() => setPosterError(true)}
    />
) : (
    <div className="poster-placeholder">Постер недоступен</div>
)}
       <div>{film.nameRu || film.nameEn || "Название не указано"}</div>
        

    </div>
    )
}




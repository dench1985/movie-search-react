import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { headers } from "../tools";



export default function MoviesDetails() {
    let { id } = useParams();
    const string_List = localStorage.getItem("a")
    const object_list = JSON.parse(string_List ?? "{}")

    const [vSiske, setVSpiske] = useState(id in object_list)

    const [film, setFilm] = useState(null)


    function handelDelete() {
        delete object_list[id]
        localStorage.setItem('a', JSON.stringify(object_list))
        setVSpiske(false)
    }

    async function getFilm() {
        const url = "https://kinopoiskapiunofficial.tech/api/v2.2/films/" + id;
        const response = await fetch(url, headers)
        const data = await response.json()
        setFilm(data)

    }

    function myFunction() {
        let tem = localStorage.getItem("a")
        let rom = JSON.parse(tem) ?? {}
        rom[id] = film
        localStorage.setItem('a', JSON.stringify(rom))
        setVSpiske(true)
    }

    useEffect(() => {
        getFilm()
    }, [])
    if (!film) {
        return <div>Loding.....</div>
    }
    return (
        <div className="movie-opisanie">
            <img src={film.posterUrl} alt="" />
            <div className="content">
                <h1>{film.nameRu}</h1>
                <div className="time-wraper">
                    <div className="vrema"> </div>
                    <div className="reting"></div>
                </div>
                <div className="reliz-wraper">
                    <div className="reliz"></div>
                    <div className="zhanr"></div>
                </div>
                <div className="opisanie-wraper">
                    <div className="opisnie">Описание</div>
                    <p>{film.description}</p>
                </div>
                

                {vSiske ?
                    (<button onClick={handelDelete}>Удалить из избраного </button>) :
                    (<button onClick={myFunction}>Добавить в избраное </button>)}
                {/* <ul>
                    <li> reviewsCount: {film.reviewsCount}</li>
                    <li>ratingImdb: {film.ratingImdb}</li>
                    <li>year: {film.year}</li>
                    <li>filmLength: {film.filmLength}</li>
                </ul> */}
            </div>

        </div>

    )


}

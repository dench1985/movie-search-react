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
            <div className="kartinka">
                <img src={film.posterUrl} alt="" />
                <div className="black" ></div>
                <div className="play">
                    <svg
                        width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_b_90_112)">
                            <path d="M64 32C64 49.6736 49.6736 64 32 64C14.3264 64 0 49.6736 0 32C0 14.3296 14.3264 0 32 0C49.6736 0 64 14.3296 64 32Z" fill="url(#paint0_linear_90_112)" />
                            <path d="M63.5 32C63.5 49.3974 49.3975 63.5 32 63.5C14.6025 63.5 0.5 49.3974 0.5 32C0.5 14.6057 14.6026 0.5 32 0.5C49.3974 0.5 63.5 14.6057 63.5 32Z" stroke="url(#paint1_linear_90_112)" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <g filter="url(#filter1_bd_90_112)">
                            <path d="M44.8004 32.0159C44.8004 32.8247 44.5458 33.6365 44.0368 34.2866C43.9413 34.4142 43.4958 34.9399 43.1458 35.282L42.9549 35.4687C40.2822 38.3024 33.6322 42.5639 30.2595 43.9294C30.2595 43.9605 28.2549 44.7724 27.3004 44.8004H27.1731C25.7095 44.8004 24.3413 43.9947 23.6413 42.6883C23.2595 41.9698 22.9095 39.8857 22.8777 39.8577C22.5913 37.9882 22.4004 35.1265 22.4004 31.9848C22.4004 28.6907 22.5913 25.7015 22.9413 23.8662C22.9413 23.8351 23.2913 22.1554 23.514 21.5955C23.864 20.7899 24.5004 20.1024 25.2958 19.667C25.9322 19.359 26.6004 19.2004 27.3004 19.2004C28.0322 19.2346 29.4004 19.6981 29.9413 19.9158C33.5049 21.2845 40.314 25.7637 42.9231 28.501C43.3686 28.9365 43.8458 29.4684 43.9731 29.5897C44.514 30.274 44.8004 31.1139 44.8004 32.0159Z" fill="url(#paint2_linear_90_112)" />
                            <path d="M43.8793 34.1633L43.8793 34.1633L43.8766 34.1668C43.7875 34.2858 43.3489 34.8038 43.006 35.139L42.8151 35.3257L42.815 35.3255L42.8094 35.3314C41.4894 36.731 39.1745 38.4946 36.7598 40.0825C34.3461 41.6699 31.853 43.0685 30.1844 43.744L30.0595 43.7946V43.8054C30.0081 43.8277 29.9397 43.8561 29.8572 43.8889C29.6575 43.9686 29.3804 44.0727 29.0737 44.1767C28.4525 44.3873 27.741 44.5866 27.2974 44.6004H27.1731C25.7826 44.6004 24.4826 43.8348 23.8177 42.5941C23.6418 42.2627 23.4638 41.5901 23.3233 40.9698C23.2542 40.6649 23.1959 40.3811 23.1526 40.1705L23.1524 40.1694C23.131 40.0652 23.113 39.9775 23.0993 39.9151C23.0925 39.8841 23.0863 39.8568 23.0809 39.836C23.0785 39.8266 23.0754 39.8155 23.0719 39.8048C22.7895 37.9482 22.6004 35.1077 22.6004 31.9848C22.6004 28.6945 22.7913 25.7202 23.1378 23.9037L23.1413 23.8851V23.8818L23.1419 23.8781C23.1443 23.8654 23.148 23.8465 23.1529 23.8219C23.1627 23.773 23.1771 23.7034 23.1951 23.6187C23.2311 23.4492 23.2816 23.2201 23.3389 22.9747C23.4546 22.4794 23.594 21.9369 23.6987 21.6723C24.03 20.9117 24.6324 20.2594 25.3875 19.8448C25.995 19.5516 26.6304 19.4011 27.2957 19.4004C27.6356 19.4171 28.1383 19.5348 28.636 19.6811C29.1313 19.8268 29.6025 19.995 29.8666 20.1013L29.8666 20.1014L29.8696 20.1025C31.6311 20.7791 34.2101 22.2316 36.68 23.8621C39.1502 25.4927 41.4897 27.287 42.7783 28.639L42.7783 28.6391L42.7833 28.644C43.003 28.8587 43.2313 29.0981 43.4219 29.3003C43.4665 29.3476 43.5095 29.3934 43.55 29.4366C43.6705 29.5649 43.7692 29.6701 43.8243 29.724C44.3311 30.3699 44.6004 31.1618 44.6004 32.0159C44.6004 32.7838 44.3586 33.5513 43.8793 34.1633ZM23.1397 23.8907L23.1397 23.8906C23.1394 23.8929 23.1392 23.8942 23.1392 23.8943C23.1392 23.8943 23.1393 23.8933 23.1397 23.8907Z" stroke="url(#paint3_linear_90_112)" stroke-width="0.4" />
                        </g>
                        <defs>
                            <filter id="filter0_b_90_112" x="-4.81" y="-4.81" width="73.62" height="73.62" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.405" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_90_112" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_90_112" result="shape" />
                            </filter>
                            <filter id="filter1_bd_90_112" x="7.40039" y="4.20038" width="52.3999" height="55.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_90_112" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="5" dy="5" />
                                <feGaussianBlur stdDeviation="5" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.995833 0 0 0 0 0.338256 0 0 0 0 0.273854 0 0 0 0.15 0" />
                                <feBlend mode="normal" in2="effect1_backgroundBlur_90_112" result="effect2_dropShadow_90_112" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_90_112" result="shape" />
                            </filter>
                            <linearGradient id="paint0_linear_90_112" x1="10.1878" y1="7.45608" x2="51.0129" y2="58.0191" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0.25" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_90_112" x1="10.1878" y1="7.45608" x2="51.0129" y2="58.0191" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0.25" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_90_112" x1="35.2495" y1="33.7147" x2="14.6434" y2="42.4814" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF8F71" />
                                <stop offset="1" stop-color="#EF2D1A" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_90_112" x1="25.9661" y1="22.1828" x2="42.6174" y2="40.228" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0.25" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>

                </div>
                <button className="nazad" onClick={()=> window.history.back()}>
                    <svg
                        width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.274 23.7561C16.2366 24.7176 16.2366 26.2759 15.306 27.2706C14.8247 27.7679 14.215 28 13.5733 28C12.9636 28 12.3539 27.7679 11.9047 27.2706L0.705939 15.7655C0.256705 15.3014 1.16522e-06 14.6714 1.22319e-06 14.0083C1.28117e-06 13.3452 0.256706 12.7152 0.70594 12.251L11.9047 0.746002C12.8353 -0.24867 14.3434 -0.24867 15.306 0.746002C16.2366 1.70752 16.2366 3.29899 15.274 4.26051L5.80795 14.0083L15.274 23.7561Z" fill="white" />
                    </svg>
                </button>



            </div>

            <div className="content">
                <h1>{film.nameRu}</h1>
                <div className="time-wraper">
                    <div className="vrema"> <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 1C3.6875 1 1 3.6875 1 7C1 10.3125 3.6875 13 7 13C10.3125 13 13 10.3125 13 7C13 3.6875 10.3125 1 7 1Z" stroke="#BBBBBB" stroke-miterlimit="10" />
                        <path d="M7 3V7.5H10" stroke="#BBBBBB" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                        {film.filmLength}</div>
                    <div className="reting"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_b_90_168)">
                            <path d="M11.6121 4.04182L8.01478 3.51815L6.40666 0.252619C6.36274 0.163211 6.29048 0.0908326 6.20122 0.0468381C5.97736 -0.0638577 5.70532 0.0283888 5.59339 0.252619L3.98528 3.51815L0.38791 4.04182C0.288731 4.05601 0.198053 4.10285 0.128627 4.17381C0.0446959 4.26021 -0.00155415 4.37646 3.98784e-05 4.49701C0.0016339 4.61756 0.0509416 4.73254 0.137128 4.81669L2.73987 7.35844L2.12496 10.9475C2.11054 11.031 2.11976 11.1169 2.15159 11.1954C2.18341 11.2739 2.23655 11.3419 2.305 11.3917C2.37344 11.4415 2.45444 11.4711 2.53882 11.4771C2.6232 11.4831 2.70757 11.4654 2.78238 11.4258L6.00003 9.7313L9.21768 11.4258C9.30552 11.4726 9.40754 11.4882 9.5053 11.4712C9.75183 11.4286 9.9176 11.1945 9.8751 10.9475L9.26019 7.35844L11.8629 4.81669C11.9338 4.74715 11.9805 4.65633 11.9947 4.55698C12.0329 4.30863 11.8601 4.07872 11.6121 4.04182Z" fill="#BBBBBB" />
                        </g>
                        <defs>
                            <filter id="filter0_b_90_168" x="-4.81" y="-4.81" width="21.62" height="21.0983" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.405" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_90_168" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_90_168" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                        {film.ratingImdb}(IMDb)</div>
                </div>
                <div className="reliz-wraper">
                    <div className="reliz"> Release date
                        <div className="month-year">{film.year}</div>
                    </div>
                    <div className="zhanr"> Genre
                        <div className="zhanr-knopki">
                            {film.genres.map((g)=> 
                              <button >{g.genre}</button>
                            
                            )}
                            
                        </div>
                    </div>
                </div>
                <div className="opisanie-wraper">
                    <div className="opisnie">Описание</div>
                    <p>{film.description}</p>
                </div>

                <div className="izbranoe">
                    {vSiske ?
                        (<button onClick={handelDelete}>Удалить из избраного </button>) :
                        (<button onClick={myFunction}>Добавить в избраное </button>)}
                </div>

            </div>

        </div>

    )


}

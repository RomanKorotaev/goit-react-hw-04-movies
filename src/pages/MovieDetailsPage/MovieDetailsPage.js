import { useState, useEffect } from "react";
import {useParams} from "react-router-dom" // возвращает объект динамических параметров ( то ято идут после двоеточия в   <Route path="/movies/:movieID"> в App.js)
import MovieService from '../../components/Services/MovieService';

const movieService = new MovieService();

function MovieDetailsPage () {
   
    const {movieID} = useParams();
const [movie, setMovie] = useState (null);

useEffect ( ()=> { //Во время запроса по ID приводили его от строки к числу
    movieService.getMovieDetails( Number (movieID) ).then(res=> setMovie(res))
}, [movieID]) 

console.log ('movie =',movie );

//  console.log ('Сработала функция MovieDetailsPage ()  .  movieID=',movieID );

//  console.log ("typeof  movieID : ", typeof  movieID )

//  let oneMovie= {};

//     //Сначала записываем в класс айдишник, по которому будем искать, а потом вызываем соответствующую функцию поиска фильма по ID
//     movieService.movieIdFunc=    Number (movieID)   ;
//     movieService.getMovieDetails()
//     .then(res=> { 
//         console.log ("Сработала функция getMovieDetails  - res.data : ", oneMovie= res.data)
//         console.log ("oneMovie= res.data : ", oneMovie);
//         console.log ("typeof  oneMovie : ", typeof  oneMovie )
//     });

//     // Снова делаем запрос на бекенд, новый. Поскольку пользовалель напрямую может зайти
//     // по этой ссылке , миную сохранённый/закешированный список всех фильмов 

//     console.log ("3 oneMovie=  : ", oneMovie);

    return (
    <div>
            <p>MovieDetailsPage. </p>
            <p>{` Movie # ${movieID} `}</p>
            {/* <p>{` Original Title # ${oneMovie.original_title} `}</p> */}
            
            {movie && <>
                        <h2>Title: {movie.original_title} </h2>
                        <p>Popularity: {movie.popularity}</p>
                    </>
            }

    </div>
    )
}

export default MovieDetailsPage;
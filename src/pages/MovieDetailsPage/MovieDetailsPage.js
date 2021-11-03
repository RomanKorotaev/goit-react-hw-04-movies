import { useState, useEffect } from "react";
import {useParams, NavLink, Route, useRouteMatch} from "react-router-dom" // возвращает объект динамических параметров ( то ято идут после двоеточия в   <Route path="/movies/:movieID"> в App.js)
import MovieService from '../../components/Services/MovieService';
import Cast from '../Cast/Cast'
import Reviews from "../Reviews/Reviews";

const movieService = new MovieService();

function MovieDetailsPage () {
   
    const {movieID} = useParams();
    const [movie, setMovie] = useState (null);

    const {url}  = useRouteMatch(); // деструктуризируем из объекта useRouteMatch
    // свойство url для того чтобы отрендерить на этойже странице "неперезагружающиеся"
    //ссфлки NavLink с комопонентами  Cast и Reviews

useEffect ( ()=> { //Во время запроса по ID приводили его от строки к числу
    movieService.getMovieDetails( Number (movieID) ).then(res=> setMovie(res))
}, [movieID]) 

console.log ('movie =', movie );

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
            <p>компонент MovieDetailsPage, страница с детальной информацией о кинофильме  </p>
            <p>{` Movie # ${movieID} `}</p>
            {/* <p>{` Original Title # ${oneMovie.original_title} `}</p> */}
            
            {movie && <div>
                        <h2>Title: {movie.original_title} </h2>
                        <p>Popularity: {movie.popularity}</p>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path} `}/>
            
            <ul>
                <li >  <NavLink  to={`${url}/cast`}> Cast </NavLink> </li>

                <li >  <NavLink  to={`${url}/reviews`}> Reviews </NavLink></li> 
            </ul>

            <hr/>

           
            
            <hr/>
                      
            <Route  path='/movies/:movieID/cast'>  <Cast/> </Route>
            <Route  path='/movies/:movieID/reviews'>   <Reviews/> </Route>

            <hr/>
                    </div>
            }

    </div>
    )
}

export default MovieDetailsPage;
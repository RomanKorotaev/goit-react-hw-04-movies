import { useState, useEffect } from "react";
import {useParams, NavLink, Link, Route, useRouteMatch} from "react-router-dom" // возвращает объект динамических параметров ( то ято идут после двоеточия в   <Route path="/movies/:movieID"> в App.js)
import MovieService from '../../components/Services/MovieService';
import Cast from '../Cast/Cast'
import Reviews from "../Reviews/Reviews";
import {ImArrowLeft2, ImArrowUp2} from 'react-icons/im'


import s from './MovieDetailsPage.module.css'

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


    return (
    <div className={s.movieDetailsContiner} id="pageTop">
          
            {movie && <div>

                <Link className={s.goBackBtn} to={ `/` }> 
                    <ImArrowLeft2 style={{marginRight: 10 }}/>
                      Go back 
                </Link>

                <div className={s.movie_item} >

                    <div>
                        <img  className={s.movie_poster} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path} `} alt='Movie poster'/>
                    </div>

                    <div className={s.movie_description}>
                            <h2>Title: {movie.original_title} </h2>
                            <p className={s.description_item} > <b>Popularity: </b> {movie.popularity}</p>
                            <p className={s.description_item}> <b> Overview: </b> {movie.overview}</p>
                            <p className={s.description_item}> <b> Avarage vote: </b> {movie.vote_average}</p>
                            

                    </div>
     

                </div>
                        <h3 className={s.aditionalInf_title}>Aditional information</h3>

                                <ul className={s.aditionalInf_list}> 
                                    <li className={s.aditionalInf_item}>  <NavLink activeClassName=''  to={`${url}/cast`}> Cast </NavLink> </li>

                                    <li className={s.aditionalInf_item}>  <NavLink activeClassName=''  to={`${url}/reviews`}> Reviews </NavLink></li> 
                                </ul>
                                {/* Пример вложенного маршрута */}
                                <Route  path='/movies/:movieID/cast'>  <Cast/> </Route>
                                <Route  path='/movies/:movieID/reviews'>   <Reviews/> </Route>
                    </div>
            }
            <a href="#pageTop" className={s.goUpBtn}>
                <ImArrowUp2 style={{marginRight: 10 }}/>
                 Go up
            </a> 

    </div>
    )
}

export default MovieDetailsPage;
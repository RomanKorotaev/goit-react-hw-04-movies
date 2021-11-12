import { useState, useEffect } from "react";
import {useParams, NavLink, Link, Route, useRouteMatch} from "react-router-dom" // возвращает объект динамических параметров ( то ято идут после двоеточия в   <Route path="/movies/:movieID"> в App.js)
import MovieService from '../../components/Services/MovieService';
import Cast from '../Cast/Cast'
import Reviews from "../Reviews/Reviews";
import {ImArrowLeft2, ImArrowUp2} from 'react-icons/im'
import movieCamera from '../../image/movieCamera.png'

import { useHistory, useLocation } from "react-router";


import s from './MovieDetailsPage.module.css'

const movieService = new MovieService();

function MovieDetailsPage () {
   
    const {movieID} = useParams();
    const [movie, setMovie] = useState (null);

    const {url}  = useRouteMatch(); // деструктуризируем из объекта useRouteMatch
    // свойство url для того чтобы отрендерить на этойже странице "неперезагружающиеся"
    //ссылки NavLink с комопонентами  Cast и Reviews

useEffect ( ()=> { 
    
    //Во время запроса по ID приводили его от строки к числу и передаём в сеттер класса, который делает запрос на бекенд
    movieService.movieIdFunc =Number (movieID)
    movieService.getMovieDetails()
    .then(res=> setMovie(res))
}, [movieID]) 

console.log ('movie =', movie );




 {/* ---------------Start------------- */}

 const history = useHistory();
 console.log ("MovieDetailsPage  history = ", history)


 const location = useLocation ();
 console.log ("MovieDetailsPage  location = ", location)

 const handleClick = () => { 
    //  alert ("BACK")
    //  history.push ("/movies")

     console.log ( "location.state.from", location.state.from);
     console.log ( "location?.state?.from?.location", location?.state?.from?.location ?? `/movies`);
     history.push (location?.state?.from?.location ?? `/movies`)
 }

{/* --------------End-------------- */}


    return (
    <div className={s.movieDetailsContiner} >
          
            {movie && <div>

                {/* <Link className={s.goBackBtn} to={ `/` }> 
                    <ImArrowLeft2 style={{marginRight: 10 }}/>
                      Go back 
                </Link> */}

   {/* ---------------Start------------- */}

                <button className={s.goBackBtn} type="button" onClick={handleClick}>
                    <ImArrowLeft2 style={{marginRight: 10 }}/>
                    Go back!
                    </button>

    {/* --------------End-------------- */}






                <div className={s.movie_item} >

                    <div>
                        { movie.poster_path
                          ?<img  className={s.movie_poster} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path} `} alt='Movie poster'/>
                          :<img  className={s.movie_poster} src={movieCamera} alt='Movie poster'/>
                        }
                      
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
                                    <li className={s.aditionalInf_item}>  
                                            <NavLink 
                                                activeClassName=''
                                                 to={{
                                                    pathname: `${url}/cast`,
                                                    state: {
                                                        from: { location, label: `BACK TO...`},
                                                    }
                                                }}>   
                                                     Cast 
                                            </NavLink> 
                                    </li>
                                    
                                    <li className={s.aditionalInf_item}>
                                        <NavLink activeClassName=''
                                            // to={`${url}/reviews`}>
                                            to={{
                                                pathname: `${url}/reviews`,
                                                state: {
                                                    from: { location, label: `BACK TO...`},
                                                }
                                            }}> 
                                                 Reviews
                                        </NavLink>
                                    </li> 
                                    
                                </ul>
                                {/* Пример вложенного маршрута */}
                                <Route  path='/movies/:movieID/cast'>  <Cast/> </Route>
                                <Route  path='/movies/:movieID/reviews'>   <Reviews/> </Route>
                    </div>
            }
           

    </div>
    )
}

export default MovieDetailsPage;
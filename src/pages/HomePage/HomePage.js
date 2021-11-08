import MovieService from '../../components/Services/MovieService'

import s from './HomePage.module.css'

import { useState,   useEffect} from 'react';
import {Link, useRouteMatch} from 'react-router-dom'
import { useLocation } from "react-router";


const movieService = new MovieService();


function HomePage () {

    const location = useLocation ();
    console.log ("HomePage  location = ", location)

const {url} = useRouteMatch(); // берём url текущей страницы

const match = useRouteMatch(); 

console.log ('33333 const match = useRouteMatch; ', match)

    const [trendingToDayMovies, setTrendingToDayMovies] = useState ([]);

    useEffect ( ()=> {

        console.log ("Сработал useEffect"  );

        movieService.getTrendingMovieToday ()
        .then ( res => {
            setTrendingToDayMovies ([...res.data.results]);
            localStorage.setItem('trendingMovies', JSON.stringify( [...res.data.results] ));
         })

        console.log (" 1 trendingToDayMovies После распыления в useEffect = ", trendingToDayMovies);
    }, [])


    
    // const  tmpArr =  JSON.parse(localStorage.getItem('trendingMovies')) ;

    console.log ("2 trendingToDayMovies После распыления  = ", trendingToDayMovies);
    return (
          <ul className={s.trending_list}>  
              <h1 className={s.trending_title}> Trending today </h1>

                {trendingToDayMovies.map ( ({id, original_title, vote_count}) => (
                        <li className={s.trending_list_item} key = {id}>
                         {/* <Link to={ `{url}/${id}` }> {original_title} </Link>  */}
                      
                       {/* Вариане №1 */}
                        {/* <Link to={ `movies/${id}` }> {original_title} </Link> */}

                        {/* Вариане №2 */}
                        {/* Хревцова.Зан.10.  1:16:00 */}
                        <Link to={ {
                            pathname: `movies/${id}`,
                            state: {
                                from: { location, label: `BACK TO...`},
                            }

                        } }> {original_title} </Link>

                    </li>
                )) }
            </ul>
    )
    
}

export default HomePage;
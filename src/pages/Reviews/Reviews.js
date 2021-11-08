import {useParams} from "react-router-dom"
import { useState,   useEffect} from 'react';

import  MovieService from '../../components/Services/MovieService'

import s from './Reviews.module.css'

const movieService = new MovieService();



function Reviews () {

    const {movieID} = useParams();
    const [moviesReviews , setMoviesReviews ] = useState ([]);

    useEffect ( ()=> {
        //Во время запроса по ID приводили его от строки к числу и передаём в сеттер класса, который делает запрос на бекенд
        movieService.movieIdFunc =Number (movieID)
        movieService.getMovieReviews()
        .then ( res => {
            console.log ("Обзор фильма:", res)
                    console.log ("Обзор фильма ПОДРОБНО:", res.data.results)
                    if (res.data.results.length!==0) {
                        setMoviesReviews ([...res.data.results])
                        // setMoviesReviews ([...res.data])
                    } 
                })

        }, [])

    return ( <div> 
                <h1 className=''>  Reviews:  </h1>
            
                {moviesReviews.length<1
                ? <p> No reviews about this movie.</p>
                :  <ul>
                    { moviesReviews.map ( ({author, content} )=> (
                        <li className={s.reviewItem}>
                            <p className={s.reviewItem_author}><b>Author: </b>{author}</p>
                            <p className={s.reviewItem_content}><b>Review:</b> {content}</p>
                        </li>
                        ))} 
                    </ul>
                }

            </div> 
     )
}

export default Reviews;


import {useParams} from "react-router-dom"
import { useState,   useEffect} from 'react';

import  MovieService from '../../components/Services/MovieService'

import s from './Reviews.module.css'

const movieService = new MovieService();



function Reviews () {

    const {movieID} = useParams();
    const [moviesReviews , setMoviesReviews ] = useState ([]);

    useEffect ( ()=> {
        movieService.getMovieReviews(movieID)
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
                    <li>
                        <p>Author: {author}</p>
                        <p>Review: {content}</p>
                    </li>
                    ))} 
                </ul>
             }

    </div> 
     )
}

export default Reviews;


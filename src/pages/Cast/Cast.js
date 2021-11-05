import {useParams} from "react-router-dom"
import { useState,   useEffect} from 'react';

import  MovieService from '../../components/Services/MovieService'

import s from './Cast.module.css'

const movieService = new MovieService();



function Cast () {

    const {movieID} = useParams();

    const [moviesCast , setMoviesCast ] = useState ([]);

        console.log ("Для тестирования новых функций, проверим useParams и получим диннамический параметр из адресной строки - идентификатор фильма movieID : ", movieID)

    useEffect ( ()=> {
        movieService.getMovieCredits(movieID)
        .then ( res => {
            console.log ("Список актёров ПОДРОБНО", res.data.cast)
            setMoviesCast ([...res.data.cast])
                })

        }, [])

        return  (
            <div>  <h2 className={s.trending_title}> Actors:  </h2>
            
            {moviesCast.length<1
                ? <p> No information about actors.</p>
                : <ul className={s.actors_list}> 
                    {/* <h1 className={s.trending_title}> Actors:  </h1> */}
                        {moviesCast.map ( ({id,name, character, profile_path}) => (
                                <li className={s.trending_list_item} key = {id}>
                                    <div className={s.actorPhotoTmb}>
                                            <img  className={s.actorPhoto} alt='Picture of actor'  src={`https://image.tmdb.org/t/p/w200/${profile_path} ` }/>
                                    </div>
                                    
                                    <div className={s.actorDescr}> 
                                        <p>Name of actor: {name}</p>
                                        <p>Character in movie: {character}</p>
                                        <p></p>
                                    </div> 
                                </li>
                        )) }
                    </ul>
                }
            </div>
        
        )
}

export default Cast;
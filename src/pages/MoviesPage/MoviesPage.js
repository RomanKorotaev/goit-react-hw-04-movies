
import { useState, useEffect } from "react";
import {useParams, Link, useRouteMatch} from "react-router-dom" // возвращает объект динамических параметров ( то ято идут после двоеточия в   <Route path="/movies/:movieID"> в App.js)
import MovieService from '../../components/Services/MovieService';
import s from './MoviesPage.module.css'
import SearchForm from "../SearchForm/SearchForm";




const movieService = new MovieService();


function MoviesPage () {

    const {url} = useRouteMatch(); // берём url текущей страницы

    const [ quiryWord, setQuiryWord] = useState ("");
    const [ moviesArray, setMoviesArray] = useState ([]);


     useEffect ( ()=> { 

        if ( quiryWord!=="") {
        movieService.getMovieQuery(quiryWord)
            .then (res => {
                console.log ("СПИСОК НАЙДЕННЫХ ФИЛЬМОВ : ", res)
                console.log ("СПИСОК НАЙДЕННЫХ ФИЛЬМОВ - ПОДРОБНО : ", res.data.results)
                    if (res.data.results.length !== 0) { 
                        setMoviesArray([...res.data.results]) // ВАЖНО СИНТАКСИС: именно так в данной функции записываем массив
                        console.log (" Записали hits  в   -  moviesArray через хуки (аналог componentDidUpdate )",  moviesArray );
                    }  
            })
            .catch(() => {
                alert("Something wrong. Please try again later");
              })

            }

       }, [quiryWord] )



    const handleSubmitForm = quiryWord => {
        console.log("Вызвана функция handleSubmitForm = (quiryWord) : ", quiryWord);
        setQuiryWord (quiryWord) ;
      }

      console.log ("quiryWord = ", quiryWord)


          
    return (

        <div>
                {/* <p> компонент MoviesPage, страница поиска фильмов по ключевому слову.</p> */}
                < SearchForm onFormSubmit= {handleSubmitForm} />
                

                <ul>
                        { moviesArray.map ( ({id, original_title}) => (
                                <li key = {id}>
                                    <Link to={ `movies/${id}` }> {original_title} </Link>
                                </li>
                            )) 
                        }
                </ul>
        </div>

    )
}

export default MoviesPage;
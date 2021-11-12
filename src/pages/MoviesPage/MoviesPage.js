
import { useState, useEffect } from "react";
import {useParams, Link, useRouteMatch} from "react-router-dom" // возвращает объект динамических параметров ( то ято идут после двоеточия в   <Route path="/movies/:movieID"> в App.js)
import MovieService from '../../components/Services/MovieService';
import s from './MoviesPage.module.css'
import SearchForm from "../SearchForm/SearchForm";
import {useHistory, useLocation } from "react-router";



const movieService = new MovieService();


function MoviesPage () {

    const location = useLocation ();
    const history = useHistory ();

    const {url} = useRouteMatch(); // берём url текущей страницы

    const [ quiryWord, setQuiryWord] = useState ("");
    const [ moviesArray, setMoviesArray] = useState ([]);

    // localStorage.setItem('moviesLocalStorage',   JSON.stringify( [])  );
    // const [ moviesArray, setMoviesArray] = useState ( 'moviesLocalStorage',   JSON.stringify( ) );


     useEffect ( ()=> { 

        if ( quiryWord!=="") {

        movieService.query= quiryWord; //Устанавливаем в классе, который работает с бекендом, значение поискового слова
        movieService.getMovieQuery()
            .then (res => {
                console.log ("СПИСОК НАЙДЕННЫХ ФИЛЬМОВ : ", res)
                console.log ("СПИСОК НАЙДЕННЫХ ФИЛЬМОВ - ПОДРОБНО : ", res.data.results)
                    if (res.data.results.length !== 0) { 
                        // setMoviesArray([...res.data.results]) // ВАЖНО СИНТАКСИС: именно так в данной функции записываем массив
                        console.log (" Записали hits  в   -  moviesArray через хуки (аналог componentDidUpdate )",  moviesArray );

                         // Записываем массив фильмов в localStorage
                        localStorage.setItem('moviesLocalStorage',   JSON.stringify( [...res.data.results])  );
                        setMoviesArray ( JSON.parse(localStorage.getItem('moviesLocalStorage') ) );                       
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
                <ul className={s.movie_list}>
                        { moviesArray.map ( ({id, original_title}) => (
                                <li className={s.movie_list_item} key = {id}>
                                   
                                                {/* Вариант №1 */}
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
                            )) 
                        }
                </ul>
        </div>

    )
}

export default MoviesPage;
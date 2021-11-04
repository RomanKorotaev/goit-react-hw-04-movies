
import { useState, useEffect } from "react";
// import {useParams, NavLink, Route, useRouteMatch} from "react-router-dom" // возвращает объект динамических параметров ( то ято идут после двоеточия в   <Route path="/movies/:movieID"> в App.js)
import MovieService from '../../components/Services/MovieService';
import s from './MoviesPage.module.css'
import SearchForm from "../SearchForm/SearchForm";




const movieService = new MovieService();


function MoviesPage () {

    const [ quiryWord, setQuiryWord] = useState ("");



    movieService.getMovieQuery("bond")
    .then (res => {
        console.log ("СПИСОК НАЙДЕННЫХ ФИЛЬМОВ : ",res)
        console.log ("СПИСОК НАЙДЕННЫХ ФИЛЬМОВ - ПОДРОБНО : ",res.data.results)

    });




    // const handleSubmitForm = quiryWord => {
    //     console.log("Вызвана функция handleSubmitForm = (quiryWord) : ", quiryWord);
    //     setQuiryWord (quiryWord) ;
    //   }

    
          
    return (
        <div>
                <p> компонент MoviesPage, страница поиска фильмов по ключевому слову.</p>
                < SearchForm />
        </div>

    )
}

export default MoviesPage;
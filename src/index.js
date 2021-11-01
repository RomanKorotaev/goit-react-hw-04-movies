import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


console.log ("TEST : index.js")

// fetch ('https://api.themoviedb.org/3/trending/movie/day?api_key=a6a8db998509fdc1dbc99a854b3d39bd')
//     .then(response => response.json())
//     .then(data => {
//     console.log (" getTrendingMovieToday () список самых популярных фильмов на сегодня  : ",data);
//     return  data;
//     });

// fetch ('https://api.themoviedb.org/3/search/movie?api_key=a6a8db998509fdc1dbc99a854b3d39bd&include_adult=false&query=batman')
// .then(response => response.json())
// .then(data => {
// console.log ("  getQueryMovie () поиск кинофильма по ключевому слову на странице фильмов  : ", data);
// return  data;
// });

// fetch ('https://api.themoviedb.org/3/movie/268?api_key=a6a8db998509fdc1dbc99a854b3d39bd')
//     .then(response => response.json())
//     .then(data => {
//     console.log ("  getMovieDetails () запрос полной информации о фильме ( по ID)  : ", data);
//     return  data;
//     });

//     fetch ('https://api.themoviedb.org/3/movie/268/credits?api_key=a6a8db998509fdc1dbc99a854b3d39bd')
//     .then(response => response.json())
//     .then(data => {
//     console.log (" getMovieCredits () запрос информации о актёрском составе   : ", data);
//     return  data;
//     });
    

//     fetch ('https://api.themoviedb.org/3/movie/268/reviews?api_key=a6a8db998509fdc1dbc99a854b3d39bd')
//     .then(response => response.json())
//     .then(data => {
//     console.log (" getMovieReviews() запрос обзоров для страницы кинофильма   : ", data);
//     return  data;
//     });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import axios from "axios";

const KEY_API = 'a6a8db998509fdc1dbc99a854b3d39bd' ;
const BASE_URL = 'api.themoviedb.org/3'; 


class  MovieService {
    constructor() {
              this.searchQuery = '';
              this.page = 1;
              this.movieID = 0;
            }
            

// список самых популярных фильмов на сегодня (для создания коллекции на главной странице.) . Обязательные параметры: -----
 getTrendingMovieToday () {
    return  axios.get ('https://api.themoviedb.org/3/trending/movie/day?api_key=a6a8db998509fdc1dbc99a854b3d39bd')
    .then(data => {
    // console.log (" getTrendingMovieToday () список самых популярных фильмов на сегодня  : ",data);
    return  data;
    })
    .catch(err => {
        console.log ("Oh no! Some problem!", err)
        alert ("Oh no! Some problem!");
    });
}


// поиск кинофильма по ключевому слову на странице фильмов . Обязательные параметры: query=batman
 getMovieQuery () {
    return  axios.get (`https://api.themoviedb.org/3/search/movie?api_key=a6a8db998509fdc1dbc99a854b3d39bd&include_adult=false&query=${this.searchQuery}`)
            .then(data => {
            // console.log ("  getQueryMovie () поиск кинофильма по ключевому слову на странице фильмов  : ", data);
            return  data;
    })
    .catch(err => {
        console.log ("Oh no! Some problem!", err)
        alert ("Oh no! Some problem!");
    });
}


// запрос полной информации о фильме для страницы кинофильма .    Обязательные параметры: id
//https://api.themoviedb.org/3/movie/{movie_id---268}?api_key=<<api_key>>&language=en-US
getMovieDetails (newMovieID) {
    return  axios.get (`https://api.themoviedb.org/3/movie/${newMovieID}?api_key=a6a8db998509fdc1dbc99a854b3d39bd`)
            .then(res => {
            console.log ("  getMovieDetails (newMovieID) () запрос полной информации о фильме для страницы кинофильма   res.data : ", res.data);
            return  res.data;
    })
    .catch(err => {
        console.log ("Oh no! Some problem!", err)
        alert ("Oh no! Some problem!");
    });
}


// запрос информации о актёрском составе                                 Обязательные параметры: id
//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
 getMovieCredits (newMovieID) {
    return  axios.get (`https://api.themoviedb.org/3/movie/${newMovieID}/credits?api_key=a6a8db998509fdc1dbc99a854b3d39bd`)
        .then(data => {
        // console.log (" getMovieCredits () запрос информации о актёрском составе   : ", data);
        return  data;
    })
    .catch(err => {
        console.log ("Oh no! Some problem!", err)
        alert ("Oh no! Some problem!");
    });
}

// запрос обзоров для страницы кинофильма.                                     Обязательные параметры: id
//https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
getMovieReviews() {
    return  axios.get ('https://api.themoviedb.org/3/movie/268/reviews?api_key=a6a8db998509fdc1dbc99a854b3d39bd')
        .then(data => {
        // console.log (" getMovieReviews() запрос обзоров для страницы кинофильма   : ", data);
        return  data;
    })
    .catch(err => {
        console.log ("Oh no! Some problem!", err)
        alert ("Oh no! Some problem!");
    });
}

        get query() {
            return this.searchQuery;
        }
        
        set query(newQuery) {
            this.searchQuery = newQuery;
        }

        get movieIdFunc() {
            return this.movieID;
        }
        
        set  movieIdFunc(newID) {
            this.movieID = newID;
        }
   
        incerementPage() {
            this.page += 1;
         }
   
        resetPage() {
            this.page = 1;
        }

}

export default MovieService;


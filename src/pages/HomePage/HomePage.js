import MovieService from '../../components/Services/MovieService'

import { useState,   useEffect} from 'react';


const movieService = new MovieService();


function HomePage () {

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
          <ul className=''>  Trending today
                {trendingToDayMovies.map (data => (
                    <li  key = {data.id}>
                        {data.original_title}
                    </li>
                )) }
            </ul>
    )
}

export default HomePage;
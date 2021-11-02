import MovieService from '../../components/Services/MovieService'

import { useState,   useEffect} from 'react';


const movieService = new MovieService();


function HomePage () {

    const [trendingToDayMovies, setTrendingToDayMovies] = useState ([]);

    let tmpArr = [];

    movieService.getTrendingMovieToday ()
    .then ( res => {
        tmpArr= [...res.data.results];
        console.log (" tmpArr= ",  tmpArr);
        localStorage.setItem('trendingMovies', JSON.stringify( tmpArr));
    })

     let tmpArr2 = JSON.parse(localStorage.getItem('trendingMovies'));

    //  if (tmpArr2.length!==0) {
    //     setTrendingToDayMovies (...tmpArr2);
    //     console.log (" trendingToDayMovies = ", trendingToDayMovies);
    //  }

    useEffect ( ()=> {

        if (tmpArr2.length!==0) {
            setTrendingToDayMovies (...tmpArr2);
            console.log (" trendingToDayMovies = ", trendingToDayMovies);
        }

    }, [])


    return (

      

          <ul className=''>  Trending today
          
          {tmpArr2.map (data => (
            <li  key = {data.id}>
                {data.original_title}
            </li>

          )) }

</ul>

    )
    
  
}

export default HomePage;
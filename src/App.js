import logo from './logo.svg';
import './App.css';

import MovieService from './components/Services/MovieService';

import {NavLink, Route, Switch} from 'react-router-dom';

import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage'

const movieService = new MovieService();

function App() {

  // movieService.getTrendingMovieToday ();
  // movieService.query = "spiderman";
  // movieService.getMovieQuery();
  movieService.getMovieDetails (436969)
  

  return (
    <div className="App">   
         <nav>

            <ul>
                <li>
                  <NavLink
                    exact
                    to="/"
                    className =""
                    activeClassName=""> Home </NavLink>
                </li>


                {/* ----------------MoviesPage ------------------ */}
                <li>
                  <NavLink 
                    to="/movies"
                    className =""
                    activeClassName=""> Movies </NavLink>
                </li>

                {/* <li>
                  <NavLink 
                  to="/movie-details-page"
                  className =""
                  activeClassName=""> MovieDetailsPage </NavLink>
                </li> */}

            </ul>

  </nav>


    <Switch>
      {/* <Route exact path="/" >  < HomePage /> </Route> */}
          <Route exact path="/" component = {HomePage} />

          <Route path="/movies/:movieID">  <MovieDetailsPage/> </Route>
          
          <Route exact path="/movies">  <MoviesPage/> </Route>

          <Route> <p>Page not found </p> </Route>
    </Switch>

    </div>
  );
}

export default App;

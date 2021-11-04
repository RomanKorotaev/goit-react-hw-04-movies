import logo from './logo.svg';
import './App.css';

import MovieService from './components/Services/MovieService';

import {NavLink, Route, Switch} from 'react-router-dom';
import "../node_modules/modern-normalize/modern-normalize.css"

import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage'

const movieService = new MovieService();

function App() {

 

  return (
    <div className="App">   
         <nav className ="navigation">

            <ul className ="navigation_list">
                <li  className ="navigation_item">
                  <NavLink
                    exact
                    to="/"
                    className ="navigation_item_link"
                    activeClassName="active_link"> Home </NavLink>
                </li>


                {/* ----------------MoviesPage ------------------ */}
                <li className ="navigation_item">
                  <NavLink 
                    to="/movies"
                    className ="navigation_item_link"
                    activeClassName="active_link"> Movies </NavLink>
                </li>

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

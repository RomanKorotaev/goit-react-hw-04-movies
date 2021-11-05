
import {NavLink, Route, Switch} from 'react-router-dom';
import "../node_modules/modern-normalize/modern-normalize.css"
import Loader from "react-loader-spinner";
import s from './App.module.css';
import MovieService from './components/Services/MovieService';
//STATIC IMPORTS
// import HomePage from './pages/HomePage';
// import MoviesPage from './pages/MoviesPage';
// import MovieDetailsPage from './pages/MovieDetailsPage'

//DYNAMIC IMPORTS . All Components have to export DEFAULT !!!
import {lazy, Suspense} from'react';
const HomePage = lazy( ()=> import('./pages/HomePage') ) 
const MoviesPage = lazy( ()=> import('./pages/MoviesPage') )
const  MovieDetailsPage = lazy( ()=> import('./pages/MovieDetailsPage') )

const movieService = new MovieService();

function App() {

 

  return (
    <div className="">   
         <nav className ={s.navigation}>

            <ul className ={s.navigation_list}>
                <li  className ={s.navigation_item}>
                  <NavLink
                    exact
                    to="/"
                    className ={s.navigation_item_link}
                    activeClassName={s.active_link}> Home </NavLink>
                </li>


                {/* ----------------MoviesPage ------------------ */}
                <li className ={s.navigation_item}>
                  <NavLink 
                    to="/movies"
                    className ={s.navigation_item_link}
                    activeClassName={s.active_link}> Movies </NavLink>
                </li>

            </ul>

  </nav>

    {/* <Suspense fallback="Wait please...">   Этот компонент нужен для корректной работы <Switch> при диннамическом импорте наших компонентов */}
    <Suspense fallback={
                      <Loader
                        className="Loader"
                        type="Circles"
                        color="rgb(143, 85, 10)"
                        height={100}
                        width={100}
                      />
                    }>

      <Switch>
        {/* <Route exact path="/" >  < HomePage /> </Route> */}
            <Route exact path="/" component = {HomePage} />

            <Route path="/movies/:movieID">  <MovieDetailsPage/> </Route>
            
            <Route exact path="/movies">  <MoviesPage/> </Route>

            <Route> <p>Page not found </p> </Route>
      </Switch>
    </Suspense>
    </div>
  );
}

export default App;

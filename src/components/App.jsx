import Homepage  from 'pages/Homepage';
import MovieDetails  from 'pages/MovieDetails';
import MoviesPage  from 'pages/MoviesPage';
import { Routes, Route, Link } from 'react-router-dom';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export const App = () => {
   return (
      <>
         <nav>
            <ul>
               <li>
                  <Link to="/">Home</Link>
               </li>
                <li>
                  <Link to="">Movies</Link>
               </li>
                <li>
                  <Link to="">MovieDetails</Link>
               </li>
            </ul>
         </nav>
         <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/movies' element={<MoviesPage/>} /> 
            <Route path='/movies/:movieId' element={<MovieDetails />}>
               <Route path='cast' element={<Cast />} />
               <Route path='reviews' element={<Reviews />} />
            </Route>
         </Routes>
      </>
  )
};
  
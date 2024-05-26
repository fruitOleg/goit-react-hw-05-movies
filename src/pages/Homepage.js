import { fetchHomepage } from 'components/api';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    try {
      fetchHomepage().then(response => {
        setMovies(response.data.results);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <footer> ©2024 Created by Kostyiantyn Kudriashov </footer>
      <GlobalStyle />
    </div>
    
  );
};
export default Homepage;

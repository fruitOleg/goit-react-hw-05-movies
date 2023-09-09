import { fetchHomepage } from 'components/api';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
    </div>
  );
};
export default Homepage;

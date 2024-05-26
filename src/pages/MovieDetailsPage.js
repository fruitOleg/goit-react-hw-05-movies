import { fetchMovieId } from 'components/api';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Loader } from 'components/Loader';

const MovieDetailsPage = () => {
  // const date = new Date();
  const [singleMovie, setSingleMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    try {
      fetchMovieId(movieId).then(response => {
        setSingleMovie(response.data);
      });
    } catch (error) {
      console.error(error);
    }
  }, [movieId]);

  return (
    <>
      {singleMovie && (
        <>
          <button>
            <Link to={backLinkHref}>Go back</Link>
          </button>
          <div>
            <img
              src={'https://image.tmdb.org/t/p/w300' + singleMovie.poster_path}
              alt={singleMovie.original_title}
            ></img>
            <div>
              <h2>
                {singleMovie.original_title} 
              </h2>
              <p>User Score: {Math.round(singleMovie.vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{singleMovie.overview}</p>
              <h3>Genres</h3>
              <ul>
                {singleMovie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
      <div>
        <p>Additional Information</p>
        <ul>
          <li>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
        <hr />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
export default MovieDetailsPage;

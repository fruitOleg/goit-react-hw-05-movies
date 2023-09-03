import { Link } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <>
      <p>MovieDetails</p>
      <ul>
        <li>
          <Link to="Cast"></Link>
        </li>
        <li>
          <Link to="Reviews"></Link>
        </li>
      </ul>
    </>
  );
};

export default MovieDetails;

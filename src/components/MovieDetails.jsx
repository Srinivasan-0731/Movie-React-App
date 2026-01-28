import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import FavoriteIcon from '@mui/icons-material/Favorite';

const API_KEY = "9871ed81";

function MovieDetails() {

  const { imdbID } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Details", data);
        setMovie(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [imdbID]);

  if (loading) return <h2>Loading...</h2>;
  if (!movie || movie.Response === "False") {
    return <h2>Movie not found</h2>;
  }

  const addFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.find(fav => fav.imdbID === movie.imdbID)) {
      favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert('Movie added to favorites!');
    } else {
      alert('Movie is already in favorites!');
    }
  };

  return (
    <>
      <div className='movie-details text-white font-sans '>
        <div className='top-bar'>

          <button
            onClick={addFavorites}
            className="fav-btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl m-8 text-lg"
          >
            <FavoriteIcon /> Favorites
          </button>

          <button
            onClick={() => navigate(-1)}
            className="back-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl m-8 text-lg"
          >
            <KeyboardBackspaceIcon /> Home Page
          </button>
        </div>
        <div className='movie-poster'>
          <img src={
            movie.Poster && movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450?text=No+Image"
          }
            alt={movie?.Title} className='m-8 rounded-lg shadow-md shadow-blue-50'

          />
        </div>

        <div className='movie-info'>
          <h1>{movie.Title}</h1>

          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        </div>

      </div>
    </>

  );
}

export default MovieDetails;

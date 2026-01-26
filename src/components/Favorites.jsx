import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


function Favorites() {
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    const removeFromFavorites = (imdbID) => {
        const updatedFavorites = favorites.filter(movie => movie.imdbID !== imdbID);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };
    return (
        <div className='favorites-container'>
            <div className='page-header'>
                <h2>My Favorite Movies</h2>

                <button onClick={() => navigate(-1)}
                    className="back-button bg-blue-500 hover:bg-blue-700 text-white font-bold rounded m-8 text-lg">
                    <KeyboardBackspaceIcon /> Home Page
                </button>
            </div>
            {favorites.length === 0 && (
                <p>No favorite movies added yet.</p>
            )}

            <div className='favorites-grid text-white gap-12 flex-wrap'>
                {favorites.map((movie) => (
                    <div key={movie.imdbID} className='favorite-card'>
                        <img
                            src={movie.Poster}
                            alt={movie.Title}
                            width="200"
                        />
                        <h3>{movie.Title}</h3>


                        <button onClick={() => removeFromFavorites(movie.imdbID)} className='remove-btn'>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Favorites;

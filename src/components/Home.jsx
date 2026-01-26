import React from 'react'
import { useState } from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';

 function Home() {

    const [allMovieData, setAllMovieData] = useState([]);
    const [searchMovie, setSearchMovie] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchMovieData = async() => {
        setLoading(true);
        const response = await fetch(
            `https://omdbapi.com/?s=${searchMovie}&apikey=3f2af509`,
        );

        const data = await response.json();
        setAllMovieData(data.Search || []);
        setLoading(false);
    };

  return (
    <div className='bg'>
        <NavBar />
        <SearchBar
            searchMovie={searchMovie}
            setSearchMovie={setSearchMovie}
            fetchMovieData={fetchMovieData}
        />
        {allMovieData && allMovieData.length > 0 ? (
            <MovieCard allMovieData={allMovieData} loading={loading} />
        ) : (
            <h1 style={{ textAlign: "center", marginTop: "100px", opacity: "0.8" }}>
                Search Movies
            </h1>
        )}
      
    </div>
  )
}

export default Home;

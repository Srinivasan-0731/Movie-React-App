import React from 'react'
import { useState } from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import MovieCard from './MovieCard';
import Pagination from './Pagination';

const API_KEY = '9871ed81';

function Home() {

    const [allMovieData, setAllMovieData] = useState([]);
    const [searchMovie, setSearchMovie] = useState("");
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [type, setType] = useState("");
    const [totalResults, setTotalResults] = useState(0);

    const fetchMovieData = async (pageNumber = 1, movieType = type) => {
        if (!searchMovie.trim()) {
            setAllMovieData([]);
            setTotalResults(0);
            return;
        }
        setLoading(true);
        setPage(pageNumber);
        const response = await fetch(
            `https://omdbapi.com/?apikey=${API_KEY}&s=${searchMovie}&page=${pageNumber}&type=${movieType}`
        );

        const data = await response.json();
        console.log("API DATA", data);

        if (data.Response === "True") {
        setAllMovieData(data.Search);
        setTotalResults(Number(data.totalResults));
        }else{
        setAllMovieData([]);
        setTotalResults(0);
        }

        setLoading(false);
    };

    return (
        <>
            <div className='bg'>
                <NavBar setType={setType} fetchMovieData={fetchMovieData} />
                <SearchBar
                    searchMovie={searchMovie}
                    setSearchMovie={setSearchMovie}
                    fetchMovieData={fetchMovieData}
                />

                {totalResults > 10 && (
                    <Pagination
                        page={page}
                        totalPages={Math.ceil(totalResults / 10)}
                        onPageChange={(newPage) => fetchMovieData(newPage)}
                    />
                )}

                <MovieCard allMovieData={allMovieData} loading={loading} />

                
            </div>
        </>
    )
}

export default Home;

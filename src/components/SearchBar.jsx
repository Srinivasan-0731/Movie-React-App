import React from "react";

function SearchBar({ searchMovie, setSearchMovie, fetchMovieData }) {
	return (
		<div className="searchBox d-flex justify-center my-4 gap-2">
			<input
				type="text"
                className="form-control w-50"
				placeholder="Search here..."
				value={searchMovie}
				onChange={(e) => {
					setSearchMovie(e.target.value);
				}}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						fetchMovieData(1);
					}
				}}
			/>
			<button onClick={() => fetchMovieData(1)}>
				Search
			</button>
		</div>
	);
}

export default SearchBar;
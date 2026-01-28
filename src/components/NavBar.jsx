import React from "react";
import { Link } from "react-router-dom";
// import Logo from "/favicon.png";

function NavBar({ setType, fetchMovieData}) {
	return (
		<nav className="navbar bg-dark text-white" data-bs-theme="dark">
			<div className="container-fluid flex justify-between items-center font-bold bg-blue-800 p-6 h-16 gap-2 sm:px-2 md:p-4">
				<Link to="/" className="nav-Link text-white text-3xl font-bold items-center">
					Movie Search
				</Link>
				<select className="select" onChange={(e) => {
					setType(e.target.value);
					fetchMovieData(1, e.target.value);
				}}>
					<option value="">All</option>
					<option value="">Movie</option>
					<option value="">Series</option>
					<option value="">Episode</option>
				</select>
				<Link to='/'>Home</Link>
				<Link to='/favorites'className="favorite">Favorites</Link>
			</div>
		</nav>
	);
}

export default NavBar;
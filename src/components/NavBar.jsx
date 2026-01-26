import React from "react";
import { Link } from "react-router-dom";
// import Logo from "/favicon.png";

function NavBar() {
	return (
		<nav className="navbar bg-dark text-white" data-bs-theme="dark">
			<div className="container-fluid flex justify-between items-center font-bold bg-blue-800 p-6 h-16">
				<Link to="/" className="nav-Link text-white text-5xl font-bold items-center">
					Movie Search
				</Link>
				<Link to='/'>Home</Link>
				<Link to='/favorites'className="favorite">Favorites</Link>
			</div>
		</nav>
	);
}

export default NavBar;
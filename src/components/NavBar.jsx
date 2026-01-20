import React from "react";
// import Logo from "/favicon.png";

function NavBar() {
	return (
		<nav className="navbar bg-dark text-white" data-bs-theme="dark">
			<div className="container-fluid">
				<a className="navbar-brand font-bold flex justify-center items-center text-5xl  max-w-full bg-red-800 shadow-lg shadow-red-600 h-16" href="#">
					
					Movie Search 
				</a>
			</div>
		</nav>
	);
}

export default NavBar;
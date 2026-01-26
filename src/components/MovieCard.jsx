import React from "react";
import imgPlace from "../assets/img.png";
import { Link } from "react-router-dom";


function MovieCard({ allMovieData, loading }) {
    return (
        <div>
            {loading ? (
                <div className="d-flex justify-content-center my-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="card-container">
                    {allMovieData ? (
                        allMovieData.map((movie) => {
                            const Poster =
                                movie.Poster && movie.Poster !== "N/A";
                            return (
                                <Link
                                    to={`/movie/${movie.imdbID}`}
                                    key={movie.imdbID}
                                    className="card"
                                    style={{ width: "18rem" }}
                                >
                                    <img
                                        src={
                                            movie?.Poster && movie.Poster !== "N/A"
                                                ? movie.Poster
                                                : imgPlace
                                        }
                                        className="card-img-top"
                                        alt="{movie.Title}"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {movie.Title.slice(0, 50)}
                                        </h5>
                                        <p className="card-text">
                                            Year : {movie.Year}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })
                    ) : (
                        <h2 className="no-data">No Data</h2>
                    )}
                </div>
            )}
        </div>
    );
}

export default MovieCard;
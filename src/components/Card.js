import React from "react";

export default function Card(props) {
    const {movie} = props;

    return (
        <div className="resultCard">
            <figure className="image is-48x48">
                <img src={movie.Poster} alt={movie.Title} />
            </figure>
            <h4>{movie.Title}</h4>
            <span>Year: {movie.Year}</span>
        </div>
    );
}


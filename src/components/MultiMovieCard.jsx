import React from "react";
import MovieCardComp from "./MovieCard";

function MultiMovieCard({ movies }) {
  return (
    <>
      <div className="multi-card">
        {movies &&
          movies.map((movie) => (
            <MovieCardComp movies={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}

export default MultiMovieCard;

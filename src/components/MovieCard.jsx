import React from "react";
import "../styles/Moviecard.css";

function MovieCardComp({ movies }) {
  return (
    <>
      <div className="card-main">
        <div className="card">
          <div className="poster">
            <img
              src={`https://image.tmdb.org/t/p/original${movies.poster_path}`}
              alt=""
            />
          </div>
          <div className="Details">
            <h2>{movies.title.split(" ").slice(0, 7).join(" ")}</h2>
            <h5>2021 | PG | 1hr 18min </h5>

            <div className="rating">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <span>{movies.vote_average.toFixed(1)}/10</span>
            </div>

            <div className="tags">
              <span className="tag">Italian</span>
              <span className="tag">Drama</span>
              <span className="tag">India</span>
            </div>

            <p className="desc">
              {movies.overview.split(" ").slice(0, 10).join(" ")}...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCardComp;

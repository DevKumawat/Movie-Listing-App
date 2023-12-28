import { useEffect, useState } from "react";
import "../styles/MovieListComp.css";
import MultiMovieCard from "./MultiMovieCard";

function MovieListComp() {
  const [movies, setMovies] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("popular");
  const [activeButton, setActiveButton] = useState("popular");
  const [count, setCount] = useState(1);

  const fetchMovieData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${selectedCategory}?api_key=a5c238d026127790f7ea673be21bb077&language=en-US&page=${count}`
    );

    const result = await response.json();
    setMovies(result.results);
    // console.log(result.results);
  };
  const fetchTrendingData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=a5c238d026127790f7ea673be21bb077"
    );

    const result = await response.json();
    setMovies(result.results);
    // console.log(result.results);
  };

  function trendingData(category) {
    setActiveButton(category);
    fetchTrendingData();
  }

  useEffect(() => {
    fetchMovieData();
  }, [selectedCategory , count]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setActiveButton(category);
    setCount(1)
  };

  const nextPage = () => {
    setCount(count + 1);
  };
  const prevPage = () => {
    if (count > 1) {
      setCount(count - 1);
      // console.log(count);
    }
  };

  return (
    <>
      <div className="Box">
        <h1>Categories</h1>
        <div className="category">
          <button
            onClick={() => handleCategoryClick("popular")}
            className={activeButton === "popular" ? "active" : ""}
          >
            All
          </button>
          <button
            onClick={() => handleCategoryClick("upcoming")}
            className={activeButton === "upcoming" ? "active" : ""}
          >
            Upcoming
          </button>
          <button
            onClick={() => handleCategoryClick("top_rated")}
            className={activeButton === "top_rated" ? "active" : ""}
          >
            Action
          </button>
          <button
            onClick={() => handleCategoryClick("now_playing")}
            className={activeButton === "now_playing" ? "active" : ""}
          >
            Top Rated
          </button>
          <button
            onClick={() => trendingData("trending")}
            className={activeButton === "trending" ? "active" : ""}
          >
            Horror
          </button>
        </div>

        <MultiMovieCard movies={movies} />

        <div className="buttons next-prev">
          <div className="button page" onClick={() => prevPage()}>
            <i class="fa-solid fa-arrow-left"></i> Prev
          </div>
          <div className="button button2" onClick={() => nextPage()}>
            Next <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieListComp;

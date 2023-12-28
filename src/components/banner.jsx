import React, { useState, useEffect } from "react";
import "../styles/Banner.css";
import MovieSwiperComp from "./MovieSwiper";
import "swiper/css";


function BannerComp() {
  const [movies, setMovies] = useState([]);
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);

  const fetchData = async () => {
    
      let response = await fetch("http://localhost:5175/data/movieData.json");
      let data = await response.json();
      setMovies(data);
    
      // console.error("Error fetching data:", error);
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleImageChange = (index) => {
    setSelectedMovieIndex(index);
  };

  return (
    <>
      <div className="banner">
        {movies && movies.map((oneObj, index) => (
          <div key={index} className="movie">
            <img
              src={oneObj.bgImg}
              alt=""
              className={`bgIamge ${index === selectedMovieIndex ? "active" : ""}`}
            />
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div
                    className={`left-side ${index === selectedMovieIndex ? "active" : ""}`}
                  >
                    <img src={oneObj.titleImg} alt="" className="title-image" />
                    <div className="details">
                      <span>{oneObj.year}</span>
                      <span>
                        {" "}
                        <i>{oneObj.ageLimit}</i>
                      </span>
                      <span>{oneObj.length}</span>
                      <span>{oneObj.category}</span>
                    </div>
                    <p>{oneObj.description}</p>
                    <div className="buttons">
                      <div className="button">
                        <i className="fa-regular fa-bookmark"></i> Book
                      </div>
                      <div className="button button2">
                        <i className="fa-solid fa-plus"></i> My list
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {movies.length > 0 && (
          <MovieSwiperComp slides={movies} handleChange={handleImageChange} />
        )}
      </div>
    </>
  );
}

export default BannerComp;

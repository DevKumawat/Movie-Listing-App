import './App.css'
import React from 'react';
import HeaderComp from './components/Header';
import BannerComp from './components/banner';
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css"
import MovieListComp from './components/MovieListComp';
import FooterComp from './components/Footer';

function App() {

  return (
    <>
     <HeaderComp/>
     <BannerComp/>
     <MovieListComp/>
     <FooterComp/>
    </>
  )
}

export default App;

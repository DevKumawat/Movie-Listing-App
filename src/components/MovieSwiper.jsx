import React from "react";
import "../styles/movieSwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow } from "swiper/modules";

function MovieSwiperComp({ slides , handleChange }) {
    // console.log(slides);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        modules={[Autoplay, EffectCoverflow]}
        className="movieSwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* {console.log(slide)} */}
            <img src={slide.previewImg} alt={`Slide ${index + 1}`} onClick={()=>handleChange(index)}  />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default MovieSwiperComp;

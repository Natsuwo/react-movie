import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ListMovie.css";
import CardMovie from "../../../Global/CardMovie/CardMovie";
import Slider from "react-slick";
import useFetch from "../../../../features/useFetch";

const ListMovie = (props) => {
  const API_KEY = "e9e9d8da18ae29fc430845952232787c";
  const { data: movie } = useFetch(
    `https://api.themoviedb.org/3/movie/${props.type}?api_key=${API_KEY}&page=1`,
    []
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <div className="list-movie">
      <div className="container">
        <div className="headline mt-5">
          <h3>ONLINE STREAMING</h3>
          <h2>{props.category_title}</h2>
        </div>
        <div className="list-movie slider-container">
          <Slider {...settings}>
            {movie.map((item) => (
              <CardMovie
                id={item.id}
                key={props.type + item.id}
                img={item.poster_path}
                title={item.original_title}
                rate={item.vote_average}
                release_date={item.release_date}
              ></CardMovie>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ListMovie;

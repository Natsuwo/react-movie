import React from "react";

const CardMovie = (props) => {
  return (
    <a href={`/detail-movie/${props.id}`} className="card-movie">
      <div className="thumb">
        <img src={`https://image.tmdb.org/t/p/w300` + props.img} alt="" />
      </div>
      <h3 className="mb-3 mt-2">{props.title}</h3>
      <div className="number d-flex align-items-center">
        <p className="day">{props.release_date}</p>
        <p className="rate">
          <i className="fa-solid fa-star"></i> {props.rate}
        </p>
      </div>
    </a>
  );
};

export default CardMovie;

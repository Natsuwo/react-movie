import React, { useState } from "react";
import "./Detail.css";
import { useParams } from "react-router-dom";
import useFetch from "../../../features/useFetch";
import Modal from "react-bootstrap/Modal";

const Detail = () => {
  const { id: movieId } = useParams();
  const [show, setShow] = useState(false);
  const API_KEY = "e9e9d8da18ae29fc430845952232787c";
  const { data: movie } = useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`,
    [],
    true
  );

  const { data: dataTrailer } = useFetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`,
    []
  );

  const findTrailer = dataTrailer.find((item) => item.type === "Trailer");
  const trailer = findTrailer;

  return (
    <div className="container mt-5">
      <div className="detail-movie">
        <div className="thumbnail col-lg-3 col-md-6">
          <img
            src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
            alt=""
          />
        </div>
        <div className="infomation">
          <h1 className="title">{movie.original_title}</h1>
          <div className="others-detail">
            <div className="release-date">{movie.release_date}</div>
            <div className="genre">
              {movie.genres && movie.genres.map((item) => item.name).join(", ")}
            </div>
            <div className="time">
              <i className="fa-regular fa-clock"></i>
              {movie.runtime} min
            </div>
          </div>
          <div className="rating">
            <div className="score">{movie.vote_average}%</div>
            <div className="score-text">user score</div>
            <button className="play-trailer" onClick={() => setShow(true)}>
              <i className="fa-solid fa-play"></i> Play trailer
            </button>
          </div>
          <div className="subtitle">{movie.tagline}</div>
          <h3 className="overview">Overview</h3>
          <div className="description">{movie.overview}</div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${trailer}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Detail;

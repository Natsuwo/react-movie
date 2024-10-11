import React, { useEffect, useState } from "react";
import "./ListMovie.css";
import CardMovie from "../../Global/CardMovie/CardMovie";
import useFetch from "../../../features/useFetch";
import { useLocation, useParams } from "react-router-dom";

const ListMovie = () => {
  const { slug: keySearch } = useParams();
  const location = useLocation();
  const API_KEY = "e9e9d8da18ae29fc430845952232787c";
  const [page, setPage] = useState(1);
  const [allMovie, setAllMovie] = useState([]);
  const [prevSearch, setPrevSearch] = useState("");
  const { data: movie, totalPage } = useFetch(
    keySearch
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keySearch}&page=${page}`
      : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`,
    []
  );

  useEffect(() => {
    if (prevSearch && prevSearch !== keySearch) {
      setPage(1);
    }

    if (!keySearch && location.pathname === "/movies" && page <= 1) {
      setAllMovie(movie);
    } else if ((prevSearch && page > 1) || !keySearch) {
      setAllMovie([...allMovie, ...movie]);
    } else {
      setAllMovie(movie);
    }
    setPrevSearch(keySearch);
  }, [movie]);

  return (
    <div className="list-movie-page">
      <div className="container">
        <div className="headline mt-5">
          <h3>ONLINE STREAMING</h3>
          <h1>List Movie</h1>
        </div>
        <div className="card-list">
          {allMovie.length > 0 &&
            allMovie.map((item) => (
              <CardMovie
                id={item.id}
                key={item.id}
                img={item.poster_path}
                title={item.original_title}
                rate={item.vote_average}
                release_date={item.release_date}
              ></CardMovie>
            ))}
          {totalPage > page && (
            <div className="showmore">
              <a onClick={() => setPage(page + 1)} className="showmore-btn">
                <i className="fa-solid fa-play"></i>
                <span>Show more</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListMovie;

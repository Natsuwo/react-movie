import React from "react";
import "./Search.css";
import { useParams } from "react-router-dom";

const Search = () => {
  const keySearch = useParams();
  console.log(keySearch);
  return (
    <div className="list-movie-page">
      <div className="container">
        <div className="headline mt-5">
          <h3>ONLINE STREAMING</h3>
          <h1>List Movie</h1>
        </div>
        <div className="card-list">
          {/* {allMovie.map((item) => (
            <CardMovie
              key={item.id}
              img={item.poster_path}
              title={item.original_title}
              rate={item.vote_average}
              release_date={item.release_date}
            ></CardMovie>
          ))} */}

          <div className="showmore">
            {/* <a onClick={() => setPage(page + 1)} className="showmore-btn">
              <i className="fa-solid fa-play"></i>
              <span>Show more</span>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

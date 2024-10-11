import React from "react";
import Banner from "./Banner/Banner";
import ListMovie from "./ListMovie/ListMovie";

const Home = () => {
  const arrList = [
    { id: 1, category_title: "Now Playing Movie", type: "now_playing" },
    { id: 2, category_title: "Upcoming Movie", type: "upcoming" },
    { id: 3, category_title: "Top Rated Movie", type: "top_rated" },
  ];
  return (
    <>
      <Banner></Banner>
      {arrList.map((item) => (
        <ListMovie
          key={item.id}
          category_title={item.category_title}
          type={item.type}
        ></ListMovie>
      ))}
    </>
  );
};

export default Home;

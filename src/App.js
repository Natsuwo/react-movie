import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Global/Header/Header";
import Home from "./components/Page/Home/Home";
import ListMovie from "./components/Page/ListMovie/ListMovie";
import Search from "./components/Page/Search/Search";
import Detail from "./components/Page/Detail/Detail";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<ListMovie />}></Route>
        <Route path="/search/:slug" element={<ListMovie />}></Route>
        <Route path="/detail-movie/:id" element={<Detail />}></Route>
      </Routes>
    </>
  );
}

export default App;

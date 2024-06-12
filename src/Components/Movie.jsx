import React, { useEffect, useState } from "react";
import Search from "./Partials/Search";
import Card from "./Partials/Card";
import Dropdown from "./Partials/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../Utils/Axios";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import MiniLoader from "./Partials/MiniLoader";

const Movie = () => {
  let Navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  const [Category, setCategory] = useState("now_playing");
  const [page, setPage] = useState(1);
  const [Hasmore, setHasmore] = useState(true);

  const getmovie = async () => {
    try {
      let { data } = await axios.get(`/movie/${Category}?page=${page}`);
      if (data.results.length > 0) {
        setMovie((pre) => [...pre, ...data.results]);
        setPage(page + 1);
      } else {
        setHasmore(false);
      }
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const refresHandler = () => {
    if (movie.length == 0) {
      getmovie();
    } else {
      setPage(1);
      setMovie([]);
      getmovie();
    }
  };

  useEffect(() => {
    document.title = `MovieSphere | Movie`;
    refresHandler();
  }, [Category]);

  return movie.length > 0 ? (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <div className="flex items-center justify-between px-8 py-8">
        <h2
          className="flex items-center font-bold text-2xl leading-none gap-2 cursor-pointer hover:text-[var(--primarycolor)] duration-300 linear"
          onClick={() => Navigate("/")}
        >
          <i className="ri-arrow-left-line font-medium text-xl"></i>Movie
        </h2>
        <Search position="absolute" width="w-1/3" />
        <div className="flex items-center gap-3">
          <Dropdown
            fnc={(e) => setCategory(e.target.value)}
            title="Category"
            options={["top_rated", "upcoming", "now_playing"]}
          />
        </div>
      </div>

      <div className="py-12">
        <InfiniteScroll
          dataLength={movie && movie.length}
          next={getmovie}
          hasMore={Hasmore}
          loader={<MiniLoader />}
          className="flex justify-between px-8 flex-wrap gap-y-10"
        >
          {movie.map((item, index) => (
            <Card Category={Category} key={item.id * index} data={item} title="Movie" />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Movie;

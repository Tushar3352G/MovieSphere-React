import SideNav from "./Partials/SideNav";
import Search from "./Partials/Search";
import Hero from "./Partials/Hero";
import axios from "../Utils/Axios";
import { useEffect, useState } from "react";
import TrendingSlider from "./Partials/TrendingSlider";
import Loader from "./Loader";

const Home = () => {
  document.title = "MovieSphere | Home";

  const [hero, setHero] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setcategory] = useState('all');

  const getAllShows = async () => {
    try {
      let response = await axios.get("/trending/all/day");

      setHero(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ]
      );
    } catch (error) {
      console.error(error);
    }
  };

  const getTrending = async () => {
    try {
      let response = await axios.get(`/trending/${category}/day`);
      setTrending(response.data.results);
      // console.log(response.data.results);

    } catch (error) {
      console.error(error);
    }
  };

  const handleFilter = (e) => {
    setcategory(e.target.value)
  }

  useEffect(() => {
    getTrending();
    !hero && getAllShows();
  }, [category]);

  return hero && trending ? (
    <div className="w-full h-full bg-zinc-900 text-white flex items-start">
      <SideNav />

      <div className="w-[80%] py-5 h-full relative overflow-x-hidden scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-[#98AE6B] scrollbar-track-zinc-900">
        <Search />
        <Hero hero={hero} />
        <TrendingSlider handleFilter={handleFilter} trending={trending} />
      </div>
    </div>
  ) : (
    <Loader />
  )
}


export default Home;

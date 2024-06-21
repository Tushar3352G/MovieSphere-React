import { Link } from "react-router-dom";
import axios from "../../Utils/Axios";
import noThumbnail from '../../assets/no-Thumbnail.webp'
import React, { useEffect, useState } from "react";

const Search = ({width = 'w-1/2', position ='relative' }) => {

    const [search, setSearch] = useState("");

    const [suggestion, setSuggestion] = useState(null);
  
    const getSearch = async () => {
      try {
        let respons = await axios.get(`/search/multi?query=${search}`);
        setSuggestion(() => respons.data.results);
        // console.log(respons.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    
  useEffect(() => {
    getSearch();
  }, [search]);



  return (

<div className={`${width} ${position} left-1/2 -translate-x-1/2`}>
    <form
      className="w-full flex items-center justify-between h-14 px-8 bg-zinc-800 rounded-full"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex items-center w-full">
        <i className="ri-search-line text-xl cursor-pointer"></i>
        <input
          type="text"
          className="w-full text-lg h-full outline-none px-3 bg-transparent"
          placeholder="Search Your Movies"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      {search.length > 0 && (
        <i
          className="ri-close-circle-fill text-xl cursor-pointer"
          onClick={() => setSearch("")}
        ></i>
      )}
    </form>
    {search.length > 1 && (
      <div className="absolute suggestion bg-zinc-800 w-full max-h-[60vh] h-fit mt-2 rounded-xl absolute py-2 overflow-y-scroll grid gap-y-2 scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-700">
        {suggestion &&
          suggestion.map((item) => (
            <Link
              to={`/${item.media_type}/details/${item.id}`}
              key={item.id}
              className="flex items-start leading-6 text-lg gap-3 hover:bg-zinc-700 py-2 px-10"
            >
                <img
                  className="w-32 object-cover h-32 rounded-md overflow-hidden"
                  src={
                    item.poster_path ||
                    item.profile_path ||
                    item.backdrop_path 
                    ? `https://image.tmdb.org/t/p/original/${
                    item.poster_path ||
                    item.profile_path ||
                    item.backdrop_path
                  }`:noThumbnail}
                  alt={item.title || item.name || item.original_name}
                />
      
              
            <span className="inline-block pt-5">{item.title || item.name || item.original_name}</span>
            </Link>
          ))}
      </div>
    )}
  </div>
  )
}

export default Search
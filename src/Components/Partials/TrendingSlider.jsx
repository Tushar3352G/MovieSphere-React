import React from "react";
import SwiperSiders from "./SwiperSiders";
import Dropdown from "./Dropdown";

const TrendingSlider = ({ trending, handleFilter }) => {
  return (
    <div className="w-full mt-12">
      <div className="px-12 flex justify-between">
        <h2 className="font-bold text-3xl mb-8">Trending</h2>
        <Dropdown
          fnc={(e) => handleFilter(e)}
          title="Filters"
          options={["all", "tv", "movie"]}
        />
      </div>
      <SwiperSiders
        height='h-[24vw]'
        show="4"
        Padding="px-12"
        CardData={trending}
      />
    </div>
  );
};

export default TrendingSlider;

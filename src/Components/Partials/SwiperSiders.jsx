// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import noThumbnail from "../../assets/no-Thumbnail.webp";

const SwiperSiders = ({ CardData, Padding, height, show, title, type}) => {
  // console.log(CardData)

  return (
    <Swiper
      spaceBetween={25}
      slidesPerView={Number(show)}
      navigation={true}
      speed={800}
      loop={!type}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Autoplay]}
      className={`overflow-x-visible scrollbar-none ${Padding} bg-transparent`}
    >
      {CardData.map((item) => (
        <SwiperSlide
          key={item.id}
          className={`bg-zinc-300 relative ${height} text-white`}
        >
          <Link
            to={!type && (`/${item.media_type || title}/Details/${item.id}`)}
            className="w-full h-full"
          >
            <img
              src={
                item.poster_path || item.profile_path || item.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${
                      item.poster_path ||
                      item.profile_path ||
                      item.backdrop_path
                    }`
                  : noThumbnail
              }
              alt={item.name || item.original_title || item.title}
              className="object-cover w-full h-full"
            />

            <div className="w-full h-full absolute top-0 z-[4] bg-gradient-to-t from-zinc-900/80 flex justify-end p-5 flex-col">
              <h3 className="text-lg leading-5 font-bold">
                {item.name || item.original_title || item.title}
              </h3>
              <p className="text-base leading-5 font-medium mt-2">
              {item.original_language ? 'Language' : 'Episodes'} : {item.original_language || item.episode_count}
              </p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSiders;

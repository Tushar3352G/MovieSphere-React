import React from "react";
import { Link, useParams } from "react-router-dom";

const Card = ({ data, Category, title }) => {
  // console.log(data)

  return (
    <Link to={`/${data.media_type || title }/Details/${data.id}`} className="w-[18.5vw]">
      <div className="h-[23vw] w-full mb-5">
        <img
          src={`https://image.tmdb.org/t/p/original/${
            data.poster_path || data.backdrop_path || data.profile_path
          }`}
          alt={data.name || data.original_title || data.title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex items-start justify-between px-3">
        <h3 className={`font-medium text-lg leading-5 ${!data.gender ? 'w-[62%]' : ''}`}>
          {data.name || data.original_title || data.title}
        </h3>
        {!data.gender && ( <p className="text-base leading-none font-regular flex items-start gap-2 capitalize">
          <i className="ri-video-on-fill text-yellow-500"></i>{data.media_type ? data.media_type : Category == 'tv' ? 'Tv' : 'Movie' }
        </p>)}
       
      </div>
    </Link>
  );
};

export default Card;

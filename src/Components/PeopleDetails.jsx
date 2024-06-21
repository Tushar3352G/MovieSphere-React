import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { asyncpeopleload } from "../Store/Action/peopleActions";
import { removepeople } from "../Store/Reducers/peopleReducer";
import Loader from "./Loader";
import noThumbnail from "../assets/no-Thumbnail.webp";
import Logo from "./Partials/Logo";
import Wiki from "./Partials/Wiki";
import Imdb from "./Partials/Imdb";
import SwiperSiders from "./Partials/SwiperSiders";
import Dropdown from "./Partials/Dropdown";

const PeopleDetails = () => {
  let dispatch = useDispatch();
  let { id } = useParams();
  const [categroy, setcategroy] = useState("movie");
  let { info } = useSelector((state) => state.people);

  useEffect(() => {
    dispatch(asyncpeopleload(id));

    return () => {
      dispatch(removepeople());
    };
  }, [id]);

  return info ? (
    <div className="w-full min-h-screen bg-zinc-900">
      <nav className="flex items-center justify-between py-5 px-8">
        <Link
          to="/"
          className="flex items-end text-white text-xl leading-none gap-3 font-bold"
        >
          <Logo color="#fff" width={"w-10"} height={"h-7"} /> MovieSphere.
        </Link>

        <div className="flex items-center gap-5">
          <a
            className="inline-block bg-white rounded-full w-10 h-10 flex items-center justify-center"
            href={`https://www.wikidata.org/wiki/${info.externalID.wikidata_id}`}
            target="_blank"
          >
            <Wiki />
          </a>

          <a
            className="inline-block bg-black overflow-hidden rounded-full w-10 h-10 flex items-center justify-center"
            href={`https://www.imdb.com/name/${info.externalID.imdb_id}`}
            target="_blank"
          >
            <Imdb />
          </a>
        </div>
      </nav>

      <div className="flex items-start px-[4vw] mt-8 justify-between">
        <div className="shrink-0 w-[24vw] h-full">
          <div className="w-full h-[33vw] mb-8">
            <img
              src={
                info.detail.profile_path
                  ? `https://image.tmdb.org/t/p/original/${info.detail.profile_path}`
                  : noThumbnail
              }
              alt={
                info.detail.title ||
                info.detail.name ||
                info.detail.original_name
              }
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full flex items-center gap-5 justify-center mb-5">
            {info.externalID.facebook_id && (
              <a
                href={`https://www.facebook.com/${info.externalID.facebook_id}`}
                className="inline-block bg-white overflow-hidden rounded-full w-10 h-10 flex items-center justify-center"
                target="_blank"
              >
                <i className="ri-facebook-fill text-2xl"></i>
              </a>
            )}

            {info.externalID.instagram_id && (
              <a
                className="inline-block bg-white overflow-hidden rounded-full w-10 h-10 flex items-center justify-center"
                href={`https://www.instagram.com/${info.externalID.instagram_id}`}
                target="_blank"
              >
                <i className="ri-instagram-fill text-2xl"></i>
              </a>
            )}

            {info.externalID.twitter_id && (
              <a
                className="inline-block bg-white overflow-hidden rounded-full w-10 h-10 flex items-center justify-center"
                href={`https://www.x.com/${info.externalID.twitter_id}`}
                target="_blank"
              >
                <i className="ri-twitter-x-fill text-2xl"></i>
              </a>
            )}

            <a
              className="inline-block bg-white rounded-full w-10 h-10 flex items-center justify-center"
              href={`https://www.wikidata.org/wiki/${info.externalID.wikidata_id}`}
              target="_blank"
            >
              <Wiki />
            </a>

            <a
              className="inline-block bg-black overflow-hidden rounded-full w-10 h-10 flex items-center justify-center"
              href={`https://www.imdb.com/name/${info.externalID.imdb_id}`}
              target="_blank"
            >
              <Imdb />
            </a>
          </div>

          <div className="w-full px-5 py-4 text-white">
            <h2 className="font-bold text-xl mb-5">Person Information</h2>
            {[
              {
                Title: "Known For",
                text: info.detail.known_for_department,
              },
              {
                Title: "Gender",
                text: info.detail.gender == 1 ? "Female" : "Male",
              },
              {
                Title: "Date Of Birth",
                text: info.detail.birthday,
              },
              {
                Title: "Place Of Birth",
                text: info.detail.place_of_birth,
              },
              {
                Title: "Date Of Death",
                text: info.detail.deathday,
              },
              {
                Title: "Also Know As",
                text: info.detail.also_known_as.join(","),
              },
            ].map(
              (item, index, arr) =>
                item.text && (
                  <h3
                    className={`font-semibold text-md ${
                      arr.length - 1 === index ? "mb-0" : "mb-5"
                    }`}
                    key={index}
                  >
                    {item.Title}:{" "}
                    <span className="font-normal">{item.text}</span>
                  </h3>
                )
            )}
          </div>
        </div>

        <div className="w-[63vw] text-white pt-5">
          <h1 className="text-5xl font-bold">{info.detail.name}</h1>

          {info.detail.also_known_as.length > 0 && (
            <h2 className="text-lg font-medium mt-2">
              {info.detail.also_known_as[0]}
            </h2>
          )}

          {info.detail.biography && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-3 ">Biography : </h2>
              <p className="font-normal text-base leading-8">
                {info.detail.biography}
              </p>
            </div>
          )}

          <div className="w-full overflow-hidden mt-12 mb-8">
            <h2 className="text-xl font-semibold mb-5">Known For : </h2>
            <SwiperSiders
              CardData={info.combinedCredits.cast}
              show="4.2"
              height="h-[20vw]"
            />
          </div>

          <div className="w-full">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-semibold">Work ShowCase</h2>
              <Dropdown
                title="Category"
                options={["tv", "movie"]}
                fnc={(e) => setcategroy(e.target.value)}
              />
            </div>
            <div className="w-full mt-3 bg-zinc-800 py-2 mb-8 max-h-[22vw] overflow-x-hidden scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-[#98AE6B] scrollbar-track-zinc-900">

              {info[categroy + "Credits"].cast.map((item,index) => (
                <Link to={`/${categroy}/details/${item.id}`} className="flex hover:bg-zinc-700 duration-300 linear hover:px-[3.5vw] px-[3vw] py-2 justify-between " key={item.id * index}>
                  <p className="flex flex-col">
                    <span className="font-semibold">
                      <i className="ri-play-line font-normal"></i> {item.name || item.original_title || item.title}
                    </span>
                    <span className="text-zinc-400">{item.character ? item.character : 'Not Found'}</span>
                  </p>
                  <p>{item.release_date || item.first_air_date ? item.release_date || item.first_air_date : 'Not Found'}</p>
                </Link>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default PeopleDetails;

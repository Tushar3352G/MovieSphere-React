import React, { useEffect, useRef } from "react";
import { asynctvload } from "../Store/Action/tvActions";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader";
import { removeTv } from "../Store/Reducers/TvReducer";
import Logo from "./Partials/Logo";
import Wiki from "./Partials/Wiki";
import Imdb from "./Partials/Imdb";
import SwiperSliders from "./Partials/SwiperSiders";

const TvDetails = () => {
  const { pathname } = useLocation();
  let { id } = useParams();
  let dispatch = useDispatch();
  const { info } = useSelector((state) => state.tv);

  useEffect(() => {
    dispatch(asynctvload(id));

    return () => {
      dispatch(removeTv());
    };
  }, [id]);

  // console.log(info);

  return info ? (
    <div
      className="w-full text-white backdrop-blur-[3px]"
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
          info.detail.backdrop_path || info.detail.poster_path
        }) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="wrapper w-full h-full backdrop-blur-[4px]">
        <div className="w-full h-full px-8 mb-20">
          <nav className="flex items-center justify-between py-5">
            <Link
              to="/"
              className="flex items-end  text-xl leading-none gap-3 font-bold"
            >
              <Logo color="#fff" width={"w-10"} height={"h-7"} /> MovieSphere.
            </Link>

            <div className="flex items-center gap-5">
              <a
                className="inline-block bg-white rounded-full w-10 h-10 flex items-center justify-center"
                href={info.detail.homepage}
                target="_blank"
              >
                <i className="ri-external-link-fill text-black text-xl"></i>
              </a>

              <a
                className="inline-block bg-white rounded-full w-10 h-10 flex items-center justify-center"
                href={`https://www.wikidata.org/wiki/${info.externalID.wikidata_id}`}
                target="_blank"
              >
                <Wiki />
              </a>

              <a
                className="inline-block bg-black overflow-hidden rounded-full w-10 h-10 flex items-center justify-center"
                href={`https://www.imdb.com/title/${info.externalID.imdb_id}`}
                target="_blank"
              >
                <Imdb />
              </a>
            </div>
          </nav>

          <div className="flex pt-8 px-8 gap-10">
            <div
              className="w-[28vw] h-[38vw] shrink-0"
              style={{
                background: `url(https://image.tmdb.org/t/p/original/${
                  info.detail.poster_path || info.detail.backdrop_path
                }) no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <div className="mt-5">
              <h1 className="text-5xl font-bold ">
                {info.detail.name ||
                  info.detail.original_title ||
                  info.detail.title}{" "}
                <span className="text-2xl">
                  ({info.detail.first_air_date.slice(0, 4)})
                </span>
              </h1>
              <h2 className="text-xl mt-1 font-medium ">
                {info.detail.tagline}
              </h2>
              <div className="mt-4 flex gap-5">
                <div className=" text-lg font-bold">
                  Users Vote:{" "}
                  <span className="inline-block text-yellow-300 font-medium">
                    {(info.detail.vote_average * 10).toFixed("")}%
                  </span>
                </div>
                <div className=" text-lg font-bold">
                  Release Date:{" "}
                  <span className="inline-block font-medium">
                    {info.detail.first_air_date}
                  </span>
                </div>
                <div className=" text-lg font-bold">
                  Seasons:{" "}
                  <span className="inline-block font-medium">
                    {info.detail.number_of_seasons}
                  </span>
                </div>
              </div>
              <ul className="mt-5 flex gap-5 ">
                {info.detail.genres.map((item) => (
                  <li
                    key={item.id}
                    className="bg-white/35 font-medium text-base leading-none px-3.5 py-2.5 rounded-full capitalize"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>

              <div className="mt-8  w-full">
                <h2 className="text-2xl font-bold">Overview:</h2>
                <p className="w-[90%]">{info.detail.overview}</p>
              </div>

              <div className="mt-5  w-full">
                <h2 className="text-2xl font-bold">Available in Languages:</h2>
                <p className="w-[90%] text-wrap">
                  {info.translations
                    .map((item) => item.english_name)
                    .join(", ")}
                </p>
              </div>

              <div className="flex mt-8 justify-start items-start">
                {info.WatchProviders && (
                  <div className="w-full flex flex-wrap items-start gap-10">
                    {info.WatchProviders.flatrate && (
                      <div className="max-w-64">
                        <h3 className="font-semibold text-base">Stream On</h3>

                        <div className="mt-2 flex gap-2 flex-wrap">
                          {info.WatchProviders.flatrate.map((img) => (
                            <img
                              key={img.provider_id}
                              src={
                                img.logo_path || img.logo_path || img.logo_path
                                  ? `https://image.tmdb.org/t/p/original/${img.logo_path}`
                                  : noThumbnail
                              }
                              alt={img.name || img.original_title || img.title}
                              className="object-cover w-14 h-12 rounded shrink-0"
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {info.WatchProviders.ads && (
                      <div className="max-w-64">
                        <h3 className="font-semibold text-base">Ads</h3>

                        <div className="mt-2 flex gap-2 flex-wrap">
                          {info.WatchProviders.ads.map((img) => (
                            <img
                              key={img.provider_id}
                              src={
                                img.logo_path || img.logo_path || img.logo_path
                                  ? `https://image.tmdb.org/t/p/original/${img.logo_path}`
                                  : noThumbnail
                              }
                              alt={img.name || img.original_title || img.title}
                              className="object-cover w-14 h-12 rounded shrink-0"
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {info.WatchProviders.rent && (
                      <div className="max-w-64">
                        <h3 className="font-semibold text-base">
                          Available For Rent
                        </h3>

                        <div className="mt-2 flex gap-2 flex-wrap">
                          {info.WatchProviders.rent.map((img) => (
                            <img
                              key={img.provider_id}
                              src={
                                img.logo_path || img.logo_path || img.logo_path
                                  ? `https://image.tmdb.org/t/p/original/${img.logo_path}`
                                  : noThumbnail
                              }
                              alt={img.name || img.original_title || img.title}
                              className="object-cover w-14 h-12 rounded shrink-0"
                            />
                          ))}
                        </div>
                      </div>
                    )}

                    {info.WatchProviders.buy && (
                      <div className="max-w-64">
                        <h3 className="font-semibold text-base">
                          Available For Buy
                        </h3>

                        <div className="mt-2 flex gap-2 flex-wrap">
                          {info.WatchProviders.buy.map((img) => (
                            <img
                              key={img.provider_id}
                              src={
                                img.logo_path || img.logo_path || img.logo_path
                                  ? `https://image.tmdb.org/t/p/original/${img.logo_path}`
                                  : noThumbnail
                              }
                              alt={img.name || img.original_title || img.title}
                              className="object-cover w-14 h-12 rounded shrink-0"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <Link
                  to={`${pathname}/trailer`}
                  className={`${
                    info.WatchProviders && "mt-6"
                  } bg-[var(--primarycolor)] font-semibold text-lg px-10 py-4 rounded-full inline-block text-nowrap`}
                >
                  Watch Trailer
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mb-24">
          <h1 className="text-3xl px-16 font-bold mb-8">
          Season Collection
          </h1>
          <SwiperSliders
            height="h-[32vw]"
            title="tv"
            type="season"
            show="4"
            Padding="px-16"
            CardData={info.detail.seasons}
          />
        </div>

        <div className="w-full pb-8">
          <h1 className="text-3xl px-16 font-bold mb-8">
            Blockbuster Recommendations
          </h1>
          <SwiperSliders
            height="h-[28vw]"
            show="4.3"
            Padding="px-16"
            CardData={info.recommendations || info.similar}
          />
        </div>
      </div>

      <Outlet />
    </div>
  ) : (
    <Loader />
  );
};

export default TvDetails;

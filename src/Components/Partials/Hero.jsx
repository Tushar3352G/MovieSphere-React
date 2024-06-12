import React from "react"
import { Link } from "react-router-dom"

const Hero = ({hero}) => {

  return (
          <div
            className="w-full h-[60vh] mt-5 flex items-end"
            style={{
              background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
                hero.poster_path || hero.backdrop_path
              }) no-repeat`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full px-16 py-12">
            <h1 className="text-4xl font-bold tracking-tight mb-3">{hero.name ||  hero.original_title || hero.title}</h1>
            <p className="text-base w-1/2 leading-6 font-regular mb-4">{hero.overview.slice(0,120)} <Link className="font-bold text-[var(--primarycolor)]" to={`/${hero.media_type}/details/${hero.id}`}>...more</Link></p> 
            <div className="mb-8 flex gap-5 items-start">
              <p className="text-base leading-none font-regular flex items-start gap-2"><i className="ri-megaphone-fill text-yellow-500"></i> {hero.release_date || 'Not Found'}</p>
              <p className="text-base leading-none font-regular flex items-start gap-2 capitalize"><i className="ri-video-on-fill text-yellow-500"></i> {hero.media_type || 'Not Found'}</p>
            </div>
            <Link to={`/${hero.media_type}/details/${hero.id}/trailer`} className="text-base font-bold bg-[var(--primarycolor)] px-4 py-3.5 rounded-full leading-none inline-block">Watch Trailer</Link>
            </div>
            
          </div>
  )
}

export default Hero
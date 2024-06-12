import React from 'react'
import { Link } from "react-router-dom";
import Logo from './Logo'

const SideNav = () => {
  return (
    <div className='w-[20%] h-full bg-zinc-800 font-Bold overflow-x-hidden overflow-y-scroll scrollbar-none pb-8'>
    <Link to='/' className="flex items-end leading-none gap-3 pt-8 font-bold pl-7 text-xl">
      <Logo width={"w-10"} height={"h-7"} /> MovieSphere.
    </Link>

    <div className="w-full mt-14 pl-7">
      <h2 className="font-bold text-lg mb-7">New Feeds</h2>
      {[
        {
          text: "Trending", 
          icons: <i className="ri-fire-fill"></i>,
      },
        {
          text: "Popular",
          icons: <i className="ri-bard-fill"></i>
        },
        {
          text: "Movie",
          icons: <i className="ri-movie-2-fill"></i>
        },
        {
          text: "Tv",
          icons: <i className="ri-tv-2-fill"></i>
        },
        {
          text: "Person",
          icons: <i className="ri-team-fill"></i>
        },
      ].map((items,index, array)=><Link key={index} to={`/${items.text.replace(/ /g, '')}`} className={`text-base flex items-start ${(index === array.length - 1) ? 'mb-0' :'mb-4'} leading-none gap-2 hover:px-3.5 py-2.5 leading-none rounded-full hover:bg-zinc-700 hover:text-[var(--primarycolor)] duration-300 w-fit linear`}>
      {items.icons} {items.text}
    </Link>)}

    </div>

    <div className="w-full mt-10 border-t-[1px] border-[var(--primarycolor)] pl-7 pt-10">
      <h2 className="font-bold text-lg mb-7">Website Information</h2>

      {[
        {
          text: "Contact Us", 
        icons:  <i className="ri-phone-fill"></i>
      },
        {
          text: "Privacy Policy",
          icons: <i className="ri-lock-2-fill"></i>
        },
        {
          text: "Terms and Conditions",
          icons:  <i className="ri-article-fill"></i>
        },
        {
          text: "About MovieSphere.",
          icons:  <i className="ri-error-warning-fill"></i>
        }
      ].map((items,index,array)=><Link key={index} className={`text-base flex items-start leading-none gap-2 ${(index === array.length - 1)? 'mb-0' : 'mb-6'} hover:px-2 hover:text-[var(--primarycolor)] duration-300 w-fit linear`}>
      {items.icons} {items.text}
    </Link>)}

    </div>
  </div>
  )
}

export default SideNav
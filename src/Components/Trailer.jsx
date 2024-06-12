import { Player } from '@lottiefiles/react-lottie-player'
import React, { useEffect } from 'react'
import ReactPlayer from 'react-player/lazy'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

const Trailer = () => {

 let navigator =  useNavigate()
 const {pathname} = useLocation()
 let category = (pathname.includes('movie') ? 'movie' : 'tv')

 let ytvideo = useSelector(state => state[category].info.videos)

  useEffect(()=>{
    document.querySelector('html').classList.add('overflow-hidden')
    return () => {
      document.querySelector('html').classList.remove('overflow-hidden')
    }
  },[])

  return (
    <div className={`absolute top-0 left-0 w-full h-full ${ytvideo ? 'bg-black/40 ' : 'bg-zinc-900'} z-[3] backdrop-blur-sm`}>
      <div className='w-full h-screen sticky top-0 left-0 flex flex-col justify-center items-center'>
      <button onClick={()=>navigator(-1)} className='absolute right-5 top-5 w-10 h-10 bg-red-600 rounded-full'>
      <i className="ri-close-line text-white text-2xl"></i>
      </button>
      {ytvideo ? (<ReactPlayer
        width='75%'
        height='85%'
        controls={true}
        url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
      />) : (<Player
        autoplay
        loop
        src="https://lottie.host/73108ae2-d66b-4686-a800-c2546368d9bb/OROaIrIg7z.json"
        style={{ height: '40vw', width: '40vw' }}
      >
      </Player>)}
      </div>
    </div>
  )
}

export default Trailer
import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigator = useNavigate()

  return (
    <div className='w-full h-screen bg-zinc-900 flex flex-col justify-center items-center'>
        <Player
        autoplay
        loop
        src="https://lottie.host/8898757b-ad22-4da3-8daa-d9d379a70112/xKrbmaCjHh.json"
        style={{ height: '35vw', width: '35vw' }}
      >
      </Player>
      <button onClick={()=>navigator('/')} className='text-white bg-[var(--primarycolor)] px-5 py-2 rounded-full'>Go Back</button>
    </div>
  )
}

export default ErrorPage
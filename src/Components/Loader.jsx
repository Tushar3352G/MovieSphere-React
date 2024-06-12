import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

const Loader = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center justify-center'>
      <Player
  autoplay
  loop
  src="https://lottie.host/50d71c14-8866-43a1-afd7-1548a48cb425/1APzEhmXsN.json"
  style={{ height: '200px', width: '200px' }}
>
</Player>
    </div>
  )
}

export default Loader
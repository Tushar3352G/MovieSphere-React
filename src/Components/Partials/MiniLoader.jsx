import React from 'react'
import { Oval } from 'react-loader-spinner'

const MiniLoader = () => {
  return (
    <div className='w-full flex items-center justify-center'>
<Oval
  visible={true}
  height="50"
  width="50"
  color="#98AE6B"
  ariaLabel="oval-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
}

export default MiniLoader
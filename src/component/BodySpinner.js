import React from 'react'

const BodySpinner = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
        <div class="w-20 h-20 rounded-full animate-spin
        border-y-2 border-solid border-red-600 border-t-transparent shadow-md"></div>
    </div>
  )
}

export default BodySpinner
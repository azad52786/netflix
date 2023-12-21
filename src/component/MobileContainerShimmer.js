import React from 'react'

const MobileContainerShimmer = () => {
  return (
    <div className=" relative w-screen h-fit bg-[#141414]">
      <div className=" relative overflow-hidden  min-h-[520px] w-[90%] bg-[#1a1a1a] rounded-md mx-auto duration-300 animate-pulse">
      </div>
      <div className=" absolute top-1 min-w-full min-h-full bg-black bg-opacity-50">

        <div className=" w-2/3 mx-auto pt-96 flex flex-col items-center">
          <h1 className=" bg-[#1a1a1a] w-32 h-7 rounded-md duration-300 animate-pulse"></h1>
          <ul className=" flex flex-row items-center justify-center  mt-3">
            <div className='flex gap-x-3'>
                <li className=' w-12 h-4 bg-[#1a1a1a] rounded-md duration-300 animate-pulse'></li> 
                <li className=' w-12 h-4 bg-[#1a1a1a] rounded-md duration-300 animate-pulse'></li> 
                <li className=' w-12 h-4 bg-[#1a1a1a] rounded-md duration-300 animate-pulse'></li> 
            </div>
          </ul>
          <div className='flex gap-x-3 text-sm mt-4'>
                <button className=' h-7 w-20 bg-[#1a1a1a] rounded-md duration-300 animate-pulse'></button>
                <button className=' h-7 w-20 bg-[#1a1a1a] rounded-md duration-300 animate-puls'></button> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default MobileContainerShimmer
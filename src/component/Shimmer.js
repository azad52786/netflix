import React from 'react'

const Shimmer = () => {
  return (
    <div  className=' w-fit bg-black'>
      <div className='flex flex-row justify-between pt-80 z-20 h-[100%] px-9 w-screen aspect-video '>
        <div className=' w-5/12'>
            <div className=' w-[100%] h-20 bg-[#1a1a1a] rounded-md duration-300 animate-pulse'></div>
            <div className=" w-[90%] h-5 bg-[#1a1a1a] rounded-sm duration-300 animate-pulse mt-5"></div>
            <div className=" w-[80%] h-5 bg-[#1a1a1a] rounded-sm duration-300 animate-pulse mt-2"></div>
            <div className=" w-[70%] h-5 bg-[#1a1a1a] rounded-sm duration-300 animate-pulse mt-2"></div>
              <div className='w-full flex flex-row gap-x-3 mt-4'>
                  <div className=" w-[20%] h-14 bg-[#1a1a1a] rounded-md duration-300 animate-pulse"></div>
                  <div className=" w-[20%] h-14 bg-[#1a1a1a] rounded-md duration-300 animate-pulse"></div>
              </div>
        </div>
      </div>
        <div className=' w-[97%] mx-auto flex gap-x-3 justify-center -mt-[13%]'>
          
            <div className=' w-[10%] h-56 bg-[#1a1a1a] rounded-md duration-300 animate-pulse'></div>
            <div className=' w-[10%] h-56 bg-[#1a1a1a] rounded-md duration-300 animate-pulse'></div>
            <div className=' w-[10%] h-56 bg-[#1a1a1a] rounded-md duration-300 animate-pulse'></div>
            <div className=' w-[10%] h-56 bg-[#1a1a1a] rounded-md duration-300 animate-pulse'></div>
            <div className=' w-[10%] h-56 bg-[#1a1a1a] rounded-md duration-300 animate-pulse'></div>
            <div className=' w-[10%] h-56 bg-[#1a1a1a] rounded-md duration-300 animate-pulse'></div>
            <div className=' w-[10%] h-56 bg-[#1a1a1a] rounded-md duration-300 animate-pulse'></div>
            <div className=' w-[10%] h-56 bg-[#1a1a1a] rounded-md duration-300 animate-pulse'></div>
            <div className=' w-[10%] h-56 bg-[#1a1a1a] rounded-md duration-300 animate-pulse'></div>
        
      </div>
    </div>

  )
}

export default Shimmer;
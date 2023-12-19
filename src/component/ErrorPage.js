import React from 'react'
import { useNavigate } from 'react-router'

const ErrorPage = () => {
    const navigate = useNavigate();
  return (
    <div className=' w-screen h-screen bg-[#FBF3EE] flex justify-around'>
        <img src='./images/cooking_Image.png' alt='Cooking image' className=' rounded-md'/>
        <div className=' flex justify-center items-center  gap-y-5 flex-col'>
            <img src='./images/404.png'/>
            <h1 className=' font-bold text-4xl text-[#E4A37D]'>Kaya Khane Chate Ho??<span className=' text-red-300'> DM KARO</span></h1>
            <button className=' bg-[#E4A37D] w-fit h-fit px-6 py-3 rounded-md font-bold text-lg text-white brightness-90 hover:brightness-100'
                onClick={() => navigate('/')}
            >Home</button>
        </div>
    </div> 
  )
}

export default ErrorPage
import React from 'react'
import Browse from '../component/Browse'
import { Outlet } from 'react-router'

const Body = () => {
  return (
    <div className=' overflow-hidden'>
        {/* header ayega yha */}
        <Browse/>
    </div>
  )
}

export default Body
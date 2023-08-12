import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className=' flex flex-col items-center '>
      <img src="/error/error.svg" alt="error" className=' w-[40%] h-[40%]'/>
      
      <Link to='/'>
        <button className=' bg-slate-600 p-4 text-white rounded-md font-bold '>
          BACK TO HOME
        </button>
      </Link>
      
    </div>
  )
}

import React from 'react'
import CardProduct from './CardProduct'

const brands = [

  {
    name: 'Apple'
  },
  {
    name: 'Samsung'
  },
  {
    name: 'Oppo'
  },
  {
    name: 'Xiaomi'
  },
  {
    name: 'Vivo'
  },
  {
    name: 'Nokia'
  }

]

export default function ListCardProduct({pros}) {

  return (
    <div className=' container mx-auto flex flex-col'>
      
      
      <div className=' flex gap-4 justify-between px-4 py-2 xxsm:flex-col xsm:flex-col sm:flex-col md:flex-col '>
        
        <h1 className=' font-bold text-3xl text-gray-500'>{pros}</h1>
        <div className=' flex gap-5 xxsm:hidden xsm:gap-4 sm:gap-4 md:gap-4 '>
          {
            brands.map( brand =>(
              <span className=' cursor-pointer bg-slate-200 p-4 rounded-xl hover:bg-slate-400 duration-300'>{brand.name}</span>
            ))
          }
          <span className=' cursor-pointer bg-slate-200 p-4 rounded-xl hover:bg-slate-400 duration-300 xsm:hidden sm:hidden'>All</span>
        </div>
      </div>

      <div className=' flex flex-row p-2 gap-2 justify-center'>
          
          <div className=' '>
            <CardProduct />
          </div>

          <div className=' '>
            <CardProduct />
          </div>

          <div className=' xxsm:hidden xsm:hidden sm:hidden md:hidden'>
            <CardProduct />
          </div>

          <div className=' xxsm:hidden xsm:hidden sm:hidden md:hidden lg:hidden '>
            <CardProduct />
          </div>

          <div className=' xxsm:hidden xsm:hidden sm:hidden md:hidden lg:hidden xl:hidden'>
            <CardProduct />
          </div>
  
      </div>

      {/* <div className=' flex p-4 '>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div> */}
    
    </div>
  )
}

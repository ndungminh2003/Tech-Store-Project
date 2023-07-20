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
  },
  {
    name: 'All'
  },

]

export default function ListCardProduct({pros}) {

  return (
    <div className=' flex flex-col'>
      
      <div className=' flex justify-between px-4 py-2'>
        <h1 className=' font-bold text-3xl text-gray-500'>{pros}</h1>

        <div className=' flex gap-5'>
          {
            brands.map( brand =>(
              <span className=' cursor-pointer bg-slate-200 p-4 rounded-xl hover:bg-slate-400 duration-300'>{brand.name}</span>
            ))
          }
        </div>
         
      </div>

      <div className=' flex flex-row justify-between p-4 flex-wrap'>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>

      <div className=' flex flex-row justify-between p-4 flex-wrap'>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    
    </div>
  )
}

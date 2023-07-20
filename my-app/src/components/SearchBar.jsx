import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';


const types = [
  'iphone',
  'samsung',
  'oppo',
  'lenovo',
  'macbook',
  'akko'
]


export default function SearchBar() {

  const [activeSearch, setActiveSearch] = useState([])

  const handleSearch = (e) => {
    if(e.target.value === ''){
      setActiveSearch([]);
      return false;
    }     

    setActiveSearch(types.filter(type => type.includes(e.target.value)).slice(0,8));

  }

  return (

    <form className=' w-96 relative min-w-[250px]'>

      <div className=' relative'>
        <input type="search" placeholder='Search...' className=' w-full p-4 rounded-full' onChange={handleSearch} />
        <button className=' absolute right-1 top-1/2 -translate-y-1/2 bg-gray-400 rounded-full p-3'>
          <SearchIcon />
        </button>
      </div>

      {
        activeSearch.length > 0 && (
          <div className=' absolute bg-gray-400 w-full top-16 p-4 rounded-xl flex flex-col gap-2 left-1/2 -translate-x-1/2 z-50 '>
            {
              activeSearch.map( s => (<span className=' hover:bg-gray-500 hover:rounded-lg hover:px-2 cursor-pointer'>{s}</span>))
            }
          </div>
        )
      }

    </form>

  )
}

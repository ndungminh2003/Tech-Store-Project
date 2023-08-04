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

    <form className=' tw-w-96 tw-relative tw-min-w-[250px] xsm:tw-w-[200px] tw-p-4'>

      <div className=' tw-relative'>
        <input type="search" placeholder='Search...' className=' tw-w-full tw-p-4 tw-rounded-full' onChange={handleSearch} />
        <button className=' tw-absolute tw-right-1 tw-top-1/2 tw--translate-y-1/2 tw-bg-gray-400 tw-rounded-full tw-p-3'>
          <SearchIcon />
        </button>
      </div>

      {
        activeSearch.length > 0 && (
          <div className=' tw-absolute tw-bg-gray-400 tw-w-full tw-top-16 tw-p-4 tw-rounded-xl tw-flex tw-flex-col tw-gap-2 tw-left-1/2 tw--translate-x-1/2 tw-z-50 '>
            {
              activeSearch.map( s => (<span className=' hover:tw-bg-gray-500 hover:tw-rounded-lg hover:tw-px-2 tw-cursor-pointer'>{s}</span>))
            }
          </div>
        )
      }

    </form>

  )
}

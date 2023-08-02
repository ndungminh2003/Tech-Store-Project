import React from 'react'
import CardProduct from '../components/CardProduct'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const products = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },

  {
    id: 9,
  },
  {
    id: 10,
  },

]

const number = 99;
const keyword = 'iphone';

export default function CatalogSearch() {
  return (
    <div className=' tw-flex tw-flex-col tw-m-6 tw-container tw-mx-auto tw-gap-4'>
      
      <span className=' tw-flex tw-justify-center tw-text-xl tw-text-gray-500'>
        Found <b className=' tw-mx-1'>{number}</b> products for the keyword <b className=' tw-mx-1'>'{keyword}'</b>
      </span>

      <div className=' tw-flex tw-flex-col tw-gap-2 tw-ml-8'>
        <div className=' tw-text-3xl tw-text-gray-500 tw-font-bold'>Filter</div>
        <div>
          <div className=' tw-flex tw-gap-5 tw-cursor-pointer'>
            <p className=' tw-flex tw-justify-center tw-items-center tw-bg-slate-300 tw-p-3 hover:tw-bg-slate-400 hover:tw-duration-200 tw-rounded-xl tw-gap-2'>
              <KeyboardDoubleArrowUpIcon sx={{color: 'blue'}}/>
              High-priced
            </p>
            <p className=' tw-flex tw-justify-center tw-items-center tw-bg-slate-300 tw-p-3 hover:tw-bg-slate-400 hover:tw-duration-200 tw-rounded-xl tw-gap-2'>
              <KeyboardDoubleArrowDownIcon sx={{color: 'blue'}}/>
              Low-priced
            </p>
          </div>
        </div>
      </div>

      <div className=' tw-flex tw-flex-row tw-p-4 tw-flex-wrap tw-gap-5'>
        {
          products.map( product => (
            <div className=' tw-w-[284px] xl:tw-w-[296px] lg:tw-w-[316px] md:tw-w-[358px] sm:tw-w-[294px] xsm:tw-w-[270px]'>
              <CardProduct />
            </div>
          ))
        }
      </div>

      <div className=' tw-flex tw-items-center tw-justify-center tw-text-xl tw-w-44 tw-gap-2 tw-bg-slate-300 tw-p-4 hover:tw-bg-slate-400 hover:tw-duration-200 tw-rounded-xl tw-cursor-pointer tw-self-center'>
        <span>See more</span>
        <KeyboardArrowDownIcon />
      </div>

    </div>
    
    
  )
}

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
    <div className=' flex flex-col m-6 container mx-auto gap-4'>
      
      <span className=' flex justify-center text-xl text-gray-500'>
        Found <b className=' mx-1'>{number}</b> products for the keyword <b className=' mx-1'>'{keyword}'</b>
      </span>

      <div className=' flex flex-col gap-2 ml-8'>
        <div className=' text-3xl text-gray-500 font-bold'>Filter</div>
        <div>
          <div className=' flex gap-5 cursor-pointer'>
            <p className=' flex justify-center items-center bg-slate-300 p-3 hover:bg-slate-400 hover:duration-200 rounded-xl gap-2'>
              <KeyboardDoubleArrowUpIcon sx={{color: 'blue'}}/>
              High-priced
            </p>
            <p className=' flex justify-center items-center bg-slate-300 p-3 hover:bg-slate-400 hover:duration-200 rounded-xl gap-2'>
              <KeyboardDoubleArrowDownIcon sx={{color: 'blue'}}/>
              Low-priced
            </p>
          </div>
        </div>
      </div>

      <div className=' flex flex-row p-4 flex-wrap gap-5'>
        {
          products.map( product => (
            <div className=' w-[284px] xl:w-[296px] lg:w-[316px] md:w-[358px] sm:w-[294px] xsm:w-[270px]'>
              <CardProduct />
            </div>
          ))
        }
      </div>

      <div className=' flex items-center justify-center text-xl w-43 gap-2 bg-slate-300 p-4 hover:bg-slate-400 hover:duration-200 rounded-xl cursor-pointer self-center'>
        <span>See more</span>
        <KeyboardArrowDownIcon />
      </div>

    </div>
    
    
  )
}

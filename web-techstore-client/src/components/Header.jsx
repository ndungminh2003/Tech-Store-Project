import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import SearchBar from './SearchBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CallIcon from '@mui/icons-material/Call';
import NotesIcon from '@mui/icons-material/Notes';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Badge from '@mui/material/Badge';
import DropDown from './DropDown';

export default function Header() {

  const [shoppingCart, setShoppingCart] = useState(3); // State of shopping cart

  return (

      <div className=' tw-w-full tw-bg-slate-800 tw-sticky tw-top-0 tw-z-50'>

        <div className=' tw-container tw-mx-auto tw-flex tw-h-full tw-justify-around tw-items-center '>

          <Link to='/' className='tw-no-underline'>
            <div className=' tw-w-52 tw-flex tw-items-center tw-justify-center xxsm:tw-w-36 xsm:tw-w-36 sm:tw-w-36 md:tw-w-44'>
              <img src="/logo/2.png" alt="logo" className=' tw-object-fill'/>
            </div>
          </Link>
          
          <Link className='tw-no-underline'>
            <div className=' tw-flex tw-gap-2 tw-items-center tw-p-4 tw-cursor-pointer tw-capitalize tw-text-xl lg:tw-text-lg hover:tw-bg-gray-500 hover:tw-rounded-lg hover:tw-py-2 tw-text-white xxsm:tw-hidden xsm:tw-hidden sm:tw-hidden md:tw-hidden'>
              <NotesIcon />
              <span>catalog</span>
            </div>
          </Link>
          
          <SearchBar />

          <Link to='/Cart' className='tw-no-underline'>
            <div className='tw-flex tw-gap-2 tw-items-center tw-p-4 tw-cursor-pointer tw-capitalize tw-text-xl xxsm:tw-text-lg xsm:tw-text-lg sm:tw-text-lg md:tw-text-lg lg:tw-text-lg xsm:tw-flex-col hover:tw-bg-gray-500 hover:tw-rounded-lg hover:tw-py-2 tw-text-white tw-min-w-fit xxsm:tw-hidden'>
              <Badge badgeContent={shoppingCart} color="primary">
                <ShoppingCartIcon color="white" />
              </Badge>
              <div>Cart</div>
            </div>
          </Link>
          
          <Link to='/wishlist' className='tw-no-underline'>
            <div className=' tw-flex tw-gap-2 tw-items-center tw-p-4 tw-cursor-pointer tw-capitalize tw-text-xl hover:tw-bg-gray-500 hover:tw-rounded-lg hover:tw-py-2 tw-text-white xxsm:tw-hidden xsm:tw-hidden sm:tw-hidden md:tw-hidden lg:tw-hidden'> 
              <FavoriteIcon />          
              <span>wishlist</span>   
            </div>
          </Link>

          <Link to='/contact' className='tw-no-underline'>
            <div className=' tw-flex tw-gap-2 tw-items-center tw-p-4 tw-cursor-pointer tw-capitalize tw-text-xl hover:tw-bg-gray-500 hover:tw-rounded-lg hover:tw-py-2 tw-text-white xxsm:tw-hidden xsm:tw-hidden sm:tw-hidden md:tw-hidden lg:tw-hidden'>         
              <CallIcon />         
              <span>contact</span>
            </div>
          </Link>

          <DropDown pros={'Minh'}/>

          {/* <Link to='/login'>
            <div className=' flex gap-2 items-center p-4 cursor-pointer capitalize text-xl hover:bg-gray-500 hover:rounded-lg hover:py-2 text-white xxsm:hidden xsm:hidden sm:hidden md:hidden'>        
              <AccountCircleIcon />      
              <span>login</span>
            </div>
          </Link> */}

        </div>
      </div>  

  )
}

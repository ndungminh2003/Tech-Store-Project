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

      <div className=' w-full bg-slate-800 sticky top-0 z-50'>

        <div className=' container mx-auto flex h-17 justify-around items-center '>

          <Link to='/'>
            <div className=' w-52 flex items-center justify-center xxsm:w-36 xsm:w-36 sm:w-36 md:w-44'>
              <img src="/logo/big.png" alt="logo" className=' object-fill'/>
            </div>
          </Link>
          
          <Link>
            <div className=' flex gap-2 items-center p-4 cursor-pointer capitalize text-xl lg:text-lg hover:bg-gray-500 hover:rounded-lg hover:py-2 text-white xxsm:hidden xsm:hidden sm:hidden md:hidden'>
              <NotesIcon />
              <span>catalog</span>
            </div>
          </Link>
          
          <SearchBar />

          <Link to='/shopping-cart'>
            <div className='flex gap-2 items-center p-4 cursor-pointer capitalize text-xl xxsm:text-lg xsm:text-lg sm:text-lg md:text-lg lg:text-lg xsm:flex-col hover:bg-gray-500 hover:rounded-lg hover:py-2 text-white min-w-fit xxsm:hidden'>
              <Badge badgeContent={shoppingCart} color="primary">
                <ShoppingCartIcon color="white" />
              </Badge>
              <div>Cart</div>
            </div>
          </Link>
          
          <Link to='/wishlist'>
            <div className=' flex gap-2 items-center p-4 cursor-pointer capitalize text-xl hover:bg-gray-500 hover:rounded-lg hover:py-2 text-white xxsm:hidden xsm:hidden sm:hidden md:hidden lg:hidden'> 
              <FavoriteIcon />          
              <span>wishlist</span>   
            </div>
          </Link>

          <Link to='/contact'>
            <div className=' flex gap-2 items-center p-4 cursor-pointer capitalize text-xl hover:bg-gray-500 hover:rounded-lg hover:py-2 text-white xxsm:hidden xsm:hidden sm:hidden md:hidden lg:hidden'>         
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

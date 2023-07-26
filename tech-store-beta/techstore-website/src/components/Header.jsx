import React, { useState } from 'react'

import { NavLink, Link } from 'react-router-dom'
import SearchBar from './SearchBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import NotesIcon from '@mui/icons-material/Notes';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Badge from '@mui/material/Badge';


export default function Header() {

  const links = [

    {
      id: 1,
      link: "order",
      icon: <LocalShippingIcon />
    },

    {
      id: 2,
      link: "contact",
      icon: <CallIcon />
    },


    {
      id: 3,
      link: "login",
      icon: <AccountCircleIcon />
    }
  ];

  const [shoppingCart, setShoppingCart] = useState(2); // State of shopping cart


  return (
    <div className=' flex bg-slate-800 w-full h-16 justify-around items-center sticky top-0 z-50'>
      
      <div className=' capitalize cursor-pointer text-3xl text-white'>
        <Link to='/'>TechStore</Link>
      </div>

      <div className=' flex gap-2 items-center px-4 cursor-pointer capitalize text-xl hover:bg-gray-500 hover:rounded-lg hover:py-2 text-white'>
        <NotesIcon />
        <span>catalog</span>
      </div>

      <SearchBar />

      <div className='flex gap-2 items-center px-4 cursor-pointer capitalize text-xl hover:bg-gray-500 hover:rounded-lg hover:py-2 text-white'>
        <Badge badgeContent={shoppingCart} color="primary">
          <ShoppingCartIcon color="white" />
        </Badge>
        <div>Shopping Cart</div>
      </div>
      

      {links.map(link =>(

      <div key={link.id} className=' flex gap-2 items-center px-4 cursor-pointer capitalize text-xl hover:bg-gray-500 hover:rounded-lg hover:py-2 text-white'> 
      
        {link.icon} 
        
        <Link to={link.link}> {link.link} </Link>
         
      </div> ))}

    </div> 
  )
}

import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PaymentIcon from '@mui/icons-material/Payment';


export default function DropDown({pros}) {

  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () =>{  
    setIsOpen((prev) => !prev);
  }

  return (

    <div className='relative '>
      <div onClick={handleOnClick} className='flex items-center gap-2 p-4 text-xl text-white capitalize cursor-pointer  lg:text-lg hover:bg-gray-500 hover:rounded-lg xxsm:hidden'>        
        <AccountCircleIcon />      
        <span>{pros}</span>
        {
          isOpen ? (
            <ArrowDropDownIcon />
            
          ): (
            <ArrowDropUpIcon />
          )
        }
      </div>

      {
        isOpen && (
          <div className=' flex flex-col gap-2 p-2 w-[130%] xsm:w-[100%] sm:w-[100%] rounded-xl absolute top-16 bg-slate-100 shadow-lg shadow-gray-300'>
            
            <Link to='/user' onClick={handleOnClick}>
              <div className='flex items-center gap-1 p-2 text-lg cursor-pointer  xsm:text-sm sm:text-sm hover:bg-gray-300 hover:rounded-lg'>
                <ManageAccountsIcon />
                <span>My Account</span>
              </div>
            </Link>
            

            <Link to='/user/order' onClick={handleOnClick}>
              <div className='flex items-center gap-1 p-2 text-lg cursor-pointer  xsm:text-sm sm:text-sm hover:bg-gray-300 hover:rounded-lg'>
                <PaymentIcon />
                <span>Purchase</span>
              </div>
            </Link>
            
            <Link to='/' onClick={handleOnClick}>
              <div className='flex items-center gap-1 p-2 text-lg cursor-pointer  xsm:text-sm sm:text-sm hover:bg-gray-300 hover:rounded-lg'>
                <LogoutIcon />
                <span>Log out</span>
              </div>
            </Link>
            

          </div>
        )
      }

    </div>
    
  )
}

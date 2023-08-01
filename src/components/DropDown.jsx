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

    <div className=' relative'>
      <div onClick={handleOnClick} className=' flex gap-2 items-center p-4 cursor-pointer capitalize text-xl lg:text-lg hover:bg-gray-500 hover:rounded-lg text-white xxsm:hidden'>        
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
          <div className=' flex flex-col gap-2 p-2 w-[120%] xsm:w-[100%] sm:w-[100%] rounded-xl absolute top-16 bg-slate-100 shadow-lg shadow-gray-300'>

            <div className=' flex items-center text-lg xsm:text-sm sm:text-sm gap-1 cursor-pointer p-2 hover:bg-gray-300 hover:rounded-lg'>
              <ManageAccountsIcon />
              <span>My Acount</span>
            </div>

            <Link to='/purchase'>
              <div className=' flex items-center text-lg xsm:text-sm sm:text-sm gap-1 cursor-pointer p-2 hover:bg-gray-300 hover:rounded-lg'>
                <PaymentIcon />
                <span>Purchase</span>
              </div>
            </Link>
            
            <div className=' flex items-center text-lg xsm:text-sm sm:text-sm gap-1 cursor-pointer p-2 hover:bg-gray-300 hover:rounded-lg'>
              <LogoutIcon />
              <span>Log out</span>
            </div>

          </div>
        )
      }

    </div>
    
  )
}

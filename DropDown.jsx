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

    <div className=' tw-relative'>
      <div onClick={handleOnClick} className=' tw-flex tw-gap-2 tw-items-center tw-p-4 tw-cursor-pointer tw-capitalize tw-text-xl lg:tw-text-lg hover:tw-bg-gray-500 hover:tw-rounded-lg tw-text-white xxsm:tw-hidden'>        
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
          <div className=' tw-flex tw-flex-col tw-gap-2 tw-p-2 tw-w-[130%] xsm:tw-w-[100%] sm:tw-w-[100%] tw-rounded-xl tw-absolute tw-top-16 tw-bg-slate-100 tw-shadow-lg tw-shadow-gray-300'>
            
            <Link to='/user' className='tw-no-underline' onClick={handleOnClick}>
              <div className=' tw-flex tw-items-center tw-text-lg xsm:tw-text-sm sm:tw-text-sm tw-gap-1 tw-cursor-pointer tw-p-2 hover:tw-bg-gray-300 hover:tw-rounded-lg'>
                <ManageAccountsIcon />
                <span>My Acount</span>
              </div>
            </Link>
            

            <Link to='/user/order' className='tw-no-underline' onClick={handleOnClick}>
              <div className=' tw-flex tw-items-center tw-text-lg xsm:tw-text-sm sm:tw-text-sm tw-gap-1 tw-cursor-pointer tw-p-2 hover:tw-bg-gray-300 hover:tw-rounded-lg'>
                <PaymentIcon />
                <span>Purchase</span>
              </div>
            </Link>
            
            <Link to='/' className='tw-no-underline' onClick={handleOnClick}>
              <div className=' tw-flex tw-items-center tw-text-lg xsm:tw-text-sm sm:tw-text-sm tw-gap-1 tw-cursor-pointer tw-p-2 hover:tw-bg-gray-300 hover:tw-rounded-lg'>
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

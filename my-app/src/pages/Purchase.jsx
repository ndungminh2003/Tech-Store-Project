import React from 'react'
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EventNoteIcon from '@mui/icons-material/EventNote';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LoyaltyIcon from '@mui/icons-material/Loyalty';

export default function Purchase() {
  return (
    <div className=' flex p-5'>
      
      <div className=' flex flex-col gap-20 w-1/6'>
        <div className=' flex gap-2 text-lg items-center'>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className=' cursor-pointer' sx={{ width: 80, height: 80 }}/>
          <div className=' flex flex-col items-center'>
            <span className=' font-bold'>User Name</span>
            <div className=' flex items-center'>
              <EditIcon />
              <span className=' cursor-pointer text-gray-500'>Edit acount</span>
            </div>
          </div>
        </div>
        
        <div className=' flex flex-col gap-4'>
          <div className=' flex gap-2 items-center cursor-pointer text-lg bg-slate-400 rounded-xl w-30 h-10 hover:bg-slate-500 hover:duration-300 hover:text-lime-950 w-3/4'>
            <AccountCircleIcon className=' ml-2'/>
            <span>My account</span>
          </div>
          <div className=' flex gap-2 items-center cursor-pointer text-lg bg-slate-400 rounded-xl w-30 h-10 hover:bg-slate-500 hover:duration-300 hover:text-lime-950 w-3/4'>
            <EventNoteIcon className=' ml-2'/>
            <span>My Purchase</span>
          </div>
          <div className=' flex gap-2 items-center cursor-pointer text-lg bg-slate-400 rounded-xl w-30 h-10 hover:bg-slate-500 hover:duration-300 hover:text-lime-950 w-3/4'>
            <NotificationsActiveIcon className=' ml-2'/>
            <span>Notification</span>
          </div>
          <div className=' flex gap-2 items-center cursor-pointer text-lg bg-slate-400 rounded-xl w-30 h-10 hover:bg-slate-500 hover:duration-300 hover:text-lime-950 w-3/4'>
            <LoyaltyIcon className=' ml-2'/>
            <span>Voucher</span>
          </div>
        </div>

      </div>


      <div className=' flex flex-col w-5/6 gap-5'>
        <div className=' flex text-2xl bg-slate-500 h-20 justify-between rounded-lg'>
          {/* Link */}
          <span className=' flex justify-center items-center p-4 w-1/4 text-white cursor-pointer hover:bg-slate-600 hover:duration-500 hover:rounded-lg'>All</span>
          <span className=' flex justify-center items-center p-4 w-1/4 text-white cursor-pointer hover:bg-slate-600 hover:duration-500 hover:rounded-lg'>Shipping</span>
          <span className=' flex justify-center items-center p-4 w-1/4 text-white cursor-pointer hover:bg-slate-600 hover:duration-500 hover:rounded-lg'>Completed</span>
          <span className=' flex justify-center items-center p-4 w-1/4 text-white cursor-pointer hover:bg-slate-600 hover:duration-500 hover:rounded-lg'>Canceled</span>
        </div>

        <div className='  flex h-[55rem] bg-slate-100 rounded-lg justify-center items-center'>
          <div className=' flex flex-col items-center gap-2'>
            <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/5fafbb923393b712b96488590b8f781f.png" alt="" className=' w-40 h-40'/>
            <div>Order not found</div>
          </div>
          
        </div>


      </div>


    </div>
  )
}

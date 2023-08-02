import React from 'react'
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';


export default function User() {
  return (
    <div className=' tw-flex tw-p-4 tw-container tw-mx-auto' >

      <div className=' tw-flex tw-flex-col tw-gap-20 tw-w-1/6 tw-min-w-[15rem] xxsm:tw-hidden xsm:tw-hidden sm:tw-hidden'>
        <div className=' tw-flex tw-gap-2 tw-text-lg tw-items-center'>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className=' tw-cursor-pointer' sx={{ width: 80, height: 80 }}/>
          <div className=' tw-flex tw-flex-col tw-items-center'>
            <span className=' tw-font-bold'>User Name</span>
            <NavLink to='/user/edit' className='tw-no-underline'>
              <div className=' tw-flex tw-items-center'>
                <EditIcon />
                <span className=' tw-cursor-pointer tw-text-gray-500'>Edit profile</span>
              </div>
            </NavLink>
          </div>
        </div>
        
        <div className=' tw-flex tw-flex-col tw-gap-4'>

          <NavLink to='/user' className='tw-no-underline'>
            <div className=' tw-flex tw-gap-2 tw-items-center tw-cursor-pointer tw-text-lg tw-bg-slate-400 tw-rounded-xl tw-w-30 tw-h-10 hover:tw-bg-slate-500 hover:tw-duration-300 hover:tw-text-lime-950 tw-w-3/4'>{/*w-30*/}
              <PermContactCalendarIcon className=' tw-ml-2'/>
              <span>Detail</span>
            </div>
          </NavLink>

          
          <NavLink to='/user/order' className='tw-no-underline'>
            <div className=' tw-flex tw-gap-2 tw-items-center tw-cursor-pointer tw-text-lg tw-bg-slate-400 tw-rounded-xl tw-w-30 tw-h-10 hover:tw-bg-slate-500 hover:tw-duration-300 hover:tw-text-lime-950 tw-w-3/4'>{/*w-30*/}
              <EventNoteIcon className=' tw-ml-2'/>
              <span>My Purchase</span>
            </div>
          </NavLink>
          
          <div className=' tw-flex tw-gap-2 tw-items-center tw-cursor-pointer tw-text-lg tw-bg-slate-400 tw-rounded-xl tw-w-30 tw-h-10 hover:tw-bg-slate-500 hover:tw-duration-300 hover:tw-text-lime-950 tw-w-3/4'>{/*w-30*/}
            <SupportAgentIcon className=' tw-ml-2'/>
            <span>Support</span>
          </div>

          <div className=' tw-flex tw-gap-2 tw-items-center tw-cursor-pointer tw-text-lg tw-bg-slate-400 tw-rounded-xl tw-w-30 tw-h-10 hover:tw-bg-slate-500 hover:tw-duration-300 hover:tw-text-lime-950 tw-w-3/4'>{/*w-30*/}
            <LoyaltyIcon className=' tw-ml-2'/>
            <span>Voucher</span>
          </div>

        </div>
      </div>

      <div className=' tw-w-full'>
        <Outlet />
      </div>
      
    </div>
  )
}

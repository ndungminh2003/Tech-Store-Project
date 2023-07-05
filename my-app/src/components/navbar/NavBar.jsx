import React from 'react'
import './navbar.scss'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';


export default function NavBar() {
  return (
    <div className="navbar">
      <div className="container">

        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchIcon className='icon'/>
        </div>

        <div className="items">
          
          <div className="item">
            <DarkModeIcon className='icon'/>
          </div>
            
          <div className="item">
            <NotificationsActiveIcon className='icon'/>
            <div className="counter">1</div>
          </div>

          <div className="item">
            <AccountCircleIcon className='icon'/>
          </div>

          <div className="item">
            <SettingsIcon className='icon'/>
          </div>
          
        </div>  

      </div>
    </div>
  )
}

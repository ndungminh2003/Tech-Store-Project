import React from 'react'
import './sidebar.scss'
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CategoryIcon from '@mui/icons-material/Category';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import MenuIcon from '@mui/icons-material/Menu';
import avatar from './admin.png'
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className="sidebar">

      <div className="top">
        <span className="logo">TECH STORE</span>
        <span className="menu"><MenuIcon /></span>
      </div>

      <div className="image">
        <img src={avatar} alt="avatar" />
        <span className="name">N.D.Minh</span>
        <span className="role">Admin</span>
      </div>

      <div className="center">

        <ul>
          <p className="title">MAIN</p>
          <li>
            <HomeIcon className="icon"/>
            
            <span>Dashbroad</span>  
          </li>

          <p className="title">USEFUL</p>
          <li>
            <AnalyticsIcon className="icon"/>
            <span>Analytics</span>  
          </li>

          <p className="title">LIST</p>
          <li>
            <PeopleAltIcon className="icon"/>
            <span>Customers</span>  
          </li>

          <li>
            <PeopleAltIcon className="icon"/>
            <span>Sales</span>  
          </li>

          <p className="title">LIST</p>
          <li>
            <CategoryIcon className="icon"/>            
            <span>Categories</span>              
          </li>

          <li>
            <Inventory2Icon className="icon"/>
            <span>Products</span>  
          </li>

          <li>
            <LocalGroceryStoreIcon className="icon"/>
            <span>Orders</span>  
          </li>

          <li>
            <LogoutIcon className="icon"/>
            <span>Log Out</span>  
          </li>
          

        </ul>

      </div>

      <div className="bottom">
        
      </div>

    </div>
  )
}

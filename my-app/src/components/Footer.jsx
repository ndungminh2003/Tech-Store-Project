import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import CallIcon from '@mui/icons-material/Call';
import NotesIcon from '@mui/icons-material/Notes';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HomeIcon from '@mui/icons-material/Home';

export default function Footer() {
  return (
    <div className=' bg-slate-800 w-full text-white z-50 xxsm:sticky xxsm:bottom-0 xsm:sticky xsm:bottom-0 sm:sticky sm:bottom-0 md:sticky md:bottom-0 lg:sticky lg:bottom-0'>

      <footer className= ' container mx-auto grid grid-cols-3 gap-4 py-3 justify-items-center p-6 xxsm:hidden xsm:hidden sm:hidden md:hidden lg:hidden'>
        <div className=' flex flex-col gap-3'>
          <h1>INFORMATION AND POLICY</h1>
          <p className=' cursor-pointer ml-2'>Privacy Policy</p>
          <p className=' cursor-pointer ml-2'>Refund Policy</p>
          <p className=' cursor-pointer ml-2'>Shipping Policy</p>
          <p className=' cursor-pointer ml-2'>Terms Of Service</p>
        </div>

        <div className='flex flex-col gap-3'>
          <h1>CENTER SUPPORT</h1>  
          <p className=' ml-2'>Hotline: 19006868</p>
          <p className=' ml-2'></p>

        </div>

        <div className=' flex flex-col gap-3 '>
          <h1>CONNECT WITH US</h1>
          <p className=' ml-2'>TechStore</p>
          <p className=' ml-2'>227 District 5 HCM Viet Nam</p>

          <div className='flex gap-4 items-center ml-2'> 
            <img src="social_images/facebook.png" alt="Facebook" className=' w-8 h-8 cursor-pointer '/>
            <img src="social_images/instagram.png" alt="Instagram" className=' w-8 h-8 cursor-pointer '/>
            <img src="social_images/youtube.png" alt="Youtube" className=' w-8 h-8 cursor-pointer '/>
          </div>
        </div> 
        
      </footer>

      <footer className= ' py-3 text-center mb-0 xxsm:hidden xsm:hidden sm:hidden md:hidden lg:hidden'> &copy; {new Date().getFullYear()}; Powered by TechStore</footer> 

      <div className=' container mx-auto flex h-17 justify-around items-center xl:hidden 2xl:hidden'>
        
        <Link to='/'>
          <div className=' flex flex-col gap-2 items-center p-4 cursor-pointer capitalize xxsm:text-sm xsm:text-sm sm:text-sm md:text-lg hover:bg-gray-500 hover:rounded-lg hover:py-1 text-white'>
            <HomeIcon />
            <span>home</span>
          </div>
        </Link>
        

        <div className=' flex flex-col gap-2 items-center p-4 cursor-pointer capitalize xxsm:text-sm xsm:text-sm sm:text-sm md:text-lg hover:bg-gray-500 hover:rounded-lg hover:py-1 text-white'>
          <NotesIcon />
          <span>catalog</span>
        </div>

        <Link to='/order'>
          <div className=' flex flex-col gap-2 items-center p-4 cursor-pointer capitalize xxsm:text-sm xsm:text-sm sm:text-sm md:text-lg hover:bg-gray-500 hover:rounded-lg hover:py-1 text-white '> 
            <LocalShippingIcon />          
            <span>order</span>      
          </div>
        </Link>
        
        <Link to='/contact'>
          <div className=' flex flex-col gap-2 items-center p-4 cursor-pointer capitalize xxsm:text-sm xsm:text-sm sm:text-sm md:text-lg hover:bg-gray-500 hover:rounded-lg hover:py-1 text-white '>         
            <CallIcon />         
            <span>contact</span>
          </div>
        </Link>
       
      </div>

    </div>
      
    
  )
}

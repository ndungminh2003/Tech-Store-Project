import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import CallIcon from '@mui/icons-material/Call';
import NotesIcon from '@mui/icons-material/Notes';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Footer() {
  return (
    <div className=' tw-bg-slate-800 tw-w-full tw-text-white tw-z-50 xxsm:tw-sticky xxsm:tw-bottom-0 xsm:tw-sticky xsm:tw-bottom-0 sm:tw-sticky sm:tw-bottom-0 md:tw-sticky md:tw-bottom-0 lg:tw-sticky lg:tw-bottom-0'>

      <footer className= ' tw-container tw-mx-auto tw-grid tw-grid-cols-3 tw-gap-4 tw-py-3 tw-justify-items-center tw-p-6 xxsm:tw-hidden xsm:tw-hidden sm:tw-hidden md:tw-hidden lg:tw-hidden '>
        <div className=' tw-flex tw-flex-col tw-gap-3'>
          <h1>INFORMATION AND POLICY</h1>
          <p className=' tw-cursor-pointer tw-ml-2'>Privacy Policy</p>
          <p className=' tw-cursor-pointer tw-ml-2'>Refund Policy</p>
          <p className=' tw-cursor-pointer tw-ml-2'>Shipping Policy</p>
          <p className=' tw-cursor-pointer tw-ml-2'>Terms Of Service</p>
        </div>

        <div className='tw-flex tw-flex-col tw-gap-3'>
          <h1>CENTER SUPPORT</h1>  
          <p className=' tw-ml-2'>Hotline: 19006868</p>
          <p className=' tw-ml-2'></p>

        </div>

        <div className=' tw-flex tw-flex-col tw-gap-3 '>
          <h1>CONNECT WITH US</h1>
          <p className=' tw-ml-2'>TechStore</p>
          <p className=' tw-ml-2'>227 District 5 HCM Viet Nam</p>

          <div className='tw-flex tw-gap-4 tw-items-center tw-ml-2'> 
            <img src="social_images/facebook.png" alt="Facebook" className=' tw-w-8 tw-h-8 tw-cursor-pointer '/>
            <img src="social_images/instagram.png" alt="Instagram" className=' tw-w-8 tw-h-8 tw-cursor-pointer '/>
            <img src="social_images/youtube.png" alt="Youtube" className=' tw-w-8 tw-h-8 tw-cursor-pointer '/>
          </div>
        </div> 
        
      </footer>

      <footer className= ' tw-py-3 tw-text-center tw-mb-0 xxsm:tw-hidden xsm:tw-hidden sm:tw-hidden md:tw-hidden lg:tw-hidden'> &copy; {new Date().getFullYear()}; Powered by TechStore</footer> 

      <div className=' tw-container tw-mx-auto tw-flex tw-h-full tw-justify-around tw-items-center xl:tw-hidden 2xl:tw-hidden'>
        
        <Link to='/' className='tw-no-underline'>
          <div className=' tw-flex tw-flex-col tw-gap-2 tw-items-center tw-p-4 tw-cursor-pointer tw-capitalize xxsm:tw-text-sm xsm:tw-text-sm sm:tw-text-sm md:tw-text-lg hover:tw-bg-gray-500 hover:tw-rounded-lg hover:tw-py-1 tw-text-white'>
            <HomeIcon />
            <span>home</span>
          </div>
        </Link>
        

        <div className=' tw-flex tw-flex-col tw-gap-2 tw-items-center tw-p-4 tw-cursor-pointer tw-capitalize xxsm:tw-text-sm xsm:tw-text-sm sm:tw-text-sm md:tw-text-lg hover:tw-bg-gray-500 hover:tw-rounded-lg hover:tw-py-1 tw-text-white'>
          <NotesIcon />
          <span>catalog</span>
        </div>

        <Link to='/wishlist' className='tw-no-underline'>
          <div className=' tw-flex tw-flex-col tw-gap-2 tw-items-center tw-p-4 tw-cursor-pointer tw-capitalize xxsm:tw-text-sm xsm:tw-text-sm sm:tw-text-sm md:tw-text-lg hover:tw-bg-gray-500 hover:tw-rounded-lg hover:tw-py-1 tw-text-white '> 
            <FavoriteIcon />          
            <span>wishlist</span>      
          </div>
        </Link>
        
        <Link to='/contact' className='tw-no-underline'>
          <div className=' tw-flex tw-flex-col tw-gap-2 tw-items-center tw-p-4 tw-cursor-pointer tw-capitalize xxsm:tw-text-sm xsm:tw-text-sm sm:tw-text-sm md:tw-text-lg hover:tw-bg-gray-500 hover:tw-rounded-lg hover:tw-py-1 tw-text-white '>         
            <CallIcon />         
            <span>contact</span>
          </div>
        </Link>
       
      </div>

    </div>
      
    
  )
}

import React from 'react'
import "../assets/style/footer.scss"

export default function Footer() {
  return (
    <div className='footer bg-slate-800 w-full text-white'>

      <footer className= 'footer-grid grid grid-cols-3 gap-4 py-3 justify-items-center'>
        <div className='flex flex-col gap-3'>
          <h1>INFORMATION AND POLICY</h1>
          <p className='footer-center cursor-pointer ml-2'>Privacy Policy</p>
          <p className='footer-center cursor-pointer ml-2'>Refund Policy</p>
          <p className='footer-center cursor-pointer ml-2'>Shipping Policy</p>
          <p className='footer-center cursor-pointer ml-2'>Terms Of Service</p>
        </div>

        <div className='footer-center flex flex-col gap-3'>
          <h1>CENTER SUPPORT</h1>  
          <p className='footer-center ml-2'>Hotline: 19006868</p>
          <p className='footer-center ml-2'></p>

        </div>

        <div className='footer-center flex flex-col gap-3 '>
          <h1>CONNECT WITH US</h1>
          <p className='footer-center ml-2'>TechStore</p>
          <p className='footer-center ml-2'>227 District 5 HCM Viet Nam</p>

          <div className='footer-center flex gap-4 items-center ml-2'> 
            <img src="social_images/facebook.png" alt="Facebook" className=' w-8 h-8 cursor-pointer '/>
            <img src="social_images/instagram.png" alt="Instagram" className=' w-8 h-8 cursor-pointer '/>
            <img src="social_images/youtube.png" alt="Youtube" className=' w-8 h-8 cursor-pointer '/>
          </div>
         
        </div> 
      </footer>

      <footer className= ' py-3 text-center mb-0 '> &copy; {new Date().getFullYear()}; Powered by TechStore</footer> 

    </div>
      
    
    
  )
}

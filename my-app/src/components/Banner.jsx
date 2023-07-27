import React, { useState, useEffect } from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import WatchIcon from '@mui/icons-material/Watch';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import DevicesIcon from '@mui/icons-material/Devices';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import UsbIcon from '@mui/icons-material/Usb';

export default function Banner() {

  const catalog = [
    {
      id: 1,
      type: "Phone",
      icon: <PhoneIphoneIcon />
    },

    {
      id: 2,
      type: "Tablet",
      icon: <TabletMacIcon />
    },
    
    {
      id: 3,
      type: "Laptop",
      icon: <LaptopMacIcon />
    },

    {
      id: 4,
      type: "Head phone",
      icon: <HeadphonesIcon />
    },

    {
      id: 5,
      type: "Watch",
      icon: <WatchIcon />
    },

    {
      id: 6,
      type: "PC",
      icon: <DevicesIcon />
    },

    {
      id: 7,
      type: "Television",
      icon: <ConnectedTvIcon />
    },

    {
      id: 8,
      type: "Accessory",
      icon: <UsbIcon />
    },
    
  ];

  const slides = [
    {
      url: 'https://fptshop.com.vn/Uploads/originals/2023/6/16/638225012888439267_1920x1080.png',
      alt: 'iphone 14'
    },
    {
      url: 'https://cdn.dienthoaigiakho.vn/photos/1644641693487-s22ultr-info.jpg',
      alt: 'samsung'
    }
  ];


  const [hoveredElement, setHoveredElement] = useState(null);
    
  const handleMouseOver = (c) => {
    setHoveredElement(c);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };

  //useState Slides

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setCurrentIndex((currentIndex) => {
        if (currentIndex === slides.length - 1) {
          return 0; 
        } else {
          return currentIndex + 1; 
        }
      });

    }, 5000);

    return () => {
      clearTimeout(id)
    }
  }, [currentIndex]);

  console.log(currentIndex);
  

  const prevSlide = () =>{
    const isFristSlide = currentIndex === 0;
    const newIndex = isFristSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () =>{
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }


  return (

    <div className=' container mx-auto flex gap-2 justify-between '>
      
        <div className=' relative flex flex-col gap-1 w-56 border-2 rounded-3xl ml-4 mt-8 shadow-lg shadow-gray-400 min-w-max h-fit xxsm:hidden xsm:hidden sm:hidden'>
          { 
            catalog.map( c => (
              <div key={c.id} onMouseMove={ () => handleMouseOver(c)} onMouseOut={handleMouseLeave} className=' flex items-center justify-between p-2 cursor-pointer hover:bg-gray-300 hover:rounded-3xl hover:px-2 '>
                <div>
                  <span>{c.icon}</span>
                  <span className=' ml-1' >{c.type}</span>
                </div>      
                <NavigateNextIcon />
              </div>
            ))
          }
        
          {
            hoveredElement && (
              <div onMouseMove={ () => handleMouseOver(hoveredElement)} onMouseOut={handleMouseLeave} className=" absolute w-[84rem] h-full bg-slate-100 left-full rounded-xl z-40">
                {hoveredElement.type}
              </div>
            )
          }
        </div>
        
        <div className=' flex mt-8 p-1 border-4 rounded-3xl h-[35rem] w-[55rem] shadow-lg shadow-gray-400 xxsm:h-[15rem] xsm:h-[25rem] sm:h-[26rem] md:h-[26rem] lg:h-[28rem] xl:h-[30rem]'>
          
          <div className=' relative w-full h-full p-1'>
            <img src={slides[currentIndex].url} alt="" className=' rounded-xl w-full h-full object-fit duration-500 '/>
            <ArrowBackIosIcon sx={{width: 35, height: 35}} onClick={prevSlide} className=' absolute top-1/2  translate-x-[0] tranlate-y-[-50%] cursor-pointer p-2 bg-black/20 text-white left-5 text-xl rounded-full' />
            <ArrowForwardIosIcon sx={{width: 35, height: 35}} onClick={nextSlide} className=' absolute top-1/2  translate-x-[0] tranlate-y-[-50%] cursor-pointer p-2 bg-black/20 text-white right-5 text-xl rounded-full' />
          </div>          
          
        </div>

        <div className=' flex flex-col mt-12 py-1 px-1 gap-3 w-[24rem] h-64 xxsm:hidden xsm:hidden sm:hidden md:hidden lg:hidden'>
          <img src="https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/s21-fe-right-banner-th7.png" alt="" className=' rounded-3xl cursor-pointer '/>
          <img src="https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/ipadth7-new.png" alt="" className=' rounded-3xl cursor-pointer  '/>
          <img src="https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/RightBanner_PreOrder_WATCH6_Series_07.png" alt="" className=' rounded-3xl cursor-pointer '/>       
        </div>

      </div>

  )
      
}

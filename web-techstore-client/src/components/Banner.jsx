import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
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
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

export default function Banner() {

  const catalog = [
    {
      id: 1,
      type: "Phone",
      icon: <PhoneIphoneIcon />,  

      brands: {
        title: 'Select by brand',
        brand: [
          "Samsung",
          "iPhone",
          "Xiaomi",
          "OPPO",
          "realme",
          "vivo",
          "Nokia",
          "ASUS",
          "Nubia",
          "Tecno",
          "Infinix",
          "OnePlus",
          "Itel"
        ]
      },

      price:{
        title: 'Phone price range',
        range: ["Under  5 million VND", "From 5 to 10 million VND", "From 10 to 15 million VND", "Above 15 million VND"],
      },

      hot: {
        title: 'Hot',
        product: 
        [
          "iPhone 14 Pro Max",
          "Galaxy Z Fold5",
          "Galaxy Z Flip5",
          "Galaxy S23 Ultra",
          "realme 11 Pro",
          "Oneplus Nord 3",
          "Xiaomi Redmi Note 12 8GB 128GB mới",
          "OPPO Reno10 5G"
        ]
      }
      
    },

    {
      id: 2,
      type: "Tablet",
      icon: <TabletMacIcon />,

      brands: {
        title: 'Select by brand',
        brand: [
          "iPad",
          "Samsung",
          "Xiaomi",
          "Huawei",
          "Lenovo",
          "Nokia",
          "Alcatel",
          "Kindle",
          "Máy đọc sách",
          "Xem thêm tất cả Tablet",
        ]
      },

      price:{
        title: 'Tablet price range',
        range: ["Under  10 million VND", "From 10 to 15 million VND", "From 15 to 20 million VND", "Above 20 million VND"],
      },

      hot: {
        title: 'Hot',
        product: 
        [
          "iPad Gen 10",
          "iPad mini 6",
          "Galaxy Tab S9 Ultra",
          "iPad Air 10.9 2022 M1",
          "Nokia T21",
        ]
      }
    },
    
    {
      id: 3,
      type: "Laptop",
      icon: <LaptopMacIcon />,

      brands: {
        title: 'Select by brand',
        brand: [
          "Mac",
          "HP",
          "Dell",
          "ASUS",
          "Lenovo",
          "Microsoft Surface",
          "Acer",
          "Xiaomi",
          "LG",
          "Huawei",
          "MSI",
          "Gigabyte",
          "Vaio",
        ]
      },

      price:{
        title: 'Laptop price range',
        range: ["Under  15 million VND", "From 15 to 20 million VND", "From 20 to 25 million VND", "Above 25 million VND"],
      },

      hot: {
        title: 'Hot',
        product: 
        [
          "Macbook Pro M2 2022 512GB",
          "Macbook Pro M2 2022 256GB",
          "Macbook Air M2 2022 512GB",
          "Mac Mini M2 2022 512GB",
          "Macbook Air M2 2022 256GB",
          "Asus Vivobook Stale Oled T3304",
          "Lenovo Ideapad 3 15IML05"
        ]
      }

    },

    {
      id: 4,
      type: "Head Phone",
      icon: <HeadphonesIcon />,

      brands:{
        title: 'Headset brand',
        brand: [
          "Apple",
          "JBL",
          "Xiaomi",
          "Samsung",
          "Sony",
          "Sennheiser",
          "Soundpeats",
          "Soul",
          "Havit",
          "Edifier",
        ]
      },

      price:{
        title: 'Phone price range',
        range: ["Under 1 million VND", "1 to 3 million VND", "From 3 to 5 million VND", "Above 5 million VND"],
      },
      
      hot: {
        title: 'Hot',
        product: 
        [
          "AirPods Pro 2",
          "Galaxy Buds 2 Pro",
          "AirPods Pro",
          "Samsung MX-T40",
          "Samsung HW-Q600B",
          "JBL Quantum One",
        ]
      }
    },

    {
      id: 5,
      type: "Watch",
      icon: <WatchIcon />,

      brands:{
        title: 'Select by brand',
        brand: [
          "Apple Watch",
          "Samsung",
          "Xiaomi",
          "Huawei",
          "Coros",
          "Garmin",
          "Kieslect",
          "Amazfit",
          "Soundpeats",
          "Oppo",
        ]
      },

      price:{
        title: 'Watch price range',
        range: ["Under 2 million VND", "From 2 to 5 million VND", "From 5 to 10 million VND", "Above 10 million VND"],
      },
      
      hot: {
        title: 'Hot',
        product: 
        [
          "Samsung Galaxy Watch6 Classic",
          "Samsung Galaxy Watch6",
          "Apple Watch Series 8",
          "Garmin Approach S70",
          "Garmin Epix Pro 2",
          "Huawei band 8",
          "Apple Watch SE",
        ]
      }

    },

    {
      id: 6,
      type: "PC",
      icon: <DevicesIcon />,

      brands:{
        title: 'Select by brand',
        brand: [
          "ASUS",
          "Samsung",
          "DELL",
          "LG",
          "MSI",
          "GIGABYTE",
          "HKC",
          "ViewSonic",
          "Philips",
          "AOC",
        ]
      },

      price:{
        title: 'PC price range',
        range: ["Under 5 million VND", "From 5 to 10 million VND", "From 10 to 15 million VND", "Above 15 million VND"],
      },
      
      hot: {
        title: 'Hot',
        product: 
        [
          "ASUS",
          "Samsung",
          "DELL",
          "LG",
          "MSI",
          "GIGABYTE",
        ]
      }

     
    },

    {
      id: 7,
      type: "Television",
      icon: <ConnectedTvIcon />,

      brands:{
        title: 'Select by brand',
        brand: [
          "Apple Watch",
          "Samsung",
          "Xiaomi",
          "Huawei",
          "Coros",
          "Garmin",
          "Kieslect",
          "Amazfit",
          "Soundpeats",
          "Oppo",
        ]
      },

      price:{
        title: 'Select by price',
        range: [
          "From 9 to 12 million VND", 
          "From 12 to 15 million VND", 
          "Over 15 million VND"
        ]
      },
      

      hot: {
        title: 'Hot',
        product: 
        [
          "Tivi Xiaomi A2 58 inch",
          "Tivi Xiaomi P1 55 inch",
          "Tivi Toshiba 43 inch",
          "Tivi Coocaa FHD 43 inch",
          "Tivi Khung Tranh 50 inch",
          "Khung treo tivi",

        ]
      }
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

    <div className=' tw-container tw-mx-auto tw-flex tw-gap-2 tw-justify-between '>
      
        <div id='catalog' className=' tw-relative tw-flex tw-flex-col tw-gap-1 tw-w-60 tw-border-2 tw-rounded-3xl tw-ml-2 tw-mt-8 tw-shadow-lg tw-shadow-gray-400 tw-min-w-max tw-h-fit xxsm:tw-hidden xsm:tw-hidden sm:tw-hidden '>
          { 
            catalog.map( c => (
              <div key={c.id} onMouseMove={ () => handleMouseOver(c)} onMouseOut={handleMouseLeave} className=' tw-flex tw-items-center tw-justify-between tw-p-2 tw-cursor-pointer hover:tw-bg-gray-300 hover:tw-rounded-3xl hover:tw-px-2 '>
                <div>
                  <span>{c.icon}</span>
                  <span className=' tw-ml-1' >{c.type}</span>
                </div>      
                <NavigateNextIcon />
              </div>
            ))
          }
        
          {
            hoveredElement && (
              <div onMouseMove={ () => handleMouseOver(hoveredElement)} onMouseOut={handleMouseLeave} className=" tw-absolute tw-w-[84rem] xl:tw-w-[68rem] lg:tw-w-[52rem] md:tw-w-[38rem] tw-h-fit tw-bg-slate-100 tw-left-full tw-rounded-xl tw-z-40">
                <div className=' tw-flex tw-justify-around tw-p-2 md:tw-gap-8'>
                  <div className=' tw-flex tw-flex-col tw-gap-2 tw-text-lg'>
                    <div className=' tw-font-bold tw-text-xl'>
                      {hoveredElement.brands.title}
                    </div>
                    {
                      hoveredElement.brands.brand.map( b => (
                        <Link to='search-product' className='tw-no-underline'>
                          <div className=' tw-cursor-pointer tw-text-gray-600 hover:tw-text-red-500'>{b}</div>
                        </Link>
                      ))
                    }
                  </div>
                  <div className=' tw-flex tw-flex-col tw-gap-2 tw-text-lg'>
                    <div className=' tw-font-bold tw-text-xl'>
                      {hoveredElement.price.title}
                    </div>
                    {
                      hoveredElement.price.range.map( b => (
                        <Link to='search-product' className='tw-no-underline'>
                          <div className=' tw-cursor-pointer tw-text-gray-600 hover:tw-text-red-500'>{b}</div>
                        </Link>
                      ))
                    }
                  </div>
                      
                  <div className=' tw-flex tw-flex-col tw-gap-2 tw-text-lg '>
                    <div className=' tw-flex tw-font-bold tw-text-xl tw-items-center tw-gap-1'>
                      {hoveredElement.hot.title}
                      <LocalFireDepartmentIcon sx={{color: 'red'}}/>
                    </div>
                    {
                      hoveredElement.hot.product.map( b => (
                        <Link to='search-product' className='tw-no-underline'>
                          <div className=' tw-cursor-pointer tw-text-gray-600 hover:tw-text-red-500'>{b}</div>
                        </Link>   
                      ))
                    }
                  </div>
                </div>
              </div>
            )
          }

        </div>
        
        <div className=' tw-flex tw-mt-8 tw-p-1 tw-border-4 tw-rounded-3xl tw-h-[35rem] tw-w-[55rem] tw-shadow-lg tw-shadow-gray-400 xxsm:tw-h-[15rem] xsm:tw-h-[25rem] sm:tw-h-[26rem] md:tw-h-[26rem] lg:tw-h-[28rem] xl:tw-h-[30rem]'>
          
          <div className=' tw-relative tw-w-full tw-h-full tw-p-1'>
            <img src={slides[currentIndex].url} alt="" className=' tw-rounded-xl tw-w-full tw-h-full tw-object-fill tw-duration-500 '/>
            <ArrowBackIosIcon sx={{width: 35, height: 35}} onClick={prevSlide} className=' tw-absolute tw-top-1/2  tw-translate-x-[0] tw-translate-y-[-50%] tw-cursor-pointer tw-p-2 tw-bg-black/20 tw-text-white tw-left-5 tw-text-xl tw-rounded-full' /> {/*fix tw-tranlate-y-[-50%]*/}
            <ArrowForwardIosIcon sx={{width: 35, height: 35}} onClick={nextSlide} className=' tw-absolute tw-top-1/2  tw-translate-x-[0] tw-translate-y-[-50%] tw-cursor-pointer tw-p-2 tw-bg-black/20 tw-text-white tw-right-5 tw-text-xl tw-rounded-full' />{/*fix tw-tranlate-y-[-50%]*/}
          </div>          
          
        </div>

        <div className=' tw-flex tw-flex-col tw-mt-12 tw-py-1 tw-px-1 tw-gap-3 tw-w-[24rem] tw-h-64 xxsm:tw-hidden xsm:tw-hidden sm:tw-hidden md:tw-hidden lg:tw-hidden'>
          <img src="https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/s21-fe-right-banner-th7.png" alt="" className=' tw-rounded-3xl tw-cursor-pointer '/>
          <img src="https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/ipadth7-new.png" alt="" className=' tw-rounded-3xl tw-cursor-pointer  '/>
          <img src="https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/RightBanner_PreOrder_WATCH6_Series_07.png" alt="" className=' tw-rounded-3xl tw-cursor-pointer '/>       
        </div>
    </div>

  )
      
}

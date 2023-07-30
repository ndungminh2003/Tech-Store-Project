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
import UsbIcon from '@mui/icons-material/Usb';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import CampaignIcon from '@mui/icons-material/Campaign';
import BuildIcon from '@mui/icons-material/Build';
import { red } from '@mui/material/colors';

export default function Banner() {

  const catalog = [
    {
      id: 1,
      type: "Phone",
      icon: <PhoneIphoneIcon />,  

      brands: {
        title: 'Mobile phone brands',
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
        range: ["Under  5 million VND", "From 5 to 10 million VND", "From 10 to15 million VND", "Above 15 million VND"],
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
      icon: <TabletMacIcon />
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

      need:{
        title: 'Select based on your need',
        style: [
          "Office",
          "Thin and light",
          "Graphics-Technical",
          "For students",
          "Touchscreen",
        ]
      },
      
      chip:{
        title: 'Select by chip line',
        type: [
          "Laptop Core i3",
          "Laptop Core i5",
          "Laptop Core i7",
          "Laptop Core i9",
        ]
      },

      size:{
        title: 'Select by screen size',
        type: [
          "Laptop 12 inch",
          "Laptop 13 inch",
          "Laptop 14 inch",
          "Laptop 15.6 inch",
          "Laptop 16 inch",
        ]
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
      type: "Sound",
      icon: <HeadphonesIcon />,

      headset: {
        title: 'Select headset type',
        type: [
          "Bluetooth headphone",
          "Over-ear headphone",
          "Wired headphone",
          "Sports headphone",
          "Gaming headset",
          "View all Headsets",
        ]
      },

      headset_brand:{
        title: 'Headset brand',
        type: [
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
      
      speaker:{
        title: 'Select speaker type',
        type: [
          "Bluetooth speaker",
          "Mini speaker",
          "Karaoke speaker",
          "Soundbar speaker",
          "View all Speakers",
        ]
      },

      speaker_brand:{
        title: 'Speaker brand',
        type: [
          "JBL",
          "LG",
          "Sony",
          "Marshall",
          "Harman Kardon",
          "Tronsmart",
          "Samsung",
          "Edifier",
          "Bose",
        ]
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

      type_of_watch: {
        title: 'Type of watch',
        type: [
          "Smart watch",
          "Smart bracelet",
          "Children’s locator watch",
          "Strap",
        ]
      },

      select_by_brand:{
        title: 'Select by brand',
        type: [
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
      
      need:{
        title: 'Select based on your need',
        type: [
          "Sports watch",
          "Waterproof watch",
          "Smartwatch",
          "Smartwatches with blood pressure monitoring",
        ]
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

      desktop: {
        title: 'Desktop',
        type: [
          "PC with pre-assembled CPS", "All-in-one computer", "PC sync", "Build PC"
        ]
      },

      computer_accessories:{
        title: 'Computer accessories',
        type: [
          "CPU", "Main", "RAM", "Hard Drive", "Source", "VGA", "Radiators", "Case", "View all"
        ]
      },
      
      select_monitor_by_brand:{
        title: 'Select Monitor by brand',
        type: [
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

      need:{
        title: 'Select screen based on need',
        type: [
          "Gaming", "Office", "Graphics", "View all"
        ]
      },

      gaming_gear: {
        title: 'Gaming Gear',
        type: 
        [
          "Gaming keyboard", "Gaming mouse", "Gaming Headset", "Gamepad", "View all"
        ]
      }
    },

    {
      id: 7,
      type: "Television",
      icon: <ConnectedTvIcon />,


      select_by_brand:{
        title: 'Select by brand',
        type: [
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

      select_by_price:{
        title: 'Select by price',
        type: [
          "From 9 to 12 million VND", 
          "From 12 to 15 million VND", 
          "Over 15 million VND"
        ]
      },
      
      select_by_resolution:{
        title: 'Select by resolution',
        type: [
          "Tivi 4K",
          "Tivi 8K",
          "Tivi Full HD",
          "Tivi QLED",
          "Android Tivi"
        ]
      },

      select_by_size:{
        title: 'Select by size',
        type: [
          "Tivi 32 inch",
          "Tivi 43 inch",
          "Tivi 50 inch",
          "Tivi 55 inch",
          "Tivi 65 inch",
          "Tivi 70 inch",
          "Tivi 85 inch"
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

    {
      id: 8,
      type: "Accessory",
      icon: <UsbIcon />
    },

    {
      id: 9,
      type: "Second-hand",
      icon: <BuildIcon />
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
      
        <div className=' relative flex flex-col gap-1 w-60 border-2 rounded-3xl ml-2 mt-8 shadow-lg shadow-gray-400 min-w-max h-fit xxsm:hidden xsm:hidden sm:hidden'>
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
              <div onMouseMove={ () => handleMouseOver(hoveredElement)} onMouseOut={handleMouseLeave} className=" absolute w-[84rem] h-fit bg-slate-100 left-full rounded-xl z-40">
                {
                  hoveredElement.id === 1 && ( 
                    <div className=' flex justify-around p-4'>
                      <div className=' flex flex-col gap-1 text-lg'>
                        <div className=' font-bold text-xl'>
                          {hoveredElement.brands.title}
                        </div>
                        {
                          hoveredElement.brands.brand.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>
                      <div className=' flex flex-col gap-2 text-lg'>
                        <div className=' font-bold text-xl'>
                          {hoveredElement.price.title}
                        </div>
                        {
                          hoveredElement.price.range.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>
                      
                      <div className=' flex flex-col gap-2 text-lg '>
                        <div className=' flex font-bold text-xl items-center gap-1'>
                          {hoveredElement.hot.title}
                          <LocalFireDepartmentIcon sx={{color: 'red'}}/>
                        </div>
                        {
                          hoveredElement.hot.product.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>
                    </div>
                  )
                }
                {
                  hoveredElement.id === 3 && ( 
                    <div className=' flex justify-around p-4'>
                      <div className=' flex flex-col gap-1 text-lg'>
                        <div className=' font-bold text-xl'>
                          {hoveredElement.brands.title}
                        </div>
                        {
                          hoveredElement.brands.brand.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>
                      <div className=' flex flex-col gap-2 text-lg'>
                        <div className=' font-bold text-xl'>
                          {hoveredElement.need.title}
                        </div>
                        {
                          hoveredElement.need.style.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>

                      <div className=' flex flex-col gap-2 text-lg'>
                        <div className=' font-bold text-xl'>
                          {hoveredElement.chip.title}
                        </div>
                        {
                          hoveredElement.chip.type.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>

                      <div className=' flex flex-col gap-2 text-lg'>
                        <div className=' font-bold text-xl'>
                          {hoveredElement.size.title}
                        </div>
                        {
                          hoveredElement.size.type.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>
                      
                      <div className=' flex flex-col gap-2 text-lg '>
                        <div className=' flex font-bold text-xl items-center gap-1'>
                          {hoveredElement.hot.title}
                          <LocalFireDepartmentIcon sx={{color: 'red'}}/>
                        </div>
                        {
                          hoveredElement.hot.product.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>
                    </div>
                  )
                }
                {
                  hoveredElement.id === 4 && ( 
                    <div className=' flex justify-around p-4'>                     
                      <div className=' flex flex-col gap-2 text-lg'>
                        <div className=' font-bold text-xl'>
                          {hoveredElement.headset.title}
                        </div>
                        {
                          hoveredElement.headset.type.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>

                      <div className=' flex flex-col gap-2 text-lg'>
                        <div className=' font-bold text-xl'>
                          {hoveredElement.headset_brand.title}
                        </div>
                        {
                          hoveredElement.headset_brand.type.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>

                      <div className=' flex flex-col gap-2 text-lg'>
                        <div className=' font-bold text-xl'>
                          {hoveredElement.speaker.title}
                        </div>
                        {
                          hoveredElement.speaker.type.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>

                      <div className=' flex flex-col gap-2 text-lg'>
                        <div className=' font-bold text-xl'>
                          {hoveredElement.speaker_brand.title}
                        </div>
                        {
                          hoveredElement.speaker_brand.type.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>
                      
                      <div className=' flex flex-col gap-2 text-lg '>
                        <div className=' flex font-bold text-xl items-center gap-1'>
                          {hoveredElement.hot.title}
                          <LocalFireDepartmentIcon sx={{color: 'red'}}/>
                        </div>
                        {
                          hoveredElement.hot.product.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>
                    </div>
                  )
                }

                {
                  hoveredElement.id === 5 && ( 
                    <div className=' flex justify-around p-4'>
                    
                      <div className=' flex flex-col gap-2 text-lg'>
                        <div className=' font-bold text-xl'>
                          {hoveredElement.type_of_watch.title}
                        </div>
                        {
                          hoveredElement.type_of_watch.type.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>

                      <div className=' flex flex-col gap-2 text-lg'>
                        <div className=' font-bold text-xl'>
                          {hoveredElement.select_by_brand.title}
                        </div>
                        {
                          hoveredElement.select_by_brand.type.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>

                      <div className=' flex flex-col gap-2 text-lg'>
                        <div className=' font-bold text-xl'>
                          {hoveredElement.need.title}
                        </div>
                        {
                          hoveredElement.need.type.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>
                      
                      <div className=' flex flex-col gap-2 text-lg '>
                        <div className=' flex font-bold text-xl items-center gap-1'>
                          {hoveredElement.hot.title}
                          <LocalFireDepartmentIcon sx={{color: 'red'}}/>
                        </div>
                        {
                          hoveredElement.hot.product.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>
                    </div>
                  )
                }

                {
                  hoveredElement.id === 6 && ( 
                    <div className=' flex justify-around p-4'>
                    
                      <div className=' flex flex-col gap-2 text-lg'>
                        <div className=' font-bold text-xl'>
                          {hoveredElement.desktop.title}
                        </div>
                        {
                          hoveredElement.desktop.type.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>

                      <div className=' flex flex-col gap-2 text-lg'>
                        <div className=' font-bold text-xl'>
                          {hoveredElement.computer_accessories.title}
                        </div>
                        {
                          hoveredElement.computer_accessories.type.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>

                      <div className=' flex flex-col gap-2 text-lg'>
                        <div className=' font-bold text-xl'>
                          {hoveredElement.select_monitor_by_brand.title}
                        </div>
                        {
                          hoveredElement.select_monitor_by_brand.type.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>

                      <div className=' flex flex-col gap-2 text-lg'>
                        <div className=' font-bold text-xl'>
                          {hoveredElement.need.title}
                        </div>
                        {
                          hoveredElement.need.type.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>

                      <div className=' flex flex-col gap-2 text-lg'>
                        <div className=' font-bold text-xl'>
                          {hoveredElement.gaming_gear.title}
                        </div>
                        {
                          hoveredElement.gaming_gear.type.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>
                      
                      
                    </div>
                  )
                }

                {
                  hoveredElement.id === 7 && ( 
                    <div className=' flex justify-around p-4'>
                    
                      <div className=' flex flex-col gap-2 text-lg'>
                        <div className=' font-bold text-xl'>
                          {hoveredElement.select_by_brand.title}
                        </div>
                        {
                          hoveredElement.select_by_brand.type.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>

                      <div className=' flex flex-col gap-2 text-lg'>
                        <div className=' font-bold text-xl'>
                          {hoveredElement.select_by_price.title}
                        </div>
                        {
                          hoveredElement.select_by_price.type.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>

                      <div className=' flex flex-col gap-2 text-lg'>
                        <div className=' font-bold text-xl'>
                          {hoveredElement.select_by_resolution.title}
                        </div>
                        {
                          hoveredElement.select_by_resolution.type.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>

                      <div className=' flex flex-col gap-2 text-lg'>
                        <div className=' font-bold text-xl'>
                          {hoveredElement.select_by_size.title}
                        </div>
                        {
                          hoveredElement.select_by_size.type.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>
                      
                      <div className=' flex flex-col gap-2 text-lg '>
                        <div className=' flex font-bold text-xl items-center gap-1'>
                          {hoveredElement.hot.title}
                          <LocalFireDepartmentIcon sx={{color: 'red'}}/>
                        </div>
                        {
                          hoveredElement.hot.product.map( b => (
                            <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                          ))
                        }
                      </div>
                    </div>
                  )
                }


                  {hoveredElement.id === 10 && ( 
                    <div className=' flex p-4'>
                    
                      <div className=' flex flex-col gap-2 text-lg'>
                        <div className=' font-bold text-xl'>
                          {hoveredElement.promotion.title}
                        </div>
                          {
                            hoveredElement.promotion.type.map( b => (
                              <div className=' cursor-pointer text-gray-600 hover:text-red-500'>{b}</div>
                            ))
                          }
                        </div>
                      </div>
                    )
                  }
                

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

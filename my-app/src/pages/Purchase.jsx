import React from 'react'
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EventNoteIcon from '@mui/icons-material/EventNote';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Button from '@mui/material/Button';
import SecurityIcon from '@mui/icons-material/Security';

const orders = [

  {
    products: [
      {
        name: 'iPad Air 5 (2022) 64GB-Xanh',
        price: '13.990.000 vnd',
        quanlity: '1',
        img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/1/_/1_253_3.jpg',
      },
      {
        name: 'Màn hình MSI Pro MP223 22 inch',
        price: '1.890.000 vnd',
        quanlity: '1',
        img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/m/a/man-hinh-msi-pro-mp223-22-inch.png',
      },
    ],

    ordered: '21/7/2023',
    status: 'COMPLETED',
    total: '15.880.000 vnd'

  },

  {
    products: [
      {
        name: 'Tai nghe Bluetooth Apple AirPods 2 ',
        price: '2.670.000 vnd',
        quanlity: '1',
        img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_169_2.png',
      }
    ],

    ordered: '10/7/2023',
    status: 'COMPLETED',
    total: '2.670.000 vnd'
  },
  {
    products: [
      {
        name: 'Tai nghe Bluetooth Apple AirPods 2 ',
        price: '2.670.000 vnd',
        quanlity: '1',
        img: 'https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_169_2.png',
      }
    ],

    ordered: '10/7/2023',
    status: 'COMPLETED',
    total: '2.670.000 vnd'
  }
];


export default function Purchase() {
  return (
    <div className=' flex p-5 flex-1'>
      
      <div className=' flex flex-col gap-20 w-1/6 min-w-[15rem]'>
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


      <div className=' flex flex-col w-5/6 gap-5 min-w-[50rem]'>
        <div className=' flex text-2xl bg-slate-500 h-20 justify-between rounded-lg'>
          {/* Link */}
          <span className=' flex justify-center items-center p-4 w-1/4 text-white cursor-pointer hover:bg-slate-600 hover:duration-500 hover:rounded-lg'>All</span>
          <span className=' flex justify-center items-center p-4 w-1/4 text-white cursor-pointer hover:bg-slate-600 hover:duration-500 hover:rounded-lg'>Shipping</span>
          <span className=' flex justify-center items-center p-4 w-1/4 text-white cursor-pointer hover:bg-slate-600 hover:duration-500 hover:rounded-lg'>Completed</span>
          <span className=' flex justify-center items-center p-4 w-1/4 text-white cursor-pointer hover:bg-slate-600 hover:duration-500 hover:rounded-lg'>Canceled</span>
        </div>


        {
          orders.length === 0 ? (
            <div className=' flex flex-col h-[55rem] bg-slate-200 rounded-lg justify-center items-center'>  
              <div className='flex flex-col items-center gap-2'>
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/5fafbb923393b712b96488590b8f781f.png" alt="" className='w-40 h-40' />
                <div className='text-lg'>Order not found</div>
              </div>
            </div>
          ) : (
                <div className=' flex flex-col h-[55rem] bg-slate-200 rounded-lg items-center overflow-y-auto'>  
                  {
                    orders.map( order => (
                      <div className=' flex flex-col p-4 bg-white w-[97%] m-4 rounded-lg gap-4'>      
                         <div className=' flex items-center justify-between border-b border-gray-400 p-4'>
                            {
                              order.status === 'COMPLETED' ? (<span className=' text-green-500 text-lg'> <LocalShippingIcon /> The order was shipped successfully </span>) : ''
                            }
                            <span className=' text-lg font-bold text-red-500'>{order.status}</span>
                          </div>          
                          {
                            order.products.map( product => (    
                              <div className=' flex gap-4 justify-between border-b border-gray-400 p-4'>
                                <div className=' flex gap-4 '>
                                  <img src={product.img} alt={product.name} className=' w-24 h-24 '/>
                                  <div className=' flex flex-col h-24'>
                                    <span className=' text-xl font-bold'>{product.name}</span>
                                    <span>x{product.quanlity}</span>
                                  </div>
                                </div>
                                <div className=' flex items-center font-bold text-lg'>
                                  {product.price}
                                </div>
                              </div>                                                                             
                            ))
                          }
                          <div className=' flex text-xl font-bold flex-row-reverse'>
                            
                            <span className=' flex items-center'><SecurityIcon className=' mr-2'/> Total: <span className=' text-red-700 text-2xl ml-2'>{order.total}</span></span>
                          </div>
              
                          <div className=' flex text-xl font-bold mt-4 gap-2 flex-row-reverse'>
                          
                            <div className=' flex gap-4'>
                              <Button size="large" variant="contained" color="success">
                                Buy Again
                              </Button>
                              <Button size="large" variant="contained" color="primary">
                                Order Detail
                              </Button>
                            </div>
                            
                          </div>

                        </div>                    
                    ))
                  }
                </div>
              )
        }
        
      </div>

    </div>
  )
}
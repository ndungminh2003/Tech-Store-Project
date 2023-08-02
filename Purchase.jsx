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
    <div >
      
      <div className=' tw-flex tw-flex-col tw-gap-5 tw-min-w-[36rem]'>
        <div className=' tw-flex tw-text-2xl tw-bg-slate-500 tw-h-20 tw-justify-between tw-rounded-lg'>
          {/* Link */}
          <span className=' tw-flex tw-justify-center tw-items-center tw-p-4 tw-w-1/4 tw-text-white tw-cursor-pointer hover:tw-bg-slate-600 hover:tw-duration-500 hover:tw-rounded-lg xxsm:tw-text-lg xsm:tw-text-lg sm:tw-text-lg md:tw-text-xl'>All</span>
          <span className=' tw-flex tw-justify-center tw-items-center tw-p-4 tw-w-1/4 tw-text-white tw-cursor-pointer hover:tw-bg-slate-600 hover:tw-duration-500 hover:tw-rounded-lg xxsm:tw-text-lg xsm:tw-text-lg sm:tw-text-lg md:tw-text-xl'>Shipping</span>
          <span className=' tw-flex tw-justify-center tw-items-center tw-p-4 tw-w-1/4 tw-text-white tw-cursor-pointer hover:tw-bg-slate-600 hover:tw-duration-500 hover:tw-rounded-lg xxsm:tw-text-lg xsm:tw-text-lg sm:tw-text-lg md:tw-text-xl'>Completed</span>
          <span className=' tw-flex tw-justify-center tw-items-center tw-p-4 tw-w-1/4 tw-text-white tw-cursor-pointer hover:tw-bg-slate-600 hover:tw-duration-500 hover:tw-rounded-lg xxsm:tw-text-lg xsm:tw-text-lg sm:tw-text-lg md:tw-text-xl'>Canceled</span>
        </div>

        {
          orders.length === 0 ? (
            <div className=' tw-flex tw-flex-col tw-h-[55rem] tw-bg-slate-200 tw-rounded-lg tw-justify-center tw-items-center'>  
              <div className='tw-flex tw-flex-col tw-items-center tw-gap-2'>
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/5fafbb923393b712b96488590b8f781f.png" alt="" className='tw-w-40 tw-h-40' />
                <div className='tw-text-lg'>Order not found</div>
              </div>
            </div>
          ) : (
                <div className=' tw-flex tw-flex-col tw-h-[55rem] tw-bg-slate-200 tw-rounded-lg tw-items-center tw-overflow-y-auto'>  
                  {
                    orders.map( order => (
                      <div className=' tw-flex tw-flex-col tw-p-4 tw-bg-white tw-w-[97%] tw-m-4 tw-rounded-lg tw-gap-4 only:'>{/*only*/}
                         <div className=' tw-flex tw-items-center tw-justify-between tw-border-b tw-border-gray-400 tw-p-4'>
                            {
                              order.status === 'COMPLETED' ? (<span className=' tw-text-green-500 tw-text-lg'> <LocalShippingIcon /> The order was shipped successfully </span>) : ''
                            }
                            <span className=' tw-text-lg tw-font-bold tw-text-red-500'>{order.status}</span>
                          </div>          
                          {
                            order.products.map( product => (    
                              <div className=' tw-flex tw-gap-4 tw-justify-between tw-border-b tw-border-gray-400 tw-p-4'>
                                <div className=' tw-flex tw-gap-4 '>
                                  <img src={product.img} alt={product.name} className=' tw-w-24 tw-h-24 '/>
                                  <div className=' tw-flex tw-flex-col tw-h-24'>
                                    <span className=' tw-text-xl tw-font-bold'>{product.name}</span>
                                    <span>x{product.quanlity}</span>
                                  </div>
                                </div>
                                <div className=' tw-flex tw-items-center tw-font-bold tw-text-lg '>
                                  {product.price}
                                </div>
                              </div>                                                                             
                            ))
                          }
                          <div className=' tw-flex tw-text-xl tw-font-bold tw-flex-row-reverse'>
                            
                            <span className=' tw-flex tw-items-center'><SecurityIcon className=' tw-mr-2'/> Total: <span className=' tw-text-red-700 tw-text-2xl tw-ml-2'>{order.total}</span></span>
                          </div>
              
                          <div className=' tw-flex tw-text-xl tw-font-bold tw-mt-4 tw-gap-2 tw-flex-row-reverse'>
                          
                            <div className=' tw-flex tw-gap-4'>
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

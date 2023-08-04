import React from 'react'
import { Link } from 'react-router-dom'

const accessories = [

  {
    id:1,
    title: 'Nổi bật',
    img: 'https://cdn2.cellphones.com.vn/x/media/icons/category/cate-1644.svg',
  },
  {
    id:2,
    title: 'Dán màn hình',
    img: 'https://cdn2.cellphones.com.vn/x/media/icons/category/cate-286.svg',
  },
  {
    id:3,
    title: 'Ốp lưng - Bao da',
    img: 'https://cdn2.cellphones.com.vn/x/media/icons/category/cate-108.svg',
  },
  {
    id:4,
    title: 'Cáp sạc',
    img: 'https://cdn2.cellphones.com.vn/x/media/icons/category/cate-114.svg',
  },
  {
    id:5,
    title: 'Pin dự phòng',
    img: 'https://cdn2.cellphones.com.vn/x/media/icons/category/cate-122.svg',
  },
  {
    id:6,
    title: 'Thiết bị mạng',
    img: 'https://cdn2.cellphones.com.vn/x/media/icons/category/cate-676.svg',
  },
  {
    id:7,
    title: 'Gaming Gear',
    img: 'https://cdn2.cellphones.com.vn/x/media/icons/category/cate-669.svg',
  },
  {
    id:8,
    title: 'Gimbal',
    img: 'https://cdn2.cellphones.com.vn/x/media/icons/category/cate-852.svg',
  },
  {
    id:9,
    title: 'USB',
    img: 'https://cdn2.cellphones.com.vn/x/media/icons/category/cate-109.svg',
  },
  {
    id:10,
    title: 'Chuột, bàn phím',
    img: 'https://cdn2.cellphones.com.vn/x/media/icons/category/cate-663.svg',
  },

  {
    id:11,
    title: 'Camera hành trình',
    img: 'https://cdn2.cellphones.com.vn/150x,webp,q70/media/tmp/catalog/product/i/c/icon_cam_htrinh.png',
  },
  {
    id:12,
    title: 'Camera an ninh',
    img: 'https://cdn2.cellphones.com.vn/150x,webp,q70/media/tmp/catalog/product/i/c/icon_cam_anninh.png',
  },
  {
    id:13,
    title: 'Phụ kiện laptop',
    img: 'https://cdn2.cellphones.com.vn/x/media/icons/category/cate-44.svg',
  },
  {
    id:14,
    title: 'Ổ cứng di động',
    img: 'https://cdn2.cellphones.com.vn/x/media/icons/category/cate-750.svg',
  },
]


const second_hand = [

  {
    id:1,
    title: 'Phone',
    img: 'https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/i/p/ip-14-hp-cu.png',
  },
  {
    id:2,
    title: 'Ipad',
    img: 'https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/i/p/ipad-cate-cu.png',
  },
  {
    id:3,
    title: 'Mac',
    img: 'https://cdn2.cellphones.com.vn/x/media/icons/category/cate-392.svg',
  },
  {
    id:4,
    title: 'Laptop',
    img: 'https://cdn2.cellphones.com.vn/x/media/icons/category/cate-878.svg',
  },
  {
    id:5,
    title: 'Smart-watch',
    img: 'https://cdn2.cellphones.com.vn/x/media/icons/category/cate-451.svg',
  },
  {
    id:6,
    title: 'Headphone',
    img: 'https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/c/a/cate-tai-nghe_1.png',
  },
  {
    id:7,
    title: 'Computer-monitor',
    img: 'https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/c/a/cate-man-hinh.png',
  },


]

const electronic_computer = [

  {
    id:1,
    title: 'CPU',
    img: 'https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/c/p/cpu_1.png',
  },
  {
    id:2,
    title: 'Mainboard',
    img: 'https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/m/a/mainboard_1.png',
  },

  {
    id:3,
    title: 'Computer Case',
    img: 'https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/c/a/case_1.png',
  },

  {
    id:4,
    title: 'HDD',
    img: 'https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/s/s/ssd_2.png',
  },
  {
    id:5,
    title: 'Graphics card',
    img: 'https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/v/g/vga.png',
  },
  {
    id:6,
    title: 'Nguồn máy tính',
    img: 'https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/p/s/psu.png',
  },
  {
    id:7,
    title: 'Tản nhiệt',
    img: 'https://cdn2.cellphones.com.vn/150x,webp,q70/media/catalog/product/t/_/t_n_nhi_t_2.png',
  },

]

export default function Widget() {
  return (

    <div className=' tw-flex tw-flex-col tw-gap-4 tw-container tw-mx-auto'>

      <div className=' tw-flex tw-flex-col tw-gap-2'>
        <h1 className=' tw-font-bold tw-text-3xl tw-text-gray-500 tw-px-4 tw-py-2 '>Accessories</h1>
        <div className=' tw-flex tw-flex-wrap tw-gap-7 tw-ml-2'>
          {
            accessories.map( i => (
              <Link to='search-product' className=' hover:tw-scale-110 hover:tw-duration-200 tw-no-underline'>
                <div className=' tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-48 tw-h-48 xl:tw-w-44 xl:tw-h-40 lg:tw-w-40 lg:tw-h-44 md:tw-w-36 md:tw-h-36 sm:tw-w-32 sm:tw-h-32 xsm:tw-w-28 xsm:tw-h-28 tw-bg-red-400 tw-rounded-xl tw-cursor-pointer'>
                  <div className=' tw-text-white tw-text-xl tw-mt-2 md:tw-text-sm sm:tw-text-sm xsm:tw-text-sm'>{i.title}</div>
                  <img src={i.img} alt="" className=' tw-object-fill tw-w-36 tw-h-36 xl:tw-w-36 xl:tw-h-36 lg:tw-w-32 lg:tw-h-32 md:tw-w-32 md:tw-h-32 sm:tw-w-24 sm:tw-h-24 xsm:tw-w-20 xsm:tw-h-20'/>
                </div>
              </Link>
            ))
          }
        </div>
      </div>

      <div className=' tw-flex tw-flex-col tw-gap-2'>
        <h1 className=' tw-font-bold tw-text-3xl tw-text-gray-500 tw-px-4 tw-py-2 '>Electronic Computer</h1>
        <div className=' tw-flex tw-flex-wrap tw-gap-7 tw-ml-2'>
          {
            electronic_computer.map( i => (
              <Link to='search-product' className=' hover:tw-scale-110 hover:tw-duration-200 tw-no-underline'>
                <div className=' tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-48 tw-h-48 xl:tw-w-44 xl:tw-h-40 lg:tw-w-40 lg:tw-h-44 md:tw-w-36 md:tw-h-36 sm:tw-w-32 sm:tw-h-32 xsm:tw-w-28 xsm:tw-h-28 tw-bg-orange-300 tw-rounded-xl tw-cursor-pointer'>
                  <div className=' tw-text-white tw-text-xl tw-mt-2 md:tw-text-sm sm:tw-text-sm xsm:tw-text-sm'>{i.title}</div>
                  <img src={i.img} alt="" className=' tw-object-fill tw-w-36 tw-h-36 xl:tw-w-36 xl:tw-h-36 lg:tw-w-32 lg:tw-h-32 md:tw-w-32 md:tw-h-32 sm:tw-w-24 sm:tw-h-24 xsm:tw-w-20 xsm:tw-h-20'/>
                </div>
              </Link>
            ))
          }
        </div>
      </div>

      <div className=' tw-flex tw-flex-col tw-gap-2'>
        <h1 className=' tw-font-bold tw-text-3xl tw-text-gray-500 tw-px-4 tw-py-2 '>Second-Hand</h1>
        <div className=' tw-flex tw-flex-wrap tw-gap-7 tw-ml-2'>
          {
            second_hand.map( i => (
              <Link to='search-product' className=' hover:tw-scale-110 hover:tw-duration-200 tw-no-underline'>
                <div className=' tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-48 tw-h-48 xl:tw-w-44 xl:tw-h-40 lg:tw-w-40 lg:tw-h-44 md:tw-w-36 md:tw-h-36 sm:tw-w-32 sm:tw-h-32 xsm:tw-w-28 xsm:tw-h-28 tw-bg-sky-300 tw-rounded-xl tw-cursor-pointer'>
                  <div className=' tw-text-white tw-text-xl tw-mt-2 md:tw-text-sm sm:tw-text-sm xsm:tw-text-sm'>{i.title}</div>
                  <img src={i.img} alt="" className=' tw-object-fill tw-w-36 tw-h-36 xl:tw-w-36 xl:tw-h-36 lg:tw-w-32 lg:tw-h-32 md:tw-w-32 md:tw-h-32 sm:tw-w-24 sm:tw-h-24 xsm:tw-w-20 xsm:tw-h-20'/>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

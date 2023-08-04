import React from 'react'
import CardProduct from './CardProduct'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';

const brands = [

  {
    name: 'Apple'
  },
  {
    name: 'Samsung'
  },
  {
    name: 'Oppo'
  },
  {
    name: 'Xiaomi'
  },
  {
    name: 'Vivo'
  },
  {
    name: 'Nokia'
  }

]

export default function ListCardProduct({pros}) {

  return (
    <div className=' tw-container tw-mx-auto tw-flex tw-flex-col'>
      
       <div className=' tw-flex tw-gap-4 tw-justify-between tw-px-4 tw-py-2 xxsm:tw-flex-col xsm:tw-flex-col sm:tw-flex-col md:tw-flex-col '>
        
        <h1 className=' tw-font-bold tw-text-3xl tw-text-gray-500'>{pros}</h1>
        <div className=' tw-flex tw-gap-5 xxsm:tw-hidden xsm:tw-gap-4 sm:tw-gap-4 md:tw-gap-4 '>
          {
            brands.map( brand =>(
              <span className=' tw-cursor-pointer tw-bg-slate-200 tw-p-4 tw-rounded-xl hover:tw-bg-slate-400 tw-duration-300'>{brand.name}</span>
            ))
          }
          <span className=' tw-cursor-pointer tw-bg-slate-200 tw-p-4 tw-rounded-xl hover:tw-bg-slate-400 tw-duration-300 xsm:tw-hidden sm:tw-hidden'>All</span>
        </div>
      </div>
      

      <div className=' tw-flex tw-flex-col tw-gap-4'>

        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

          breakpoints={{

            600: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },

            1280: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            1536: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
          >

          <SwiperSlide><CardProduct /></SwiperSlide>
          <SwiperSlide><CardProduct /></SwiperSlide>
          <SwiperSlide><CardProduct /></SwiperSlide>
          <SwiperSlide><CardProduct /></SwiperSlide>
          <SwiperSlide><CardProduct /></SwiperSlide>
          <SwiperSlide><CardProduct /></SwiperSlide>
          <SwiperSlide><CardProduct /></SwiperSlide>
          <SwiperSlide><CardProduct /></SwiperSlide>
          <SwiperSlide><CardProduct /></SwiperSlide>
          <SwiperSlide><CardProduct /></SwiperSlide>

        </Swiper>

        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

          breakpoints={{

            600: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },

            1280: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1536: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
          >

          <SwiperSlide><CardProduct /></SwiperSlide>
          <SwiperSlide><CardProduct /></SwiperSlide>
          <SwiperSlide><CardProduct /></SwiperSlide>
          <SwiperSlide><CardProduct /></SwiperSlide>
          <SwiperSlide><CardProduct /></SwiperSlide>
          <SwiperSlide><CardProduct /></SwiperSlide>
          <SwiperSlide><CardProduct /></SwiperSlide>
          <SwiperSlide><CardProduct /></SwiperSlide>
          <SwiperSlide><CardProduct /></SwiperSlide>
          <SwiperSlide><CardProduct /></SwiperSlide>

        </Swiper>

      </div>
    </div>
  )
}

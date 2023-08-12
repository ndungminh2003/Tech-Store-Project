import React, { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

const brands = [
  {
    name: "Apple",
  },
  {
    name: "Samsung",
  },
  {
    name: "Oppo",
  },
  {
    name: "Xiaomi",
  },
  {
    name: "Vivo",
  },
  {
    name: "Nokia",
  },
];

export default function ListCardProduct(props) {
  const [products, setProducts] = useState(props.productState);
  useEffect(() => {
    const type = props.type.toLowerCase();
    // setProducts depends on props.type
    const productList = props.productState.filter(
      (product) => product.category.toLowerCase() === type
    );
    setProducts(productList);
  }, [props.productState]);
  return (
    <div className=" container mx-auto flex flex-col">
      <div className=" flex gap-4 justify-between px-4 py-2 xxsm:flex-col xsm:flex-col sm:flex-col md:flex-col ">
        <h1 className=" font-bold text-3xl text-gray-500">{props.type}</h1>
        <div className=" flex gap-5 xxsm:hidden xsm:gap-4 sm:gap-4 md:gap-4 ">
          {brands.map((brand) => (
            <span className=" cursor-pointer bg-slate-200 p-4 rounded-xl hover:bg-slate-400 duration-300">
              {brand.name}
            </span>
          ))}
          <span className=" cursor-pointer bg-slate-200 p-4 rounded-xl hover:bg-slate-400 duration-300 xsm:hidden sm:hidden">
            All
          </span>
        </div>
      </div>

      <div className=" flex flex-col gap-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
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
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <CardProduct
                key={product._id}
                id={product._id}
                name={product.title}
                price={product.price}
                brand={product.brand}
                thumbnail={product.thumbnail}
                images={product.images}
                feature={product?.feature}
                description={product.description}
                slug={product.slug}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <Swiper
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
          <SwiperSlide>
            <CardProduct />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct />
          </SwiperSlide>
          <SwiperSlide>
            <CardProduct />
          </SwiperSlide>
        </Swiper> */}
      </div>
    </div>
  );
}

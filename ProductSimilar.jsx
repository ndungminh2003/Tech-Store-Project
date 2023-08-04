import React from "react";
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Rating } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductSimilar = () => {
  return (
    <>
      <div className="tw-mt-6">
        <h1 className="tw-text-[#4a4a4a] tw-font-semibold tw-text-base">
          SẢN PHẨM TƯƠNG TỰ
        </h1>
        <Swiper
          spaceBetween={10}
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation
          slidesPerGroupAuto
          slidesPerView={"auto"}
          className="!tw-min-h-[0] tw-mt-[85px] md:tw-mt-5 md:!tw-mx-0 !tw-mx-4 tw-rounded-xl !tw-p-[10px]"
        >
          <SwiperSlide className="!tw-w-[228px] tw-rounded-[15px] shadow-cellphone tw-p-[10px]">
            <div className="percent-discount">
              <p className="tw-mt-[5px]">Giảm 12%</p>
            </div>
            <img
              className="tw-rounded-xl tw-w-[160px] !tw-object-cover"
              src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/f/r/frame_1_3_9.png"
              alt="slider"
              preview={false}
              width={"100%"}
            ></img>
            <h3 className="tw-h-[65px] tw-text-[#444] tw-font-semibold tw-text-sm">
              Tai nghe không dây Samsung Galaxy Buds2
            </h3>
            <div className="tw-flex tw-items-center tw-gap-[10px] tw-mb-[10px]">
              <p className="tw-text-[#d70018] tw-text-base tw-font-bold">1.450.000₫</p>
              <p className="tw-text-[#707070] tw-font-semibold tw-text-sm tw-line-through">
                2.990.000₫
              </p>
            </div>
            <Rating value={5} readOnly className="!tw-text-base" />
            <div className="tw-text-xs tw-flex tw-items-center tw-gap-1 tw-justify-end ">
              <span>Yêu thích</span>
              <FavoriteBorderIcon className="tw-text-[#d70018] hover:tw-animate-ping tw-cursor-pointer" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="!tw-w-[228px] tw-rounded-[15px] shadow-cellphone tw-p-[10px]">
            <div className="percent-discount">
              <p className="tw-mt-[5px]">Giảm 12%</p>
            </div>
            <img
              className="tw-rounded-xl tw-w-[160px] !tw-object-cover"
              src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_182_2.png"
              alt="slider"
              preview={false}
              width={"100%"}
            ></img>
            <h3 className="tw-h-[65px] tw-text-[#444] tw-font-semibold tw-text-sm">
              Tai nghe không dây Samsung Galaxy Buds2
            </h3>
            <div className="tw-flex tw-items-center tw-gap-[10px] tw-mb-[10px]">
              <p className="tw-text-[#d70018] tw-text-base tw-font-bold">1.450.000₫</p>
              <p className="tw-text-[#707070] tw-font-semibold tw-text-sm tw-line-through">
                2.990.000₫
              </p>
            </div>
            <Rating value={5} readOnly className="!tw-text-base" />
            <div className="tw-text-xs tw-flex tw-items-center tw-gap-1 tw-justify-end ">
              <span>Yêu thích</span>
              <FavoriteBorderIcon className="tw-text-[#d70018] hover:tw-animate-ping tw-cursor-pointer" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="!tw-w-[228px] tw-rounded-[15px] shadow-cellphone tw-p-[10px]">
            <div className="percent-discount">
              <p className="tw-mt-[5px]">Giảm 12%</p>
            </div>
            <img
              className="tw-rounded-xl tw-w-[160px] !tw-object-cover"
              src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_2007_2_.png"
              alt="slider"
              preview={false}
              width={"100%"}
            ></img>
            <h3 className="tw-h-[65px] tw-text-[#444] tw-font-semibold tw-text-sm">
              Pin sạc dự phòng Energizer 20.000mAh UE20012PQ
            </h3>
            <div className="tw-flex tw-items-center tw-gap-[10px] tw-mb-[10px]">
              <p className="tw-text-[#d70018] tw-text-base tw-font-bold">690.000₫</p>
              <p className="tw-text-[#707070] tw-font-semibold tw-text-sm tw-line-through">
                1.000.000₫
              </p>
            </div>
            <Rating value={5} readOnly className="!tw-text-base" />
            <div className="tw-text-xs tw-flex tw-items-center tw-gap-1 tw-justify-end ">
              <span>Yêu thích</span>
              <FavoriteBorderIcon className="tw-text-[#d70018] hover:tw-animate-ping tw-cursor-pointer" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="!tw-w-[228px] tw-rounded-[15px] shadow-cellphone tw-p-[10px]">
            <div className="percent-discount">
              <p className="tw-mt-[5px]">Giảm 12%</p>
            </div>
            <img
              className="tw-rounded-xl tw-w-[160px] !tw-object-cover"
              src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_201_4.png"
              alt="slider"
              preview={false}
              width={"100%"}
            ></img>
            <h3 className="tw-h-[65px] tw-text-[#444] tw-font-semibold tw-text-sm">
              Tai nghe không dây Samsung Galaxy Buds2 Pro
            </h3>
            <div className="tw-flex tw-items-center tw-gap-[10px] tw-mb-[10px]">
              <p className="tw-text-[#d70018] tw-text-base tw-font-bold">3.790.000₫</p>
              <p className="tw-text-[#707070] tw-font-semibold tw-text-sm tw-line-through">
                4.990.000₫
              </p>
            </div>
            <Rating value={5} readOnly className="!tw-text-base" />
            <div className="tw-text-xs tw-flex tw-items-center tw-gap-1 tw-justify-end ">
              <span>Yêu thích</span>
              <FavoriteBorderIcon className="tw-text-[#d70018] hover:tw-animate-ping tw-cursor-pointer" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="!tw-w-[228px] tw-rounded-[15px] shadow-cellphone tw-p-[10px]">
            <div className="percent-discount">
              <p className="tw-mt-[5px]">Giảm 12%</p>
            </div>
            <img
              className="tw-rounded-xl tw-w-[160px] !tw-object-cover"
              src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_201_4.png"
              alt="slider"
              preview={false}
              width={"100%"}
            ></img>
            <h3 className="tw-h-[65px] tw-text-[#444] tw-font-semibold tw-text-sm">
              Tai nghe không dây Samsung Galaxy Buds2 Pro
            </h3>
            <div className="tw-flex tw-items-center tw-gap-[10px] tw-mb-[10px]">
              <p className="tw-text-[#d70018] tw-text-base tw-font-bold">3.790.000₫</p>
              <p className="tw-text-[#707070] tw-font-semibold tw-text-sm tw-line-through">
                4.990.000₫
              </p>
            </div>
            <Rating value={5} readOnly className="!tw-text-base" />
            <div className="tw-text-xs tw-flex tw-items-center tw-gap-1 tw-justify-end ">
              <span>Yêu thích</span>
              <FavoriteBorderIcon className="tw-text-[#d70018] hover:tw-animate-ping tw-cursor-pointer" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="!tw-w-[228px] tw-rounded-[15px] shadow-cellphone tw-p-[10px]">
            <div className="percent-discount">
              <p className="tw-mt-[5px]">Giảm 12%</p>
            </div>
            <img
              className="tw-rounded-xl tw-w-[160px] !tw-object-cover"
              src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/r/group_201_4.png"
              alt="slider"
              preview={false}
              width={"100%"}
            ></img>
            <h3 className="tw-h-[65px] tw-text-[#444] tw-font-semibold tw-text-sm">
              Tai nghe không dây Samsung Galaxy Buds2 Pro
            </h3>
            <div className="tw-flex tw-items-center tw-gap-[10px] tw-mb-[10px]">
              <p className="tw-text-[#d70018] tw-text-base tw-font-bold">3.790.000₫</p>
              <p className="tw-text-[#707070] tw-font-semibold tw-text-sm tw-line-through">
                4.990.000₫
              </p>
            </div>
            <Rating value={5} readOnly className="!tw-text-base" />
            <div className="tw-text-xs tw-flex tw-items-center tw-gap-1 tw-justify-end ">
              <span>Yêu thích</span>
              <FavoriteBorderIcon className="tw-text-[#d70018] hover:tw-animate-ping tw-cursor-pointer" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ProductSimilar;

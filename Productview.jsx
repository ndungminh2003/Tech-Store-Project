import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import { Rating } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as GiftBoxIcon } from "../assets/giftbox.svg";

import BoughtTogether from "../components/BoughtTogether/BoughtTogether";
import ProductInfor from "../components/ProductInfor/ProductInfor";
import ProductSimilar from "../components/ProductSimilar/ProductSimilar";
import ContentProduct from "../components/ContentProduct/ContentProduct";
import { Autoplay, Navigation, Pagination } from "swiper";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Question from "../components/Question/Question";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgFullscreen from "lightgallery/plugins/fullscreen";
export default function ProductView() {
  const navigate = useNavigate();
  const lineStyle = {
    width: "150px", // Chiều dài 150px
    height: "2px", // Chiều cao 2px
    backgroundColor: "red", // Màu nền đỏ
    backgroundSize: "75% 100%", // 75% độ dài là màu đỏ
  };
  const formatCurrency = (amount) => {
    const numericAmount = Number(amount);
    if (isNaN(numericAmount)) {
      return "Invalid amount";
    }
    return numericAmount.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };
  const amount = 15000000;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [activeIndexs, setActiveIndexs] = React.useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };
  const handleButtonClicks = (index) => {
    setActiveIndexs(index);
  };
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);

    // Sau 3 giây, đóng thông báo thành công
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  const listImgThumb = [
    "https://cdn2.cellphones.com.vn/x/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_green_211119.jpg",
    "https://cdn2.cellphones.com.vn/x/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_burgundy_211119.jpg",
    "https://cdn2.cellphones.com.vn/x/media/catalog/product/1/5/15.1.png",
    "https://cdn2.cellphones.com.vn/x/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_phantomwhite_211119.jpg",
    "https://cdn2.cellphones.com.vn/x/media/catalog/product/1/5/15.6.png",
  ];

  const listImgOrigin = [
    "https://cdn2.cellphones.com.vn/x/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_green_211119.jpg",
    "https://cdn2.cellphones.com.vn/x/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_burgundy_211119.jpg",
    "https://cdn2.cellphones.com.vn/x/media/catalog/product/1/5/15.1.png",
    "https://cdn2.cellphones.com.vn/x/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_phantomwhite_211119.jpg",
    "https://cdn2.cellphones.com.vn/x/media/catalog/product/1/5/15.6.png",
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      console.log(index);
      if (index !== 0) {
        return (
          '<img class="tw-w-[50px] tw-h-[50px] tw-cursor-pointer tw-rounded-md tw-z-10 ' +
          className +
          '" src="' +
          listImgThumb[index - 1] +
          '">' +
          "</img>"
        );
      } else {
        return (
          '<div class="text-[10px] ' +
          className +
          '">' +
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21 20" style="width: 20px; height:20px; margin: auto"><title>star</title> <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><image width="21" height="20" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAABHNCSVQICAgIfAhkiAAAAZlJREFUOE+lVYtRQjEQ3FSgVoBUIB2gFWgHYgdLBUIFbgdCB3YgdgAVaAfSQZx9kzB5fwYzk5mXkGz27naPgDMGyQ2ARwBLSf4eHGHsAMkFgHcABwATAFNJx6F754D+ADDIE4BvAGtJq4tBC5YvDpvkB4D5GNtBpiR3AG4l3ZoZyXsAnym36mPbCUpyFkK4izG6KBXLDJAemoQQFjHGQ1d+A0mzeAZgFtcAZgUDXyrXZuu1I7gqznl9DCHsYoxbg7oQBtsD8LdndUiS91qDZH7chDz9kPec77VBfdFSeegDGZNdyneW3tKgOZx4KXChkq2kRVWo/wA3AY13qv4lwF2ANdAG450kO6h3JNXYYVXI5cGWTpMOIckSOwe0puMW08TWPt9I4ljVSbq4rV5QY5r099tlQ4cryRo+jb6omqDZ29asDWBlOF+vSeTec0+tTJH67FzStDenJB3yG4CbZFt/2zFfANyh/LuN4l6wBlA9KKlGrsnUfdKszMis3ZhZsLYVDexp7+dzp8iGJOVirfr+OlLuM/i+qZQ/ZTTSBXFK4lAAAAAASUVORK5CYII="></image></g></g></svg>' +
          "Tính năng nổi bật" +
          "</div>"
        );
      }

      // return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="tw-max-w-[1200px] tw-m-auto">
      {showMessage && (
        <div className="tw-fixed tw-inset-0 tw-h-[60px] tw-z-10 tw-flex tw-top-[73px] tw-items-center tw-justify-center">
          <div className="tw-flex tw-px-4 tw-py-2 tw-text-center tw-text-white tw-bg-green-500 tw-rounded-lg tw-shadow-lg tw-w-max">
            <svg
              className="tw-w-8 tw-h-8 tw-mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <p className="tw-text-lg tw-font-semibold tw-text-[16px]">Thành công!</p>
          </div>
        </div>
      )}

      <section>
        <div className="tw-flex tw-gap-1 tw-mt-[30px]">
          <h1 className="tw-text-lg tw-text-[#0a263c] tw-font-bold">
            Samsung Galaxy S23 Ultra 256GB
          </h1>
          <Rating name="read-only" value={5} readOnly />
          <p>1 đánh giá</p>
        </div>
        <hr className="tw-my-[15px] tw-border-none" />
        <div className="tw-flex">
          <div className="tw-w-[60%]">
            <Swiper
              pagination={pagination}
              modules={[Pagination, Navigation, Autoplay]}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              navigation
              className=""
            >
              <FavoriteBorderIcon className="tw-absolute tw-top-2 tw-left-2 !tw-cursor-pointer tw-z-20 tw-text-[#d70018] hover:tw-animate-ping"></FavoriteBorderIcon>

              {listImgOrigin.map((img, index) => {
                if (index !== 0) {
                  return (
                    <SwiperSlide key={index}>
                      <LightGallery
                        speed={500}
                        plugins={[lgThumbnail, lgZoom, lgFullscreen]}
                        className="tw-flex"
                      >
                        <a href={listImgOrigin[index]}>
                          <img
                            src={listImgOrigin[index]}
                            alt=""
                            className="tw-w-[398px] tw-h-[398px] tw-m-auto"
                          />
                        </a>
                      </LightGallery>
                    </SwiperSlide>
                  );
                } else {
                  return (
                    <SwiperSlide>
                      <div className="tw-bg-gradient tw-h-full tw-w-full tw-min-w-[718px] tw-min-h-[398px] tw-rounded-[10px]">
                        <div className="tw-p-4 tw-flex tw-items-center tw-gap-2 tw-w-full tw-h-full">
                          <img
                            src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_front_burgundy_211119.jpg"
                            alt=""
                            className="tw-w-[270px] tw-h-[270px] tw-rounded-[10px]"
                          />
                          <div className="tw-text-white">
                            <p className="tw-text-lg tw-mb-[5px] tw-uppercase tw-font-semibold tw-text-center">
                              Tính năng nổi bật
                            </p>
                            <div>
                              <ul className="tw-text-sm tw-flex tw-flex-col tw-gap-[5px]">
                                <li>
                                  Vi xử lý mạnh mẽ nhất Galaxy - Snapdragon 8
                                  Gen 1 (4 nm)
                                </li>
                                <li>
                                  Camera mắt thần bóng đêm Nightography - Chụp
                                  đêm cực đỉnh
                                </li>
                                <li>
                                  S Pen đầu tiên trên Galaxy S - Độ trễ thấp, dễ
                                  thao tác
                                </li>
                                <li>
                                  Dung lượng pin bất chấp ngày đêm - Viên pin
                                  5000mAh, sạc nhanh 45W
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                }
              })}
            </Swiper>
            <ProductInfor />
            <BoughtTogether />
          </div>
          <div className="tw-w-[40%] tw-pl-[20px]">
            <div className="tw-mb-[10px]">
              <div className="tw-flex tw-gap-[10px] tw-w-full tw-flex-nowrap">
                <Link className="tw-border tw-border-[#d70018] tw-w-[calc(100%/3-10px)] tw-px-1 tw-py-[5px] tw-text-xs tw-flex tw-flex-col tw-text-center tw-gap-1 tw-rounded-lg">
                  <strong>12GB - 1TB</strong>
                  <span>35.990.000 đ</span>
                </Link>
                <Link className="tw-border tw-border-[#d1d5db] tw-w-[calc(100%/3-10px)] tw-px-1 tw-py-[5px] tw-text-xs tw-flex tw-flex-col tw-text-center tw-gap-1 tw-rounded-lg">
                  <strong>12GB - 512GB</strong>
                  <span>29.990.000 đ</span>
                </Link>
                <Link className="tw-border tw-border-[#d1d5db] tw-w-[calc(100%/3-10px)] tw-px-1 tw-py-[5px] tw-text-xs tw-flex tw-flex-col tw-text-center tw-gap-1 tw-rounded-lg">
                  <strong>8GB - 256GB</strong>
                  <span>26.990.000 đ</span>
                </Link>
              </div>
            </div>
            <div>
              <div>
                <p className="tw-text-[#444] tw-mb-[10px] tw-text-sm tw-font-bold">
                  Chọn màu để xem giá và chi nhánh có hàng
                </p>
              </div>
              <div>
                <ul className="tw-flex tw-flex-wrap tw-gap-[10px] tw-w-full">
                  <li className="tw-w-[calc(100%/3-10px)]">
                    <Link className="tw-border tw-border-[#d1d5db]  tw-px-1 tw-py-[5px] tw-text-xs tw-flex tw-text-center tw-gap-1 tw-rounded-lg">
                      <img
                        src="https://cdn2.cellphones.com.vn/50x50,webp,q100/media/catalog/product/s/2/s23-ultra-tim_5.png"
                        alt="img_product"
                        className="tw-w-[30px] tw-h-[30px]"
                      />
                      <div className="tw-flex tw-flex-col">
                        <strong>Trắng</strong>
                        <span>26.990.000 đ</span>
                      </div>
                    </Link>
                  </li>
                  <li className="tw-w-[calc(100%/3-10px)]">
                    <Link className="tw-border tw-border-[#d1d5db] tw-px-1 tw-py-[5px] tw-text-xs tw-flex tw-text-center tw-gap-1 tw-rounded-lg">
                      <img
                        src="https://cdn2.cellphones.com.vn/50x50,webp,q100/media/catalog/product/s/2/s23-ultra-den_5.png"
                        alt="img_product"
                        className="tw-w-[30px] tw-h-[30px]"
                      />
                      <div className="tw-flex tw-flex-col">
                        <strong>Xanh</strong>
                        <span>26.990.000 đ</span>
                      </div>
                    </Link>
                  </li>
                  <li className="tw-w-[calc(100%/3-10px)]">
                    <Link className="tw-border tw-border-[#d1d5db] tw-px-1 py-[5px] tw-text-xs tw-flex tw-text-center tw-gap-1 tw-rounded-lg">
                      <img
                        src="https://cdn2.cellphones.com.vn/50x50,webp,q100/media/catalog/product/s/2/s23-ultra-kem_5.png"
                        alt="img_product"
                        className="tw-w-[30px] tw-h-[30px]"
                      />
                      <div className="tw-flex tw-flex-col">
                        <strong>Đen</strong>
                        <span>26.990.000 đ</span>
                      </div>
                    </Link>
                  </li>
                  <li className="tw-w-[calc(100%/3-10px)]">
                    <Link className="tw-border tw-border-[#d1d5db] tw-px-1 tw-py-[5px] tw-text-xs tw-flex tw-text-center tw-gap-1 tw-rounded-lg">
                      <img
                        src="https://cdn2.cellphones.com.vn/50x50,webp,q100/media/catalog/product/s/2/s23-ultra-xanh_5.png"
                        alt="img_product"
                        className="tw-w-[30px] tw-h-[30px]"
                      />
                      <div className="tw-flex tw-flex-col">
                        <strong>Tím</strong>
                        <span>26.990.000 đ</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <Link className="tw-my-3 tw-block">
                <img
                  src="https://cdn2.cellphones.com.vn/x120,webp,q100/https://dashboard.cellphones.com.vn/storage/product-banner-fold-flip-dat-hang.gif"
                  alt="product_banner"
                />
              </Link>
              <div className="tw-rounded-[10px] tw-overflow-hidden tw-border tw-border-[#fee2e2]">
                <div className="tw-flex tw-items-center tw-gap-[10px] tw-p-2 tw-bg-[#fee2e2]">
                  <div className="tw-w-5 tw-fill-[#d70018] ">
                    <GiftBoxIcon />
                  </div>
                  <h1 className="tw-text-base tw-text-[#d70018] tw-font-semibold">
                    Khuyến mãi
                  </h1>
                </div>
                <div className="tw-text-sm tw-py-4 tw-px-2 tw-flex tw-flex-col tw-gap-4">
                  <div className="tw-flex tw-gap-1">
                    <p className="tw-p-1 tw-bg-[#cc0f35] tw-text-white tw-rounded-full tw-w-5 tw-h-5 tw-text-[10px] tw-flex tw-items-center tw-justify-center">
                      1
                    </p>
                    <Link>
                      Nhận ngay ưu đãi YouTube Premium dành cho chủ sở hữu
                      Samsung Galaxy
                    </Link>
                  </div>
                  <div className="tw-flex tw-gap-1">
                    <p className="tw-p-1 tw-bg-[#cc0f35] tw-text-white tw-rounded-full tw-w-5 tw-h-5 tw-text-[10px] tw-flex tw-items-center tw-justify-center">
                      2
                    </p>
                    <Link>
                      Trả góp 12 tháng 0 lãi, 0đ trả trước qua Samsung Finance+
                    </Link>
                  </div>
                  <div className="tw-flex tw-gap-1">
                    <p className="tw-p-1 tw-bg-[#cc0f35] tw-text-white tw-rounded-full tw-w-5 tw-h-5 tw-text-[10px] tw-flex tw-items-center tw-justify-center">
                      3
                    </p>
                    <Link>
                      Tặng Sim 4G Mobifone siêu data - Miễn phí 12 tháng
                    </Link>
                  </div>
                </div>
              </div>

              <div className="tw-flex tw-gap-[10px] tw-mt-[10px]">
                <button
                  className="tw-w-[calc(100%-70px)] tw-flex tw-flex-col tw-items-center tw-text-white tw-bg-[#f52f32] tw-py-2 tw-rounded-[10px]"
                  onClick={() => navigate("/cart")}
                >
                  <strong className="tw-text-base">MUA NGAY</strong>
                  <span className="tw-text-sm">
                    (Giao nhanh từ 2 giờ hoặc nhận tại cửa hàng)
                  </span>
                </button>
                <button className="tw-rounded-[10px] tw-border-[2px] tw-border-[#e04040] tw-px-1">
                  <img
                    src="https://cdn2.cellphones.com.vn/50x,webp,q70/media/wysiwyg/add-to-cart.png"
                    alt=""
                    className="tw-w-[24px] tw-h-[30px] tw-object-contain tw-m-auto"
                  />
                  <span className="tw-text-[7.5px] tw-text-[#e04040] tw-font-semibold">
                    Thêm vào giỏ
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ProductSimilar />
      </section>
      <ContentProduct />

      {/* <div className="p-10 mb-5 product-view-comment pl-28 pr-28">
        <div className="p-3 rounded-[10px] shadow offset-x-0 offset-y-1 blur-2 spread-0.1 mb-15 w-[60%]">
          <h2 className="text-[1rem] font-[600]">
            Đánh giá & nhận xét Samsung Galaxy S23 Ultra 256GB
          </h2>
          <div className="flex border rounded-[10px] border-gray-300">
            <div className="border-r border-solid border-gray-300 flex justify-center flex-col items-center w-[40%]">
              <div className="product-view-comment-number">5.0/5</div>
              <div className="product-view-comment-star">
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
                <StarIcon className="text-yellow-500" />
              </div>
              <div className="product-view-comment-content ">
                1 đánh giá và nhận xet
              </div>
            </div>
            <div className="product-view-comment-progress flex flex-col gap-3 w-[60%] p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  5 <StarIcon className="text-yellow-500" />
                </div>
                <div className="w-[70%] h-[8px] rounded-[30px]">
                  <div className="w-full h-[8px] bg-[#f00] rounded-[30px]"></div>
                </div>
                <div>1 đánh giá</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  4 <StarIcon className="text-yellow-500" />
                </div>
                <div className="w-[70%] h-[8px] rounded-[30px]">
                  <div className="w-full h-[8px] bg-[#f00] rounded-[30px]"></div>
                </div>
                <div>1 đánh giá</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  3 <StarIcon className="text-yellow-500" />
                </div>
                <div className="w-[70%] h-[8px] rounded-[30px]">
                  <div className="w-full h-[8px] bg-[#f00] rounded-[30px]"></div>
                </div>
                <div>1 đánh giá</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  2 <StarIcon className="text-yellow-500" />
                </div>
                <div className="w-[70%] h-[8px] rounded-[30px]">
                  <div className="w-full h-[8px] bg-[#f00] rounded-[30px]"></div>
                </div>
                <div>1 đánh giá</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  1 <StarIcon className="text-yellow-500" />
                </div>
                <div className="w-[70%] h-[8px] rounded-[30px]">
                  <div className="w-full h-[8px] bg-[#f00] rounded-[30px]"></div>
                </div>
                <div>1 đánh giá</div>
              </div>
            </div>
          </div>
          <div className="pt-2 pb-2 text-center">
            Bạn đánh giá sao sản phẩm này
          </div>
          <div className="text-center">
            <button className="text-center pt-2 pb-2 bg-red-600 rounded-10 h-[35px] w-[300px] text-[#fff] rounded-[10px]">
              Đánh giá ngay
            </button>
          </div>
          <div>
            <div className="flex justify-between">
              <div className="flex">
                <span className="w-[25px] h-[25px] rounded text-[#028e6d] uppercase font-[600] bg-[#ddd] block text-center mr-">
                  Đ
                </span>
                <span className="ml-2">Đức Thịnh Nguyễn</span>
              </div>
              <div className="text-[#707070]">6/3/2023 16:05</div>
            </div>
            <div className="bg-[#f3f4f6] rounded-[10px] p-2 ml-[40px] w-calc-100-minus-40">
              <div className="flex gap-2">
                <div className="flex text-[12px] items-center">
                  <strong>Đánh giá:</strong>
                </div>
                <span>
                  <StarIcon className="w-[15px] h-[15px] text-yellow-400" />
                </span>
                <span>
                  <StarIcon className="w-[15px] h-[15px] text-yellow-400" />
                </span>
                <span>
                  <StarIcon className="w-[15px] h-[15px] text-yellow-400" />
                </span>
                <span>
                  <StarIcon className="w-[15px] h-[15px] text-yellow-400" />
                </span>
                <span>
                  <StarIcon className="w-[15px] h-[15px] text-yellow-400" />
                </span>
              </div>
              <div className="flex text-[12px] gap-2">
                <strong>Nhận xét:</strong>
                <span>
                  {" "}
                  Sản phẩm tốt, chính sách thu cũ đổi mới tốt nhất thị trường
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 mt-4 rounded-[10px] shadow offset-x-0 offset-y-1 blur-2 spread-0.1 mb-15 w-[60%] bg-[#f9fafb]">
          <div className="text-[1.25rem] font-[600]">Hỏi và đáp</div>
          <div className="flex items-start gap-5">
            <textarea
              placeholder="Binh luan"
              cols="70"
              rows="80"
              className="max-h-40 min-h-8 border-0 outline-none p-4 rounded-[10px] shadow-md min-w-0 w-calc-100-minus-80"
            ></textarea>
            <button className="bg-red-600 border-0 rounded-[8px] p-2 text-white gap-5 w-[70px]">
              Send
            </button>
          </div>
          <div className="mt-4 border"></div>
          <div className="mt-10">
            <div className="flex justify-between">
              <div className="flex">
                <span className="w-[25px] h-[25px] rounded text-[#028e6d] uppercase font-[600] bg-[#ddd] block text-center mr-">
                  Đ
                </span>
                <span className="ml-2">Đức Thịnh Nguyễn</span>
              </div>
              <div className="text-[#707070]">6/3/2023 16:05</div>
            </div>
            <div className="mt-5 ml-10 h-[70px] bg-white rounded-[10px] shadow-md  overflow-hidden p-[10px] w-calc-100-minus-25">
              ben ban co ho gi ko
            </div>
          </div>
          <div className="mt-5 ml-[45px]">
            <div className="flex justify-between">
              <div className="flex">
                <span className="w-[25px] h-[25px] rounded text-[#f00] uppercase font-[600] bg-[#ddd] block text-center mr-">
                  C
                </span>
                <span className="ml-2">Đức Thịnh Nguyễn</span>
              </div>
              <div className="text-[#707070]">6/3/2023 16:05</div>
            </div>
            <div className="mt-5 ml-10 h-[70px] bg-white rounded-[10px] shadow-md  overflow-hidden p-[10px] w-calc-100-minus-25">
              ben ban co ho gi ko
              <a
                href="#rep"
                class="items-center bg-transparent border-0 text-red-600 cursor-pointer flex justify-end text-[14px] leading-1 mr-auto mt-[10px] no-underline"
              >
                tra loi
              </a>
            </div>
          </div>
          <div className="flex items-start gap-5 mt-6">
            <textarea
              id="rep"
              placeholder="Binh luan"
              cols="70"
              rows="80"
              className="max-h-40 min-h-8 border-0 outline-none p-4 rounded-[10px] shadow-md min-w-0 w-calc-100-minus-80"
            ></textarea>
            <button className="bg-red-600 border-0 rounded-[8px] p-2 text-white gap-5 w-[70px]">
              Send
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

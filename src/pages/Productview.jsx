import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";

export default function ProductView() {
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

  return (
    <div className="container-product-view">
      {showMessage && (
        <div className="fixed inset-0 h-[60px] z-10 flex top-[73px] items-center justify-center">
          <div className="flex px-4 py-2 text-center text-white bg-green-500 rounded-lg shadow-lg w-max">
            <svg
              className="w-8 h-8 mr-2"
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
            <p className="text-lg font-semibold text-[16px]">Thành công!</p>
          </div>
        </div>
      )}
      <div className="flex justify-between p-10 pl-28 pr-28">
        <div className="product-detail">
          <div className="product-detail-top flex gap-[30px] pb-5">
            <h1 className="product-name line-clamp-3 box-orient-vertical text-[#0a263c] line-height-[2rem] font-bold text-lg overflow-hidden ml-10">
              iPhone 12 64GB | Chính hãng VN/A
            </h1>
            <div className="product-evaluate pr-[200px] flex items-center">
              <div className="product-icon-star ">
                <StarIcon className="text-yellow-300" />
              </div>
              <div className="product-icon-star ">
                <StarIcon className="text-yellow-300" />
              </div>
              <div className="product-icon-star ">
                <StarIcon className="text-yellow-300" />
              </div>
              <div className="product-icon-star ">
                <StarIcon className="text-yellow-300" />
              </div>
              <span className="text-[14px]"> &nbsp;4 reivews</span>
            </div>
          </div>
          <div className="product-detail-bottom w-[781px] h-[398px] bg-gradient-to-r from-pink-400 to-yellow-200 relative rounded-t-lg p-2">
            <div className="product-deatail-herd">
              <div className="product-deatail-heart w-[38px] h-[33px] text-[34px]">
                &#9829;
              </div>
              <div className="product-deatail-content flex pt-[45px] p-[10px]">
                <div className="product-deatail-image p-[10px] bg-white">
                  <img
                    src="https://i.pinimg.com/564x/81/3b/f2/813bf2b968dad8dfa2ec9a85560da8cb.jpg"
                    alt=""
                    className="w-[250px] h-[250px] rounded "
                  />
                </div>
                <div className="product-detail-text pt-[0px] pb-[52px]">
                  <h2 className="font-semibold text-center text-white uppercase product-detail-title bottom-5 text-18">
                    Lorem ipsum dolor sit amet.
                  </h2>

                  <ul className="pl-[10px] text-left">
                    <li className="flex text-left text-white text-14 leading-145">
                      - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li className="flex text-left text-white text-14 leading-145">
                      - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-option w-[475px] pt-[75px]">
          <div className="flex flex-wrap gap-2 product-option-price">
            <button
              className={`relative text-[13px] border-[1px] border-[#000] w-[31.333%] px-2 py-1 rounded-[10px] ${
                0 === activeIndex ? "border-[#f00]" : "bg-white"
              }`}
              onClick={() => handleButtonClick(0)}
            >
              <strong className="product-gb">256gb</strong>
              <div className="product-price">{formatCurrency(10000000)}</div>
              {0 === activeIndex && (
                <span class="absolute top-0 left-0  w-[18px] rounded-lg h-13 bg-red-700 text-white text-xs flex items-center justify-center">
                  ✓
                </span>
              )}
            </button>
            <button
              className={`text-[13px] border-[1px] relative border-[#000] w-[31.333%] px-2 py-1 rounded-[10px] ${
                1 === activeIndex ? "border-[#f00]" : "bg-white"
              }`}
              onClick={() => handleButtonClick(1)}
            >
              <strong className="product-gb">512gb</strong>
              <div className="product-price">{formatCurrency(15000000)}</div>
              {1 === activeIndex && (
                <span class="absolute top-0 left-0 w-[18px] h-13 rounded-lg bg-red-700 text-white text-xs flex items-center justify-center">
                  ✓
                </span>
              )}
            </button>
            <button
              className={`text-[13px] relative border-[1px]  border-[#000] w-[31.333%] px-2 py-1 rounded-[10px] ${
                2 === activeIndex ? "border-[#f00]" : "bg-white"
              }`}
              onClick={() => handleButtonClick(2)}
            >
              <strong className="product-gb">1tb</strong>
              <div className="product-price">{formatCurrency(20000000)}</div>
              {2 === activeIndex && (
                <span class="absolute top-0 left-0  w-[18px] rounded-lg h-13 bg-red-700 text-white text-xs flex items-center justify-center">
                  ✓
                </span>
              )}
            </button>
          </div>
          <div className="product-option-select pt-[20px]">
            <div className="product-option-title text-[14px] font-[700] text-[#444] mb-[10px]">
              Lorem ipsum dolor sit amet.
            </div>
            <div className="flex flex-wrap gap-2 product-option-price">
              <button
                className={`relative text-[13px] border-[1px] border-[#000] w-[31.333%] px-2 py-1 rounded-[10px] ${
                  0 === activeIndexs ? "border-[#f00]" : "bg-white"
                }`}
                onClick={() => handleButtonClicks(0)}
              >
                <div className="flex p-2">
                  <img
                    src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/g/a/galaxys23ultra_front_green_221122_2.jpg"
                    className="w-[30px] h-[30px]"
                    alt=""
                  />
                  <div className="pl-2 text-left">
                    <strong className="product-gb">256gb</strong>
                    <div className="product-price">
                      {formatCurrency(10000000)}
                    </div>
                  </div>
                </div>
                {0 === activeIndexs && (
                  <span class="absolute top-0 left-0  w-[18px] rounded-lg h-13 bg-red-700 text-white text-xs flex items-center justify-center">
                    ✓
                  </span>
                )}
              </button>
              <button
                className={`text-[13px] border-[1px] relative border-[#000] w-[31.333%] px-2 py-1 rounded-[10px] ${
                  1 === activeIndexs ? "border-[#f00]" : "bg-white"
                }`}
                onClick={() => handleButtonClicks(1)}
              >
                <strong className="product-gb">512gb</strong>
                <div className="product-price">{formatCurrency(15000000)}</div>
                {1 === activeIndexs && (
                  <span class="absolute top-0 left-0 w-[18px] h-13 rounded-lg bg-red-700 text-white text-xs flex items-center justify-center">
                    ✓
                  </span>
                )}
              </button>
              <button
                className={`text-[13px] relative border-[1px]  border-[#000] w-[31.333%] px-2 py-1 rounded-[10px] ${
                  2 === activeIndexs ? "border-[#f00]" : "bg-white"
                }`}
                onClick={() => handleButtonClicks(2)}
              >
                <strong className="product-gb">1tb</strong>
                <div className="product-price">{formatCurrency(20000000)}</div>
                {2 === activeIndexs && (
                  <span class="absolute top-0 left-0  w-[18px] rounded-lg h-13 bg-red-700 text-white text-xs flex items-center justify-center">
                    ✓
                  </span>
                )}
              </button>
            </div>
          </div>
          <div className="product-option-discount text-[15px] pt-5">
            <strong className="text-[15px]">Discount:</strong>
            No discount code
          </div>
          <div className="product-option-buy-cart flex gap-[10px] mt-10">
            <button className="bg-[#ccc] text-center w-[519px] rounded-[10px] bg-gradient-to-r from-red-600 to-red-600 border-none text-white flex flex-col items-center h-[60px] outline-none w-calc-100-minus-70">
              <strong>Buy Now</strong>
              <div className="text-[13px]">(Lorem ipsum dolor sit amet.)</div>
            </button>
            <button
              onClick={handleShowMessage}
              className="w-[68px] h-[50px] text-[9px] bg-[#fff] border-[1px] text-[#f00] border-[red] rounded-[8px]"
            >
              <ShoppingCartIcon color="white" />
              <br />
              add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="p-10 mb-5 product-view-comment pl-28 pr-28">
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
      </div>
    </div>
  );
}

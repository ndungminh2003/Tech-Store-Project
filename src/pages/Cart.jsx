import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { AccountCircle } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import "../assets/style/res.scss";

export default function CardProduct() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="">
      <div className="flex items-center justify-center  max-w-[700px] m-auto my-5">
        <div
          className="res-none py-[10px] flex w-full text-center"
          onClick={() => navigate("/")}
        >
          <div className="!text-base text-gray-600 justify-start flex items-center font-semibold">
            <ArrowBackIosIcon />
            <h1 className="hover:underline cursor-pointer">Trở về</h1>
          </div>

          <h1 className="text-lg text-gray-600 font-semibold justify-center m-auto pr-[70px]">
            Giỏ hàng
          </h1>
        </div>
      </div>

      {/* <div className="max-w-[570px] m-auto my-[100px] text-center">
        <div className="w-[50px] h-[50px] text-center m-auto text-[#0e2431]">
          <svg
            data-v-5a4f0845=""
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="frown"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
            class="svg-inline--fa fa-frown"
          >
            <path
              data-v-5a4f0845=""
              fill="currentColor"
              d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm170.2 218.2C315.8 367.4 282.9 352 248 352s-67.8 15.4-90.2 42.2c-13.5 16.3-38.1-4.2-24.6-20.5C161.7 339.6 203.6 320 248 320s86.3 19.6 114.7 53.8c13.6 16.2-11 36.7-24.5 20.4z"
              class=""
            ></path>
          </svg>
        </div>
        <p className="text-[#444] text-[21px] my-[50px]">
          Không có sản phẩm nào trong giỏ hàng, vui lòng quay lại
        </p>
        <button
          className="p-[10px] bg-[#d70018] text-white rounded"
          onClick={() => navigate("/")}
        >
          Quay lại trang chủ
        </button>
      </div> */}

      <div className="res-content max-w-[600px] h-[600px] overflow-auto max-h-[600px] m-auto flex flex-col gap-10 hidden-scrollbar">
        <div className="flex">
          <div>
            <img
              src="https://image.cellphones.com.vn/200x/media/catalog/product/t/_/t_m_21.png"
              alt=""
              className="w-[170px] px-[10px]"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <Link className="text-[#0e2431] text-[15px] font-bold hover:underline">
                iPhone 14 Pro Max 256GB-Tím
              </Link>
              <DeleteIcon className="cursor-pointer" />
            </div>

            <div className="flex items-center justify-between text-[15px]">
              <div className="flex items-center gap-1">
                <p className="text-[#d70018] font-bold ">29.290.000 ₫</p>
                <p className="text-[#777] text-sm line-through">32.990.000 ₫</p>
              </div>
              <div className="flex items-center gap-1">
                <span
                  className="py-1 px-2 text-lg cursor-pointer"
                  onClick={handleDecrease}
                >
                  -
                </span>
                <input
                  type="number"
                  name=""
                  value={quantity}
                  readOnly
                  className="w-[30px] text-center text-lg"
                />
                <span
                  className="py-1 px-2 text-lg cursor-pointer"
                  onClick={handleIncrease}
                >
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <img
              src="https://image.cellphones.com.vn/200x/media/catalog/product/s/a/samsung-galaxy-20-fe_4__5.jpg"
              alt=""
              className="w-[170px] px-[10px]"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <Link className="text-[#0e2431] text-[15px] font-bold">
                Samsung Galaxy S20 FE 256GB -Xanh dương
              </Link>
              <DeleteIcon />
            </div>

            <div className="flex items-center justify-between text-[15px]">
              <div className="flex items-center gap-1">
                <p className="text-[#d70018] font-bold ">7.250.000 ₫</p>
                <p className="text-[#777] text-sm line-through">12.490.000 ₫</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="py-1 px-2 text-lg cursor-pointer">-</span>
                <input
                  type="number"
                  name=""
                  value="1"
                  readOnly
                  className="w-[30px] text-center text-lg"
                />
                <span className="py-1 px-2 text-lg cursor-pointer">+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <img
              src="https://image.cellphones.com.vn/200x/media/catalog/product/t/_/t_m_21.png"
              alt=""
              className="w-[170px] px-[10px]"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <Link className="text-[#0e2431] text-[15px] font-bold">
                iPhone 14 Pro Max 256GB-Tím
              </Link>
              <DeleteIcon />
            </div>

            <div className="flex items-center justify-between text-[15px]">
              <div className="flex items-center gap-1">
                <p className="text-[#d70018] font-bold ">29.290.000 ₫</p>
                <p className="text-[#777] text-sm line-through">32.990.000 ₫</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="py-1 px-2 text-lg cursor-pointer">-</span>
                <input
                  type="number"
                  name=""
                  value="1"
                  readOnly
                  className="w-[30px] text-center text-lg"
                />
                <span className="py-1 px-2 text-lg cursor-pointer">+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <img
              src="https://image.cellphones.com.vn/200x/media/catalog/product/t/_/t_m_21.png"
              alt=""
              className="w-[170px] px-[10px]"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <Link className="text-[#0e2431] text-[15px] font-bold">
                iPhone 14 Pro Max 256GB-Tím
              </Link>
              <DeleteIcon />
            </div>

            <div className="flex items-center justify-between text-[15px]">
              <div className="flex items-center gap-1">
                <p className="text-[#d70018] font-bold ">29.290.000 ₫</p>
                <p className="text-[#777] text-sm line-through">32.990.000 ₫</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="py-1 px-2 text-lg cursor-pointer">-</span>
                <input
                  type="number"
                  name=""
                  value="1"
                  readOnly
                  className="w-[30px] text-center text-lg"
                />
                <span className="py-1 px-2 text-lg cursor-pointer">+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <img
              src="https://image.cellphones.com.vn/200x/media/catalog/product/t/_/t_m_21.png"
              alt=""
              className="w-[170px] px-[10px]"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <Link className="text-[#0e2431] text-[15px] font-bold">
                iPhone 14 Pro Max 256GB-Tím
              </Link>
              <DeleteIcon />
            </div>

            <div className="flex items-center justify-between text-[15px]">
              <div className="flex items-center gap-1">
                <p className="text-[#d70018] font-bold ">29.290.000 ₫</p>
                <p className="text-[#777] text-sm line-through">32.990.000 ₫</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="py-1 px-2 text-lg cursor-pointer">-</span>
                <input
                  type="number"
                  name=""
                  value="1"
                  readOnly
                  className="w-[30px] text-center text-lg"
                />
                <span className="py-1 px-2 text-lg cursor-pointer">+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <img
              src="https://image.cellphones.com.vn/200x/media/catalog/product/t/_/t_m_21.png"
              alt=""
              className="w-[170px] px-[10px]"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <Link className="text-[#0e2431] text-[15px] font-bold">
                iPhone 14 Pro Max 256GB-Tím
              </Link>
              <DeleteIcon />
            </div>

            <div className="flex items-center justify-between text-[15px]">
              <div className="flex items-center gap-1">
                <p className="text-[#d70018] font-bold ">29.290.000 ₫</p>
                <p className="text-[#777] text-sm line-through">32.990.000 ₫</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="py-1 px-2 text-lg cursor-pointer">-</span>
                <input
                  type="number"
                  name=""
                  value="1"
                  readOnly
                  className="w-[30px] text-center text-lg"
                />
                <span className="py-1 px-2 text-lg cursor-pointer">+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <img
              src="https://image.cellphones.com.vn/200x/media/catalog/product/t/_/t_m_21.png"
              alt=""
              className="w-[170px] px-[10px]"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <Link className="text-[#0e2431] text-[15px] font-bold">
                iPhone 14 Pro Max 256GB-Tím
              </Link>
              <DeleteIcon />
            </div>

            <div className="flex items-center justify-between text-[15px]">
              <div className="flex items-center gap-1">
                <p className="text-[#d70018] font-bold ">29.290.000 ₫</p>
                <p className="text-[#777] text-sm line-through">32.990.000 ₫</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="py-1 px-2 text-lg cursor-pointer">-</span>
                <input
                  type="number"
                  name=""
                  value="1"
                  readOnly
                  className="w-[30px] text-center text-lg"
                />
                <span className="py-1 px-2 text-lg cursor-pointer">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="res-total-price">
        <div className="w-full max-w-[670px] m-auto bg-white shadow-cellphone rounded-md p-[10px] mt-20">
          <div className="flex items-center justify-between text-base mb-2">
            <h1 className="text-[#0e2431] font-semibold">
              Tổng tiền tạm tính:
            </h1>
            <span className="text-[#d70018] font-bold">47.520.000 ₫</span>
          </div>
          <div className="flex flex-col font-bold gap-2">
            <button
              className="px-3 py-[6px] uppercase h-[60px] bg-slate-500 rounded text-white"
              onClick={() => navigate("/cart/payment-info")}
            >
              Tiến hành đặt hàng
            </button>
            <Link
              to="/"
              className="px-3 py-[6px] uppercase h-[60px] leading-[48px] text-center border border-slate-500 rounded text-black hover:bg-slate-500 hover:text-white"
            >
              Chọn thêm sản phẩm khác
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

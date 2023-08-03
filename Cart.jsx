import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useNavigate } from "react-router-dom";
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
      <div className="tw-flex tw-items-center tw-justify-center tw-max-w-[700px] tw-m-auto tw-my-5">
        <div
          className="tw-py-[10px] tw-flex tw-w-full tw-text-center"
          onClick={() => navigate("/")}
        >
          <div className="!tw-text-base tw-text-[#d70018] tw-justify-start tw-flex tw-items-center tw-font-semibold">
            <ArrowBackIosIcon />
            <h1 className="hover:tw-underline tw-cursor-pointer">Trở về</h1>
          </div>

          <h1 className="tw-text-lg tw-text-[#d70018] tw-font-semibold tw-justify-center tw-m-auto tw-pr-[70px]">
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

      <div className="tw-max-w-[600px] tw-h-[600px] tw-overflow-auto tw-max-h-[600px] tw-m-auto tw-flex tw-flex-col tw-gap-10 hidden-scrollbar">
        <div className="tw-flex">
          <div>
            <img
              src="https://image.cellphones.com.vn/200x/media/catalog/product/t/_/t_m_21.png"
              alt=""
              className="tw-w-[170px] tw-px-[10px]"
            />
          </div>
          <div className="tw-flex-1">
            <div className="tw-flex tw-items-center tw-justify-between">
              <Link className="tw-text-[#0e2431] tw-text-[15px] tw-font-bold hover:tw-underline">
                iPhone 14 Pro Max 256GB-Tím
              </Link>
              <DeleteIcon className="tw-cursor-pointer"/>
            </div>

            <div className="tw-flex tw-items-center tw-justify-between tw-text-[15px]">
              <div className="tw-flex tw-items-center tw-gap-1">
                <p className="tw-text-[#d70018] tw-font-bold ">29.290.000 ₫</p>
                <p className="tw-text-[#777] tw-text-sm tw-line-through">32.990.000 ₫</p>
              </div>
              <div className="tw-flex tw-items-center tw-gap-1">
                <span
                  className="tw-py-1 tw-px-2 tw-text-lg tw-cursor-pointer"
                  onClick={handleDecrease}
                >
                  -
                </span>
                <input
                  type="number"
                  name=""
                  value={quantity}
                  readOnly
                  className="tw-w-[30px] tw-text-center tw-text-lg"
                />
                <span
                  className="tw-py-1 tw-px-2 tw-text-lg tw-cursor-pointer"
                  onClick={handleIncrease}
                >
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="tw-flex">
          <div>
            <img
              src="https://image.cellphones.com.vn/200x/media/catalog/product/s/a/samsung-galaxy-20-fe_4__5.jpg"
              alt=""
              className="tw-w-[170px] tw-px-[10px]"
            />
          </div>
          <div className="tw-flex-1">
            <div className="tw-flex tw-items-center tw-justify-between">
              <Link className="tw-text-[#0e2431] tw-text-[15px] tw-font-bold">
                Samsung Galaxy S20 FE 256GB -Xanh dương
              </Link>
              <DeleteIcon />
            </div>

            <div className="tw-flex tw-items-center tw-justify-between tw-text-[15px]">
              <div className="tw-flex tw-items-center tw-gap-1">
                <p className="tw-text-[#d70018] tw-font-bold ">7.250.000 ₫</p>
                <p className="tw-text-[#777] tw-text-sm tw-line-through">12.490.000 ₫</p>
              </div>
              <div className="tw-flex tw-items-center tw-gap-1">
                <span className="tw-py-1 tw-px-2 tw-text-lg tw-cursor-pointer">-</span>
                <input
                  type="number"
                  name=""
                  value="1"
                  readOnly
                  className="tw-w-[30px] tw-text-center tw-text-lg"
                />
                <span className="tw-py-1 tw-px-2 tw-text-lg tw-cursor-pointer">+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="tw-flex">
          <div>
            <img
              src="https://image.cellphones.com.vn/200x/media/catalog/product/t/_/t_m_21.png"
              alt=""
              className="tw-w-[170px] tw-px-[10px]"
            />
          </div>
          <div className="tw-flex-1">
            <div className="tw-flex tw-items-center tw-justify-between">
              <Link className="tw-text-[#0e2431] tw-text-[15px] tw-font-bold">
                iPhone 14 Pro Max 256GB-Tím
              </Link>
              <DeleteIcon />
            </div>

            <div className="tw-flex tw-items-center tw-justify-between tw-text-[15px]">
              <div className="tw-flex tw-items-center tw-gap-1">
                <p className="tw-text-[#d70018] tw-font-bold ">29.290.000 ₫</p>
                <p className="tw-text-[#777] tw-text-sm tw-line-through">32.990.000 ₫</p>
              </div>
              <div className="tw-flex tw-items-center tw-gap-1">
                <span className="tw-py-1 tw-px-2 tw-text-lg tw-cursor-pointer">-</span>
                <input
                  type="number"
                  name=""
                  value="1"
                  readOnly
                  className="tw-w-[30px] tw-text-center tw-text-lg"
                />
                <span className="tw-py-1 tw-px-2 tw-text-lg tw-cursor-pointer">+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="tw-flex">
          <div>
            <img
              src="https://image.cellphones.com.vn/200x/media/catalog/product/t/_/t_m_21.png"
              alt=""
              className="tw-w-[170px] tw-px-[10px]"
            />
          </div>
          <div className="tw-flex-1">
            <div className="tw-flex tw-items-center tw-justify-between">
              <Link className="tw-text-[#0e2431] tw-text-[15px] tw-font-bold">
                iPhone 14 Pro Max 256GB-Tím
              </Link>
              <DeleteIcon />
            </div>

            <div className="tw-flex tw-items-center tw-justify-between tw-text-[15px]">
              <div className="tw-flex tw-items-center tw-gap-1">
                <p className="tw-text-[#d70018] tw-font-bold ">29.290.000 ₫</p>
                <p className="tw-text-[#777] tw-text-sm tw-line-through">32.990.000 ₫</p>
              </div>
              <div className="tw-flex tw-items-center tw-gap-1">
                <span className="tw-py-1 tw-px-2 tw-text-lg tw-cursor-pointer">-</span>
                <input
                  type="number"
                  name=""
                  value="1"
                  readOnly
                  className="tw-w-[30px] tw-text-center tw-text-lg"
                />
                <span className="tw-py-1 tw-px-2 tw-text-lg tw-cursor-pointer">+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="tw-flex">
          <div>
            <img
              src="https://image.cellphones.com.vn/200x/media/catalog/product/t/_/t_m_21.png"
              alt=""
              className="tw-w-[170px] tw-px-[10px]"
            />
          </div>
          <div className="tw-flex-1">
            <div className="tw-flex tw-items-center tw-justify-between">
              <Link className="tw-text-[#0e2431] tw-text-[15px] tw-font-bold">
                iPhone 14 Pro Max 256GB-Tím
              </Link>
              <DeleteIcon />
            </div>

            <div className="tw-flex tw-items-center tw-justify-between tw-text-[15px]">
              <div className="tw-flex tw-items-center tw-gap-1">
                <p className="tw-text-[#d70018] tw-font-bold ">29.290.000 ₫</p>
                <p className="tw-text-[#777] tw-text-sm tw-line-through">32.990.000 ₫</p>
              </div>
              <div className="tw-flex tw-items-center tw-gap-1">
                <span className="tw-py-1 tw-px-2 tw-text-lg tw-cursor-pointer">-</span>
                <input
                  type="number"
                  name=""
                  value="1"
                  readOnly
                  className="tw-w-[30px] tw-text-center tw-text-lg"
                />
                <span className="tw-py-1 tw-px-2 tw-text-lg tw-cursor-pointer">+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="tw-flex">
          <div>
            <img
              src="https://image.cellphones.com.vn/200x/media/catalog/product/t/_/t_m_21.png"
              alt=""
              className="tw-w-[170px] tw-px-[10px]"
            />
          </div>
          <div className="tw-flex-1">
            <div className="tw-flex tw-items-center tw-justify-between">
              <Link className="tw-text-[#0e2431] tw-text-[15px] tw-font-bold">
                iPhone 14 Pro Max 256GB-Tím
              </Link>
              <DeleteIcon />
            </div>

            <div className="tw-flex tw-items-center tw-justify-between tw-text-[15px]">
              <div className="tw-flex tw-items-center tw-gap-1">
                <p className="tw-text-[#d70018] tw-font-bold ">29.290.000 ₫</p>
                <p className="tw-text-[#777] tw-text-sm tw-line-through">32.990.000 ₫</p>
              </div>
              <div className="tw-flex tw-items-center tw-gap-1">
                <span className="tw-py-1 tw-px-2 tw-text-lg tw-cursor-pointer">-</span>
                <input
                  type="number"
                  name=""
                  value="1"
                  readOnly
                  className="tw-w-[30px] tw-text-center tw-text-lg"
                />
                <span className="tw-py-1 tw-px-2 tw-text-lg tw-cursor-pointer">+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="tw-flex">
          <div>
            <img
              src="https://image.cellphones.com.vn/200x/media/catalog/product/t/_/t_m_21.png"
              alt=""
              className="tw-w-[170px] tw-px-[10px]"
            />
          </div>
          <div className="tw-flex-1">
            <div className="tw-flex tw-items-center tw-justify-between">
              <Link className="tw-text-[#0e2431] tw-text-[15px] tw-font-bold">
                iPhone 14 Pro Max 256GB-Tím
              </Link>
              <DeleteIcon />
            </div>

            <div className="tw-flex tw-items-center tw-justify-between tw-text-[15px]">
              <div className="tw-flex tw-items-center tw-gap-1">
                <p className="tw-text-[#d70018] tw-font-bold ">29.290.000 ₫</p>
                <p className="tw-text-[#777] tw-text-sm tw-line-through">32.990.000 ₫</p>
              </div>
              <div className="tw-flex tw-items-center tw-gap-1">
                <span className="tw-py-1 tw-px-2 tw-text-lg tw-cursor-pointer">-</span>
                <input
                  type="number"
                  name=""
                  value="1"
                  readOnly
                  className="tw-w-[30px] tw-text-center tw-text-lg"
                />
                <span className="tw-py-1 tw-px-2 tw-text-lg tw-cursor-pointer">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tw-w-full tw-max-w-[670px] tw-m-auto tw-bg-white tw-shadow-cellphone tw-rounded-md tw-p-[10px] tw-mt-20">
        <div className="tw-flex tw-items-center tw-justify-between tw-text-base tw-mb-2">
          <h1 className="tw-text-[#0e2431] tw-font-semibold">Tổng tiền tạm tính:</h1>
          <span className="tw-text-[#d70018] tw-font-bold">47.520.000 ₫</span>
        </div>
        <div className="tw-flex tw-flex-col tw-font-bold tw-gap-2">
          <button
            className="tw-px-3 tw-py-[6px] tw-uppercase tw-h-[60px] tw-bg-[#d70018] tw-rounded tw-text-white"
            onClick={() => navigate("/cart/payment-info")}
          >
            Tiến hành đặt hàng
          </button>
          <Link
            to="/"
            className="tw-px-3 tw-py-[6px] tw-uppercase tw-h-[60px] tw-leading-[48px] tw-text-center tw-border tw-border-[#dc3545] tw-rounded tw-text-[#dc3545] hover:tw-bg-[#dc3545] hover:tw-text-white"
          >
            Chọn thêm sản phẩm khác
          </Link>
        </div>
      </div>
    </div>
  );
}

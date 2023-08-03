import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

function PaymentInfo() {
  const navigate = useNavigate();

  const [deliverySelected, setDeliverySelected] = useState("");

  const [value, setValue] = useState(0);

  const country = [
  ];

  const provinces = [
  ];

  const addressStore = [{ label: "227 Nguyễn Văn Cừ, P4, Q5, TPHCM" }];

  const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="">
      <div className="tw-flex tw-items-center tw-justify-center  tw-max-w-[700px] tw-m-auto tw-my-5">
        <div
          className="tw-py-[10px] tw-flex tw-w-full tw-text-center tw-cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <div className="!tw-text-base tw-text-[#d70018] tw-justify-start tw-flex tw-items-center tw-font-semibold">
            <ArrowBackIosIcon />
            <h1 className="tw-cursor-pointer hover:tw-underline">Trở về</h1>
          </div>

          <h1 className="tw-text-lg tw-text-[#d70018] tw-font-semibold tw-justify-center tw-m-auto tw-pr-[70px] tw-cursor-auto">
            Thông tin đặt hàng
          </h1>
        </div>
      </div>

      <div className="tw-bg-[#fef2f2] tw-max-w-[600px] tw-m-auto tw-rounded-[15px]">
        <div className="tw-max-w-[600px] tw-m-auto tw-p-4 tw-flex tw-items-center ">
          <div className="tw-w-[20%] tw-flex tw-flex-col tw-gap-1 tw-items-center tw-text-xs tw-text-[#0e2431]">
            <div className="tw-w-[35px] tw-h-[35px] tw-border tw-border-[#d70018] tw-rounded-full tw-relative">
              <svg
                data-v-76247bda=""
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="shopping-cart"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="tw-text-sm tw-w-5 tw-h-5 tw-text-[#d70018] tw-top-1/2 tw-left-1/2 tw--translate-x-[50%] tw--translate-y-[50%] tw-absolute"
              >
                <path
                  data-v-76247bda=""
                  fill="currentColor"
                  d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
                  class=""
                ></path>
              </svg>
            </div>
            <p className="tw-text-[#d70018]">Chọn sản phẩm</p>
          </div>
          <div className="tw-w-[20%] tw-flex tw-flex-col tw-gap-1 tw-items-center tw-text-xs tw-text-[#0e2431] tw-process-item tw-relative tw-active">
            <div className="tw-w-[35px] tw-h-[35px] tw-border border-[#d70018] tw-rounded-full tw-relative">
              <svg
                data-v-76247bda=""
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="address-card"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="tw-text-sm tw-w-5 tw-h-5 tw-text-[#d70018] tw-top-1/2 tw-left-1/2 tw--translate-x-[50%] tw--translate-y-[50%] tw-absolute"
              >
                <path
                  data-v-76247bda=""
                  fill="currentColor"
                  d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"
                  class=""
                ></path>
              </svg>
            </div>
            <p className="tw-text-[#d70018]">Thông tin đặt hàng</p>
          </div>
          <div className="tw-w-[20%] tw-flex tw-flex-col tw-gap-1 tw-items-center tw-text-xs tw-text-[#0e2431] process-item tw-relative">
            <div className="tw-w-[35px] tw-h-[35px] tw-border tw-border-[#777] tw-rounded-full tw-relative ">
              <svg
                data-v-76247bda=""
                id="icon-voucher"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                className="tw-text-sm tw-w-5 tw-h-5 tw-fill-[#777] tw-top-1/2 tw-left-1/2 tw--translate-x-[50%] tw--translate-y-[50%] tw-absolute"
              >
                <path
                  data-v-76247bda=""
                  d="M395.13,306.087c-9.206,0-16.696,7.49-16.696,16.696c0,9.206,7.49,16.696,16.696,16.696s16.696-7.49,16.696-16.696
      C411.826,313.577,404.336,306.087,395.13,306.087z"
                ></path>{" "}
                <path
                  data-v-76247bda=""
                  d="M261.565,172.522c-9.206,0-16.696,7.49-16.696,16.696s7.49,16.696,16.696,16.696c9.206,0,16.696-7.49,16.696-16.696
      S270.771,172.522,261.565,172.522z"
                ></path>{" "}
                <path
                  data-v-76247bda=""
                  d="M495.304,72.348H144.696v50.087c0,9.217-7.479,16.696-16.696,16.696s-16.696-7.479-16.696-16.696V72.348H16.696
      C7.479,72.348,0,79.826,0,89.044v333.913c0,9.217,7.479,16.696,16.696,16.696h94.609v-50.087c0-9.217,7.479-16.696,16.696-16.696
      s16.696,7.479,16.696,16.696v50.087h350.609c9.217,0,16.696-7.479,16.696-16.696V89.044C512,79.826,504.521,72.348,495.304,72.348
      z M144.696,322.783c0,9.217-7.479,16.696-16.696,16.696s-16.696-7.479-16.696-16.696v-33.391c0-9.217,7.479-16.696,16.696-16.696
      s16.696,7.479,16.696,16.696V322.783z M144.696,222.609c0,9.217-7.479,16.696-16.696,16.696s-16.696-7.479-16.696-16.696v-33.391
      c0-9.217,7.479-16.696,16.696-16.696s16.696,7.479,16.696,16.696V222.609z M211.478,189.217c0-27.619,22.468-50.087,50.087-50.087
      c27.619,0,50.087,22.468,50.087,50.087c0,27.619-22.468,50.087-50.087,50.087C233.946,239.304,211.478,216.836,211.478,189.217z
       M257.512,343.544c-4.271,0-8.544-1.631-11.804-4.892c-6.521-6.521-6.521-17.087,0-23.609L387.37,173.37
      c6.521-6.522,17.086-6.522,23.608,0c6.521,6.521,6.521,17.087,0,23.609L269.315,338.652
      C266.054,341.914,261.782,343.544,257.512,343.544z M395.13,372.87c-27.619,0-50.087-22.468-50.087-50.087
      c0-27.619,22.468-50.087,50.087-50.087s50.087,22.468,50.087,50.087C445.217,350.402,422.75,372.87,395.13,372.87z"
                ></path>
              </svg>
            </div>
            <p>Phiếu giảm giá</p>
          </div>
          <div className="tw-w-[20%] tw-flex tw-flex-col tw-gap-1 tw-items-center tw-text-xs tw-text-[#0e2431] process-item tw-relative">
            <div className="tw-w-[35px] tw-h-[35px] tw-border tw-border-[#777] tw-rounded-full tw-relative">
              <svg
                data-v-76247bda=""
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="credit-card"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="tw-text-sm tw-w-5 tw-h-5 text-[#777] tw-top-1/2 tw-left-1/2 tw--translate-x-[50%] tw--translate-y-[50%] tw-absolute"
              >
                <path
                  data-v-76247bda=""
                  fill="currentColor"
                  d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"
                  class=""
                ></path>
              </svg>
            </div>
            <p>Thanh toán</p>
          </div>

          <div className="tw-w-[20%] tw-flex tw-flex-col tw-gap-1 tw-items-center tw-text-xs tw-text-[#0e2431] process-item tw-relative">
            <div className="tw-w-[35px] tw-h-[35px] tw-border tw-border-[#777] tw-rounded-full tw-relative">
              <svg
                data-v-76247bda=""
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="box-open"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="tw-text-sm tw-w-5 tw-h-5 tw-text-[#] tw-top-1/2 tw-left-1/2 tw--translate-x-[50%] tw--translate-y-[50%] tw-absolute"
              >
                <path
                  data-v-76247bda=""
                  fill="currentColor"
                  d="M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z"
                  class=""
                ></path>
              </svg>
            </div>
            <p>Hoàn tất đặt hàng</p>
          </div>
        </div>

        <div className="tw-bg-white tw-rounded-[15px]">
          <div className="tw-max-w-[600px]  tw-max-h-[650px] tw-m-auto tw-flex tw-flex-col tw-gap-3 tw-p-5 tw-shadow-cellphone tw-rounded-xl">
            <div>
              <h1 className="tw-mb-2 tw-text-base tw-font-bold tw-text-[#0e2431]">
                Thông tin khách hàng
              </h1>
              <div className="tw-flex tw-flex-col tw-gap-2">
                <input
                  type="text"
                  placeholder="Họ và tên (bắt buộc)"
                  className="tw-w-full tw-outline-none tw-border tw-border-[#ddd] tw-py-[6px] tw-px-3 tw-rounded-[10px]"
                />
                <input
                  type="text"
                  placeholder="Số điện thoại"
                  className="tw-w-full tw-outline-none tw-border tw-border-[#ddd] tw-py-[6px] tw-px-3 tw-rounded-[10px]"
                />
                <input
                  type="text"
                  placeholder="Email (Vui lòng điền email để nhận hoá đơn VAT)"
                  className="tw-w-full tw-outline-none tw-border tw-border-[#ddd] tw-py-[6px] tw-px-3 tw-rounded-[10px]"
                />
              </div>
            </div>

            <div>
              <h1 className="tw-text-base tw-font-bold tw-text-[#0e2431]">
                Chọn cách thức giao hàng
              </h1>
              <FormControl
                onChange={(e) => setDeliverySelected(e.target.value)}
              >
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                  className="!tw-flex tw-items-center !tw-flex-row"
                >
                  <FormControlLabel
                    value={0}
                    control={<Radio />}
                    label="Nhận tại cửa hàng"
                  />
                  <FormControlLabel
                    value={1}
                    control={<Radio />}
                    label="Giao hàng tận nơi"
                  />
                </RadioGroup>
              </FormControl>
              <div className="tw-rounded-[10px] tw-border tw-border-[#e5e7eb] tw-p-[10px]">
                <div className="tw-flex tw-items-center tw-gap-2 tw-mb-2">
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={country}
                    sx={{ width: "50%" }}
                    renderInput={(params) => (
                      <TextField {...params} label="Tỉnh/Thành phố" />
                    )}
                  />

                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={provinces}
                    sx={{ width: "50%" }}
                    renderInput={(params) => (
                      <TextField {...params} label="Quận/huyện" />
                    )}
                  />
                </div>
                <div className="tw-flex tw-items-center tw-gap-2 tw-mb-2">
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={addressStore}
                    sx={{ width: deliverySelected === "0" ? "100%" : "50%" }}
                    renderInput={(params) => (
                      <TextField {...params} label="Chọn địa chỉ cửa hàng" />
                    )}
                  />
                  {deliverySelected === "1" && (
                    <div className="tw-flex-1">
                      <input
                        type="text"
                        placeholder="Số nhà, tên đường"
                        className="tw-w-full tw-outline-none tw-border tw-border-[#ddd] tw-py-[15px] tw-px-3 tw-rounded-[10px]"
                      />
                    </div>
                  )}
                </div>
              </div>

              <input
                type="text"
                placeholder="Yêu cầu khác"
                className="tw-w-full tw-outline-none tw-border tw-border-[#ddd] tw-py-[6px] tw-px-3 tw-rounded-[10px] tw-mt-3"
              />
              <div className="tw-flex tw-items-center tw-gap-1 tw-mt-5 tw-mb-2">
                <Checkbox id="check" className="tw-w-[18px] tw-h-[18px]" />
                <label for="check" className="text-[#0e2431] text-base">
                  Yêu cầu xuất hóa đơn công ty (Vui lòng điền email để nhận hoá
                  đơn VAT)
                </label>
              </div>
              <a href="" className="tw-text-[#343a40] tw-text-base">
                <em>
                  (Với đơn hàng trên 20 triệu vui lòng thanh toán chuyển khoản
                  từ tài khoản công ty khi cần xuất VAT cho công ty)
                </em>
              </a>
              <div className="tw-flex tw-justify-center tw-mt-3">
                <ReCAPTCHA sitekey={TEST_SITE_KEY} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tw-w-full tw-max-w-[670px] tw-m-auto tw-bg-white shadow-cellphone tw-rounded-md tw-p-[10px] tw-mt-5">
        <div className="tw-flex tw-items-center tw-justify-between tw-mb-2 tw-text-base">
          <h1 className="tw-text-[#0e2431] tw-font-semibold">Tổng tiền tạm tính:</h1>
          <span className="tw-text-[#d70018] tw-font-bold">47.520.000 ₫</span>
        </div>
        <div className="tw-flex tw-flex-col tw-gap-2 tw-font-bold">
          <button
            className="tw-px-3 tw-py-[6px] tw-uppercase tw-h-[60px] tw-bg-[#d70018] tw-rounded tw-text-white"
            onClick={() => navigate("/cart/voucher")}
          >
            Tiếp tục
          </button>
          <Link
            className="tw-px-3 tw-py-[6px] tw-uppercase tw-h-[60px] tw-leading-[48px] tw-text-center tw-border tw-border-[#dc3545] tw-rounded tw-text-[#dc3545] hover:tw-bg-[#dc3545] hover:tw-text-white"
            to="/"
          >
            Chọn thêm sản phẩm khác
          </Link>
        </div>
      </div>
    </div>
    // <div className="cart w-[850px] m-0 m-auto bg-[#ececec] p-[35px]">
    //   <div className="cart-top flex gap-[275px] mb-5">
    //     <div className="cart-back">
    //       {" "}
    //       <strong> &#60; Back</strong>
    //     </div>
    //     <div className="cart-title">
    //       {" "}
    //       <strong> Shopping cart </strong>
    //     </div>
    //   </div>
    //   <div className="cart-center">
    //     <div className="flex items-center justify-between cart-content">
    //       <div className="cart-img">
    //         <img
    //           src="https://haycafe.vn/wp-content/uploads/2022/06/anh-pho-dem-mua-dong.jpg"
    //           className="w-[150px] h-[150px]"
    //           alt=""
    //         />
    //       </div>
    //       <div className="cart-name-price pl-5 w-[414px]">
    //         <h6 className="cart-name text-[20px]">Product Name</h6>
    //         <div className="flex items-center pt-5 cart-price">
    //           <div className="text-[16px]">
    //             <strong>23452352345 đ</strong>
    //           </div>
    //           <small className="text-[#adadad] text-[13px] pl-10">
    //             {" "}
    //             <del> 78967896789 đ</del>
    //           </small>
    //         </div>
    //       </div>
    //       <div className="cart-totol-delete">
    //         <div className="text-right cart-delete">
    //           {" "}
    //           <DeleteIcon />
    //         </div>
    //         <div className="cart-totol bg-[#fff] w-[100px] h-[30px] cursor-pointer rounded-[5px] mt-2 mr-[10px]">
    //           <input
    //             type="button"
    //             value="-"
    //             onClick={handleDecrease}
    //             className="w-[25px] h-full"
    //           />
    //           <input
    //             type="number"
    //             value={quantity}
    //             className="w-[50px] h-full text-center"
    //             readOnly
    //           />
    //           <input
    //             type="button"
    //             value="+"
    //             onClick={handleIncrease}
    //             className="w-[25px] h-full cursor-pointer"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="w-[100%] h-[2px] bg-[#fff] mt-5"></div>
    //     <div className="flex items-center justify-between mt-5 cart-content">
    //       <div className="cart-img">
    //         <img
    //           src="https://haycafe.vn/wp-content/uploads/2022/06/anh-pho-dem-mua-dong.jpg"
    //           className="w-[150px] h-[150px]"
    //           alt=""
    //         />
    //       </div>
    //       <div className="cart-name-price pl-5 w-[414px]">
    //         <h6 className="cart-name text-[20px]">Product Name</h6>
    //         <div className="flex items-center pt-5 cart-price">
    //           <div className="text-[16px]">
    //             <strong>23452352345 đ</strong>
    //           </div>
    //           <small className="text-[#adadad] text-[13px] pl-10">
    //             {" "}
    //             <del> 78967896789 đ</del>
    //           </small>
    //         </div>
    //         <div className="cart-discount">
    //           <strong>Discount</strong>
    //           <p className="w-[414px] overflow-hidden truncate">
    //             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
    //             autem dolores h
    //           </p>
    //         </div>
    //       </div>
    //       <div className="cart-totol-delete">
    //         <div className="text-right cart-delete">
    //           {" "}
    //           <DeleteIcon />
    //         </div>
    //         <div className="cart-totol bg-[#fff] w-[100px] h-[30px] cursor-pointer rounded-[5px] mt-2 mr-[10px]">
    //           <input
    //             type="button"
    //             value="-"
    //             onClick={handleDecrease}
    //             className="w-[25px] h-full"
    //           />
    //           <input
    //             type="number"
    //             value={quantity}
    //             className="w-[50px] h-full text-center"
    //             readOnly
    //           />
    //           <input
    //             type="button"
    //             value="+"
    //             onClick={handleIncrease}
    //             className="w-[25px] h-full cursor-pointer"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="cart-bottom bg-[#fff] mt-20 p-[5px]">
    //     <div className="flex justify-between mb-5 cart-bottom-totol">
    //       <div className="cart-bottom-left">Total</div>
    //       <div className="cart-bottom-left pr-4 text-[#a7a6a6]">123424 đ</div>
    //     </div>
    //     <div className="cart-bottom-btn">
    //       <button className="cart-bottom-order w-full h-[50px] bg-[#ccc] border-2 border-black bg-transparent">
    //         Proceed order
    //       </button>
    //       <button className="carrt-bottom-choose w-full h-[50px] mt-2 bg-[#ccc] border-2 border-black bg-transparent">
    //         Choose another product
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default PaymentInfo;


// import React, { useState, useEffect } from "react";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import { Link, useNavigate } from "react-router-dom";
// import ReCAPTCHA from "react-google-recaptcha";
// import {
//   Autocomplete,
//   Checkbox,
//   FormControl,
//   FormControlLabel,
//   Input,
//   Radio,
//   RadioGroup,
//   TextField,
// } from "@mui/material";

// import axios from "axios";
// import { Formik, Form } from "formik";

// function PaymentInfo() {
//   // const navigate = useNavigate();

//   const [deliverySelected, setDeliverySelected] = useState("");

//   const [value, setValue] = useState(0);

//   const addressStore = [{ label: "227 Nguyễn Văn Cừ, P4, Q5, TPHCM" }];

//   const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

//   const [data, setData] = useState(null);
//   const [districtOptions, setDistrictOptions] = useState([]);
//   const [wardOptions, setWardOptions] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
//         );
//         setData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleChange = (event) => {
//     setValue(event.target.value);
//   };
//   return (
//     <Formik
//       initialValues={{
//         city: "",
//         district: "",
//         ward: "",
//         address: "",
//       }}
//       onSubmit={(values) => {
//         // Handle form submission here
//         console.log(values);
//       }}
//     >
//       {({ values, setFieldValue }) => (
//         <Form>
//           <div className="">
//             <div className="flex items-center justify-center  max-w-[700px] m-auto my-5">
//               <div
//                 className="py-[10px] flex w-full text-center cursor-pointer"
//                 // onClick={() => navigate("/cart")}
//               >
//                 <div className="!text-base text-[#d70018] justify-start flex items-center font-semibold">
//                   <ArrowBackIosIcon />
//                   <h1 className="cursor-pointer hover:underline">Trở về</h1>
//                 </div>

//                 <h1 className="text-lg text-[#d70018] font-semibold justify-center m-auto pr-[70px] cursor-auto">
//                   Thông tin đặt hàng
//                 </h1>
//               </div>
//             </div>

//             <div className="bg-[#fef2f2] max-w-[600px] m-auto rounded-[15px]">
//               <div className="max-w-[600px] m-auto p-4 flex items-center ">
//                 <div className="w-[20%] flex flex-col gap-1 items-center text-xs text-[#0e2431]">
//                   <div className="w-[35px] h-[35px] border border-[#d70018] rounded-full relative">
//                     <svg
//                       data-v-76247bda=""
//                       aria-hidden="true"
//                       focusable="false"
//                       data-prefix="fas"
//                       data-icon="shopping-cart"
//                       role="img"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 576 512"
//                       className="text-sm w-5 h-5 text-[#d70018] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute"
//                     >
//                       <path
//                         data-v-76247bda=""
//                         fill="currentColor"
//                         d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
//                         class=""
//                       ></path>
//                     </svg>
//                   </div>
//                   <p className="text-[#d70018]">Chọn sản phẩm</p>
//                 </div>
//                 <div className="w-[20%] flex flex-col gap-1 items-center text-xs text-[#0e2431] process-item relative active">
//                   <div className="w-[35px] h-[35px] border border-[#d70018] rounded-full relative">
//                     <svg
//                       data-v-76247bda=""
//                       aria-hidden="true"
//                       focusable="false"
//                       data-prefix="fas"
//                       data-icon="address-card"
//                       role="img"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 576 512"
//                       className="text-sm w-5 h-5 text-[#d70018] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute"
//                     >
//                       <path
//                         data-v-76247bda=""
//                         fill="currentColor"
//                         d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"
//                         class=""
//                       ></path>
//                     </svg>
//                   </div>
//                   <p className="text-[#d70018]">Thông tin đặt hàng</p>
//                 </div>
//                 <div className="w-[20%] flex flex-col gap-1 items-center text-xs text-[#0e2431] process-item relative">
//                   <div className="w-[35px] h-[35px] border border-[#777] rounded-full relative ">
//                     <svg
//                       data-v-76247bda=""
//                       id="icon-voucher"
//                       xmlns="http://www.w3.org/2000/svg"
//                       xmlnsXlink="http://www.w3.org/1999/xlink"
//                       viewBox="0 0 512 512"
//                       xmlSpace="preserve"
//                       className="text-sm w-5 h-5 fill-[#777] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute"
//                     >
//                       <path
//                         data-v-76247bda=""
//                         d="M395.13,306.087c-9.206,0-16.696,7.49-16.696,16.696c0,9.206,7.49,16.696,16.696,16.696s16.696-7.49,16.696-16.696
//       C411.826,313.577,404.336,306.087,395.13,306.087z"
//                       ></path>{" "}
//                       <path
//                         data-v-76247bda=""
//                         d="M261.565,172.522c-9.206,0-16.696,7.49-16.696,16.696s7.49,16.696,16.696,16.696c9.206,0,16.696-7.49,16.696-16.696
//       S270.771,172.522,261.565,172.522z"
//                       ></path>{" "}
//                       <path
//                         data-v-76247bda=""
//                         d="M495.304,72.348H144.696v50.087c0,9.217-7.479,16.696-16.696,16.696s-16.696-7.479-16.696-16.696V72.348H16.696
//       C7.479,72.348,0,79.826,0,89.044v333.913c0,9.217,7.479,16.696,16.696,16.696h94.609v-50.087c0-9.217,7.479-16.696,16.696-16.696
//       s16.696,7.479,16.696,16.696v50.087h350.609c9.217,0,16.696-7.479,16.696-16.696V89.044C512,79.826,504.521,72.348,495.304,72.348
//       z M144.696,322.783c0,9.217-7.479,16.696-16.696,16.696s-16.696-7.479-16.696-16.696v-33.391c0-9.217,7.479-16.696,16.696-16.696
//       s16.696,7.479,16.696,16.696V322.783z M144.696,222.609c0,9.217-7.479,16.696-16.696,16.696s-16.696-7.479-16.696-16.696v-33.391
//       c0-9.217,7.479-16.696,16.696-16.696s16.696,7.479,16.696,16.696V222.609z M211.478,189.217c0-27.619,22.468-50.087,50.087-50.087
//       c27.619,0,50.087,22.468,50.087,50.087c0,27.619-22.468,50.087-50.087,50.087C233.946,239.304,211.478,216.836,211.478,189.217z
//        M257.512,343.544c-4.271,0-8.544-1.631-11.804-4.892c-6.521-6.521-6.521-17.087,0-23.609L387.37,173.37
//       c6.521-6.522,17.086-6.522,23.608,0c6.521,6.521,6.521,17.087,0,23.609L269.315,338.652
//       C266.054,341.914,261.782,343.544,257.512,343.544z M395.13,372.87c-27.619,0-50.087-22.468-50.087-50.087
//       c0-27.619,22.468-50.087,50.087-50.087s50.087,22.468,50.087,50.087C445.217,350.402,422.75,372.87,395.13,372.87z"
//                       ></path>
//                     </svg>
//                   </div>
//                   <p>Phiếu giảm giá</p>
//                 </div>
//                 <div className="w-[20%] flex flex-col gap-1 items-center text-xs text-[#0e2431] process-item relative">
//                   <div className="w-[35px] h-[35px] border border-[#777] rounded-full relative">
//                     <svg
//                       data-v-76247bda=""
//                       aria-hidden="true"
//                       focusable="false"
//                       data-prefix="fas"
//                       data-icon="credit-card"
//                       role="img"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 576 512"
//                       className="text-sm w-5 h-5 text-[#777] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute"
//                     >
//                       <path
//                         data-v-76247bda=""
//                         fill="currentColor"
//                         d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"
//                         class=""
//                       ></path>
//                     </svg>
//                   </div>
//                   <p>Thanh toán</p>
//                 </div>

//                 <div className="w-[20%] flex flex-col gap-1 items-center text-xs text-[#0e2431] process-item relative">
//                   <div className="w-[35px] h-[35px] border border-[#777] rounded-full relative">
//                     <svg
//                       data-v-76247bda=""
//                       aria-hidden="true"
//                       focusable="false"
//                       data-prefix="fas"
//                       data-icon="box-open"
//                       role="img"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 640 512"
//                       className="text-sm w-5 h-5 text-[#] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute"
//                     >
//                       <path
//                         data-v-76247bda=""
//                         fill="currentColor"
//                         d="M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z"
//                         class=""
//                       ></path>
//                     </svg>
//                   </div>
//                   <p>Hoàn tất đặt hàng</p>
//                 </div>
//               </div>

//               <div className="bg-white rounded-[15px]">
//                 <div className="max-w-[600px]  max-h-[650px] m-auto flex flex-col gap-3 p-5 shadow-cellphone rounded-xl">
//                   <div>
//                     <h1 className="mb-2 text-base font-bold text-[#0e2431]">
//                       Thông tin khách hàng
//                     </h1>
//                     <div className="flex flex-col gap-2">
//                       <input
//                         type="text"
//                         placeholder="Họ và tên (bắt buộc)"
//                         className="w-full outline-none border border-[#ddd] py-[6px] px-3 rounded-[10px]"
//                       />
//                       <input
//                         type="text"
//                         placeholder="Số điện thoại"
//                         className="w-full outline-none border border-[#ddd] py-[6px] px-3 rounded-[10px]"
//                       />
//                       <input
//                         type="text"
//                         placeholder="Email (Vui lòng điền email để nhận hoá đơn VAT)"
//                         className="w-full outline-none border border-[#ddd] py-[6px] px-3 rounded-[10px]"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <h1 className="text-base font-bold text-[#0e2431]">
//                       Chọn cách thức giao hàng
//                     </h1>
//                     <FormControl
//                       onChange={(e) => setDeliverySelected(e.target.value)}
//                     >
//                       <RadioGroup
//                         aria-labelledby="demo-controlled-radio-buttons-group"
//                         name="controlled-radio-buttons-group"
//                         value={value}
//                         onChange={handleChange}
//                         className="!flex items-center !flex-row"
//                       >
//                         <FormControlLabel
//                           value={0}
//                           control={<Radio />}
//                           label="Nhận tại cửa hàng"
//                         />
//                         <FormControlLabel
//                           value={1}
//                           control={<Radio />}
//                           label="Giao hàng tận nơi"
//                         />
//                       </RadioGroup>
//                     </FormControl>
//                     <div className="rounded-[10px] border border-[#e5e7eb] p-[10px]">
//                       <div className="flex items-center gap-2 mb-2">
//                         <Autocomplete
//                           disablePortal
//                           id="city"
//                           options={data || []}
//                           getOptionLabel={(option) => option.Name || ""}
//                           value={
//                             data
//                               ? data.find((city) => city.Id === values.city)
//                               : null
//                           }
//                           onChange={(event, newValue) => {
//                             setFieldValue("city", newValue ? newValue.Id : "");
//                             setFieldValue("district", "");
//                             setFieldValue("ward", "");
//                             if (newValue) {
//                               setDistrictOptions(
//                                 newValue.Districts.map((district) => ({
//                                   ...district,
//                                   label: district.Name,
//                                 }))
//                               );
//                             } else {
//                               setDistrictOptions([]);
//                             }
//                           }}
//                           renderInput={(params) => (
//                             <TextField {...params} label="Tỉnh/Thành phố" />
//                           )}
//                         />
//                         <Autocomplete
//                           disablePortal
//                           id="district"
//                           options={districtOptions}
//                           getOptionLabel={(option) => option.label || ""}
//                           value={
//                             districtOptions.find(
//                               (district) => district.Id === values.district
//                             ) || null
//                           }
//                           onChange={(event, newValue) => {
//                             setFieldValue(
//                               "district",
//                               newValue ? newValue.Id : ""
//                             );
//                             setFieldValue("ward", "");
//                             if (newValue) {
//                               setWardOptions(
//                                 newValue.Wards.map((ward) => ({
//                                   ...ward,
//                                   label: ward.Name,
//                                 }))
//                               );
//                             } else {
//                               setWardOptions([]);
//                             }
//                           }}
//                           renderInput={(params) => (
//                             <TextField {...params} label="Quận/huyện" />
//                           )}
//                         />
//                         <Autocomplete
//                           disablePortal
//                           id="ward"
//                           options={wardOptions}
//                           getOptionLabel={(option) => option.label || ""}
//                           value={
//                             wardOptions.find(
//                               (ward) => ward.Id === values.ward
//                             ) || null
//                           }
//                           onChange={(event, newValue) => {
//                             setFieldValue("ward", newValue ? newValue.Id : "");
//                           }}
//                           renderInput={(params) => (
//                             <TextField {...params} label="Phường/Xã" />
//                           )}
//                         />
//                         <TextField
//                           name="address"
//                           label="Địa chỉ nhà"
//                           fullWidth
//                           onChange={(event) =>
//                             setFieldValue("address", event.target.value)
//                           }
//                         />
//                       </div>
//                       <div className="flex items-center gap-2 mb-2">
//                         <Autocomplete
//                           disablePortal
//                           id="combo-box-demo"
//                           options={addressStore}
//                           sx={{
//                             width: deliverySelected === "0" ? "100%" : "50%",
//                           }}
//                           renderInput={(params) => (
//                             <TextField
//                               {...params}
//                               label="Chọn địa chỉ cửa hàng"
//                             />
//                           )}
//                         />
//                         {deliverySelected === "1" && (
//                           <div className="flex-1">
//                             <input
//                               type="text"
//                               placeholder="Số nhà, tên đường"
//                               className="w-full outline-none border border-[#ddd] py-[15px] px-3 rounded-[10px]"
//                             />
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     <input
//                       type="text"
//                       placeholder="Yêu cầu khác"
//                       className="w-full outline-none border border-[#ddd] py-[6px] px-3 rounded-[10px] mt-3"
//                     />
//                     <div className="flex items-center gap-1 mt-5 mb-2">
//                       <Checkbox id="check" className="w-[18px] h-[18px]" />
//                       <label for="check" className="text-[#0e2431] text-base">
//                         Yêu cầu xuất hóa đơn công ty (Vui lòng điền email để
//                         nhận hoá đơn VAT)
//                       </label>
//                     </div>
//                     <a href="" className="text-[#343a40] text-base">
//                       <em>
//                         (Với đơn hàng trên 20 triệu vui lòng thanh toán chuyển
//                         khoản từ tài khoản công ty khi cần xuất VAT cho công ty)
//                       </em>
//                     </a>
//                     <div className="flex justify-center mt-3">
//                       <ReCAPTCHA sitekey={TEST_SITE_KEY} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="w-full max-w-[670px] m-auto bg-white shadow-cellphone rounded-md p-[10px] mt-5">
//               <div className="flex items-center justify-between mb-2 text-base">
//                 <h1 className="text-[#0e2431] font-semibold">
//                   Tổng tiền tạm tính:
//                 </h1>
//                 <span className="text-[#d70018] font-bold">47.520.000 ₫</span>
//               </div>
//               <div className="flex flex-col gap-2 font-bold">
//                 <button
//                   className="px-3 py-[6px] uppercase h-[60px] bg-[#d70018] rounded text-white"
//                   // onClick={() => navigate("/cart/voucher")}
//                 >
//                   Tiếp tục
//                 </button>
//                 <Link
//                   className="px-3 py-[6px] uppercase h-[60px] leading-[48px] text-center border border-[#dc3545] rounded text-[#dc3545] hover:bg-[#dc3545] hover:text-white"
//                   to="/"
//                 >
//                   Chọn thêm sản phẩm khác
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <button type="submit">Gửi</button>
//         </Form>
//       )}
//     </Formik>
//   );
// }

// export default PaymentInfo;

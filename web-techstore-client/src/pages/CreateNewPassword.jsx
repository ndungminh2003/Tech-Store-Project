import React, { useState } from "react";
import "../assets/styles.scss";
const CreateNewPassword = () => {
  return (
    <div className="restore-password tw-w-[700px] tw-m-auto tw-mt-[20px]">
      <div className="tw-mx-auto tw-text-2xl tw-font-bold tw-text-center">
        <h3>Tạo mật khẩu mới</h3>
      </div>
      <div className="tw-mt-6 tw-text-center restore-password-logo">
        <img
          src="https://account.cellphones.com.vn/_nuxt/img/Shipper_CPS3.0251fdd.png"
          alt=""
          className="tw-h-[213px] tw-m-auto"
        />
      </div>
      <div>
        <h5>Tạo mật khẩu mới</h5>
        <div className="tw-input-group">
          <input
            type="password"
            placeholder=" "
            onFocus={(e) =>
              e.currentTarget.parentNode.classList.add("focus-within")
            }
            onBlur={(e) => {
              const inputGroup = e.currentTarget.parentNode;
              if (!e.currentTarget.value.trim()) {
                inputGroup.classList.remove("focus-within");
                inputGroup.classList.remove("has-value");
              } else {
                inputGroup.classList.remove("focus-within");
                inputGroup.classList.add("has-value");
              }
            }}
            onChange={(e) => {
              const inputGroup = e.currentTarget.parentNode;
              if (!e.currentTarget.value.trim()) {
                inputGroup.classList.remove("has-value");
              } else {
                inputGroup.classList.add("has-value");
              }
            }}
          />
          <label>Nhập mật khẩu mới của bạn</label>
        </div>

        <div className="tw-text-[#afafaf] tw-text-[13px] tw-italic tw-pl-[15px]">
          Mật khẩu phải nhiều hơn 8 ký tự, ít nhất 1 chữ thường 1 chữ in hoa, 1
          chữ số, 1 ký tự đặc biệt
        </div>
        <div className="tw-input-group">
          <input
            type="password"
            placeholder=" "
            onFocus={(e) =>
              e.currentTarget.parentNode.classList.add("focus-within")
            }
            onBlur={(e) => {
              const inputGroup = e.currentTarget.parentNode;
              if (!e.currentTarget.value.trim()) {
                inputGroup.classList.remove("focus-within");
                inputGroup.classList.remove("has-value");
              } else {
                inputGroup.classList.remove("focus-within");
                inputGroup.classList.add("has-value");
              }
            }}
            onChange={(e) => {
              const inputGroup = e.currentTarget.parentNode;
              if (!e.currentTarget.value.trim()) {
                inputGroup.classList.remove("has-value");
              } else {
                inputGroup.classList.add("has-value");
              }
            }}
          />
          <label>Xác nhận lại mật khẩu</label>
        </div>
      </div>
      <div>
        <button className="tw-bg-[#e0052b] tw-rounded-md tw-text-white tw-cursor-pointer tw-block tw-text-center tw-text-14 tw-font-semibold tw-mt-[20px] tw-mb-[20px] tw-mx-auto tw-pt-[11px] tw-pb-[11px] tw-w-full">
          Tiếp tục
        </button>
      </div>
    </div>
  );
};

export default CreateNewPassword;
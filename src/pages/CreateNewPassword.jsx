import React, { useState } from "react";
import "../assets/style/styles.scss";
const CreateNewPassword = () => {
  return (
    <div className="restore-password w-[700px] m-auto mt-[20px]">
      <div className="mx-auto text-2xl font-bold text-center">
        <h3>Tạo mật khẩu mới</h3>
      </div>
      <div className="mt-6 text-center restore-password-logo">
        <img
          src="/logo/small.png"
          alt=""
          className="h-[120px] m-auto rounded-xl"
        />
      </div>
      <div>
        <h5 className="ml-3 mr-1">Tạo mật khẩu mới</h5>
        <div className="input-group">
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

        <div className="text-[#afafaf] text-[13px] italic pl-[15px]">
          Mật khẩu phải nhiều hơn 8 ký tự, ít nhất 1 chữ thường 1 chữ in hoa, 1
          chữ số, 1 ký tự đặc biệt
        </div>
        <div className="input-group">
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
      <div className="ml-3 mr-3">
        <button className="bg-slate-500 rounded-md text-white cursor-pointer block text-center text-14 font-semibold mt-[20px] mb-[20px] mx-auto pt-[11px] pb-[11px] w-full">
          Tiếp tục
        </button>
      </div>
    </div>
  );
};

export default CreateNewPassword;

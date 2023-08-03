import { Checkbox } from "@mui/material";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const Login = () => {
  const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  const navigate = useNavigate();

  const handleForgotPasswordClick = () => {
    navigate("/RestorePassword");
  };
  return (
    <div className="tw-max-w-[700px] tw-m-auto">
      <div className="tw-py-[10px] tw-flex tw-w-full tw-text-center">
        {/* <ArrowBackIcon
          className="justify-start !text-[30px] cursor-pointer"
          onClick={() => navigate("/")}
        /> */}
        <h1 className="tw-m-auto tw-text-[#4a4a4a] tw-text-[22px] tw-font-bold">
          Đăng nhập Techstore Member
        </h1>
      </div>
      <div>
        <div className="tw-mt-5 tw-text-center">
          <img
            src="https://account.cellphones.com.vn/_nuxt/img/Shipper_CPS3.0251fdd.png"
            alt=""
            className="tw-w-[80px] tw-h-[80px] tw-m-auto"
          />
        </div>
        <div>
          <form
            action="
            "
          >
            <div className="tw-mt-5 tw-mb-3">
              <input
                type="text"
                placeholder="Nhập số điện thoại/email"
                className="text-base text-[#222] w-full !border-b !border-[#e8e8e8] h-[40px] px-[15px] outline-none rounded"
              />
            </div>
            <div className="tw-mt-5 tw-mb-3">
              <input
                type="password"
                placeholder="Nhập mật khẩu"
                className="tw-text-base tw-text-[#222] tw-w-full !tw-border-b !tw-border-[#e8e8e8] tw-h-[40px] tw-px-[15px] tw-outline-none tw-rounded"
              />
              <div className="tw-flex tw-justify-end tw-w-full tw-mt-[15px]">
                <p
                  className="tw-text-[#afafaf] tw-text-[13px] tw-cursor-pointer"
                  onClick={handleForgotPasswordClick}
                >
                  Quên mật khẩu?
                </p>
              </div>
            </div>

            <div className="tw-flex tw-justify-center tw-py-5">
              <ReCAPTCHA sitekey={TEST_SITE_KEY} />
            </div>

            <button className="tw-outline-none tw-bg-[#e0052b] tw-text-white tw-text-center tw-text-sm tw-py-[10px] tw-w-full tw-rounded-md tw-font-semibold">
              Đăng nhập
            </button>

            <div className="tw-flex tw-items-center tw-w-full tw-mt-5 tw-h-[49px]">
              <hr className="tw-h-[1px] tw-w-full" />
              <p className="tw-mx-2 tw-whitespace-nowrap tw-text-[#4a4a4a] tw-text-base">
                hoặc đăng nhập bằng
              </p>
              <hr className="tw-h-[1px] tw-w-full" />
            </div>

            <div className="tw-flex tw-items-center tw-justify-center tw-gap-[30px] tw-h-[55px]">
              <div className="tw-flex tw-items-center tw-gap-[10px]">
                <img
                  src="https://account.cellphones.com.vn/_nuxt/img/image45.93ceca6.png"
                  alt=""
                  className="tw-w-6 tw-h-6"
                />
                <p>Google</p>
              </div>
              <div className="tw-flex tw-items-center tw-gap-[10px]">
                <img
                  src="https://account.cellphones.com.vn/_nuxt/img/Logo-Zalo-Arc.a36365b.png"
                  alt=""
                  className="tw-w-6 tw-h-6"
                />
                <p>Zalo</p>
              </div>
            </div>

            <div className="tw-flex tw-items-center tw-justify-center tw-gap-[5px] tw-my-5 tw-text-sm">
              <p className="tw-text-[#777]">Bạn chưa có tài khoản?</p>
              <Link to={"/register"} className="tw-text-[#d70018] tw-font-semibold">
                Đăng ký ngay
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

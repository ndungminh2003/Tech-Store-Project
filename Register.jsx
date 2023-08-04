import { Checkbox } from "@mui/material";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Register = () => {
  const navigate = useNavigate();
  const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  return (
    <div className="tw-max-w-[700px] tw-m-auto">
      <div className="tw-py-[10px] tw-flex tw-w-full tw-text-center">
        <ArrowBackIcon
          className="tw-justify-start !tw-text-[30px] tw-cursor-pointer"
          onClick={() => navigate("/")}
        />
        <h1 className="tw-m-auto tw-text-[#4a4a4a] tw-text-[22px] tw-font-bold">
          Đăng ký Techstore Member
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
                type="
                    "
                placeholder="Nhập họ và tên"
                className="tw-text-base tw-text-[#222] tw-w-full !tw-border-b !tw-border-[#e8e8e8] tw-h-[40px] tw-px-[15px] tw-outline-none tw-rounded"
              />
            </div>
            <div className="tw-mt-5 tw-mb-3">
              <input
                type="
                    "
                placeholder="Nhập email"
                className="tw-text-base tw-text-[#222] tw-w-full !tw-border-b !tw-border-[#e8e8e8] tw-h-[40px] tw-px-[15px] tw-outline-none tw-rounded"
              />
              <p className="tw-text-[#afafaf] tw-text-[13px] tw-italic tw-pl-[15px]">
                (*) Hóa đơn VAT khi mua hàng sẽ được gửi qua email này
              </p>
            </div>
            <div className="tw-mt-5 tw-mb-3">
              <input
                type="
                    "
                placeholder="Nhập mật khẩu"
                className="tw-text-base tw-text-[#222] tw-w-full !tw-border-b !tw-border-[#e8e8e8] tw-h-[40px] tw-px-[15px] tw-outline-none tw-rounded"
              />
              <p className="tw-text-[#afafaf] tw-text-[13px] tw-italic tw-pl-[15px]">
                (*) Mật khẩu phải nhiều hơn 8 ký tự, ít nhất 1 chữ thường 1 chữ
                in hoa, 1 chữ số, 1 ký tự đặc biệt
              </p>
            </div>
            <div className="tw-mt-5 tw-mb-3">
              <input
                type="
                    "
                placeholder="Nhập lại mật khẩu"
                className="tw-text-base tw-text-[#222] tw-w-full !tw-border-b !tw-border-[#e8e8e8] tw-h-[40px] tw-px-[15px] tw-outline-none tw-rounded"
              />
            </div>
            <div className="tw-mt-5 tw-mb-3">
              <input
                type="
                    "
                placeholder="Nhập mã giới thiệu (nếu có)"
                className="tw-text-base tw-text-[#222] tw-w-full !tw-border-b !tw-border-[#e8e8e8] tw-h-[40px] tw-px-[15px] tw-outline-none tw-rounded"
              />
            </div>
            <div>
              <Checkbox id="1" />
              <label htmlFor="1" className="tw-text-[#777] tw-text-[13px]">
                Tôi đồng ý với các điều khoản bảo mật cá nhân
              </label>
            </div>
            <div>
              <Checkbox id="2" />
              <label htmlFor="2" className="tw-text-[#777] tw-text-[13px]">
                Đăng ký nhận bản tin khuyến mãi qua email
              </label>
            </div>
            <div className="tw-flex tw-justify-center tw-py-5">
              <ReCAPTCHA sitekey={TEST_SITE_KEY} />
            </div>

            <button className="tw-outline-none tw-bg-[#e0052b] tw-text-white tw-text-center tw-text-sm tw-py-[10px] tw-w-full tw-rounded-md tw-font-semibold">
              Đăng ký
            </button>

            <div className="tw-flex tw-items-center tw-w-full tw-mt-5 tw-h-[49px]">
              <hr className="tw-h-[1px] tw-w-full" />
              <p className="tw-mx-2 tw-whitespace-nowrap tw-text-[#4a4a4a] tw-text-base">
                hoặc đăng ký bằng
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
              <p className="tw-text-[#777]">Bạn đã có tài khoản?</p>
              <Link to="/login" className="tw-text-[#d70018] tw-font-semibold">
                Đăng nhập ngay
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
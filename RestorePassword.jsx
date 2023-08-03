import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import MaskedEmail from "./MaskedEmail";
const RestorePassword = () => {
  const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  const email = "nbduy21@vp.fitus.edu.vn";

  const navigate = useNavigate();
  const handleForgotPasswordClick = () => {
    navigate("/Otp");
  };
  const handleBackClick = () => {
    navigate("/Login");
  };
  return (
    <div className="restore-password tw-w-[700px] tw-m-0 tw-m-auto tw-mt-[20px]">
      <div className="tw-flex">
        <div className="tw-cursor-pointer restore-password-back"  onClick={handleBackClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_3392_9050)">
              <path
                d="M25 12H7"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M12 19L5 12L12 5"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>{" "}
            <defs>
              <clipPath id="clip0_3392_9050">
                <rect width="24" height="24" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="tw-mx-auto tw-text-2xl tw-font-bold tw-text-center">
          <h3>Quên mật khẩu</h3>
        </div>
      </div>
      <div className="tw-text-center tw-restore-password-logo">
        <img
          src="https://account.cellphones.com.vn/_nuxt/img/Shipper_CPS3.0251fdd.png"
          alt=""
          className="tw-h-[213px] tw-m-0 tw-m-auto"
        />
      </div>
      <div className="restore-password-confirm">
        <div className="restore-password-text tw-text-[#777] tw-text-sm tw-mb-5">
          Gửi mã xác nhận để lấy lại mật khẩu
        </div>
        <div className="tw-border-[2px] tw-border-[#e11b1e] tw-rounded-lg tw-cursor-pointer tw-mb-5 tw-pl-[20px] tw-pr-[20px] tw-pt-[10px] tw-pb-[10px] tw-flex tw-items-center tw-gap-[15px]">
          <div className="restore-password-icon tw-w-[68px] tw-h-[68px] tw-p-[22px] tw-rounded-[50%] tw-bg-[#ffd9d9]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"
                fill="#e11b1e"
              ></path>
            </svg>
          </div>
          <div className="RestorePassword-info">
            <div className="tw-text-[12px]">Qua email</div>
            <div>
              <strong>
                <MaskedEmail email={email} />
              </strong>
            </div>
          </div>
        </div>
        <div className="tw-pl-[140px]">
          <ReCAPTCHA sitekey={TEST_SITE_KEY} />
        </div>
        <div>
          <button  onClick={handleForgotPasswordClick} className="tw-bg-[#e0052b] tw-rounded-md tw-text-white tw-cursor-pointer tw-block tw-text-center tw-text-14 tw-font-semibold tw-mt-[20px] tw-mb-[20px] tw-mx-auto tw-pt-[11px] tw-pb-[11px] tw-w-full">
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestorePassword;

import React, { useState, useEffect } from "react";
import MaskedEmail from "./MaskedEmail";
import { useNavigate } from "react-router-dom";

import "../assets/styles.css";
const CreateNewPassword = () => {
  const email = "taquangthang2002hn@gmail.com";
  const [countdown, setCountdown] = useState(60);
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    let interval;
    if (isCounting) {
      interval = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isCounting]);

  useEffect(() => {
    if (countdown === 0) {
      setIsCounting(false);
    }
  }, [countdown]);

  const handleResend = () => {
    setCountdown(60);
    setIsCounting(true);
  };

  const navigate = useNavigate();
  const handleForgotPasswordClick = () => {
    navigate("/CreateNewPassword");
  };
  return (
    <div className="restore-password tw-w-[700px] tw-m-auto tw-mt-[20px]">
      <div className="tw-mx-auto tw-text-2xl tw-font-bold tw-text-center">
        <h3>Quên mật khẩu</h3>
      </div>
      <div className="restore-password-confirm tw-mt-[110px] tw-p-[15px] tw-text-[13px]">
        Nhập mã OTP được gửi qua email <MaskedEmail email={email} />
      </div>
      <div className="tw-flex tw-justify-center tw-mt-[40px]">
        <input
          min="0"
          max="9"
          maxlength="1"
          pattern="[0-9]"
          type="tel"
          className="otp-number"
        />
        <input
          min="0"
          max="9"
          maxlength="1"
          pattern="[0-9]"
          type="tel"
          className="otp-number"
        />
        <input
          min="0"
          max="9"
          maxlength="1"
          pattern="[0-9]"
          type="tel"
          className="otp-number"
        />
        <input
          min="0"
          max="9"
          maxlength="1"
          pattern="[0-9]"
          type="tel"
          className="otp-number"
        />
        
      </div>
      <div className="tw-flex tw-justify-center tw-gap-2 tw-mt-[20px]">
      Mã OTP hết hạn sau
      {countdown === 0 ? (
        <button onClick={handleResend} className=" tw-text-[#e0052b] tw-text-14">
          Gửi lại
        </button>
      ) : (
        <div className="tw-text-[#e0052b]">{countdown}s</div>
        )}
        </div>
      <div>
        <button onClick={handleForgotPasswordClick} className="tw-bg-[#e0052b] tw-rounded-md tw-text-white tw-cursor-pointer tw-block tw-text-center tw-text-14 tw-font-semibold tw-mt-[20px] tw-mb-[20px] tw-mx-auto tw-pt-[11px] tw-pb-[11px] tw-w-full">
          Tiếp tục
        </button>
      </div>
    </div>
  );
};

export default CreateNewPassword;
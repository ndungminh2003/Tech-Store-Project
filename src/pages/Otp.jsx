import React, { useState, useEffect } from "react";
import MaskedEmail from "./MaskedEmail";
import { useNavigate } from "react-router-dom";

import "../assets/style/styles.css";
const CreateNewPassword = () => {
  const email = "nbduy21@vp.fitus.edu.vn";
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
    <div className="restore-password w-[700px] m-auto mt-[20px]">
      <div className="mx-auto text-2xl font-bold text-center">
        <h3>Quên mật khẩu</h3>
      </div>
      <div className="restore-password-confirm mt-[110px] p-[15px] text-[13px]">
        Nhập mã OTP được gửi qua email <MaskedEmail email={email} />
      </div>
      <div className="flex justify-center mt-[40px]">
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
      <div className="flex justify-center gap-2 mt-[20px]">
      Mã OTP hết hạn sau
      {countdown === 0 ? (
        <button onClick={handleResend} className=" text-[#e0052b] text-14">
          Gửi lại
        </button>
      ) : (
        <div className="text-[#e0052b]">{countdown}s</div>
        )}
        </div>
      <div className="res-btn ">
        <button onClick={handleForgotPasswordClick} className=" bg-slate-500 rounded-md text-white cursor-pointer block text-center text-14 font-semibold mt-[20px] mb-[20px] mx-auto pt-[11px] pb-[11px] w-full">
          Tiếp tục
        </button>
      </div>
    </div>
  );
};

export default CreateNewPassword;

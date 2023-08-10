import React, { useState, useEffect } from "react";
import MoneyIcon from "@mui/icons-material/Money";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import QrCodeIcon from "@mui/icons-material/QrCode";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
export default function Checkout() {
  const initialMinutes = 30;
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes === 0) {
          clearInterval(timer);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);
  const amount = 200000;
  const formattedAmount = amount.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const handleCopyClick = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(`Đã sao chép: ${text}`);
      })
      .catch((error) => {
        console.error("Lỗi khi sao chép:", error);
      });
  };
  return (
    <div className="checkout pt-[70px] pb-[70px] ">
      <div className="w-[787px] rounded-[10px] flex mx-auto shadow-md">
        <div className="bg-[#af206f] w-[255px] text-[#fff] rounded-s pt-[30px] pl-[20px] pr-[20px] relative">
          <div>
            <div className="text-[12px] text-[#e8e8e8]">
              Đơn hàng hết hạn sau:
            </div>
            <div>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </div>
          </div>
          <div className="border-b border-black w-full pt-[25px]">
            <div className="text-[15px]">
              <MoneyIcon /> Số tiền
            </div>
            <div className="text-[15px] pb-[18px] pl-[28px]">
              {formattedAmount}
            </div>
          </div>
          <div className="border-b border-black w-full pt-[25px]">
            <div className="text-[15px]">
              <ShoppingCartIcon /> Đơn hàng
            </div>
            <div className="text-[15px] pb-[18px] pl-[28px]">
              2353457967896921
            </div>
          </div>
          <div className="border-b border-black w-full pt-[25px]">
            <div className="text-[15px]">
              <QrCodeIcon /> Mã đơn hàng
            </div>
            <div className="text-[15px] pb-[18px] pl-[28px]">ORDER031003</div>
          </div>
          <div className="absolute bottom-[15px]">
            <Link to="/cart/payment">
              <ArrowBackIcon /> Quay lại
            </Link>
          </div>
        </div>
        <div className="bg-[#fff] w-full text-center pb-[80px]">
          <div className="max-w-[300px] mx-auto">
            <img
              src="https://homepage.momocdn.net/blogscontents/momo-upload-api-220808102122-637955508824191258.png"
              alt=""
              className="object-cover w-full h-full "
            />
          </div>
          <div>
            <div className="flex gap-1 justify-center text-[15px]">
              <div className="icon w-[25px] h-[25px]">
                <img
                  src="https://api.dichvugame.online/order/images/qr-code-1.png"
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <p>Sử dụng app <strong>MoMo</strong> để quét mã phía trên.</p>
            </div>
            <p className="text-[15px]">Hoặc chuyển khoản thủ công</p>
          </div>
          <hr className="border-b border-[#ccc] mt-[20px] mb-[20px]" />
          <p className="checkout-receiver text-[13px]">
            Người nhận: <strong className="uppercase">NGUYEN BAO DUY</strong>
          </p>
          <p className="text-[13px]">
            Số điện thoại:{" "}
            <strong id="sdt">
              0939570374
              <FileCopyIcon
                className="text-[13px]"
                onClick={() => handleCopyClick("0939570374")}
              />
            </strong>
          </p>
          <div className="checkout-receiver text-[13px]">
            Số tiền:{" "}
            <strong>
              200.000 VNĐ{" "}
              <FileCopyIcon
                className="text-[13px]"
                onClick={() => handleCopyClick("200.000 vnd")}
              />
            </strong>
          </div>
          <div className="bg-[#ffde4f] w-[380px] py-[25px] px-[15px] rounded m-[20px] mx-auto">
            <h1 className="text-[18px] text-[#3f3f3f] font-[700] pb-[5px] uppercase">
              Nhập nội dung chuyển khoản
            </h1>
            <div className="bg-[#5cb85c] text-[#fff] rounded-[10px] w-max text-[13px] mx-auto py-[12px] px-[24px]">
              ORDER031003
            </div>
            <p className="text-[#900c3f] text-[10px] mt-[19px] italic">
              (Vui lòng ghi đúng nội dung chuyển khoản)
            </p>
          </div>
          <div className="text-[13px]">Đang chờ thanh toán...</div>
        </div>
      </div>
    </div>
  );
}

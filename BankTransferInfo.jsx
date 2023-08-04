import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { QrCodeUrl } from "../utils/QRCodeUrl";

const BankTransferInfo = () => {
  const [seconds, setSeconds] = useState(300);

  useEffect(() => {
    let interval;
    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="tw-max-w-[1200px] tw-m-auto">
      <div className="tw-bg-[#fffce6] tw-p-[15px] tw-my-4">
        <p className="tw-text-center tw-text-[#d70018] tw-text-base tw-font-semibold">
          Quý Khách vui lòng không tắt trình duyệt cho đến khi nhận được kết quả
          giao dịch trên website. Xin cảm ơn!
        </p>
      </div>
      <div className="tw-max-w-[440px] tw-m-auto">
        <div className="tw-flex tw-items-center tw-justify-center tw-gap-1 tw-mb-4 tw-text-[#ff1f1f]">
          <img
            src="https://cdn2.cellphones.com.vn/x20,webp/media/icon/icon-clock-o.png"
            alt=""
          />
          <p>Giao dịch hết hạn sau </p>
          <span className="tw-font-semibold">{formatTime(seconds)}</span>
        </div>

        <div className="tw-p-5 tw-border tw-border-[#d9d9d9] tw-rounded-[10px]">
          <div>
            <div>
              <p className="tw-text-[#0e2431] tw-font-semibold tw-uppercase tw-text-center tw-text-sm">
                Vui lòng quét mã bên dưới để thanh toán chuyển khoản
              </p>
            </div>
          </div>

          <div>
            <Link>
              <img alt="" src={QrCodeUrl} />
            </Link>
            <div className="tw-flex tw-justify-center tw-mt-3">
              <a className="tw-flex" download href={QrCodeUrl}>
                <img
                  src="https://cdn2.cellphones.com.vn/x20,webp/media/icon/icon-download.png"
                  alt=""
                />
                Tải QR Code
              </a>
            </div>
          </div>
        </div>
        <div className="tw-px-5 tw-py-[10px] tw-mt-[10px] tw-border tw-border-[#d9d9d9] tw-rounded-[10px] tw-text-[#1f6b30] tw-text-sm">
          <strong>Thông tin chuyển khoản</strong>
          <ul>
            <li>Công ty cổ phần ngoài NN</li>
            <li>Ngân hàng Vietinbank – CN Thành Phố Hà Nội</li>
            <li>
              Số tài khoản: <strong>999999999</strong>
            </li>
            <li>
              <strong>Hotline hỗ trợ: </strong>
              <a href="" className="tw-font-bold">
                1800.2097
              </a>
            </li>
          </ul>
          <button className="tw-text-black tw-flex tw-items-baseline tw-border tw-bg-[#ececec] tw-border-[#e1ba40] tw-border-dashed tw-py-[1px] tw-px-[6px] tw-gap-1 tw-justify-end">
            <div className="!tw-w-3 !tw-h-3 tw-justify-end">
              <svg
                data-v-05616da6=""
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="clipboard"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="svg-inline--fa fa-clipboard"
              >
                <path
                  data-v-05616da6=""
                  fill="currentColor"
                  d="M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 0 0-6-6H102a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h180a6 6 0 0 0 6-6z"
                  class=""
                ></path>
              </svg>
            </div>
            Sao chép STK
          </button>
          <div>
            <ul>
              <li>
                <p>
                  Nội dung chuyển khoản:{" "}
                  <strong>S943592M WN0301221478 Nguyen Bao Duy 0939570374</strong>
                </p>
              </li>
              <button className="tw-text-black tw-flex tw-items-baseline tw-border tw-bg-[#ececec] tw-border-[#e1ba40] tw-border-dashed tw-py-[1px] tw-px-[6px] tw-gap-1 tw-justify-end">
                <div className="!tw-w-3 !tw-h-3 tw-justify-end">
                  <svg
                    data-v-05616da6=""
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="clipboard"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="svg-inline--fa fa-clipboard"
                  >
                    <path
                      data-v-05616da6=""
                      fill="currentColor"
                      d="M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 0 0-6-6H102a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h180a6 6 0 0 0 6-6z"
                      class=""
                    ></path>
                  </svg>
                </div>
                Sao chép
              </button>
            </ul>
          </div>
        </div>
        <div className="tw-flex tw-flex-col tw-gap-2 tw-mt-3 tw-text-sm">
          <button className="tw-bg-[#dc3545] tw-text-white hover:tw-bg-[#c82333] tw-rounded tw-py-2 tw-min-h-[53px]">
            TÔI ĐÃ CHUYỂN KHOẢN
          </button>
          <button className="hover:tw-bg-[#e2e6ea] tw-rounded tw-py-1 tw-min-h-[35px]">
            Hủy giao dịch
          </button>
          <p className="tw-text-[#d70018] tw-font-semibold tw-text-center">
            Hotline hỗ trợ: <a href="tel:18002097">1800.2097</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BankTransferInfo;
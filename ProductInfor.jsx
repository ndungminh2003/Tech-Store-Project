import React from "react";
import { ReactComponent as VatIcon } from "../../assets/vat.svg";
import { ReactComponent as PhoneIcon } from "../../assets/phone.svg";
import { ReactComponent as BoxIcon } from "../../assets/box.svg";
import { ReactComponent as ProtectIcon } from "../../assets/protect.svg";

const ProductInfor = () => {
  return (
    <div>
      <div className="tw-p-[10px] tw-border tw-border-[#e5e7eb] tw-rounded-[10px] tw-mt-[10px]">
        <h1 className="tw-text-base tw-font-bold tw-mb-[10px] tw-text-[#444]">
          Thông tin sản phẩm
        </h1>
        <div className="tw-flex tw-flex-col tw-gap-[10px]">
          <div className="tw-flex tw-gap-2">
            <div>
              <PhoneIcon />
            </div>
            <div>Mới, đầy đủ phụ kiện từ nhà sản xuất</div>
          </div>
          <div className="tw-flex tw-gap-2">
            <div className="tw-items-start">
              <BoxIcon />
            </div>
            <div>
              Samsung Galaxy S23 Ultra <br /> Cáp sạc <br /> Sách HDSD
            </div>
          </div>
          <div className="tw-flex tw-gap-2 ">
            <div>
              <ProtectIcon />
            </div>
            <div>
              Bảo hành 12 tháng tại trung tâm bảo hành Chính hãng. 1 đổi 1 trong
              30 ngày nếu có lỗi phần cứng từ nhà sản xuất.{" "}
            </div>
          </div>
          <div className="tw-flex tw-gap-2 tw-items-center">
            <div>
              <VatIcon />
            </div>
            <div>Giá sản phẩm đã bao gồm VAT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfor;

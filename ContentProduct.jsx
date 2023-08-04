import React from "react";
import BoxReview from "../BoxReview/BoxReview";
import Question from "../Question/Question";

const ContentProduct = () => {
  return (
    <div className="tw-flex tw-gap-3">
      <div className="tw-w-[830px]">
        <div className="tw-p-[15px] shadow-cellphone tw-rounded-[10px]">
          <div className="tw-p-2 tw-mb-2 tw-bg-[#f2f2f2] tw-rounded-lg">
            <h1 className="tw-text-[#d70018] tw-font-semibold tw-text-lg tw-text-center">
              ĐẶC ĐIỂM NỔI BẬT
            </h1>
            <div>
              <ul className="tw-flex tw-flex-col tw-gap-2">
                <li className="before:tw-content-['_•'] tw-flex tw-items-center tw-gap-1 tw-text-[#4a4a4a] tw-text-sm">
                  {" "}
                  Màn hình Dynamic Island - Sự biến mất của màn hình tai thỏ
                  thay thế bằng thiết kế viên thuốc, OLED 6,7 inch, hỗ trợ
                  always-on display
                </li>
                <li className="before:tw-content-['_•'] tw-flex tw-items-center tw-gap-1 tw-text-[#4a4a4a] tw-text-sm ">
                  {" "}
                  Cấu hình iPhone 14 Pro Max mạnh mẽ, hiệu năng cực khủng từ
                  chipset A16 Bionic
                </li>
                <li className="before:tw-content-['_•'] tw-flex tw-items-center tw-gap-1 tw-text-[#4a4a4a] tw-text-sm">
                  Làm chủ công nghệ nhiếp ảnh - Camera sau 48MP, cảm biến TOF
                  sống động
                </li>
                <li className="before:tw-content-['_•'] tw-flex tw-items-center tw-gap-1 tw-text-[#4a4a4a] tw-text-sm">
                  {" "}
                  Pin liền lithium-ion kết hợp cùng công nghệ sạc nhanh cải tiến
                </li>
              </ul>
            </div>
          </div>
          <div className="tw-text-[#4a4a4a] tw-text-[15px]">
            <p className="tw-mb-[10px]">
              iPhone 14 Pro Max có sự cải thiện lớn màn hình so với iPhone 13
              Pro Max. Sự khác biệt giữ phiên bản{" "}
              <a href="" title="iPhone 14 Pro Max 256GB">
                <strong className="tw-text-[#d70018] tw-font-bold">
                  iPhone 14 Pro Max 256GB
                </strong>
              </a>
            </p>
            <p className="tw-mb-[10px]">
              Kích thước <strong>màn hình iPhone 14 Pro Max</strong> vẫn là 6.1
              inch tuy nhiên phần “tai thỏ” đã được thay thế bằng một đường cắt
              hình viên thuốc. Apple gọi đây là<strong>Dynamic Island</strong> -
              nơi chứa camera Face ID và một đường cắt hình tròn thứ hai cho
              camera trước.
            </p>
            <p className="tw-mb-[10px]">
              Ngoài ra, <strong>iPhone 14 Pro Max</strong> có tính năng màn hình{" "}
              <strong>luôn bật hoạt động</strong> (Always-on Display) với tiện
              ích màn hình khóa mới trên iOS 16. Người dùng có thể xem các thông
              tin như lời nhắc, sự kiện lịch và thời tiết mà không cần bật máy
              lên để xem. Thậm chí, có một trạng thái ngủ cho hình nền, trạng
              thái này sẽ làm tối hình nền để sử dụng ít pin hơn.
            </p>
            <p className="tw-mb-[10px]">
              <strong>
                iPhone 14 Pro Max được trang bị bộ vi xử lý Apple A16 Bionic
              </strong>
              . Apple đã tập trung vào hiệu quả sử dụng năng lượng, màn hình và
              camera với con chip mới của mình. CPU sáu nhân bao gồm hai nhân
              hiệu suất cao sử dụng năng lượng thấp hơn 20% và bốn nhân tiết
              kiệm pin chỉ sử dụng một phần ba năng lượng so với chip của các
              đối thủ cạnh tranh.
            </p>
          </div>
          <div>
            <h1 className="tw-text-xl tw-text-[#363636] tw-font-bold">
              Bảng thông số chi tiết về iPhone 14 Pro Max phiên bản
            </h1>
            <table className="tw-w-full tw-text-[#363636] tw-text-[15px]">
              <tbody>
                <tr>
                  <td className="tw-w-[20%]"></td>
                  <td className="tw-w-[20%]"></td>
                  <td className="tw-w-[60%]">
                    <p>
                      <strong>iPhone 14 Pro Max 256GB</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="tw-w-[20%]">
                    <p>
                      <strong>Kết nối</strong>
                    </p>
                  </td>
                  <td className="tw-w-[20%]">
                    {" "}
                    <p>Công nghệ</p>
                  </td>
                  <td className="tw-w-[60%]">
                    <p>GSM / CDMA / HSPA / EVDO / LTE / 5G</p>
                  </td>
                </tr>

                <tr>
                  <td className="tw-w-[20%]">
                    {" "}
                    <p>
                      <strong>Ngày ra mắt</strong>
                    </p>
                  </td>
                  <td className="tw-w-[20%]">
                    <p>Ngày thông báo</p>
                  </td>
                  <td className="tw-w-[60%]">
                    <p>08/09/2022</p>
                  </td>
                </tr>
                <tr>
                  <td className="tw-w-[20%]">
                    <p></p>
                  </td>
                  <td className="tw-w-[20%]">
                    {" "}
                    <p>Hiện trạng</p>
                  </td>
                  <td className="tw-w-[60%]">
                    <p>Sắp ra mắt, dự kiến trả hàng 16/09/2022</p>
                  </td>
                </tr>
                <tr>
                  <td className="tw-w-[20%]">
                    {" "}
                    <p>
                      <strong>Thân máy</strong>
                    </p>
                  </td>
                  <td className="tw-w-[20%]">
                    {" "}
                    <p>Kích thước</p>
                  </td>
                  <td className="tw-w-[60%]">
                    <p>160.7 x 77.6 x 7.9 mm (6.33 x 3.06 x 0.31 in)</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Question />
        <BoxReview />
      </div>
      <div className="tw-w-[calc(100%-830px)]">
        <div className="tw-p-3 tw-rounded-[10px] shadow-cellphone">
          <h1 className="tw-text-base tw-text-[#363636] tw-mb-3 tw-font-semibold">
            Thông số kỹ thuật
          </h1>
          <ul className="[&>*:nth-child(odd)]:tw-bg-[#f2f2f2] tw-text-sm">
            <li className="tw-flex tw-items-center tw-justify-between tw-p-2">
              <p className="tw-w-[40%]">Kích thước màn hình</p>
              <div className="tw-w-1/2">6.7 inches</div>
            </li>
            <li className="tw-flex tw-items-center tw-justify-between tw-p-2">
              <p className="tw-w-[40%]">Độ phân giải màn hình</p>
              <div className="tw-w-1/2">2796 x 1290-pixel </div>
            </li>
            <li className="tw-flex tw-items-center tw-justify-between tw-p-2">
              <p className="tw-w-[40%]">Hệ điều hành</p>
              <div className="tw-w-1/2">iOS 16</div>
            </li>
            <li className="tw-flex tw-items-center tw-justify-between tw-p-2">
              <p className="tw-w-[40%]">Công nghệ màn hình</p>
              <div className="tw-w-1/2">Super Retina XDR OLED</div>
            </li>
            <li className="tw-flex tw-items-center tw-justify-between tw-p-2">
              <p className="tw-w-[40%]">Camera sau</p>
              <div className="tw-w-1/2">
                Camera chính: 48 MP, f/1.8, 24mm, OIS <br /> Camera góc siêu
                rộng: 12 MP, f/2.2, 13mm, 120˚
                <br /> Camera tele: 12 MP, f/2.8, 77mm, OIS, 3x optical zoom{" "}
                <br /> Cảm biến độ sâu TOF 3D LiDAR{" "}
              </div>
            </li>
            <li className="tw-flex tw-items-center tw-justify-between tw-p-2">
              <p className="tw-w-[40%]">Camera trước</p>
              <div className="tw-w-1/2">
                Camera selfie: 12 MP, f/1.9, 23mm, PDAF{" "}
              </div>
            </li>
            <li className="tw-flex tw-items-center tw-justify-between tw-p-2">
              <p className="tw-w-[40%]">Dung lượng RAM</p>
              <div className="tw-w-1/2">6 GB</div>
            </li>
            <li className="tw-flex tw-items-center tw-justify-between tw-p-2">
              <p className="tw-w-[40%]">Bộ nhớ trong</p>
              <div className="tw-w-1/2">256 GB</div>
            </li>
            <li className="tw-flex tw-items-center tw-justify-between tw-p-2">
              <p className="tw-w-[40%]">Thẻ SIM</p>
              <div className="tw-w-1/2">2 SIM (nano‑SIM và eSIM)</div>
            </li>
            <li className="tw-flex tw-items-center tw-justify-between tw-p-2">
              <p className="tw-w-[40%]">Tính năng màn hình</p>
              <div className="tw-w-1/2">
                120Hz, Always-On display, HDR, True Tone, Haptic Touch,
                2,000,000:1, 2000 nits
              </div>
            </li>
            <li className="tw-flex tw-items-center tw-justify-between tw-p-2">
              <p className="tw-w-[40%]">Pin</p>
              <div className="tw-w-1/2">4323 mAh</div>
            </li>
            <li className="tw-flex tw-items-center tw-justify-between tw-p-2">
              <p className="tw-w-[40%]">Chipset</p>
              <div className="tw-w-1/2">Apple A16 Bionic 6 nhân</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentProduct;

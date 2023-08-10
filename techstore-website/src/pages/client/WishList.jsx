import React from "react";
import CloseIcon from "@mui/icons-material/Close";
function WishList() {
  return (
    <div className="pt-[80px] pb-[80px] pl-[165px] pr-[165px]">
      <div className="container mx-auto ">
        <h4 className="mb-[20px] font-[500] inline-block text-[24px]">
          My Wish List on TechStore
        </h4>
        <table className="w-[100%]">
          <thead>
            <tr className="bg-[#f6f7fb]">
              <th
                scope="col"
                className="text-[20px] font-normal text-left capitalize border-none text-[#292930] p-[18px] py-[15px] px-[15px]"
              ></th>
              <th
                scope="col"
                className="text-[20px] font-normal text-left capitalize border-none text-[#292930] p-[18px] py-[15px] px-[15px]"
              >
                Product
              </th>
              <th
                scope="col"
                className="text-[20px] font-normal text-left capitalize border-none text-[#292930] p-[18px] py-[15px] px-[15px]"
              ></th>
              <th
                scope="col"
                className="text-[20px] font-normal text-left capitalize border-none text-[#292930] p-[18px] py-[15px] px-[15px]"
              >
                {" "}
                Unit Price
              </th>
              <th
                scope="col"
                className="text-[20px] font-normal text-left capitalize border-none text-[#292930] p-[18px] py-[15px] px-[15px]"
              >
                Stock Status
              </th>
              <th
                scope="col"
                className="text-[20px] font-normal text-left capitalize border-none text-[#292930] p-[18px] py-[15px] px-[15px]"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="text-[20px] border-none p-[15px]">
                <a
                  href="#"
                  className="block text-center h-[32px] w-[32px] line-[30px] bg-[#f6f7fb] rounded-[50%] text-[12px] text-[#000]"
                >
                  <CloseIcon className="w-[18px] mt-[5px]" />
                </a>
              </td>
              <td className="text-[20px] border-none p-[15px]">
                <a href="#" className="block rounded-[10px]">
                  <img
                    src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-01.png"
                    alt=""
                    className="rounded-[10px] h-[80px] w-[80px] object-cover"
                  />
                </a>
              </td>
              <td className="text-[20px] border-none p-[15px]">
                <a href="#">Wireless PS Handler</a>
              </td>
              <td className="text-[20px] border-none p-[15px] font-[500] text-[#7777]">
                $124.00
              </td>
              <td className="text-[20px] border-none p-[15px] font-[500] text-[#7777]">
                In Stock
              </td>
              <td className="text-[20px] border-none p-[15px]">
                <a
                  href="#"
                  className="border border-[#dddddd] p-[20px] pt-[15px] pb-[15px] text-[14px] rounded-[7px] font-[500] transition-all duration-[.3s] ease-in-out hover:bg-[#3577f0] hover:text-[#fff]"
                >
                  Add to cart
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WishList;

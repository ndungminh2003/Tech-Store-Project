import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
export default function CardProduct() {
  return (
    <div className="order p-[35px]">
      <div className="flex justify-center gap-20">
        <div> &#60; Back </div>
        <div className="w-[639px] bg-[#ececec] pb-10 border-[1px] border-[#000]">
          <h2 className="text-center pt-[28px] pb-[28px]">Order</h2>
          <div className="order-info bg-white pt-[117px]">
            <form action="">
              <div className="order-info-user pl-[48px] pr-[86px]">
                <div> customer information </div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border-spacing-1 border-[1px] border-[#000] rounded-[7px] pl-2 mt-3"
                />
                <input
                  type="number"
                  placeholder="Phone"
                  className="w-full border-spacing-1 border-[1px] border-[#000] rounded-[7px] pl-2 mt-3"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border-spacing-1 border-[1px] border-[#000] rounded-[7px] pl-2 mt-3"
                />
              </div>
              <h4 className="pl-[48px] pt-6 pb-4">
                <strong>address</strong>
              </h4>
              <div className="pl-5 pr-5">
                <div className="bg-[#eae8e8] pt-[20px] pb-[20px] pl-[100px] pr-[100px] rounded-[15px]">
                  <div className="flex justify-between order-select">
                    <select className="w-[190px] border-[1px] border-[#000] rounded-[5px]">
                      <option value="0">City</option>
                      <option value="1">a</option>
                    </select>
                    <select className="w-[190px] border-[1px] border-[#000] rounded-[5px]">
                      <option value="0">District</option>
                      <option value="1">a</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    placeholder="House"
                    className="w-full border-[1px] border-[#000] rounded-[5px] pl-2 mt-3"
                  />
                </div>
              </div>
              <div className="pl-[40px] pr-[40px] mb-2">
                <input
                  type="text"
                  placeholder="Other"
                  className="w-full border-[1px] border-[#000] rounded-[5px] pl-2 mt-3"
                />
              </div>
              <div className="pl-[40px] pr-[40px] pb-[10px]">
                <div className="flex gap-[40px]">
                  <div className="order-pay">
                    <h6>
                      {" "}
                      <strong>Select a payment method</strong>{" "}
                    </h6>
                    <div className="order-pay-group">
                      <div className="pt-2 order-group">
                        <input type="radio" id="one" className="mr-2" />
                        <label htmlFor="one">Pay in cash</label>
                      </div>
                      <div className="pt-2 order-group">
                        <input type="radio" id="two" className="mr-2" />
                        <label htmlFor="two">
                          Pay in cash (visa, master...)
                        </label>
                      </div>
                      <div className="pt-2 order-group">
                        <input type="radio" id="three" className="mr-2" />
                        <label htmlFor="three">Transfer or Mobile banking</label>
                      </div>
                    </div>
                  </div>
                  <div className="order-pay-bank bg-[#d9d9d9] p-5 w-[303px]">
                    <input
                      type="text"
                      placeholder="Choose your Bank"
                      className="w-full p-1"
                    />
                    <input
                      type="text"
                      placeholder="Card Name"
                      className="w-full p-1 mt-4"
                    />
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full p-1 mt-4"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="order-bottom  mt-2 p-[5px]">
            <div className="flex justify-between mb-5 order-bottom-totol">
              <div className="order-bottom-left">Total</div>
              <div className="order-bottom-left pr-4 text-[#a7a6a6]">
                123424 đ
              </div>
            </div>
            <div className="order-bottom-btn">
              <button className="carrt-bottom-choose w-full h-[50px] mt-2 bg-[#fff] border-2 border-black">
                Choose another product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
export default function CardProduct() {
  return (
    <div className="tw-order tw-p-[35px]">
      <div className="tw-flex tw-justify-center tw-gap-20">
        <div> &#60; Back </div>
        <div className="tw-w-[639px] tw-bg-[#ececec] tw-pb-10 tw-border-[1px] tw-border-[#000]">
          <h2 className="tw-text-center tw-pt-[28px] tw-pb-[28px]">Order</h2>
          <div className="order-info tw-bg-white tw-pt-[117px]">
            <form action="">
              <div className="order-info-user tw-pl-[48px] tw-pr-[86px]">
                <div> customer information </div>
                <input
                  type="text"
                  placeholder="Name"
                  className="tw-w-full tw-border-spacing-1 tw-border-[1px] tw-border-[#000] tw-rounded-[7px] tw-pl-2 tw-mt-3"
                />
                <input
                  type="number"
                  placeholder="Phone"
                  className="tw-w-full tw-border-spacing-1 tw-border-[1px] tw-border-[#000] tw-rounded-[7px] tw-pl-2 tw-mt-3"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="tw-w-full tw-border-spacing-1 tw-border-[1px] tw-border-[#000] tw-rounded-[7px] tw-pl-2 tw-mt-3"
                />
              </div>
              <h4 className="tw-pl-[48px] tw-pt-6 tw-pb-4">
                <strong>address</strong>
              </h4>
              <div className="tw-pl-5 tw-pr-5">
                <div className="tw-bg-[#eae8e8] tw-pt-[20px] tw-pb-[20px] tw-pl-[100px] tw-pr-[100px] tw-rounded-[15px]">
                  <div className="tw-flex tw-justify-between tw-order-select">
                    <select className="tw-w-[190px] tw-border-[1px] tw-border-[#000] tw-rounded-[5px]">
                      <option value="0">City</option>
                      <option value="1">a</option>
                    </select>
                    <select className="tw-w-[190px] tw-border-[1px] tw-border-[#000] tw-rounded-[5px]">
                      <option value="0">District</option>
                      <option value="1">a</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    placeholder="House"
                    className="tw-w-full tw-border-[1px] tw-border-[#000] tw-rounded-[5px] tw-pl-2 tw-mt-3"
                  />
                </div>
              </div>
              <div className="tw-pl-[40px] tw-pr-[40px] tw-mb-2">
                <input
                  type="text"
                  placeholder="Other"
                  className="tw-w-full tw-border-[1px] tw-border-[#000] tw-rounded-[5px] tw-pl-2 tw-mt-3"
                />
              </div>
              <div className="tw-pl-[40px] tw-pr-[40px] tw-pb-[10px]">
                <div className="tw-flex tw-gap-[40px]">
                  <div className="order-pay">
                    <h6>
                      {" "}
                      <strong>Select a payment method</strong>{" "}
                    </h6>
                    <div className="order-pay-group">
                      <div className="pt-2 order-group">
                        <input type="radio" id="one" className="tw-mr-2" />
                        <label htmlFor="one">Pay in cash</label>
                      </div>
                      <div className="pt-2 order-group">
                        <input type="radio" id="two" className="tw-mr-2" />
                        <label htmlFor="two">
                          Pay in cash (visa, master...)
                        </label>
                      </div>
                      <div className="pt-2 order-group">
                        <input type="radio" id="three" className="tw-mr-2" />
                        <label htmlFor="three">Transfer or Mobile banking</label>
                      </div>
                    </div>
                  </div>
                  <div className="order-pay-bank tw-bg-[#d9d9d9] tw-p-5 tw-w-[303px]">
                    <input
                      type="text"
                      placeholder="Choose your Bank"
                      className="tw-w-full tw-p-1"
                    />
                    <input
                      type="text"
                      placeholder="Card Name"
                      className="tw-w-full tw-p-1 tw-mt-4"
                    />
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="tw-w-full tw-p-1 tw-mt-4"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="order-bottom  tw-mt-2 tw-p-[5px]">
            <div className="tw-flex tw-justify-between tw-mb-5 tw-order-bottom-totol">
              <div className="order-bottom-left">Total</div>
              <div className="order-bottom-left tw-pr-4 tw-text-[#a7a6a6]">
                123424 đ
              </div>
            </div>
            <div className="order-bottom-btn">
              <button className="cart-bottom-choose tw-w-full tw-h-[50px] tw-mt-2 tw-bg-[#fff] tw-border-2 tw-border-black">
                Choose another product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

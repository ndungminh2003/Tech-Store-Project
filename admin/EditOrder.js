import { Checkbox, DatePicker, Select } from "antd";
import React from "react";

const EditOrder = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="tw-max-w-[1320px] tw-m-auto">
      <div className="tw-py-5">
        <h1 className="tw-text-[#071437] tw-text-lg tw-font-semibold">
          Edit Order
        </h1>
        <ul className="tw-flex tw-items-center tw-gap-1 tw-text-[#B5B5C3]">
          <li>
            <a href="">Home</a>
          </li>
          <span className="tw-w-[5px] tw-h-[2px] tw-bg-[#B5B5C3] tw-mt-[2px]"></span>
          <li>eCommerce</li>
          <span className="tw-w-[5px] tw-h-[2px] tw-bg-[#B5B5C3] tw-mt-[2px]"></span>
          <li>Sales</li>
        </ul>
      </div>
      <form className="tw-flex tw-gap-10">
        <div className="tw-w-[300px] py-[13px] tw-border tw-border-[#F1F1F2] tw-rounded-xl">
          <div className="tw-px-[26px]">
            <h1 className="tw-text-xl tw-min-h-[70px] tw-text-[#071437] tw-font-semibold tw-leading-[70px]">
              Order Details
            </h1>
          </div>
          <div className="tw-px-[26px] tw-pb-[30px] tw-flex tw-flex-col tw-gap-10">
            <div>
              <label
                for=""
                className="tw-text-sm tw-text-[#252F4A] tw-font-semibold"
              >
                Order ID
              </label>
              <div className="tw-text-lg tw-font-semibold">#13754</div>
            </div>
            <div className="w-full tw-flex tw-flex-col">
              <label
                for=""
                className="label-required tw-text-[#252F4A] tw-font-semibold tw-mb-[7px]"
              >
                Payment Method
              </label>
              <Select
                defaultValue="visa"
                style={{ width: "100%" }}
                onChange={handleChange}
                options={[
                  { value: "cash_on_delivery", label: "Cash on delivery" },
                  { value: "visa", label: "Credit Card (Visa)" },
                  { value: "master_card", label: "Credit Card (Master Card)" },
                  { value: "paypal", label: "Paypal" },
                ]}
              />
              <p className="tw-text-[#99A1B7] tw-text-xs">
                Set the date of the order to process.
              </p>
            </div>
            <div className="w-full tw-flex tw-flex-col">
              <label
                for=""
                className="label-required tw-text-[#252F4A] tw-font-semibold tw-mb-[7px]"
              >
                Shipping Method
              </label>
              <Select
                defaultValue="standard_rate"
                style={{ width: "100%" }}
                onChange={handleChange}
                options={[
                  { value: "na", label: "N/A - Virtual Product" },
                  { value: "standard_rate", label: "Standard Rate" },
                  { value: "express_rate", label: "Express Rate" },
                  {
                    value: "speed_overnight_rate",
                    label: "Speed Overnight Rate",
                  },
                ]}
              />
              <p className="tw-text-[#99A1B7] tw-text-xs">
                Set the date of the order to process.
              </p>
            </div>
            <div className="w-full tw-flex tw-flex-col">
              <label
                for=""
                className="label-required tw-text-[#252F4A] tw-font-semibold tw-mb-[7px]"
              >
                Order Date
              </label>
              <DatePicker onChange={onChange} />
              <p className="tw-text-[#99A1B7] tw-text-xs">
                Set the date of the order to process.
              </p>
            </div>
          </div>
        </div>
        <div className="tw-flex-1 tw-flex tw-flex-col tw-gap-7">
          <div className="tw-border tw-border-[#F1F1F2] tw-rounded-xl tw-px-[30px]">
            <h1 className="tw-text-xl tw-min-h-[70px]  tw-text-[#071437] tw-font-semibold tw-leading-[70px]">
              Select Products
            </h1>
            <div className="">
              <label
                for=""
                className="tw-text-sm tw-text-[#252F4A] tw-font-medium tw-mb-[7px]"
              >
                Add products to this order
              </label>
              <div className="tw-grid tw-grid-cols-3 tw-p-3 gap-3 tw-border tw-border-dashed tw-rounded-md tw-border-[#F1F1F2]">
                <div className="tw-p-3 tw-border tw-border-dashed tw-rounded-md tw-border-[#F1F1F2] tw-flex tw-gap-5">
                  <img
                    src="https://preview.keenthemes.com/metronic8/demo1/assets/media//stock/ecommerce/25.png"
                    alt=""
                    className="tw-w-[50px] tw-h-[50px]"
                  />
                  <div className="tw-flex tw-flex-col">
                    <a
                      href=""
                      className="tw-text-base tw-text-[#252F4A] tw-font-semibold"
                    >
                      Product 25
                    </a>
                    <span className="tw-text-[xs] tw-text-[#071437] tw-font-medium">
                      Price: 199.00 VNĐ
                    </span>
                    <span className="tw-text-[xs] tw-text-[#99A1B7] tw-font-medium">
                      SKU: 01479004
                    </span>
                  </div>
                </div>
                <div className="tw-p-3 tw-border tw-border-dashed tw-rounded-md tw-border-[#F1F1F2] tw-flex tw-gap-5">
                  <img
                    src="https://preview.keenthemes.com/metronic8/demo1/assets/media//stock/ecommerce/25.png"
                    alt=""
                    className="tw-w-[50px] tw-h-[50px]"
                  />
                  <div className="tw-flex tw-flex-col">
                    <a
                      href=""
                      className="tw-text-base tw-text-[#252F4A] tw-font-semibold"
                    >
                      Product 25
                    </a>
                    <span className="tw-text-[xs] tw-text-[#071437] tw-font-medium">
                      Price: 199.00 VNĐ
                    </span>
                    <span className="tw-text-[xs] tw-text-[#99A1B7] tw-font-medium">
                      SKU: 01479004
                    </span>
                  </div>
                </div>
                <div className="tw-p-3 tw-border tw-border-dashed tw-rounded-md tw-border-[#F1F1F2] tw-flex tw-gap-5">
                  <img
                    src="https://preview.keenthemes.com/metronic8/demo1/assets/media//stock/ecommerce/25.png"
                    alt=""
                    className="tw-w-[50px] tw-h-[50px]"
                  />
                  <div className="tw-flex tw-flex-col">
                    <a
                      href=""
                      className="tw-text-base tw-text-[#252F4A] tw-font-semibold"
                    >
                      Product 25
                    </a>
                    <span className="tw-text-[xs] tw-text-[#071437] tw-font-medium">
                      Price: 199.00 VNĐ
                    </span>
                    <span className="tw-text-[xs] tw-text-[#99A1B7] tw-font-medium">
                      SKU: 01479004
                    </span>
                  </div>
                </div>
              </div>
              <h1 className="tw-text-lg tw-font-semibold tw-text-[#071437] tw-mt-4">
                Total Cost: 248.00 VNĐ
              </h1>
            </div>

            <div className="tw-border tw-border-b-[#F1F1F2] tw-h-0 tw-my-10" />

            <div>
              <div>
                <input
                  type="text"
                  name=""
                  placeholder="Search Products"
                  className="tw-w-1/2 tw-py-[10px] tw-pl-[40px] tw-pr-[13px] tw-bg-[#F9F9F9] tw-outline-none tw-border-none tw-font-semibold tw-text-[#4B5675] tw-rounded-lg"
                />
              </div>
            </div>

            <div className="tw-mt-7">
              <table className="tw-w-full">
                <thead className="!tw-border-b !tw-border-dashed !tw-border-[#F1F1F2] tw-text-xs">
                  <tr className="tw-text-start tw-text-gray-400 tw-font-semibold tw-uppercase ">
                    <th
                      className="tw-w-[25px] tw-px-2 "
                      rowSpan="1"
                      colSpan="1"
                      aria-label=""
                    ></th>
                    <th
                      className="min-w-200px"
                      tabindex="0"
                      rowSpan="1"
                      colSpan="1"
                    >
                      Product
                    </th>
                    <th
                      className="tw-min-w-[100px] tw-text-end tw-px-5"
                      tabindex="0"
                      rowSpan="1"
                      colSpan="1"
                    >
                      Qty Remaining
                    </th>
                  </tr>
                </thead>

                <tr className="tw-text-start tw-text-gray-400 tw-font-bold tw-uppercase ">
                  <th
                    className="tw-w-[25px] tw-px-2 "
                    rowSpan="1"
                    colSpan="1"
                    aria-label=""
                  ></th>
                  <th
                    className="min-w-200px"
                    tabindex="0"
                    rowSpan="1"
                    colSpan="1"
                    aria-label="Product: activate to sort column ascending"
                  ></th>
                  <th
                    className="tw-min-w-[100px] tw-text-end tw-px-5"
                    tabindex="0"
                    rowSpan="1"
                    colSpan="1"
                  ></th>
                </tr>
              </table>
              <div className="tw-max-h-[400px] tw-overflow-auto tw-w-full">
                <table className="tw-w-full">
                  <thead className="!tw-border-b !tw-border-dashed !tw-border-[#F1F1F2]">
                    <tr className="tw-text-start tw-text-gray-400 tw-font-bold tw-uppercase ">
                      <th
                        className="tw-w-[25px] tw-px-2 "
                        rowSpan="1"
                        colSpan="1"
                        aria-label=""
                      ></th>
                      <th
                        className="tw-min-w-[200px]"
                        tabindex="0"
                        rowSpan="1"
                        colSpan="1"
                      ></th>
                      <th
                        className="tw-min-w-[100px] tw-text-end tw-px-5"
                        tabindex="0"
                        rowSpan="1"
                        colSpan="1"
                      ></th>
                    </tr>
                  </thead>

                  <tbody className="tw-font-semibold tw-text-gray-600 tw-w-full">
                    <tr className="odd">
                      <td>
                        <div className="tw-py-5">
                          <Checkbox
                            className="tw-bg-[#F1F1F2] tw-rounded !tw-w-[20px] !tw-h-[20px] tw-border-none tw-outline-none"
                            value="1"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="tw-flex tw-items-center">
                          <a href="#" className="symbol symbol-50px">
                            <img
                              src="https://preview.keenthemes.com/metronic8/demo1/assets/media//stock/ecommerce/1.png"
                              alt=""
                              className="tw-w-[50px] tw-h-[50px]"
                            />
                          </a>

                          <div className="tw-mx-5">
                            <a
                              href="#"
                              className="tw-text-[#252F4A] tw-text-[15px] tw-font-semibold"
                            >
                              Product 1
                            </a>

                            <div className="tw-text-[#78829D] tw-text-xs tw-font-medium">
                              Price: $
                              <span data-kt-ecommerce-edit-order-filter="">
                                88.00
                              </span>
                            </div>

                            <div className="tw-text-[#99A1B7] tw-text-xs tw-font-medium">
                              SKU: 04136002
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="tw-text-end tw-px-5" data-order="48">
                        <span className="tw-text-sm tw-text-[#78829D] tw-font-bold tw-leading-[52px] py-">
                          48
                        </span>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td>
                        <div className="tw-py-5">
                          <Checkbox
                            className="tw-bg-[#F1F1F2] tw-rounded !tw-w-[20px] !tw-h-[20px] tw-border-none tw-outline-none"
                            value="1"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="tw-flex tw-items-center">
                          <a href="#" className="symbol symbol-50px">
                            <img
                              src="https://preview.keenthemes.com/metronic8/demo1/assets/media//stock/ecommerce/1.png"
                              alt=""
                              className="tw-w-[50px] tw-h-[50px]"
                            />
                          </a>

                          <div className="tw-mx-5">
                            <a
                              href="#"
                              className="tw-text-[#252F4A] tw-text-[15px] tw-font-semibold"
                            >
                              Product 1
                            </a>

                            <div className="tw-text-[#78829D] tw-text-xs tw-font-medium">
                              Price: $
                              <span data-kt-ecommerce-edit-order-filter="">
                                88.00
                              </span>
                            </div>

                            <div className="tw-text-[#99A1B7] tw-text-xs tw-font-medium">
                              SKU: 04136002
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="tw-text-end tw-px-5" data-order="48">
                        <span className="tw-text-sm tw-text-[#78829D] tw-font-bold tw-leading-[52px] py-">
                          48
                        </span>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td>
                        <div className="tw-py-5">
                          <Checkbox
                            className="tw-bg-[#F1F1F2] tw-rounded !tw-w-[20px] !tw-h-[20px] tw-border-none tw-outline-none"
                            value="1"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="tw-flex tw-items-center">
                          <a href="#" className="symbol symbol-50px">
                            <img
                              src="https://preview.keenthemes.com/metronic8/demo1/assets/media//stock/ecommerce/1.png"
                              alt=""
                              className="tw-w-[50px] tw-h-[50px]"
                            />
                          </a>

                          <div className="tw-mx-5">
                            <a
                              href="#"
                              className="tw-text-[#252F4A] tw-text-[15px] tw-font-semibold"
                            >
                              Product 1
                            </a>

                            <div className="tw-text-[#78829D] tw-text-xs tw-font-medium">
                              Price: $
                              <span data-kt-ecommerce-edit-order-filter="">
                                88.00
                              </span>
                            </div>

                            <div className="tw-text-[#99A1B7] tw-text-xs tw-font-medium">
                              SKU: 04136002
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="tw-text-end tw-px-5" data-order="48">
                        <span className="tw-text-sm tw-text-[#78829D] tw-font-bold tw-leading-[52px] py-">
                          48
                        </span>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td>
                        <div className="tw-py-5">
                          <Checkbox
                            className="tw-bg-[#F1F1F2] tw-rounded !tw-w-[20px] !tw-h-[20px] tw-border-none tw-outline-none"
                            value="1"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="tw-flex tw-items-center">
                          <a href="#" className="symbol symbol-50px">
                            <img
                              src="https://preview.keenthemes.com/metronic8/demo1/assets/media//stock/ecommerce/1.png"
                              alt=""
                              className="tw-w-[50px] tw-h-[50px]"
                            />
                          </a>

                          <div className="tw-mx-5">
                            <a
                              href="#"
                              className="tw-text-[#252F4A] tw-text-[15px] tw-font-semibold"
                            >
                              Product 1
                            </a>

                            <div className="tw-text-[#78829D] tw-text-xs tw-font-medium">
                              Price: $
                              <span data-kt-ecommerce-edit-order-filter="">
                                88.00
                              </span>
                            </div>

                            <div className="tw-text-[#99A1B7] tw-text-xs tw-font-medium">
                              SKU: 04136002
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="tw-text-end tw-px-5" data-order="48">
                        <span className="tw-bg-[#fff8dd] tw-px-2 tw-py-1 tw-rounded tw-font-medium tw-text-[#ffc700] tw-mr-2">
                          Low stock
                        </span>
                        <span className="tw-text-sm  tw-font-bold tw-leading-[52px] py- tw-text-[#ffc700]">
                          48
                        </span>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td>
                        <div className="tw-py-5">
                          <Checkbox
                            className="tw-bg-[#F1F1F2] tw-rounded !tw-w-[20px] !tw-h-[20px] tw-border-none tw-outline-none"
                            value="1"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="tw-flex tw-items-center">
                          <a href="#" className="symbol symbol-50px">
                            <img
                              src="https://preview.keenthemes.com/metronic8/demo1/assets/media//stock/ecommerce/1.png"
                              alt=""
                              className="tw-w-[50px] tw-h-[50px]"
                            />
                          </a>

                          <div className="tw-mx-5">
                            <a
                              href="#"
                              className="tw-text-[#252F4A] tw-text-[15px] tw-font-semibold"
                            >
                              Product 1
                            </a>

                            <div className="tw-text-[#78829D] tw-text-xs tw-font-medium">
                              Price: $
                              <span data-kt-ecommerce-edit-order-filter="">
                                88.00
                              </span>
                            </div>

                            <div className="tw-text-[#99A1B7] tw-text-xs tw-font-medium">
                              SKU: 04136002
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="tw-text-end tw-px-5" data-order="48">
                        <span className="tw-text-sm tw-text-[#78829D] tw-font-bold tw-leading-[52px] py-">
                          48
                        </span>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td>
                        <div className="tw-py-5">
                          <Checkbox
                            className="tw-bg-[#F1F1F2] tw-rounded !tw-w-[20px] !tw-h-[20px] tw-border-none tw-outline-none"
                            value="1"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="tw-flex tw-items-center">
                          <a href="#" className="symbol symbol-50px">
                            <img
                              src="https://preview.keenthemes.com/metronic8/demo1/assets/media//stock/ecommerce/1.png"
                              alt=""
                              className="tw-w-[50px] tw-h-[50px]"
                            />
                          </a>

                          <div className="tw-mx-5">
                            <a
                              href="#"
                              className="tw-text-[#252F4A] tw-text-[15px] tw-font-semibold"
                            >
                              Product 1
                            </a>

                            <div className="tw-text-[#78829D] tw-text-xs tw-font-medium">
                              Price: $
                              <span data-kt-ecommerce-edit-order-filter="">
                                88.00
                              </span>
                            </div>

                            <div className="tw-text-[#99A1B7] tw-text-xs tw-font-medium">
                              SKU: 04136002
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="tw-text-end tw-px-5" data-order="48">
                        <span className="tw-text-sm tw-text-[#78829D] tw-font-bold tw-leading-[52px] py-">
                          48
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="tw-border tw-border-[#F1F1F2] tw-rounded-xl tw-px-[30px] tw-pb-[30px]">
            <h1 className="tw-text-xl tw-min-h-[70px]  tw-text-[#071437] tw-font-semibold tw-leading-[70px]">
              Delivery Details
            </h1>
            <div className="tw-flex tw-flex-col tw-gap-7">
              <h1 className="tw-text-lg tw-text-[#071437] tw-font-semibold">
                Billing Address
              </h1>
              <div className="tw-grid tw-grid-cols-2 tw-gap-5">
                <div className="tw-flex tw-flex-col">
                  <label
                    for=""
                    className="label-required tw-text-[#252F4A] tw-font-semibold tw-mb-[7px]"
                  >
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    name=""
                    defaultValue="1/23 Hastings Road"
                    className="tw-border tw-border-[#DBDFE9] tw-rounded-md tw-px-[13px] tw-py-[10px] tw-text-[#4B5675] tw-font-medium tw-text-base tw-outline-none"
                  />
                </div>
                <div className="tw-flex tw-flex-col">
                  <label
                    for=""
                    className="tw-text-[#252F4A] tw-font-semibold tw-mb-[7px]"
                  >
                    Address Line 2
                  </label>
                  <input
                    placeholder="Address Line 2"
                    type="text"
                    name=""
                    defaultValue="1/23 Hastings Road"
                    className="tw-border tw-border-[#DBDFE9] tw-rounded-md tw-px-[13px] tw-py-[10px] tw-text-[#4B5675] tw-font-medium tw-text-base tw-outline-none"
                  />
                </div>
              </div>

              <div className="tw-grid tw-grid-cols-3 tw-gap-5">
                <div className="tw-flex tw-flex-col">
                  <label
                    for=""
                    className="tw-text-[#252F4A] tw-font-semibold tw-mb-[7px]"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name=""
                    defaultValue="Melbourne"
                    className="tw-border tw-border-[#DBDFE9] tw-rounded-md tw-px-[13px] tw-py-[10px] tw-text-[#4B5675] tw-font-medium tw-text-base tw-outline-none"
                  />
                </div>
                <div className="tw-flex tw-flex-col">
                  <label
                    for=""
                    className="label-required tw-text-[#252F4A] tw-font-semibold tw-mb-[7px]"
                  >
                    Postcode
                  </label>
                  <input
                    type="text"
                    name=""
                    defaultValue="3000"
                    className="tw-border tw-border-[#DBDFE9] tw-rounded-md tw-px-[13px] tw-py-[10px] tw-text-[#4B5675] tw-font-medium tw-text-base tw-outline-none"
                  />
                </div>
                <div className="tw-flex tw-flex-col">
                  <label
                    for=""
                    className="label-required tw-text-[#252F4A] tw-font-semibold tw-mb-[7px]"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    name=""
                    defaultValue="1/23 Hastings Road"
                    className="tw-border tw-border-[#DBDFE9] tw-rounded-md tw-px-[13px] tw-py-[10px] tw-text-[#4B5675] tw-font-medium tw-text-base tw-outline-none"
                  />
                </div>
              </div>
              <div className="tw-flex tw-flex-col">
                <label
                  for=""
                  className="tw-text-[#252F4A] tw-font-semibold tw-mb-[7px]"
                >
                  Country
                </label>
                <Select
                  defaultValue="standard_rate"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  options={[
                    { value: "na", label: "N/A - Virtual Product" },
                    { value: "standard_rate", label: "Standard Rate" },
                    { value: "express_rate", label: "Express Rate" },
                    {
                      value: "speed_overnight_rate",
                      label: "Speed Overnight Rate",
                    },
                  ]}
                />
              </div>
            </div>

            <div className="tw-flex tw-gap-1 tw-my-7">
              <Checkbox />
              <p className="tw-text-[#99A1B7] tw-font-medium">
                Shipping address is the same as billing address
              </p>
            </div>

            <div className="tw-flex tw-flex-col tw-gap-7">
              <h1 className="tw-text-lg tw-text-[#071437] tw-font-semibold">
                Shipping Address
              </h1>
              <div className="tw-grid tw-grid-cols-2 tw-gap-5">
                <div className="tw-flex tw-flex-col">
                  <label
                    for=""
                    className="tw-text-[#252F4A] tw-font-semibold tw-mb-[7px]"
                  >
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    name=""
                    defaultValue="1/23 Hastings Road"
                    className="tw-border tw-border-[#DBDFE9] tw-rounded-md tw-px-[13px] tw-py-[10px] tw-text-[#4B5675] tw-font-medium tw-text-base tw-outline-none"
                  />
                </div>
                <div className="tw-flex tw-flex-col">
                  <label
                    for=""
                    className="tw-text-[#252F4A] tw-font-semibold tw-mb-[7px]"
                  >
                    Address Line 2
                  </label>
                  <input
                    placeholder="Address Line 2"
                    type="text"
                    name=""
                    defaultValue="1/23 Hastings Road"
                    className="tw-border tw-border-[#DBDFE9] tw-rounded-md tw-px-[13px] tw-py-[10px] tw-text-[#4B5675] tw-font-medium tw-text-base tw-outline-none"
                  />
                </div>
              </div>

              <div className="tw-grid tw-grid-cols-3 tw-gap-5">
                <div className="tw-flex tw-flex-col">
                  <label
                    for=""
                    className="tw-text-[#252F4A] tw-font-semibold tw-mb-[7px]"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name=""
                    defaultValue="Melbourne"
                    className="tw-border tw-border-[#DBDFE9] tw-rounded-md tw-px-[13px] tw-py-[10px] tw-text-[#4B5675] tw-font-medium tw-text-base tw-outline-none"
                  />
                </div>
                <div className="tw-flex tw-flex-col">
                  <label
                    for=""
                    className="tw-text-[#252F4A] tw-font-semibold tw-mb-[7px]"
                  >
                    Postcode
                  </label>
                  <input
                    type="text"
                    name=""
                    defaultValue="3000"
                    className="tw-border tw-border-[#DBDFE9] tw-rounded-md tw-px-[13px] tw-py-[10px] tw-text-[#4B5675] tw-font-medium tw-text-base tw-outline-none"
                  />
                </div>
                <div className="tw-flex tw-flex-col">
                  <label
                    for=""
                    className="tw-text-[#252F4A] tw-font-semibold tw-mb-[7px]"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    name=""
                    defaultValue="1/23 Hastings Road"
                    className="tw-border tw-border-[#DBDFE9] tw-rounded-md tw-px-[13px] tw-py-[10px] tw-text-[#4B5675] tw-font-medium tw-text-base tw-outline-none"
                  />
                </div>
              </div>
              <div className="tw-flex tw-flex-col">
                <label
                  for=""
                  className="tw-text-[#252F4A] tw-font-semibold tw-mb-[7px]"
                >
                  Country
                </label>
                <Select
                  defaultValue="standard_rate"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  options={[
                    { value: "na", label: "N/A - Virtual Product" },
                    { value: "standard_rate", label: "Standard Rate" },
                    { value: "express_rate", label: "Express Rate" },
                    {
                      value: "speed_overnight_rate",
                      label: "Speed Overnight Rate",
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="tw-flex tw-justify-end tw-gap-4">
            <button
              type=""
              className="tw-py-[11px] tw-px-[20px] tw-bg-white tw-text-[#78829D] tw-rounded-lg hover:tw-bg-[#F1F1F2] tw-font-medium"
            >
              Cancel
            </button>
            <button
              type=""
              className="tw-py-[11px] tw-px-[20px] tw-bg-[#3E97FF] hover:tw-bg-[#0095e8] tw-text-white tw-rounded-lg tw-font-medium"
            >
              Save Change
            </button>
          </div>
        </div>

        <div></div>
      </form>
    </div>
  );
};

export default EditOrder;

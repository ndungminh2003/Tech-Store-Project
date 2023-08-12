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
    <div className="max-w-[1320px] m-auto">
      <div className="py-5">
        <h1 className="text-[#071437] text-lg font-semibold">Edit Order</h1>
        <ul className="flex items-center gap-1 text-[#B5B5C3]">
          <li>
            <a href="">Home</a>
          </li>
          <span className="w-[5px] h-[2px] bg-[#B5B5C3] mt-[2px]"></span>
          <li>eCommerce</li>
          <span className="w-[5px] h-[2px] bg-[#B5B5C3] mt-[2px]"></span>
          <li>Sales</li>
        </ul>
      </div>
      <form className="flex gap-10">
        <div className="w-[300px] py-[13px] border border-[#F1F1F2] rounded-xl">
          <div className="px-[26px]">
            <h1 className="text-xl min-h-[70px] text-[#071437] font-semibold leading-[70px]">
              Order Details
            </h1>
          </div>
          <div className="px-[26px] pb-[30px] flex flex-col gap-10">
            <div>
              <label for="" className="text-sm text-[#252F4A] font-semibold">
                Order ID
              </label>
              <div className="text-lg font-semibold">#13754</div>
            </div>
            <div className="w-full flex flex-col">
              <label
                for=""
                className="label-required text-[#252F4A] font-semibold mb-[7px]"
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
              <p className="text-[#99A1B7] text-xs">
                Set the date of the order to process.
              </p>
            </div>
            <div className="w-full flex flex-col">
              <label
                for=""
                className="label-required text-[#252F4A] font-semibold mb-[7px]"
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
              <p className="text-[#99A1B7] text-xs">
                Set the date of the order to process.
              </p>
            </div>
            <div className="w-full flex flex-col">
              <label
                for=""
                className="label-required text-[#252F4A] font-semibold mb-[7px]"
              >
                Order Date
              </label>
              <DatePicker onChange={onChange} />
              <p className="text-[#99A1B7] text-xs">
                Set the date of the order to process.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-7">
          <div className="border border-[#F1F1F2] rounded-xl px-[30px]">
            <h1 className="text-xl min-h-[70px]  text-[#071437] font-semibold leading-[70px]">
              Select Products
            </h1>
            <div className="">
              <label
                for=""
                className="text-sm text-[#252F4A] font-medium mb-[7px]"
              >
                Add products to this order
              </label>
              <div className="grid grid-cols-3 p-3 gap-3 border border-dashed rounded-md border-[#F1F1F2]">
                <div className="p-3 border border-dashed rounded-md border-[#F1F1F2] flex gap-5">
                  <img
                    src="https://preview.keenthemes.com/metronic8/demo1/assets/media//stock/ecommerce/25.png"
                    alt=""
                    className="w-[50px] h-[50px]"
                  />
                  <div className="flex flex-col">
                    <a
                      href=""
                      className="text-base text-[#252F4A] font-semibold"
                    >
                      Product 25
                    </a>
                    <span className="text-[xs] text-[#071437] font-medium">
                      Price: 199.00 VNĐ
                    </span>
                    <span className="text-[xs] text-[#99A1B7] font-medium">
                      SKU: 01479004
                    </span>
                  </div>
                </div>
                <div className="p-3 border border-dashed rounded-md border-[#F1F1F2] flex gap-5">
                  <img
                    src="https://preview.keenthemes.com/metronic8/demo1/assets/media//stock/ecommerce/25.png"
                    alt=""
                    className="w-[50px] h-[50px]"
                  />
                  <div className="flex flex-col">
                    <a
                      href=""
                      className="text-base text-[#252F4A] font-semibold"
                    >
                      Product 25
                    </a>
                    <span className="text-[xs] text-[#071437] font-medium">
                      Price: 199.00 VNĐ
                    </span>
                    <span className="text-[xs] text-[#99A1B7] font-medium">
                      SKU: 01479004
                    </span>
                  </div>
                </div>
                <div className="p-3 border border-dashed rounded-md border-[#F1F1F2] flex gap-5">
                  <img
                    src="https://preview.keenthemes.com/metronic8/demo1/assets/media//stock/ecommerce/25.png"
                    alt=""
                    className="w-[50px] h-[50px]"
                  />
                  <div className="flex flex-col">
                    <a
                      href=""
                      className="text-base text-[#252F4A] font-semibold"
                    >
                      Product 25
                    </a>
                    <span className="text-[xs] text-[#071437] font-medium">
                      Price: 199.00 VNĐ
                    </span>
                    <span className="text-[xs] text-[#99A1B7] font-medium">
                      SKU: 01479004
                    </span>
                  </div>
                </div>
              </div>
              <h1 className="text-lg font-semibold text-[#071437] mt-4">
                Total Cost: 248.00 VNĐ
              </h1>
            </div>

            <div className="border border-b-[#F1F1F2] h-0 my-10" />

            <div>
              <div>
                <input
                  type="text"
                  name=""
                  placeholder="Search Products"
                  className="w-1/2 py-[10px] pl-[40px] pr-[13px] bg-[#F9F9F9] outline-none border-none font-semibold text-[#4B5675] rounded-lg"
                />
              </div>
            </div>

            <div className="mt-7">
              <table className="w-full">
                <thead className="!border-b !border-dashed !border-[#F1F1F2] text-xs">
                  <tr className="text-start text-gray-400 font-semibold uppercase ">
                    <th
                      className="w-[25px] px-2 "
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
                      className="min-w-[100px] text-end px-5"
                      tabindex="0"
                      rowSpan="1"
                      colSpan="1"
                    >
                      Qty Remaining
                    </th>
                  </tr>
                </thead>

                <tr className="text-start text-gray-400 font-bold uppercase ">
                  <th
                    className="w-[25px] px-2 "
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
                    className="min-w-[100px] text-end px-5"
                    tabindex="0"
                    rowSpan="1"
                    colSpan="1"
                  ></th>
                </tr>
              </table>
              <div className="max-h-[400px] overflow-auto w-full">
                <table className="w-full">
                  <thead className="!border-b !border-dashed !border-[#F1F1F2]">
                    <tr className="text-start text-gray-400 font-bold uppercase ">
                      <th
                        className="w-[25px] px-2 "
                        rowSpan="1"
                        colSpan="1"
                        aria-label=""
                      ></th>
                      <th
                        className="min-w-[200px]"
                        tabindex="0"
                        rowSpan="1"
                        colSpan="1"
                      ></th>
                      <th
                        className="min-w-[100px] text-end px-5"
                        tabindex="0"
                        rowSpan="1"
                        colSpan="1"
                      ></th>
                    </tr>
                  </thead>

                  <tbody className="font-semibold text-gray-600 w-full">
                    <tr className="odd">
                      <td>
                        <div className="py-5">
                          <Checkbox
                            className="bg-[#F1F1F2] rounded !w-[20px] !h-[20px] border-none outline-none"
                            value="1"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center">
                          <a href="#" className="symbol symbol-50px">
                            <img
                              src="https://preview.keenthemes.com/metronic8/demo1/assets/media//stock/ecommerce/1.png"
                              alt=""
                              className="w-[50px] h-[50px]"
                            />
                          </a>

                          <div className="mx-5">
                            <a
                              href="#"
                              className="text-[#252F4A] text-[15px] font-semibold"
                            >
                              Product 1
                            </a>

                            <div className="text-[#78829D] text-xs font-medium">
                              Price: $
                              <span data-kt-ecommerce-edit-order-filter="">
                                88.00
                              </span>
                            </div>

                            <div className="text-[#99A1B7] text-xs font-medium">
                              SKU: 04136002
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-end px-5" data-order="48">
                        <span className="text-sm text-[#78829D] font-bold leading-[52px] py-">
                          48
                        </span>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td>
                        <div className="py-5">
                          <Checkbox
                            className="bg-[#F1F1F2] rounded !w-[20px] !h-[20px] border-none outline-none"
                            value="1"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center">
                          <a href="#" className="symbol symbol-50px">
                            <img
                              src="https://preview.keenthemes.com/metronic8/demo1/assets/media//stock/ecommerce/1.png"
                              alt=""
                              className="w-[50px] h-[50px]"
                            />
                          </a>

                          <div className="mx-5">
                            <a
                              href="#"
                              className="text-[#252F4A] text-[15px] font-semibold"
                            >
                              Product 1
                            </a>

                            <div className="text-[#78829D] text-xs font-medium">
                              Price: $
                              <span data-kt-ecommerce-edit-order-filter="">
                                88.00
                              </span>
                            </div>

                            <div className="text-[#99A1B7] text-xs font-medium">
                              SKU: 04136002
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-end px-5" data-order="48">
                        <span className="text-sm text-[#78829D] font-bold leading-[52px] py-">
                          48
                        </span>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td>
                        <div className="py-5">
                          <Checkbox
                            className="bg-[#F1F1F2] rounded !w-[20px] !h-[20px] border-none outline-none"
                            value="1"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center">
                          <a href="#" className="symbol symbol-50px">
                            <img
                              src="https://preview.keenthemes.com/metronic8/demo1/assets/media//stock/ecommerce/1.png"
                              alt=""
                              className="w-[50px] h-[50px]"
                            />
                          </a>

                          <div className="mx-5">
                            <a
                              href="#"
                              className="text-[#252F4A] text-[15px] font-semibold"
                            >
                              Product 1
                            </a>

                            <div className="text-[#78829D] text-xs font-medium">
                              Price: $
                              <span data-kt-ecommerce-edit-order-filter="">
                                88.00
                              </span>
                            </div>

                            <div className="text-[#99A1B7] text-xs font-medium">
                              SKU: 04136002
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-end px-5" data-order="48">
                        <span className="text-sm text-[#78829D] font-bold leading-[52px] py-">
                          48
                        </span>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td>
                        <div className="py-5">
                          <Checkbox
                            className="bg-[#F1F1F2] rounded !w-[20px] !h-[20px] border-none outline-none"
                            value="1"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center">
                          <a href="#" className="symbol symbol-50px">
                            <img
                              src="https://preview.keenthemes.com/metronic8/demo1/assets/media//stock/ecommerce/1.png"
                              alt=""
                              className="w-[50px] h-[50px]"
                            />
                          </a>

                          <div className="mx-5">
                            <a
                              href="#"
                              className="text-[#252F4A] text-[15px] font-semibold"
                            >
                              Product 1
                            </a>

                            <div className="text-[#78829D] text-xs font-medium">
                              Price: $
                              <span data-kt-ecommerce-edit-order-filter="">
                                88.00
                              </span>
                            </div>

                            <div className="text-[#99A1B7] text-xs font-medium">
                              SKU: 04136002
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-end px-5" data-order="48">
                        <span className="bg-[#fff8dd] px-2 py-1 rounded font-medium text-[#ffc700] mr-2">
                          Low stock
                        </span>
                        <span className="text-sm  font-bold leading-[52px] py- text-[#ffc700]">
                          48
                        </span>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td>
                        <div className="py-5">
                          <Checkbox
                            className="bg-[#F1F1F2] rounded !w-[20px] !h-[20px] border-none outline-none"
                            value="1"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center">
                          <a href="#" className="symbol symbol-50px">
                            <img
                              src="https://preview.keenthemes.com/metronic8/demo1/assets/media//stock/ecommerce/1.png"
                              alt=""
                              className="w-[50px] h-[50px]"
                            />
                          </a>

                          <div className="mx-5">
                            <a
                              href="#"
                              className="text-[#252F4A] text-[15px] font-semibold"
                            >
                              Product 1
                            </a>

                            <div className="text-[#78829D] text-xs font-medium">
                              Price: $
                              <span data-kt-ecommerce-edit-order-filter="">
                                88.00
                              </span>
                            </div>

                            <div className="text-[#99A1B7] text-xs font-medium">
                              SKU: 04136002
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-end px-5" data-order="48">
                        <span className="text-sm text-[#78829D] font-bold leading-[52px] py-">
                          48
                        </span>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td>
                        <div className="py-5">
                          <Checkbox
                            className="bg-[#F1F1F2] rounded !w-[20px] !h-[20px] border-none outline-none"
                            value="1"
                          />
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center">
                          <a href="#" className="symbol symbol-50px">
                            <img
                              src="https://preview.keenthemes.com/metronic8/demo1/assets/media//stock/ecommerce/1.png"
                              alt=""
                              className="w-[50px] h-[50px]"
                            />
                          </a>

                          <div className="mx-5">
                            <a
                              href="#"
                              className="text-[#252F4A] text-[15px] font-semibold"
                            >
                              Product 1
                            </a>

                            <div className="text-[#78829D] text-xs font-medium">
                              Price: $
                              <span data-kt-ecommerce-edit-order-filter="">
                                88.00
                              </span>
                            </div>

                            <div className="text-[#99A1B7] text-xs font-medium">
                              SKU: 04136002
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-end px-5" data-order="48">
                        <span className="text-sm text-[#78829D] font-bold leading-[52px] py-">
                          48
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="border border-[#F1F1F2] rounded-xl px-[30px] pb-[30px]">
            <h1 className="text-xl min-h-[70px]  text-[#071437] font-semibold leading-[70px]">
              Delivery Details
            </h1>
            <div className="flex flex-col gap-7">
              <h1 className="text-lg text-[#071437] font-semibold">
                Billing Address
              </h1>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label
                    for=""
                    className="label-required text-[#252F4A] font-semibold mb-[7px]"
                  >
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    name=""
                    defaultValue="1/23 Hastings Road"
                    className="border border-[#DBDFE9] rounded-md px-[13px] py-[10px] text-[#4B5675] font-medium text-base outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    for=""
                    className="text-[#252F4A] font-semibold mb-[7px]"
                  >
                    Address Line 2
                  </label>
                  <input
                    placeholder="Address Line 2"
                    type="text"
                    name=""
                    defaultValue="1/23 Hastings Road"
                    className="border border-[#DBDFE9] rounded-md px-[13px] py-[10px] text-[#4B5675] font-medium text-base outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-5">
                <div className="flex flex-col">
                  <label
                    for=""
                    className="text-[#252F4A] font-semibold mb-[7px]"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name=""
                    defaultValue="Melbourne"
                    className="border border-[#DBDFE9] rounded-md px-[13px] py-[10px] text-[#4B5675] font-medium text-base outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    for=""
                    className="label-required text-[#252F4A] font-semibold mb-[7px]"
                  >
                    Postcode
                  </label>
                  <input
                    type="text"
                    name=""
                    defaultValue="3000"
                    className="border border-[#DBDFE9] rounded-md px-[13px] py-[10px] text-[#4B5675] font-medium text-base outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    for=""
                    className="label-required text-[#252F4A] font-semibold mb-[7px]"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    name=""
                    defaultValue="1/23 Hastings Road"
                    className="border border-[#DBDFE9] rounded-md px-[13px] py-[10px] text-[#4B5675] font-medium text-base outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label for="" className="text-[#252F4A] font-semibold mb-[7px]">
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

            <div className="flex gap-1 my-7">
              <Checkbox />
              <p className="text-[#99A1B7] font-medium">
                Shipping address is the same as billing address
              </p>
            </div>

            <div className="flex flex-col gap-7">
              <h1 className="text-lg text-[#071437] font-semibold">
                Shipping Address
              </h1>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label
                    for=""
                    className="text-[#252F4A] font-semibold mb-[7px]"
                  >
                    Address Line 1
                  </label>
                  <input
                    type="text"
                    name=""
                    defaultValue="1/23 Hastings Road"
                    className="border border-[#DBDFE9] rounded-md px-[13px] py-[10px] text-[#4B5675] font-medium text-base outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    for=""
                    className="text-[#252F4A] font-semibold mb-[7px]"
                  >
                    Address Line 2
                  </label>
                  <input
                    placeholder="Address Line 2"
                    type="text"
                    name=""
                    defaultValue="1/23 Hastings Road"
                    className="border border-[#DBDFE9] rounded-md px-[13px] py-[10px] text-[#4B5675] font-medium text-base outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-5">
                <div className="flex flex-col">
                  <label
                    for=""
                    className="text-[#252F4A] font-semibold mb-[7px]"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name=""
                    defaultValue="Melbourne"
                    className="border border-[#DBDFE9] rounded-md px-[13px] py-[10px] text-[#4B5675] font-medium text-base outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    for=""
                    className="text-[#252F4A] font-semibold mb-[7px]"
                  >
                    Postcode
                  </label>
                  <input
                    type="text"
                    name=""
                    defaultValue="3000"
                    className="border border-[#DBDFE9] rounded-md px-[13px] py-[10px] text-[#4B5675] font-medium text-base outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    for=""
                    className="text-[#252F4A] font-semibold mb-[7px]"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    name=""
                    defaultValue="1/23 Hastings Road"
                    className="border border-[#DBDFE9] rounded-md px-[13px] py-[10px] text-[#4B5675] font-medium text-base outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label for="" className="text-[#252F4A] font-semibold mb-[7px]">
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

          <div className="flex justify-end gap-4">
            <button
              type=""
              className="py-[11px] px-[20px] bg-white text-[#78829D] rounded-lg hover:bg-[#F1F1F2] font-medium"
            >
              Cancel
            </button>
            <button
              type=""
              className="py-[11px] px-[20px] bg-[#3E97FF] hover:bg-[#0095e8] text-white rounded-lg font-medium"
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

import React from 'react';
import { ExclamationOutlined } from '@ant-design/icons';
import { BsFillPencilFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

const CustomerDetails = () => {
  return (
    <div className="tw-max-w-[1320px] tw-m-auto">
      <div className="tw-py-5">
        <h1 className="tw-text-[#071437] tw-text-lg tw-font-semibold">
          Customer Details
        </h1>
        <ul className="tw-flex tw-items-center tw-gap-1 tw-text-[#B5B5C3]">
          <li>
            <a href="">Home</a>
          </li>
          <span className="tw-w-[5px] tw-h-[2px] tw-bg-[#B5B5C3] tw-mt-[2px]"></span>
          <li>eCommerce</li>
          <span className="tw-w-[5px] tw-h-[2px] tw-bg-[#B5B5C3] tw-mt-[2px]"></span>
          <li>Customers</li>
        </ul>
      </div>
      <div className="tw-flex tw-flex-row">
        <div className="tw-flex tw-flex-col tw-w-[350px] tw-flex-[0_0_auto] tw-mb-10">
          <div className="tw-border tw-border-solid tw-border-[#F1F1F2] tw-rounded-[5px] tw-shadow-[0px_4px_12px_0px_rgba(0,0,0,0.03)]">
            <div className="tw-px-9 tw-py-8 tw-pt-[3.75rem]">
              <div className="tw-flex tw-justify-center tw-items-center tw-flex-col tw-mb-5">
                <div className="tw-inline-block tw-relative tw-shrink-0 tw-rounded-[50%] tw-mb-7">
                  <img
                    src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-1.jpg"
                    alt="image"
                    className="tw-rounded-[50%] tw-w-[150px] tw-h-[150px] tw-object-cover"
                  />
                </div>
                <a href="#" className="tw-text-[#252F4A] tw-text-[18px] tw-font-bold tw-mb-1">Max Smith</a>
                <a href="#" className="tw-text-[#99A1B7] tw-text-[15px] tw-font-semibold tw-mb-6">max@kt.com</a>
              </div>
              <div className="tw-flex tw-justify-between tw-items-center tw-text-[16px] tw-py-3">
                <div className="tw-font-bold">
                  Details
                </div>
                <div className="tw-flex tw-justify-center tw-items-center tw-text-[#7239ea] tw-bg-[#f8f5ff] tw-text-[11px] tw-font-bold tw-leading-none tw-rounded-[5px] tw-px-[4px] tw-py-[6px]">Premium user</div>
              </div>
              <div className="tw-block tw-h-0 tw-border-b tw-border-dashed tw-border-[#F1F1F2] tw-my-3"></div>
                <div className="tw-pb-5 tw-text-[14px]">
                  <div className="tw-font-bold tw-mt-5 tw-text-[#071437]">Account ID</div>
                  <div className="tw-text-[#78829D]">ID-45453423</div>
                  <div className="tw-font-bold tw-mt-5 tw-text-[#071437]">Billing Email</div>
                  <div className="tw-text-[#78829D]"><a href="#" className="text-gray-600 text-hover-primary">info@keenthemes.com</a></div>
                  <div className="tw-font-bold tw-mt-5 tw-text-[#071437]">Delivery Address</div>
                  <div className="tw-text-[#78829D]">101 Collin Street, <br/>Melbourne 3000 VIC<br/>Australia</div>
                  <div className="tw-font-bold tw-mt-5 tw-text-[#071437]">Language</div>
                  <div className="tw-text-[#78829D]">English</div>
                  <div className="tw-font-bold tw-mt-5 tw-text-[#071437]">Latest Transaction</div>
                  <div className="tw-text-[#78829D]">
                    <a href="#" className="tw-text-[#78829D]">#14534</a> </div>
                  </div>
            </div>
          </div>
        </div>
        <div className="tw-flex tw-ml-[50px] tw-w-full tw-flex-col">
          <ul className="tw-flex tw-flex-wrap tw-pl-0 tw-list-none tw-text-[16px] tw-border-0 tw-font-semibold tw-mb-8" role="tablist">
            <li className="tw-flex" role="presentation">
                <a className="tw-text-[#99A1B7] tw-mr-[13px] tw-px-1 tw-py-3 tw-text-[16px] tw-pb-4 hover:tw-text-[#3E97FF] hover:tw-border-b-2 hover:tw-border-solid hover:tw-border-[#3E97FF]" href="#">Overview</a>
            </li>
            <li className="tw-flex" role="presentation">
              <a className="tw-text-[#3E97FF] tw-mr-[13px] tw-px-1 tw-py-3 tw-text-[16px] tw-pb-4 tw-border-b-2 tw-border-solid tw-border-[#3E97FF]" href="#">
                General Settings
              </a>
            </li>
            <li className="tw-flex" role="presentation">
              <a className="tw-text-[#99A1B7] tw-mr-[13px] tw-px-1 tw-py-3 tw-text-[16px] tw-pb-4 hover:tw-text-[#3E97FF] hover:tw-border-b-2 hover:tw-border-solid hover:tw-border-[#3E97FF]"href="#" >
                Advanced Settings
              </a>
            </li>
          </ul>
          <div className="tw-flex tw-flex-col">
            <div className="tw-pt-4 tw-border tw-border-solid tw-border-[#F1F1F2] tw-rounded-[5px] tw-shadow-[0px_4px_12px_0px_rgba(0,0,0,0.03)]">
              <div className="tw-flex tw-justify-between tw-items-center tw-min-h-[70px] tw-px-[30px] tw-flex-wrap tw-bg-transparent">
                <div className="tw-flex tw-items-center tw-m-[6px] tw-font-semibold tw-text-[20px] tw-text-[#071437]">
                  <h2>Profile</h2>
                </div>
              </div>
              <div className="tw-pb-5 tw-pt-0 tw-px-9 tw-py-8">
                <form action="">
                  <div className="tw-mb-7">
                    <label className="tw-flex tw-items-center tw-text-[14px] tw-font-medium tw-mb-2 tw-text-[#071437]">
                        <span>Update Avatar</span>
                        <span className="tw-flex tw-justify-center tw-items-center tw-w-[12px] tw-h-[12px] tw-rounded-[50%] tw-bg-[#F1F1F2] tw-ml-2">
                          <ExclamationOutlined className="tw-text-[8px]" /> 
                        </span>
                    </label>
                    <div class="tw-mt-1">
                      <div className="tw-relative tw-inline-block tw-rounded-[5px] tw-bg-cover" data-kt-image-input="true">
                          <div className="tw-border-[3px] tw-border-solid tw-border-[#fff] tw-rounded-[5px] tw-bg-no-repeat tw-bg-cover tw-w-[125px] tw-h-[125px] tw-bg-[url('https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-1.jpg')] tw-shadow-[0_0.5rem_1.5rem_0.5rem_rgba(0,0,0,0.075)]"></div>
                          <label className="tw-rounded-[50%] tw-w-[25px] tw-h-[25px] tw-shadow-[0_0.5rem_1.5rem_0.5rem_rgba(0,0,0,0.075)] tw-border-0 tw-absolute tw-left-[90%] tw-z-auto tw-top-[-10px] tw-cursor-pointer tw-inline-flex tw-justify-center tw-items-center tw-p-0 tw-bg-[#fff]"  >
                              <BsFillPencilFill className="tw-text-[10px] tw-text-[#99A1B7]"/>
                              <input type="file" name="avatar" accept=".png, .jpg, .jpeg" className="tw-border-0 tw-w-0 tw-h-0 tw-opacity-0 tw-overflow-hidden"/>
                              <input type="hidden" name="avatar_remove" className="tw-border-0 tw-w-0 tw-h-0 tw-opacity-0 tw-overflow-hidden" />
                          </label>
                          <span className="tw-rounded-[50%] tw-w-[25px] tw-h-[25px] tw-shadow-[0_0.5rem_1.5rem_0.5rem_rgba(0,0,0,0.075)] tw-border-0 tw-absolute tw-left-[90%] tw-z-auto tw-bottom-[-10px] tw-cursor-pointer tw-inline-flex tw-justify-center tw-items-center tw-p-0 tw-bg-[#fff]">
                            <AiOutlineClose className="tw-text-[12px] tw-text-[#99A1B7]"/>
                          </span>
                      </div>
                    </div>
                  </div>
                  <div className="tw-relative tw-mb-7">
                    <label className="tw-text-[14px] tw-font-medium tw-mb-2 tw-text-[#071437] form-input">Name</label>
                    <input type="text" className="tw-block tw-w-full tw-text-base tw-font-medium tw-leading-normal tw-text-[#4B5675] tw-bg-[#F9F9F9] tw-bg-clip-padding tw-border tw-appearance-none tw-rounded tw-px-3 tw-py-2.5 tw-border-solid tw-border-[#F9F9F9] tw-outline-0 tw-text-[12px] focus:tw-bg-[#F1F1F2] focus:tw-border-[#F1F1F2] focus:tw-text-[#4B5675]" placeholder="" name="name" />
                  </div>
                  <div className="tw-flex tw-flex-wrap tw-mr-[-15px] tw-ml-[-15px] mt-0;">
                    <div className="tw-mb-7 tw-w-[50%] tw-flex-[0_0_auto] tw-pl-[15px] tw-pr-[15px]">
                      <label className="tw-flex tw-items-center tw-text-[14px] tw-font-medium tw-mb-2 tw-text-[#071437]">
                        <span className='form-input'>General Email</span>
                        <span className="tw-flex tw-justify-center tw-items-center tw-w-[12px] tw-h-[12px] tw-rounded-[50%] tw-bg-[#F1F1F2] tw-ml-2">
                          <ExclamationOutlined className="tw-text-[8px]" /> 
                        </span>
                      </label>
                      <input type="text" className="tw-block tw-w-full tw-text-base tw-font-medium tw-leading-normal tw-text-[#4B5675] tw-bg-[#F9F9F9] tw-bg-clip-padding tw-border tw-appearance-none tw-rounded tw-px-3 tw-py-2.5 tw-border-solid tw-border-[#F9F9F9] tw-outline-0 tw-text-[12px] focus:tw-bg-[#F1F1F2] focus:tw-border-[#F1F1F2] focus:tw-text-[#4B5675]" placeholder="" name="name" />
                    </div> 
                     <div className="tw-mb-7 tw-w-[50%] tw-flex-[0_0_auto] tw-pl-[15px] tw-pr-[15px]">
                      <label className="tw-flex tw-items-center tw-text-[14px] tw-font-medium tw-mb-2 tw-text-[#071437]">
                        <span>Billing Email</span>
                        <span className="tw-flex tw-justify-center tw-items-center tw-w-[12px] tw-h-[12px] tw-rounded-[50%] tw-bg-[#F1F1F2] tw-ml-2">
                          <ExclamationOutlined className="tw-text-[8px]" /> 
                        </span>
                      </label>
                      <input type="text" className="tw-block tw-w-full tw-text-base tw-font-medium tw-leading-normal tw-text-[#4B5675] tw-bg-[#F9F9F9] tw-bg-clip-padding tw-border tw-appearance-none tw-rounded tw-px-3 tw-py-2.5 tw-border-solid tw-border-[#F9F9F9] tw-outline-0 tw-text-[12px] focus:tw-bg-[#F1F1F2] focus:tw-border-[#F1F1F2] focus:tw-text-[#4B5675]" placeholder="" name="name" />
                    </div> 
                  </div>
                  <div class="tw-flex tw-justify-end">
                    <button type="submit" class="tw-flex tw-justify-center tw-items-center tw-bg-[#f1faff] tw-text-[#3E97FF] tw-text-[14px] tw-py-[11px] tw-px-[20px] tw-rounded-[8px] tw-font-medium hover:tw-text-[#fff] hover:tw-bg-[#3E97FF]">
                      <span>
                        Save
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerDetails;

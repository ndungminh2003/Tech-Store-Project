import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite"; 
export default function ProductView() {
  return (
    <div className="tw-container-product-view">
      <button className="tw-w-max tw-p-5 tw-bg-[#ccc] tw-rounded-[5px] tw-float-right tw-mt-5">
        {" "}
        Lorem ipsum dolor sit amet.{" "}
      </button>
      <div className="tw-flex tw-justify-between tw-p-10 tw-clear-right">
        <div className="tw-product-detail">
          <div className="tw-product-detail-top tw-flex tw-justify-between tw-pb-5">
            <div className="tw-product-name tw-pl-5 tw-font-[600]">Product's name</div>
            <div className="tw-product-evaluate tw-pr-[200px]">
              ✩ ✩ ✩ ✩
              <strong className="tw-pl-3">
                <span>4 reivews</span>
              </strong>
            </div>
          </div>
          <div className="tw-product-detail-bottom tw-bg-[#d9d9d9] tw-relative tw-rounded-t-lg tw-p-2">
            <div className="tw-product-detail-herd">
              <div className="tw-product-detail-heart tw-w-[38px] tw-h-[33px] tw-text-[34px]">
              <FavoriteIcon />
                {/* phần này mình ko kiếm được icon thích hợp để đưa vào */}
              </div>
              <div className="tw-product-deatail-content tw-flex">
                <div className="tw-product-deatail-image tw-pl-[47px] tw-pt-[52px] tw-pb-[52px] tw-pr-[30px]">
                  <img
                    src="https://i.pinimg.com/564x/81/3b/f2/813bf2b968dad8dfa2ec9a85560da8cb.jpg"
                    alt=""
                    className="tw-w-[375px] tw-h-[375px] tw-rounded"
                  />
                </div>
                <div className="tw-product-detail-text tw-pt-[100px] tw-pb-[52px]">
                  <h2 className="tw-product-detail-title tw-text-center tw-font-[600] tw-text-[27px] tw-pb-5 ">
                    Lorem ipsum dolor sit amet.
                  </h2>
                  <ul className="tw-pr-[30px] tw-text-left">
                    <li>
                      - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                    <li>
                      - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tw-product-option tw-w-[475px] tw-pt-[75px]">
          <div className="tw-product-option-price tw-flex tw-flex-col">
            <div className="tw-text-[20px]">23452352345 đ</div>
            <small className="tw-text-[#adadad]">
              {" "}
              <del> 78967896789 đ</del>
            </small>
          </div>
          <div className="tw-product-option-select tw-pt-[50px]">
            <div className="tw-product-option-title tw-text-[18px]">
              <strong>Lorem ipsum dolor sit amet.</strong>
            </div>
            <div className="tw-product-option-variation">
              <button className="tw-w-max tw-h-max tw-capitalize tw-bg-[#ccc] tw-m-5 tw-p-3">
                red
              </button>
              <button className="tw-w-max tw-h-max tw-capitalize tw-bg-[#ccc] tw-m-5 tw-p-3">
                Yellow
              </button>
              <button className="tw-w-max tw-h-max tw-capitalize tw-bg-[#ccc] tw-m-5 tw-p-3">
                Blue
              </button>
              <button className="tw-w-max tw-h-max tw-capitalize tw-bg-[#ccc] tw-m-5 tw-p-3">
                Gray
              </button>
            </div>
          </div>
          <div className="tw-product-option-discount tw-text-[18px]">
            <strong className="tw-text-[20px]">Discount:</strong>
            No discount code
          </div>
          <div className="tw-product-option-buy-cart tw-flex tw-gap-[42px] tw-mt-10">
            <button className="tw-bg-[#ccc] tw-w-[519px] tw-h-[50px] tw-rounded-[10px]">
              <strong>Buy Now</strong>
              <div className="tw-text-[13px]">(Lorem ipsum dolor sit amet.)</div>
            </button>
            <button className="tw-w-[68px] tw-h-[50px] tw-text-[9px] tw-bg-[#ccc] tw-rounded-[8px]">
              <ShoppingCartIcon color="white" />
              <br />
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

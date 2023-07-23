import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite"; 
export default function ProductView() {
  return (
    <div className="container-product-view">
      <button className="w-max p-5 bg-[#ccc] rounded-[5px] float-right mt-5">
        {" "}
        Lorem ipsum dolor sit amet.{" "}
      </button>
      <div className="flex justify-between clear-right p-10">
        <div className="product-detail">
          <div className="flex justify-between pb-5 product-detail-top">
            <div className="product-name pl-5 font-[600]">Product's name</div>
            <div className="product-evaluate pr-[200px]">
              ✩ ✩ ✩ ✩
              <strong className="pl-3">
                <span>4 reivews</span>
              </strong>
            </div>
          </div>
          <div className="product-detail-bottom bg-[#d9d9d9] relative rounded-t-lg p-2">
            <div className="product-deatail-herd">
              <div className="product-deatail-heart w-[38px] h-[33px] text-[34px]">
              <FavoriteIcon />
                {/* phần này mình ko kiếm được icon thích hợp để đưa vào */}
              </div>
              <div className="flex product-deatail-content">
                <div className="product-deatail-image pl-[47px] pt-[52px] pb-[52px] pr-[30px]">
                  <img
                    src="https://i.pinimg.com/564x/81/3b/f2/813bf2b968dad8dfa2ec9a85560da8cb.jpg"
                    alt=""
                    className="w-[375px] h-[375px] rounded"
                  />
                </div>
                <div className="product-detail-text pt-[100px] pb-[52px]">
                  <h2 className="product-detail-title text-center font-[600] text-[27px] pb-5 ">
                    Lorem ipsum dolor sit amet.
                  </h2>
                  <ul className="pr-[30px] text-left">
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
        <div className="product-option w-[475px] pt-[75px]">
          <div className="flex flex-col product-option-price">
            <div className="text-[20px]">23452352345 đ</div>
            <small className="text-[#adadad]">
              {" "}
              <del> 78967896789 đ</del>
            </small>
          </div>
          <div className="product-option-select pt-[50px]">
            <div className="product-option-title text-[18px]">
              <strong>Lorem ipsum dolor sit amet.</strong>
            </div>
            <div className="product-option-variation">
              <button className="w-max h-max capitalize bg-[#ccc] m-5 p-3">
                red
              </button>
              <button className="w-max h-max capitalize bg-[#ccc] m-5 p-3">
                Yellow
              </button>
              <button className="w-max h-max capitalize bg-[#ccc] m-5 p-3">
                Blue
              </button>
              <button className="w-max h-max capitalize bg-[#ccc] m-5 p-3">
                Gray
              </button>
            </div>
          </div>
          <div className="product-option-discount text-[18px]">
            <strong className="text-[20px]">Discount: </strong>
             No discount code
          </div>
          <div className="product-option-buy-cart flex gap-[42px] mt-10">
            <button className="bg-[#ccc] w-[519px] h-[50px] rounded-[10px]">
              <strong>Buy Now</strong>
              <div className="text-[13px]">(Lorem ipsum dolor sit amet.)</div>
            </button>
            <button className="w-[68px] h-[50px] text-[9px] bg-[#ccc] rounded-[8px]">
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

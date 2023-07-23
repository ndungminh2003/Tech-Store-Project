import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function ProductView() {
  const lineStyle = {
    width: "150px",
    height: "2px", 
    backgroundColor: "red", 
    backgroundSize: "75% 100%",
  };

  return (
    <div className="container-product-view">
      <div className="flex justify-between p-10">
        <div className="product-detail">
          <div className="flex justify-between pb-5 product-detail-top">
            <div className="product-name pl-5 font-[600]">Product's name</div>
            <div className="product-evaluate pr-[200px]">
              ✩ ✩ ✩ ✩
              <strong className="pl-3">
                <span>4 reviews</span>
              </strong>
            </div>
          </div>
          <div className="product-detail-bottom bg-[#d9d9d9] relative rounded-t-lg p-2">
            <div className="product-deatail-herd">
              <div className="product-deatail-heart w-[38px] h-[33px] text-[34px]">
                &#9829;
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
      <div className="product-view-comment pl-[50px] pr-[50px] mb-5">
        <div className="mb-5">Customer reviews (0)</div>
        <div className="product-view-average-rating bg-[#d9d9d9] h-[220px] pr-[52px] pl-[52px] flex">
          <div className="flex items-center product-view-rating">
            <div>
              <div className="product-view-rating-title">average rating</div>
              <div className="product-view-rating-star">✩ ✩ ✩ ✩ ✩</div>
            </div>
            <strong className="pt-[25px]">No reviews yet.</strong>
          </div>
          <div className="flex flex-col items-center pl-[100px] pt-[45px]">
            <div className="flex items-center gap-10">
              <span> ✩ ✩ ✩ ✩ ✩</span>
              <div className="h-2 bg-red-500 w-150" style={lineStyle}></div>
            </div>
            <div className="flex items-center gap-10">
              <span> ✩ ✩ ✩ ✩ ✩</span>
              <div className="h-2 bg-red-500 w-150" style={lineStyle}></div>
            </div>
            <div className="flex items-center gap-10">
              <span> ✩ ✩ ✩ ✩ ✩</span>
              <div className="h-2 bg-red-500 w-150" style={lineStyle}></div>
            </div>
            <div className="flex items-center gap-10">
              <span> ✩ ✩ ✩ ✩ ✩</span>
              <div className="h-2 bg-red-500 w-150" style={lineStyle}></div>
            </div>
            <div className="flex items-center gap-10">
              <span> ✩ ✩ ✩ ✩ ✩</span>
              <div className="h-2 bg-red-500 w-150" style={lineStyle}></div>
            </div>
          </div>
        </div>
        <div className="flex pl-[20px] pr-[20px] pt-[10px] pb-[10px]">
          <div className="product-view-group">
            <label> Corlor: </label>
            <select className="border-[1px] border-[#000] h-[40px]">
              <option> Select corlor </option>
              <option> 1</option>
            </select>
          </div>
          <div className="ml-3 product-view-group">
            <label> Corlor: </label>
            <select className="border-[1px] border-[#000] h-[40px]">
              <option> Select corlor </option>
              <option> 1</option>
            </select>
          </div>
          <div className="ml-3 product-view-group">
            <label> Corlor: </label>
            <select className="border-[1px] border-[#000] h-[40px]">
              <option> Select corlor </option>
              <option> 1</option>
            </select>
          </div>
        </div>
        <div className="product-view-file">
          <input type="file" name="" id="" />
        </div>
        <div className="product-view-comment-text bg-[#ede8e8] mt-2 pl-3">
          <textarea
            name=""
            id=""
            cols="158"
            rows="10"
            placeholder="Comment"
            className="bg-transparent "
          ></textarea>
          <div className="flex justify-between pr-[20px] pb-2 ">
            <div>✩ ✩ ✩ ✩</div>
            <button className="border-[1px] border-[#000] pl-[15px] pt-[10px] pb-[10px] pr-[15px] bg-[#aeaeae]">
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
export default function CardProduct() {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="cart w-[850px] m-0 m-auto bg-[#ececec] p-[35px]">
      <div className="cart-top flex gap-[275px] mb-5">
        <div className="cart-back">
          {" "}
          <strong> &#60; Back</strong>
        </div>
        <div className="cart-title">
          {" "}
          <strong> Shopping cart </strong>
        </div>
      </div>
      <div className="cart-center">
        <div className="cart-content flex justify-between items-center">
          <div className="cart-img">
            <img
              src="https://haycafe.vn/wp-content/uploads/2022/06/anh-pho-dem-mua-dong.jpg"
              className="w-[150px] h-[150px]"
              alt=""
            />
          </div>
          <div className="cart-name-price pl-5 w-[414px]">
            <h6 className="cart-name text-[20px]">Product Name</h6>
            <div className="cart-price flex items-center pt-5">
              <div className="text-[16px]">
                <strong>23452352345 đ</strong>
              </div>
              <small className="text-[#adadad] text-[13px] pl-10">
                {" "}
                <del> 78967896789 đ</del>
              </small>
            </div>
          </div>
          <div className="cart-totol-delete">
            <div className="cart-delete text-right">
              {" "}
              <DeleteIcon />
            </div>
            <div className="cart-totol bg-[#fff] w-[100px] h-[30px] cursor-pointer rounded-[5px] mt-2 mr-[10px]">
              <input
                type="button"
                value="-"
                onClick={handleDecrease}
                className="w-[25px] h-full"
              />
              <input
                type="number"
                value={quantity}
                className="w-[50px] h-full text-center"
                readOnly
              />
              <input
                type="button"
                value="+"
                onClick={handleIncrease}
                className="w-[25px] h-full cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[2px] bg-[#fff] mt-5"></div>
        <div className="cart-content flex justify-between items-center mt-5">
          <div className="cart-img">
            <img
              src="https://haycafe.vn/wp-content/uploads/2022/06/anh-pho-dem-mua-dong.jpg"
              className="w-[150px] h-[150px]"
              alt=""
            />
          </div>
          <div className="cart-name-price pl-5 w-[414px]">
            <h6 className="cart-name text-[20px]">Product Name</h6>
            <div className="cart-price flex items-center pt-5">
              <div className="text-[16px]">
                <strong>23452352345 đ</strong>
              </div>
              <small className="text-[#adadad] text-[13px] pl-10">
                {" "}
                <del> 78967896789 đ</del>
              </small>
            </div>
            <div className="cart-discount">
              <strong>Discount</strong>
              <p className="w-[414px] overflow-hidden truncate">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                autem dolores h
              </p>
            </div>
          </div>
          <div className="cart-totol-delete">
            <div className="cart-delete text-right">
              {" "}
              <DeleteIcon />
            </div>
            <div className="cart-totol bg-[#fff] w-[100px] h-[30px] cursor-pointer rounded-[5px] mt-2 mr-[10px]">
              <input
                type="button"
                value="-"
                onClick={handleDecrease}
                className="w-[25px] h-full"
              />
              <input
                type="number"
                value={quantity}
                className="w-[50px] h-full text-center"
                readOnly
              />
              <input
                type="button"
                value="+"
                onClick={handleIncrease}
                className="w-[25px] h-full cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="cart-bottom bg-[#fff] mt-20 p-[5px]">
        <div className="cart-bottom-totol flex justify-between mb-5">
          <div className="cart-bottom-left">Total</div>
          <div className="cart-bottom-left pr-4 text-[#a7a6a6]">123424 đ</div>
        </div>
        <div className="cart-bottom-btn">
          <button className="cart-bottom-order w-full h-[50px] bg-[#ccc] border-2 border-black bg-transparent">
            Proceed order
          </button>
          <button className="carrt-bottom-choose w-full h-[50px] mt-2 bg-[#ccc] border-2 border-black bg-transparent">
            Choose another product
          </button>
        </div>
      </div>
    </div>
  );
}

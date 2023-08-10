import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import ListCardProduct from "../../components/ListCardProduct";
import { useDispatch, useSelector } from "react-redux";
import Widget from "../../components/Widget";
import {
  getProducts,
  getLimitProducts,
  resetState,
} from "../../features/product/productSlice";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    let params = {
      limit: 50,
    };
    dispatch(getLimitProducts(params));
  }, []);
  const productState = useSelector((state) => state.product.products);
  // console.log(productState);
  return (
    <div className=" flex flex-col gap-6">
      <Banner />
      <div className=" flex flex-col gap-6">
        <ListCardProduct type={"PHONE"} productState={productState} />
        <ListCardProduct type={"LAPTOP"} productState={productState} />
        <ListCardProduct type={"WATCH"} productState={productState} />
      </div>

      <Widget />
    </div>
  );
}

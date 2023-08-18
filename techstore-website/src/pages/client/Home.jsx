import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import ListCardProduct from "../../components/ListCardProduct";
import { useDispatch, useSelector } from "react-redux";
import Widget from "../../components/Widget";
import SkeletonProduct from "../../components/SkeletonProduct";

import {
  getProducts,
  getLimitProducts,
  resetState,
} from "../../features/product/productSlice";
export default function Home() {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);
  const { products, isLoading, isSuccess, isError } = productState;

  useEffect(() => {
    dispatch(resetState());
    if (products) {
      let params = {
        // limit: 200,
        // skip: 130,
      };
      dispatch(getLimitProducts(params));
    }
  }, []);
  return (
    <div className=" flex flex-col gap-6">
      <Banner />
      {isLoading ? (
        <div className=" flex flex-col gap-6">
          <SkeletonProduct type={"PHONE"} />
          <SkeletonProduct type={"LAPTOP"} />
          <SkeletonProduct type={"WATCH"} />
          <SkeletonProduct type={"TABLET"} />
          <SkeletonProduct type={"HEADPHONE"} />
          <SkeletonProduct type={"TV"} />
          <SkeletonProduct type={"SCREENPC"} />
        </div>
      ) : (
        <div className=" flex flex-col gap-6">
          <ListCardProduct type={"PHONE"} productState={products} />
          <ListCardProduct type={"LAPTOP"} productState={products} />
          <ListCardProduct type={"WATCH"} productState={products} />
          <ListCardProduct type={"TABLET"} productState={products} />
          <ListCardProduct type={"HEADPHONE"} productState={products} />
          <ListCardProduct type={"TV"} productState={products} />
          <ListCardProduct type={"SCREENPC"} productState={products} />
        </div>
      )}

      <Widget />
    </div>
  );
}

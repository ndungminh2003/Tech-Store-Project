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
  useEffect(() => {
    dispatch(resetState());
    let params = {
      // limit: 80,
      // skip: 30,
    };
    dispatch(getLimitProducts(params));
  }, []);
  const productState = useSelector((state) => state.product);
  const { products, isLoading, isSuccess, isError } = productState;

  return (
    <div className=" flex flex-col gap-6">
      <Banner />
      {isLoading ? (
        <div className=" flex flex-col gap-6">
          <SkeletonProduct type={"PHONE"} />
          <SkeletonProduct type={"LAPTOP"} />
          <SkeletonProduct type={"WATCH"} />
        </div>
      ) : (
        <div className=" flex flex-col gap-6">
          <ListCardProduct type={"PHONE"} productState={products} />
          <ListCardProduct type={"LAPTOP"} productState={products} />
          <ListCardProduct type={"WATCH"} productState={products} />
        </div>
      )}

      <Widget />
    </div>
  );
}

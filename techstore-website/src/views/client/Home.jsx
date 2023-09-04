import React, { useEffect, useState } from "react";
import Banner from "../../components/layout/Banner";
import ListCardProduct from "../../components/product_card/ListCardProduct";
import { useDispatch, useSelector } from "react-redux";
import Widget from "../../components/layout/Widget";
import SkeletonProduct from "../../components/product_card/SkeletonProduct";

import {
  getProductList,
  resetState,
} from "../../features/product/productSlice";
import { getCategoryBrands } from "../../features/pcategory/pcategorySlice";

const productCategories = [
  "Phone",
  "Tablet",
  "Laptop",
  "Headphone",
  "Watch",
  "ScreenPC",
  "TV",
];

export default function Home() {
  const dispatch = useDispatch();
  const [isFetched, setIsFetched] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  let {
    // Phone,
    // Tablet,
    // Laptop,
    // Watch,
    // Headphone,
    // ScreenPC,
    // TV,
    isLoading,
  } = useSelector((state) => state.product);
  // const allProducts = {
  //   Phone: Phone?.products || [],
  //   Tablet: Tablet?.products || [],
  //   Laptop: Laptop?.products || [],
  //   Watch: Watch?.products || [],
  //   Headphone: Headphone?.products || [],
  //   ScreenPC: ScreenPC?.products || [],
  //   TV: TV?.products || [],
  // };

  useEffect(() => {
    dispatch(resetState());
    dispatch(getCategoryBrands());
  }, []);

  const handleLoading = (index) => {
    if (isLoading) return;
    setIsFetched([
      ...isFetched.slice(0, index),
      true,
      ...isFetched.slice(index + 1),
    ]);
  };

  useEffect(() => {
    const handleScroll = () => {
      console.log("scrollY", window.scrollY);
      console.log("scrollHeight", window.scrollHeight);
      console.log("innerHeight", window.innerHeight);
      console.log("scrollY + innerHeight", window.scrollY + window.innerHeight);
      console.log(window.scrollY + window.innerHeight >= window.scrollHeight);
      const windowHeight = window.scrollY + window.innerHeight;
      if (
        windowHeight >= 0 &&
        window.scrollY < 1200 &&
        !isFetched[0] &&
        !isLoading
      ) {
        dispatch(getProductList({ category: "Phone", limit: 10 }));
        handleLoading(0);
      }
      if (
        windowHeight > 1200 &&
        window.scrollY < 1700 &&
        !isFetched[1] &&
        !isLoading
      ) {
        dispatch(getProductList({ category: "Tablet", limit: 10 }));
        handleLoading(1);
      }
      if (
        windowHeight > 1700 &&
        window.scrollY < 2200 &&
        !isFetched[2] &&
        !isLoading
      ) {
        dispatch(getProductList({ category: "Laptop", limit: 10 }));
        handleLoading(2);
      }
      if (
        windowHeight > 2300 &&
        window.scrollY < 2700 &&
        !isFetched[3] &&
        !isLoading
      ) {
        dispatch(getProductList({ category: "Headphone", limit: 10 }));
        handleLoading(3);
      }
      if (
        windowHeight > 2900 &&
        window.scrollY < 3200 &&
        !isFetched[4] &&
        !isLoading
      ) {
        dispatch(getProductList({ category: "Watch", limit: 10 }));
        handleLoading(4);
      }
      if (
        windowHeight > 3400 &&
        window.scrollY < 4000 &&
        !isFetched[5] &&
        !isLoading
      ) {
        dispatch(getProductList({ category: "ScreenPC", limit: 10 }));
        handleLoading(5);
      }
      if (
        windowHeight > 4000 &&
        window.scrollY < 4500 &&
        !isFetched[6] &&
        !isLoading
      ) {
        dispatch(getProductList({ category: "TV", limit: 10 }));
        handleLoading(6);
      }
      if (!isFetched.includes(false)) {
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY, isLoading]);

  return (
    <div className=" flex flex-col gap-6">
      <Banner />
      {productCategories.map((type, index) => (
        <div key={type} className="flex flex-col gap-6">
          {!isFetched[index] ? (
            <SkeletonProduct type={type} />
          ) : (
            <ListCardProduct type={type} /*products={allProducts[type]}*/ />
          )}
        </div>
      ))}
      <Widget />
    </div>
  );
}

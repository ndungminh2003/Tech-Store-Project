import React, { useState, useEffect } from "react";
import CardProduct from "../components/CardProduct";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from "react-redux";

export default function CatalogSearch() {
  const products = useSelector((state) => state.product?.searchedProducts);

  const [sortedProducts, setSortedProducts] = useState(
    products?.findProduct || []
  );
  const totalProducts = products?.totalProducts || 0;

  const sortLowToHigh = () => {
    const sorted = [...(products?.findProduct || [])].sort(
      (a, b) => a.price - b.price
    );
    setSortedProducts(sorted);
  };

  const sortHighToLow = () => {
    const sorted = [...(products?.findProduct || [])].sort(
      (a, b) => b.price - a.price
    );
    setSortedProducts(sorted);
  };
  useEffect(() => {
    setSortedProducts(products?.findProduct || []);
  }, [products]);
  return (
    <div className="flex flex-col m-6">
      {totalProducts === 0 ? (
        <span className="flex justify-center text-xl text-red-500 font-bold">
          Error: No products found for the keyword{" "}
          <b className="mx-1">'{products?.keyword}'</b>
        </span>
      ) : (
        <span className="flex justify-center text-xl text-gray-500">
          Found <b className="mx-1">{totalProducts}</b> products for the keyword{" "}
          <b className="mx-1">'{products?.keyword}'</b>
        </span>
      )}

      <div className="flex flex-col gap-2 ml-8">
        <div className="text-3xl text-gray-500 font-bold">Filter</div>
        <div>
          <div className="flex gap-5 cursor-pointer">
            <p
              className="flex justify-center items-center bg-slate-300 p-2 hover:bg-slate-400 hover:duration-200 rounded-xl"
              onClick={sortHighToLow}
            >
              <KeyboardDoubleArrowUpIcon />
              High-priced
            </p>
            <p
              className="flex justify-center items-center bg-slate-300 p-2 hover:bg-slate-400 hover:duration-200 rounded-xl"
              onClick={sortLowToHigh}
            >
              <KeyboardDoubleArrowDownIcon />
              Low-priced
            </p>
          </div>
        </div>
      </div>

      {totalProducts > 0 && (
        <div className="flex flex-row justify-between p-4 flex-wrap">
          {sortedProducts.map((product) => (
            <CardProduct
              key={product._id}
              id={product._id}
              name={product.title}
              price={product.price}
              brand={product.brand}
              images={product.images}
              description={product.description}
            />
          ))}
        </div>
      )}

      {totalProducts > 0 && (
        <div className="flex items-center justify-center text-xl w-36 bg-slate-300 p-4 hover:bg-slate-400 hover:duration-200 rounded-xl cursor-pointer self-center">
          See more
          <KeyboardArrowDownIcon />
        </div>
      )}
    </div>
  );
}

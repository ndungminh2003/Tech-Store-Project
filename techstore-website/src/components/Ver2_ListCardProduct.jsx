import React, { useEffect, useState } from "react";
import CardProduct from "./Ver2_CardProduct";

const brands = [
  {
    name: "Apple",
  },
  {
    name: "Samsung",
  },
  {
    name: "Oppo",
  },
  {
    name: "Xiaomi",
  },
  {
    name: "Vivo",
  },
  {
    name: "Nokia",
  },
  {
    name: "All",
  },
];

export default function ListCardProduct(props) {
  // console.log(props.productState);
  const [products, setProducts] = useState(props.productState);
  useEffect(() => {
    setProducts(props.productState);
  }, [props.productState]);
  // console.log(products);
  return (
    <div className=" flex flex-col">
      <div className=" flex justify-between px-4 py-2">
        <h1 className=" font-bold text-3xl text-gray-500">{props.type}</h1>

        <div className=" flex gap-5">
          {brands.map((brand) => (
            <span className=" cursor-pointer bg-slate-200 p-4 rounded-xl hover:bg-slate-400 duration-300">
              {brand.name}
            </span>
          ))}
        </div>
      </div>

      <div className=" flex flex-row justify-between p-4 flex-wrap">
        {products.map((product) => (
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

      {/* <div className=' flex flex-row justify-between p-4 flex-wrap'>
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div> */}
    </div>
  );
}

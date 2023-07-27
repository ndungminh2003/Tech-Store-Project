import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import CardProduct from '../components/CardProduct'
import ListCardProduct from '../components/ListCardProduct'
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  resetState,
} from "../features/product/productSlice";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
    dispatch(getProducts());
  }, []);
  const productState = useSelector((state) => state.product.products);
  // console.log(productState)
  // const productState = {name: 'iphone', price: 1000, brand: 'apple', image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-13-pro-max-xanh-duong-600x600-600x600.jpg'};
  return (

    <div className=' flex flex-col gap-6'>
      <Banner />

      <div className=''>
        <ListCardProduct type={'PHONE'} productState={productState}/>
        {/* <ListCardProduct type={'LATOP'} productState={productState}/>
        <ListCardProduct pros={'TABLET'} productState={productState}/> */}
      </div>
      
    </div>

  );
}

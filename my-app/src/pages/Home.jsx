import React, { useState } from 'react'
import Banner from '../components/Banner'
import CardProduct from '../components/CardProduct'
import ListCardProduct from '../components/ListCardProduct'

export default function Home() {

  return (

    <div className=' flex flex-col gap-6'>
      <Banner />

      <div className=''>
        <ListCardProduct pros={'PHONE'}/>
        <ListCardProduct pros={'LAPTOP'}/>
        <ListCardProduct pros={'TABLET'}/>
      </div>

    </div>

  );
}

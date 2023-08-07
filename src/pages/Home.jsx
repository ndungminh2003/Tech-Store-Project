import React, { useState } from 'react'
import Banner from '../components/Banner'
import ListCardProduct from '../components/ListCardProduct'
import Widget from '../components/Widget'

export default function Home() {

  return (

    <div className=' flex flex-col gap-6'>
      
      <Banner />
      <div className=' flex flex-col gap-6'>
        <ListCardProduct pros={'PHONE'}/>
        <ListCardProduct pros={'LAPTOP'}/>
        <ListCardProduct pros={'TABLET'}/>
      </div>

      <Widget />

    </div>

  );
}

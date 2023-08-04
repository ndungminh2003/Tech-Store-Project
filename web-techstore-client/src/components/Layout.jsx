import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Support from './Support'

export default function Layout() {
  return (

    <div className=' tw-flex tw-flex-col tw-gap-4 tw-relative '>
      <Header />
        <Outlet />
      <Footer />

      <div className=' tw-fixed tw-bottom-[-6px] tw-right-0 tw-z-50 xxsm:tw-hidden xsm:tw-hidden sm:tw-hidden md:tw-hidden lg:tw-bottom-[87px]'>
        <Support />
      </div>    

    </div>
  )
}

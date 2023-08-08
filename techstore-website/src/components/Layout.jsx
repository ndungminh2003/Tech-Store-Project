import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Support from "./Support";

export default function Layout() {
  return (
    <div className=" flex flex-col relative ">
      <Header />
      <Outlet />
      <Footer />

      <div className=" fixed bottom-[-6px] right-0 z-50 xxsm:hidden xsm:hidden sm:hidden md:hidden lg:bottom-[87px]">
        <Support />
      </div>
    </div>
  );
}

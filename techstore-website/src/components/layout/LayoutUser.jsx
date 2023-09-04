import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import Footer from "./Footer";
import Support from "../Support";

export default function LayoutUser() {
  return (
    <div className=" flex flex-col relative ">
      <Header />
      <ToastContainer
        position="top-center"
        autoClose={250}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
      <Outlet />
      <Footer />

      <div className=" fixed bottom-[-6px] right-0 z-50 xxsm:hidden xsm:hidden sm:hidden md:hidden lg:bottom-[87px]">
        <Support />
      </div>
    </div>
  );
}

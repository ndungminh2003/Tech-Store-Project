import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Headerv2 from "./Headerv2";
import Footer from "./Footer";

export default function Layout() {
  const [showHeader, setShowHeader] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function handleWindowResize() {
      setShowHeader(window.innerWidth > 769);
    }

    function updateShowHeader(path) {
      setShowHeader(
        !path.startsWith("/cart") ||
        path.startsWith("/cart/payment/success") ||
        path.startsWith("/cart/bank-transfer-info") ||
        path.startsWith("/cart/payment-info") ||
        path.startsWith("/cart/voucher") ||
        path.startsWith("/cart/payment")
      );
    }

    function handleLoadOrNavigate() {
      if (location.state && location.state.from === "link") {
        updateShowHeader(location.pathname);
      }
    }

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("popstate", handleLoadOrNavigate);

    if (document.readyState === "complete") {
      handleLoadOrNavigate();
    } else {
      window.addEventListener("load", handleLoadOrNavigate);
    }

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("popstate", handleLoadOrNavigate);
      window.removeEventListener("load", handleLoadOrNavigate);
    };
  }, [location]);

  return (
    <div>
      {showHeader ? <Header /> : <Headerv2 />}
      <Outlet />
      {showHeader ? <Footer /> : ""}
    </div>
  );
}

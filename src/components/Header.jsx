import React, { useState } from "react";

import { NavLink, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CallIcon from "@mui/icons-material/Call";
import NotesIcon from "@mui/icons-material/Notes";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Badge from "@mui/material/Badge";
import "../assets/style/Header.scss";

export default function Header() {
  const links = [
    {
      id: 1,
      link: "order",
      icon: <LocalShippingIcon />,
    },

    {
      id: 2,
      link: "contact",
      icon: <CallIcon />,
    },

    {
      id: 3,
      link: "login",
      icon: <AccountCircleIcon />,
    },
  ];

  const [shoppingCart, setShoppingCart] = useState(2); // State of shopping cart

  return (
    <div className="header bg-slate-800">
      <div className=" flex  w-full h-16 justify-around items-center sticky top-0 z-50">
        <div className="header-logo capitalize cursor-pointer text-3xl text-white">
          <Link to="/">
            <img
              src="../assets/logo/big.png"
              className="w-[269.231px] h-[50px]"
              alt=""
            />
          </Link>
        </div>
        <div className="header-logo-small capitalize cursor-pointer text-3xl text-white">
          <Link to="/">
            <img
              src="../assets/logo/big.png"
              className="w-[34px] h-[34px]"
              alt=""
            />
          </Link>
        </div>

        <div className="header-catalog flex gap-2 items-center px-4 cursor-pointer capitalize text-xl hover:bg-gray-500 hover:rounded-lg hover:py-2 text-white">
          <NotesIcon />
          <span>catalog</span>
        </div>

        <SearchBar />

        <div className="flex gap-2 items-center px-4 cursor-pointer capitalize text-xl hover:bg-gray-500 hover:rounded-lg hover:py-2 text-white">
          <Link to="/cart" className="flex">
            <Badge badgeContent={shoppingCart} color="primary">
              <ShoppingCartIcon color="white" />
            </Badge>
            <div className="header-cart">Shopping Cart</div>
          </Link>
        </div>

        {links.map((link) => (
          <div
            key={link.id}
            className=" header-link flex gap-2 items-center px-4 cursor-pointer capitalize text-xl hover:bg-gray-500 hover:rounded-lg hover:py-2 text-white"
          >
            {link.icon}

            <Link to={link.link}> {link.link} </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

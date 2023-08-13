import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CallIcon from "@mui/icons-material/Call";
import NotesIcon from "@mui/icons-material/Notes";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Badge from "@mui/material/Badge";
import DropDown from "./DropDown";
import useAuth from "../hook/useAuth";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import WatchIcon from "@mui/icons-material/Watch";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import DevicesIcon from "@mui/icons-material/Devices";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const catalog = [
  {
    id: 1,
    type: "Phone",
    icon: <PhoneIphoneIcon />,

    brands: {
      title: "Select by brand",
      brand: [
        "Samsung",
        "iPhone",
        "Xiaomi",
        "OPPO",
        "realme",
        "vivo",
        "Nokia",
        "ASUS",
        "Nubia",
        "Tecno",
        "Infinix",
        "OnePlus",
        "Itel",
      ],
    },

    price: {
      title: "Phone price range",
      range: [
        "Under  5 million VND",
        "From 5 to 10 million VND",
        "From 10 to 15 million VND",
        "Above 15 million VND",
      ],
    },

    hot: {
      title: "Hot",
      product: [
        "iPhone 14 Pro Max",
        "Galaxy Z Fold5",
        "Galaxy Z Flip5",
        "Galaxy S23 Ultra",
        "realme 11 Pro",
        "Oneplus Nord 3",
        "Xiaomi Redmi Note 12 8GB 128GB mới",
        "OPPO Reno10 5G",
      ],
    },
  },

  {
    id: 2,
    type: "Tablet",
    icon: <TabletMacIcon />,

    brands: {
      title: "Select by brand",
      brand: [
        "iPad",
        "Samsung",
        "Xiaomi",
        "Huawei",
        "Lenovo",
        "Nokia",
        "Alcatel",
        "Kindle",
        "Máy đọc sách",
        "Xem thêm tất cả Tablet",
      ],
    },

    price: {
      title: "Tablet price range",
      range: [
        "Under  10 million VND",
        "From 10 to 15 million VND",
        "From 15 to 20 million VND",
        "Above 20 million VND",
      ],
    },

    hot: {
      title: "Hot",
      product: [
        "iPad Gen 10",
        "iPad mini 6",
        "Galaxy Tab S9 Ultra",
        "iPad Air 10.9 2022 M1",
        "Nokia T21",
      ],
    },
  },

  {
    id: 3,
    type: "Laptop",
    icon: <LaptopMacIcon />,

    brands: {
      title: "Select by brand",
      brand: [
        "Mac",
        "HP",
        "Dell",
        "ASUS",
        "Lenovo",
        "Microsoft Surface",
        "Acer",
        "Xiaomi",
        "LG",
        "Huawei",
        "MSI",
        "Gigabyte",
        "Vaio",
      ],
    },

    price: {
      title: "Laptop price range",
      range: [
        "Under  15 million VND",
        "From 15 to 20 million VND",
        "From 20 to 25 million VND",
        "Above 25 million VND",
      ],
    },

    hot: {
      title: "Hot",
      product: [
        "Macbook Pro M2 2022 512GB",
        "Macbook Pro M2 2022 256GB",
        "Macbook Air M2 2022 512GB",
        "Mac Mini M2 2022 512GB",
        "Macbook Air M2 2022 256GB",
        "Asus Vivobook Stale Oled T3304",
        "Lenovo Ideapad 3 15IML05",
      ],
    },
  },

  {
    id: 4,
    type: "Head Phone",
    icon: <HeadphonesIcon />,

    brands: {
      title: "Headset brand",
      brand: [
        "Apple",
        "JBL",
        "Xiaomi",
        "Samsung",
        "Sony",
        "Sennheiser",
        "Soundpeats",
        "Soul",
        "Havit",
        "Edifier",
      ],
    },

    price: {
      title: "Phone price range",
      range: [
        "Under 1 million VND",
        "1 to 3 million VND",
        "From 3 to 5 million VND",
        "Above 5 million VND",
      ],
    },

    hot: {
      title: "Hot",
      product: [
        "AirPods Pro 2",
        "Galaxy Buds 2 Pro",
        "AirPods Pro",
        "Samsung MX-T40",
        "Samsung HW-Q600B",
        "JBL Quantum One",
      ],
    },
  },

  {
    id: 5,
    type: "Watch",
    icon: <WatchIcon />,

    brands: {
      title: "Select by brand",
      brand: [
        "Apple Watch",
        "Samsung",
        "Xiaomi",
        "Huawei",
        "Coros",
        "Garmin",
        "Kieslect",
        "Amazfit",
        "Soundpeats",
        "Oppo",
      ],
    },

    price: {
      title: "Watch price range",
      range: [
        "Under 2 million VND",
        "From 2 to 5 million VND",
        "From 5 to 10 million VND",
        "Above 10 million VND",
      ],
    },

    hot: {
      title: "Hot",
      product: [
        "Samsung Galaxy Watch6 Classic",
        "Samsung Galaxy Watch6",
        "Apple Watch Series 8",
        "Garmin Approach S70",
        "Garmin Epix Pro 2",
        "Huawei band 8",
        "Apple Watch SE",
      ],
    },
  },

  {
    id: 6,
    type: "PC",
    icon: <DevicesIcon />,

    brands: {
      title: "Select by brand",
      brand: [
        "ASUS",
        "Samsung",
        "DELL",
        "LG",
        "MSI",
        "GIGABYTE",
        "HKC",
        "ViewSonic",
        "Philips",
        "AOC",
      ],
    },

    price: {
      title: "PC price range",
      range: [
        "Under 5 million VND",
        "From 5 to 10 million VND",
        "From 10 to 15 million VND",
        "Above 15 million VND",
      ],
    },

    hot: {
      title: "Hot",
      product: ["ASUS", "Samsung", "DELL", "LG", "MSI", "GIGABYTE"],
    },
  },

  {
    id: 7,
    type: "Television",
    icon: <ConnectedTvIcon />,

    brands: {
      title: "Select by brand",
      brand: [
        "Apple Watch",
        "Samsung",
        "Xiaomi",
        "Huawei",
        "Coros",
        "Garmin",
        "Kieslect",
        "Amazfit",
        "Soundpeats",
        "Oppo",
      ],
    },

    price: {
      title: "Select by price",
      range: [
        "From 9 to 12 million VND",
        "From 12 to 15 million VND",
        "Over 15 million VND",
      ],
    },

    hot: {
      title: "Hot",
      product: [
        "Tivi Xiaomi A2 58 inch",
        "Tivi Xiaomi P1 55 inch",
        "Tivi Toshiba 43 inch",
        "Tivi Coocaa FHD 43 inch",
        "Tivi Khung Tranh 50 inch",
        "Khung treo tivi",
      ],
    },
  },
];

export default function Header() {
  const [quantity, setQuantity] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  let { user } = useAuth();
  const handleOnClick = () => {
    setIsOpen((prev) => !prev);
    if (isOpen === false) {
      // Create the overlay element
      const overlay = document.createElement("div");
      overlay.id = "overlay";

      // Apply styles to the overlay
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.53)";
      overlay.style.zIndex = "45";

      // Add the overlay to the body
      document.body.appendChild(overlay);
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    } else {
      // Remove the overlay when isOpen is true
      const overlay = document.getElementById("overlay"); // Assuming the overlay is the first div added to the body
      if (overlay) {
        overlay.remove();
      }
    }
  };

  const [hoveredElement, setHoveredElement] = useState(null);
  const updateQuantityFromLocalStorage = (event) => {
    const cart = JSON.parse(window.localStorage.getItem("cart"));
    const newQuantity = cart ? cart.totalQuantity : 0;
    setQuantity(newQuantity);
  };
  useEffect(() => {
    window.addEventListener("storage", updateQuantityFromLocalStorage);
    return () => {
      window.removeEventListener("storage", updateQuantityFromLocalStorage);
    };
  }, []);

  const handleMouseOver = (c) => {
    setHoveredElement(c);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };

  return (
    <div className=" w-full bg-slate-800 sticky top-0 z-50">
      <div className=" relative container mx-auto flex h-17 justify-around items-center ">
        <Link to="/">
          <div className=" w-52 flex items-center justify-center xxsm:w-36 xsm:w-36 sm:w-36 md:w-44">
            <img src="/logo/big.png" alt="logo" className=" object-fill" />
          </div>
        </Link>

        <div onClick={handleOnClick} className="">
          <div className=" flex gap-2 items-center p-4 cursor-pointer capitalize text-xl lg:text-lg hover:bg-gray-500 hover:rounded-lg hover:py-4 text-white xxsm:hidden xsm:hidden sm:hidden md:hidden">
            <NotesIcon />
            <span>catalog</span>
          </div>

          {isOpen ? (
            <div
              id="catalog"
              className=" absolute left-0 top-[70px] flex flex-col gap-1 w-60 border-2 rounded-3xl ml-2 mt-8 shadow-lg shadow-gray-400 min-w-max h-fit xxsm:hidden xsm:hidden sm:hidden z-50 bg-white"
            >
              {catalog.map((c) => (
                <div
                  key={c.id}
                  onMouseMove={() => handleMouseOver(c)}
                  onMouseOut={handleMouseLeave}
                  className=" flex items-center justify-between p-2 cursor-pointer hover:bg-gray-300 hover:rounded-3xl hover:px-2 "
                >
                  <div>
                    <span>{c.icon}</span>
                    <span className=" ml-1">{c.type}</span>
                  </div>
                  <NavigateNextIcon />
                </div>
              ))}

              {hoveredElement && (
                <div
                  onMouseMove={() => handleMouseOver(hoveredElement)}
                  onMouseOut={handleMouseLeave}
                  className=" absolute w-[84rem] xl:w-[68rem] lg:w-[52rem] md:w-[38rem] h-fit bg-slate-100 left-full rounded-xl z-40"
                >
                  <div className=" flex justify-around p-2 md:gap-8">
                    <div className=" flex flex-col gap-2 text-lg">
                      <div className=" font-bold text-xl">
                        {hoveredElement.brands.title}
                      </div>
                      {hoveredElement.brands.brand.map((b) => (
                        <Link to="search-product">
                          <div className=" cursor-pointer text-gray-600 hover:text-red-500">
                            {b}
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className=" flex flex-col gap-2 text-lg">
                      <div className=" font-bold text-xl">
                        {hoveredElement.price.title}
                      </div>
                      {hoveredElement.price.range.map((b) => (
                        <Link to="search-product">
                          <div className=" cursor-pointer text-gray-600 hover:text-red-500">
                            {b}
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className=" flex flex-col gap-2 text-lg ">
                      <div className=" flex font-bold text-xl items-center gap-1">
                        {hoveredElement.hot.title}
                        <LocalFireDepartmentIcon sx={{ color: "red" }} />
                      </div>
                      {hoveredElement.hot.product.map((b) => (
                        <Link to="search-product">
                          <div className=" cursor-pointer text-gray-600 hover:text-red-500">
                            {b}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            ""
          )}
        </div>

        <SearchBar />

        <Link to="/cart">
          <div className="flex gap-2 items-center p-4 cursor-pointer capitalize text-xl xxsm:text-lg xsm:text-lg sm:text-lg md:text-lg lg:text-lg xsm:flex-col hover:bg-gray-500 hover:rounded-lg hover:py-4 text-white min-w-fit xxsm:hidden">
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartIcon color="white" />
            </Badge>
            <div>Cart</div>
          </div>
        </Link>

        <Link to="/wishlist">
          <div className=" flex gap-2 items-center p-4 cursor-pointer capitalize text-xl hover:bg-gray-500 hover:rounded-lg hover:py-4 text-white xxsm:hidden xsm:hidden sm:hidden md:hidden lg:hidden">
            <FavoriteIcon />
            <span>wishlist</span>
          </div>
        </Link>

        <Link to="/contact">
          <div className=" flex gap-2 items-center p-4 cursor-pointer capitalize text-xl hover:bg-gray-500 hover:rounded-lg hover:py-4 text-white xxsm:hidden xsm:hidden sm:hidden md:hidden lg:hidden">
            <CallIcon />
            <span>contact</span>
          </div>
        </Link>

        <DropDown user={user} />

        {/* <Link to='/login'>
            <div className=' flex gap-2 items-center p-4 cursor-pointer capitalize text-xl hover:bg-gray-500 hover:rounded-lg hover:py-2 text-white xxsm:hidden xsm:hidden sm:hidden md:hidden'>        
              <AccountCircleIcon />      
              <span>login</span>
            </div>
          </Link> */}
      </div>
    </div>
  );
}

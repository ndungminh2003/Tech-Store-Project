import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
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
import { getProductByCatalog } from "../features/product/productSlice";

export default function Banner() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const slides = [
    {
      url:
        "https://fptshop.com.vn/Uploads/originals/2023/6/16/638225012888439267_1920x1080.png",
      alt: "iphone 14",
    },
    {
      url:
        "https://cdn.dienthoaigiakho.vn/photos/1644641693487-s22ultr-info.jpg",
      alt: "samsung",
    },
  ];

  const [hoveredElement, setHoveredElement] = useState(null);

  const handleMouseOver = (c) => {
    setHoveredElement(c);
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };

  const handleClick = (event) => {
    let param = event.target.textContent;
    param = `?brand=${param}&page=1&limit=10`;
    console.log("param", param);
    dispatch(getProductByCatalog(param));
    navigate(`/catalog/${param}`);
  };

  //useState Slides

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setCurrentIndex((currentIndex) => {
        if (currentIndex === slides.length - 1) {
          return 0;
        } else {
          return currentIndex + 1;
        }
      });
    }, 5000);

    return () => {
      clearTimeout(id);
    };
  }, [currentIndex]);

  const prevSlide = () => {
    const isFristSlide = currentIndex === 0;
    const newIndex = isFristSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className=" container mx-auto flex gap-2 justify-between ">
      <div
        id="catalog"
        className=" relative flex flex-col gap-1 w-60 border-2 rounded-3xl ml-2 mt-4 shadow-lg shadow-gray-400 min-w-max h-fit xxsm:hidden xsm:hidden sm:hidden md:hidden "
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
                  // <Link to="search-product">
                  <div
                    className=" cursor-pointer text-gray-600 hover:text-red-500"
                    onClick={handleClick}
                  >
                    {b}
                  </div>
                  // </Link>
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

      <div className=" flex mt-4 p-1 border-4 rounded-3xl h-[35rem] w-[55rem] shadow-lg shadow-gray-400 xxsm:h-[15rem] xsm:h-[25rem] sm:h-[26rem] md:h-[30rem] lg:h-[28rem] xl:h-[30rem]">
        <div className=" relative w-full h-full p-1">
          <img
            src={slides[currentIndex].url}
            alt=""
            className=" rounded-xl w-full h-full object-fit duration-500 "
          />
          <ArrowBackIosIcon
            sx={{ width: 35, height: 35 }}
            onClick={prevSlide}
            className=" absolute top-1/2  translate-x-[0] tranlate-y-[-50%] cursor-pointer p-2 bg-black/20 text-white left-5 text-xl rounded-full"
          />
          <ArrowForwardIosIcon
            sx={{ width: 35, height: 35 }}
            onClick={nextSlide}
            className=" absolute top-1/2  translate-x-[0] tranlate-y-[-50%] cursor-pointer p-2 bg-black/20 text-white right-5 text-xl rounded-full"
          />
        </div>
      </div>

      <div className=" flex flex-col mt-4 py-1 px-1 gap-3 w-[24rem] h-64 xxsm:hidden xsm:hidden sm:hidden md:hidden lg:hidden">
        <img
          src="https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/s21-fe-right-banner-th7.png"
          alt=""
          className=" rounded-3xl cursor-pointer "
        />
        <img
          src="https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/ipadth7-new.png"
          alt=""
          className=" rounded-3xl cursor-pointer  "
        />
        <img
          src="https://cdn2.cellphones.com.vn/690x300,webp,q10/https://dashboard.cellphones.com.vn/storage/RightBanner_PreOrder_WATCH6_Series_07.png"
          alt=""
          className=" rounded-3xl cursor-pointer "
        />
      </div>
    </div>
  );
}

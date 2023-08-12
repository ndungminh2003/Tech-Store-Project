import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { toast } from "react-toastify";

const Style = {
  border: "solid 2 ",
  borderRadius: 4,
  boxShadow: "-1px 1px 5px 0px rgba(128,128,128,1)",
  margin: 0.5,
  height: "450px",
};

export default function CardProduct(props) {
  const [isVisibleShoppingCart, setVisibleShoppingCart] = useState(false);

  const handleMouseOver = () => {
    setVisibleShoppingCart(true);
  };

  const handleMouseLeave = () => {
    setVisibleShoppingCart(false);
  };

  const navigate = useNavigate();
  const [thumbnail, setThumbnail] = useState(
    props.thumbnail ||
      "https://res.cloudinary.com/dqwdvpi4d/image/upload/v1691639790/default-product-image-removebg-preview_p3g0jy.png"
  );
  useEffect(() => {
    if (props.thumbnail === undefined) {
      setThumbnail(
        "https://res.cloudinary.com/dqwdvpi4d/image/upload/v1691639790/default-product-image-removebg-preview_p3g0jy.png"
      );
    } else {
      setThumbnail(props.thumbnail);
    }
  }, [props.images]);

  const handleCardClick = () => {
    navigate(`/product-view/${props.slug}`);
  };
  const handleAddToCart = () => {
    // Lấy dữ liệu từ local storage
    const existingCart = localStorage.getItem("cart");
    const cart = existingCart ? JSON.parse(existingCart) : [];

    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const foundIndex = cart.findIndex((x) => x._id === props.id);
    if (foundIndex > -1) {
      // Sản phẩm đã tồn tại trong giỏ hàng
      cart[foundIndex].count += 1;
      // console.log("cart 2", cart[foundIndex]);
    } else {
      // Sản phẩm chưa có trong giỏ hàng
      const productToAdd = {
        _id: props.id,
        color: props.color,
        name: props.name,
        slug: props.slug,
        thumbnail: props.thumbnail,
        feature: props.feature !== undefined ? props.feature[0] : "",
        price: props.price,
        count: 1,
      };

      cart.push(productToAdd);
    }
    toast.success("Thêm vào giỏ hàng thành công");
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("cart 3", cart);
    // Hiển thị thông báo hoặc cập nhật giao diện nếu cần
  };

  return (
    <div className=" relative">
      <Card
        sx={Style}
        onClick={handleCardClick}
        className="cursor-pointer hover:rounded-2xl hover:duration-75"
      >
        <div className=" flex flex-col gap-2 items-center h-full">
          <div className=" hover:scale-110">
            <CardMedia
              sx={{
                width: 180,
                height: 180,
                objectFit: "contain",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 2,
              }}
              image={
                thumbnail ||
                "https://res.cloudinary.com/dqwdvpi4d/image/upload/v1691639790/default-product-image-removebg-preview_p3g0jy.png"
              }
              title="Laptop"
            />
          </div>

          <div className=" flex flex-col justify-center h-[150px] w-[300px] md:w-[250px] lg:w-[330px]">
            <CardContent className=" flex flex-col h-full ">
              <Typography gutterBottom variant="h6" component="div">
                <span className="md:text-sm">{props.name}</span>
              </Typography>
              <div className=" flex flex-col justify-end h-[140px]">
                <div className=" text-red-700 text-2xl">
                  {" "}
                  <span className=" text-lg">{props.price}đ</span>{" "}
                </div>
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
              </div>
            </CardContent>
          </div>

          <div className="flex w-full justify-end p-1 h-full items-end">
            <div>
              <Button size="small">
                <span className="text-gray-500 mr-1">Favorite</span>
                <FavoriteBorderIcon className="!cursor-pointer z-20 text-[#d70018] hover:animate-ping"></FavoriteBorderIcon>
              </Button>
            </div>
          </div>
        </div>
      </Card>
      {isVisibleShoppingCart ? (
        <div
          className="absolute bottom-[-15px] w-[70%] ml-[-10px] rounded-2xl flex gap-5 justify-center p-5"
          onMouseMove={handleMouseOver}
          onMouseOut={handleMouseLeave}
        >
          <div className=" flex items-center cursor-pointer p-1 bg-slate-700 rounded-xl text-white w-44 h-8 justify-center">
            <button
              onClick={handleAddToCart}
              className=" transition ease-in-out hover:scale-110 duration-300 p-1"
            >
              <span className=" text-sm">ADD TO CART</span>
              <AddShoppingCartIcon sx={{ fontSize: "25px" }} />
            </button>
          </div>
        </div>
      ) : (
        <div
          className="absolute bottom-[-15px] w-[70%] ml-[-20px] rounded-2xl flex gap-5 justify-center p-5"
          onMouseMove={handleMouseOver}
          onMouseOut={handleMouseLeave}
        >
          <div className=" flex items-center cursor-pointer p-1 rounded-xl text-white w-44 h-8 justify-center">
            <button className=" transition ease-in-out hover:scale-110 duration-300 p-1 text-gray-500 flex gap-2 items-center">
              <span className=" text-sm ">ADD TO CART</span>
              <AddShoppingCartIcon sx={{ fontSize: "25px", color: "black" }} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

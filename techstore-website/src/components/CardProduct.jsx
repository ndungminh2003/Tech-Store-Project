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

const Style = {
  border: "solid 2 ",
  borderRadius: 4,
  boxShadow: "-1px 1px 5px 0px rgba(128,128,128,1)",
  margin: 0.5,
  height: "411px",
};

export default function CardProduct(props) {
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

  return (
    <>
      <Card
        sx={Style}
        onClick={handleCardClick}
        className=" cursor-pointer hover:border-gray-400 hover:border-[2px] hover:rounded-2xl hover:duration-75"
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

          <div className=" flex flex-col justify-center h-[150px]">
            <CardContent className=" flex flex-col h-full w-[300px] md:w-[200px]">
              <Typography gutterBottom variant="h6" component="div">
                {props.name}
              </Typography>
              <div className=" flex flex-col justify-end h-[140px]">
                <div className=" text-red-700 text-2xl"> {props.price}đ </div>
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
                <span className="text-gray-500 mr-1">Add To Favorite</span>
                <FavoriteBorderIcon sx={{ color: "red" }} />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

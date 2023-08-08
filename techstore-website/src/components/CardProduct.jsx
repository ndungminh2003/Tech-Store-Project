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
};

export default function CardProduct(props) {
  const navigate = useNavigate();
  const [images, setImages] = useState(
    props.images || [
      {
        url:
          "https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/1/0/1024_10_.png",
      },
    ]
  );
  useEffect(() => {
    if (props.images?.length === 0 || props.images === undefined) {
      setImages([
        {
          url:
            "https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/1/0/1024_10_.png",
        },
      ]);
    } else {
      setImages(props.images);
    }
  }, [props.images]);

  const handleCardClick = () => {
    navigate(`/product-view/${props.slug}`);
  };

  return (
    <>
      <Card sx={Style} onClick={handleCardClick}>
        <div className=" flex flex-col gap-1 items-center cursor-pointer hover:border-gray-400 hover:border-[2px] hover:rounded-2xl hover:duration-75 ">
          <div className=" hover:scale-110">
            <CardMedia
              sx={{
                width: 140,
                height: 140,
                objectFit: "contain",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 2,
              }}
              image={
                images[0]?.url ||
                "https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/1/0/1024_10_.png"
              }
              title="Lap top"
            />
          </div>

          <div>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {props.name}
              </Typography>
              <div className=" text-red-700 text-2xl"> {props.price}đ </div>
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                />
              </Stack>
            </CardContent>
          </div>

          <div className="flex w-full justify-end p-1">
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

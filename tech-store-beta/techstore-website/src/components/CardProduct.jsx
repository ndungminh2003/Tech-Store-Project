import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Style = {
  
  border: 'solid 2 ',
  borderRadius: 5,
  width:350, 
  height:500,
  boxShadow: '-1px 1px 5px 0px rgba(128,128,128,1)',
  margin: 2, 

}


export default function CardProduct(props) {
  console.log("props", props);
  console.log(props?.images);
  const  [images, setImages] = useState(props.images);
  useEffect(() => {
    setImages(props.images);
  }, [props.images]);
  console.log( "image", images);
  return (

      <Card sx={Style} >

        <div className=' flex flex-col'> 
          
          <CardMedia
            sx={{ width: 250, height: 260, objectFit: 'contain', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            image={images[0]?.url || "https://boschbrandstore.com/wp-content/uploads/2019/01/no-image.png"}
            
            title="Laptop"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <div className=' text-red-700 text-2xl'> {props.price}đ </div>
            <Stack spacing={1}>
              <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
            </Stack>
          </CardContent>

          <div className=' flex justify-around '>
            <Link to='/'><Button size="medium">Buy now</Button></Link>
            
            <Button size="medium" >
              Add to favorite
              <FavoriteIcon sx={{color: 'red'}}/>
            </Button>
          </div>

        </div>

      </Card>
    
  );

}
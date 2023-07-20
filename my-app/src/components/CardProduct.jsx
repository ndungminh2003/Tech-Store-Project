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


const Style = {
  
  border: 'solid 2 ',
  borderRadius: 5,
  width:350, 
  height:500,
  boxShadow: '-1px 1px 5px 0px rgba(128,128,128,1)',
  margin: 2, 

}


export default function CardProduct() {

  return (

      <Card sx={Style} >

        <div className=' flex flex-col'> 
          
          <CardMedia
            sx={{ width: 250, height: 260, objectFit: 'contain', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            image="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_51_1_7.jpg"
            title="Lap top"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Apple Macbook Pro 13 M2 2022  8GB 256GB I Chính hãng Apple Việt Nam
            </Typography>
            <div className=' text-red-700 text-2xl'> 27.000.000đ </div>
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
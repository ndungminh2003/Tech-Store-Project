import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';


const Style = {
  
  border: 'solid 2 ',
  borderRadius: 4,
  boxShadow: '-1px 1px 5px 0px rgba(128,128,128,1)',
  margin: 0.5,

}

export default function CardProduct() {

  return (

      <Card sx={Style} >

        <div className=' tw-flex tw-flex-col tw-gap-1 tw-items-center tw-cursor-pointer hover:tw-border-gray-400 hover:tw-border-[2px] hover:tw-rounded-2xl hover:tw-duration-75 '> 
          
          <div className=' hover:tw-scale-110'>
            <CardMedia
              sx={{ width: 140, height: 140, objectFit: 'contain', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: 2}}
              image="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_51_1_7.jpg"
              title="Lap top"
            />
          </div>
          
          <div>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Apple Macbook Pro 13 M2 2022  8GB 256GB I Chính hãng Apple Việt Nam
              </Typography>
              <div className=' tw-text-red-700 tw-text-2xl'> 27.000.000đ </div>
              <Stack spacing={1}>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
              </Stack>
            </CardContent>
          </div>

          <div className=' tw-flex tw-w-full tw-justify-around tw-p-1'>
            
            <div>
              <Link to='/' className='tw-no-underline'><Button size="small"> <span className=' tw-text-gray-500'>Buy now</span> </Button></Link>
            </div>
            
            <div>
              <Button size="small" >
                <span className='  tw-text-gray-500 tw-mr-1'>Add to favorite</span>
                <FavoriteBorderIcon sx={{color: 'red'}}/>
              </Button>
            </div>
            
          </div>

        </div>

      </Card>
    
  );

}
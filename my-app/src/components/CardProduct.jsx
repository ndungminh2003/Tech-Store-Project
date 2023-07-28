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
  boxShadow: '-1px 1px 5px 0px rgba(128,128,128,1)',
  margin: 0.5,

}

export default function CardProduct() {

  return (

      <Card sx={Style} >

        <div className=' flex flex-col gap-1 items-center'> 
          
          <div>
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
              <div className=' text-red-700 text-2xl'> 27.000.000đ </div>
              <Stack spacing={1}>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
              </Stack>
            </CardContent>
          </div>

          <div className=' flex w-full justify-around p-1'>
            
            <div>
              <Link to='/'><Button size="small"> <span className=' text-gray-500'>Buy now</span> </Button></Link>
            </div>
            
            <div>
              <Button size="small" >
                <span className='  text-gray-500 mr-1'>Add to favorite</span>
                <FavoriteIcon sx={{color: 'red'}}/>
              </Button>
            </div>
            
          </div>

        </div>

      </Card>
    
  );

}
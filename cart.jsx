import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className=' pt-4 font-bold text-red-600 flex flex-row ml-[600px] space-x-[280px]'>
        <div className='go-back text-xl'>
          <div className='button-back'>
          <a href="#" class="text-red-500 underline hover:text-red-700">Back</a>
          </div>
        </div>

        <div className='shopping-cart text-3xl'>
          <p>Shopping Cart</p>
        </div>
        <br></br>
        <br></br>

      </div>
        <div className='p-2.5 box-border w-[800px] ml-[500px] '>
        <div className='product-info flex flex-col items-center'>
          <div className='flex'>
            <div className='product-image'>
            <img src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_51_1_7.jpg" width={200} height={200}></img>
            </div>
            <div className='product-detail'>
              <a href='https://cellphones.com.vn/iphone-14-pro-max.html' className='product-name text-black text-xl hover:text-red-500'>Iphone 14 xanh mộng mơ</a>
              <div className='price-and-quantity flex flex-row'>
                <div className='price flex flex-row'>
                  <p class="sale-price text-3xl text-red-500 font-bold">26.490.000&nbsp;₫</p>
                  <del class="regular-price">29.990.000&nbsp;₫</del>
                </div>
              </div>
              {/*quantity */}
            </div>
          </div>
      
      
        </div>    
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className='continue flex flex-col items-center justify-center'>
      <div className='shadow shadow-gray-950 p-2 w-[800px] border-solid border-4 '>
        <div className='flex flex-row justify-between'>
        <div className='text-2xl font-bold'>Total (temporary): </div>
        <div className='text-xl font-bold'>xxx.xxx.xxxđ</div>
        </div>
        <br></br>
        <a href="#" className='box-address p-2.5 bg-red-500 flex flex-col items-center h-16'>
          <div className='text-white text-3xl font-bold '>Continue</div> 
        </a>
      </div>
      </div>
      
    </div>
    
  )
}

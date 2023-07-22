import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className=' pt-4 font-bold text-red-600 flex flex-row ml-[600px] space-x-[320px]'>
        <div className='go-back text-xl'>
          <div className='button-back'>
            <a href="#" class="text-red-500 underline hover:text-red-700">Back</a>
          </div>
        </div>
        <div className='customer-info text-3xl'>
          <p>Payment</p>
        </div>
        <br></br>
      </div>
     
      
      <br></br>
      <div className='customer-info flex flex-col items-center'>
        <div className=' rounded-2xl shadow shadow-gray-950  p-2.5 box-border w-[800px]'>
          <div className='order-info text-center'>
            <div className='text-2xl font-bold'>ORDER INFORMATION</div>
          </div>
          <br></br>
          <div className=' rounded-2xl shadow shadow-gray-950  p-2.5 box-border w-[780px]'>
            <div className="inner-container flex flex-col items-start text-xl leading-loose">
              <p>Order ID:</p>
              <p>Customer:</p>
              <p>Telephone:</p>
              <p>Email:</p>
              <p>Receive product at:</p>
              <p>Total:</p>
            </div>
          </div>
          <br></br>
          <div className='text-xl font-bold'>Choose payment method</div>
          <div className='payment-method flex flex-wrap justify-between'>
            <a href="#"className=' rounded-2xl shadow shadow-gray-950 text-center leading-[80px] p-2.5 box-border w-[390px]'>Pay at the store</a>
            <a href="#"className=' rounded-2xl shadow shadow-gray-950 text-center leading-[80px] p-2.5 box-border w-[390px]'>Pay via e-Wallet (MOMO, ZaloPay,..)</a>
            <a href="#"className=' rounded-2xl shadow shadow-gray-950 text-center leading-[80px] p-2.5 box-border w-[390px]'>Pay by cards (VISA, Mastercard,...)</a>
            <a href="#"className=' rounded-2xl shadow shadow-gray-950 text-center leading-[80px] p-2.5 box-border w-[390px]'>Transfer money</a>
          </div>
      </div>
    <br></br>
    <br></br>
    <br></br>
      <div className='  shadow shadow-gray-950 p-2 w-[800px] border-solid border-4 '>
        <div className='flex flex-row justify-between'>
        <div className='text-2xl font-bold'>Total: </div>
        <div className='text-2xl font-bold text-red-500'>xxx.xxx.xxxđ</div>
        </div>
        <br></br>
        <a href="#" className='box-address p-2.5 bg-red-500 flex flex-col items-center h-16'>
          <div className='text-white text-3xl font-bold '>Continue</div> 
        </a>
      </div>
    <br></br>
    <br></br>
      
      </div>    

    </div>
    
  )
}

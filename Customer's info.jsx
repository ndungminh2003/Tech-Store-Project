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

        <div className='customer-info text-3xl'>
          <p>Customer's info</p>
        </div>
        <br></br>
        <br></br>

      </div>
      <div className='customer-info flex flex-col items-center'>
        <div className=' rounded-2xl shadow shadow-gray-950  p-2.5 box-border w-[800px]'>
          <div className='text-2xl font-bold'>Customer's Information</div>
          <div className="inner-container flex flex-col items-center ">
              <input className="e-input w-[600px] h-9 text-xl rounded-xl" type="text" placeholder="Full name (must have)" maxLength={50} autocomplete='off' />
              <input className="e-input w-[600px] h-9 text-xl rounded-xl" type="text" placeholder="Telephone (must have)" maxLength={10} autocomplete='off'/>
              <input className="e-input w-[600px] h-9 text-xl rounded-xl" type="text" placeholder="Email (to receive bills and VAT)" maxLength={100} autocomplete='off'/>
          </div>
          <div className='text-2xl font-bold'>Address</div>
          <div className='box-address rounded-3xl p-2.5 bg-gray-200'>
            <div className="inner-container flex d-flex items-start justify-evenly">
              <select class="form-select form-select-sm mb-3 w-[250px] h-9 rounded-xl" id="city" aria-label=".form-select-sm">
                <option value="" selected>City</option>           
              </select>
        
              <select class="form-select form-select-sm mb-3 w-[250px] h-9 rounded-xl" id="district" aria-label=".form-select-sm">
                <option value="" selected>District</option>
              </select>
            </div>
            <div className="inner-container flex flex-col items-center ">
              <input className="e-input w-[600px] h-9 text-base rounded-xl" type="text" placeholder="House number and street" maxLength={100} autocomplete='off'/>
            </div>
          </div>
    <br></br>
        <div className='other-request inner-container flex flex-col items-center'>
          <input className="e-input w-[750px] h-10 text-xl rounded-xl" type="text" placeholder="Other requests" maxLength={100} autocomplete='off'/>
        </div>
    <br></br>
      </div>
    <br></br>
    <br></br>
    <br></br>
      <div className='  shadow shadow-gray-950 p-2 w-[800px] border-solid border-4 '>
        <div className='flex flex-row justify-between'>
        <div className='text-2xl font-bold'>Total (temporary): </div>
        <div className='text-xl font-bold'>xxx.xxx.xxxđ</div>
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

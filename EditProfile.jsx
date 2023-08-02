import React from 'react'
import { useFormik } from 'formik';

export default function Edit() {

	const validate = values => {
		const errors = {};
		if (values.name.length > 30) {		
			errors.name = 'Must be 30 characters or less';
		}

		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			errors.email = 'Invalid email address';
		}

		return errors;
	}

	const formik = useFormik({
		initialValues: {
			name: '',
			gender: '',
			email: '',
			phone: '',
			birthday: '',
			address: '',
		},
		validate,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	
	const data = {
		name: 'Name: Minh Dung Nguyen',
		gender: 'Male',
		email: 'Email: minhdungnguyen2003@gmail.com',
		phone: 'Phone Number: 0934117756',
		birthday: 'Birthday: 15/02/2003',
		address: 'Address: District 8 TPHCM',
	}

	return (

			<div className=" tw-container"> 
				<form action=""  onSubmit={formik.handleSubmit} className=' tw-flex tw-justify-center tw-p-6'>	
					<div className=' tw-flex tw-flex-col tw-gap-4 tw-items-center tw-w-1/2 tw-min-w-[400px]'>

						<div className=" tw-text-center">
							<div className=' tw-font-bold tw-text-4xl'>TechStore</div>
							<div className=' tw-font-bold tw-text-lg tw-text-gray-600'>Minh Dung Nguyen</div> 
						</div>

						<div className=' tw-flex tw-flex-col tw-gap-5 tw-w-full'>
					
							<div className=' tw-flex tw-flex-col'>
								<input id='name' name="name" type="text" className=' tw-w-full tw-p-4 tw-border-b-gray-300 tw-border-b-[1px] tw-rounded-md tw-outline-none focus:tw-border-sky-500 focus:tw-duration-500 ' value={formik.values.name} onChange={formik.handleChange} placeholder={data.name} />
								{formik.errors.name ? <div className=' tw-text-red-500 tw-text-sm tw-ml-4'>{formik.errors.name}</div> : null} 	
							</div>

							<div className=" ">
								<label className=' tw-ml-4 tw-text-gray-400'>Gender</label>	
								<select id='gender' name="gender" className=' tw-w-full tw-p-4 tw-border-b-gray-300 tw-border-b-[1px] tw-rounded-md tw-outline-none focus:tw-border-sky-500 focus:tw-duration-500 ' value={formik.values.gender} onChange={formik.handleChange}  >
									<option value="Male">Male</option>
									<option value="Female">Female</option>
								</select>
							</div>

							<div className=" tw-flex tw-flex-col">		
								<input id='email' name="email" type="email" className=' tw-w-full tw-p-4 tw-border-b-gray-300 tw-border-b-[1px] tw-rounded-md tw-outline-none focus:tw-border-sky-500 focus:tw-duration-500 '  value={formik.values.email} onChange={formik.handleChange}  placeholder={data.email}/>
								{formik.errors.email ? <div className=' tw-text-red-500 tw-text-sm tw-ml-4'>{formik.errors.email}</div> : null}
							</div>

							<div className=" ">								
								<input id='phone' type="tel" name="phone" className=' tw-w-full tw-p-4 tw-border-b-gray-300 tw-border-b-[1px] tw-rounded-md tw-outline-none focus:tw-border-sky-500 focus:tw-duration-500 '  value={formik.values.phone} onChange={formik.handleChange}  placeholder={data.phone} pattern="^[0-9]{10}$" />	
							</div>

							<div className="">		
								<label className=' tw-ml-4 tw-text-gray-400'>Birthday</label>			
								<input id='birthday' type="date" name="birthday" className=' tw-w-full tw-p-4 tw-border-b-gray-300 tw-border-b-[1px] tw-rounded-md tw-outline-none focus:tw-border-sky-500 focus:tw-duration-500 '  value={formik.values.birthday} onChange={formik.handleChange}  placeholder={data.birthday} />
							</div>

							<div className=" ">							
								<input id='address' type="text" name="address" className=' tw-w-full tw-p-4 tw-border-b-gray-300 tw-border-b-[1px] tw-rounded-md tw-outline-none focus:tw-border-sky-500 focus:tw-duration-500 '  value={formik.values.address} onChange={formik.handleChange}  placeholder={data.address} />											
							</div>

							<div className=" ">								
								<input id='change_pass' type="password" name="change_pass" className=' tw-w-full tw-p-4 tw-border-b-gray-300 tw-border-b-[1px] tw-rounded-md tw-outline-none focus:tw-border-sky-500 focus:tw-duration-500 '  value={formik.values.change_pass} onChange={formik.handleChange}  placeholder='Update password' />
							</div>

							<button type="submit" className=" tw-w-full tw-flex tw-justify-center tw-bg-slate-400 tw-items-center tw-p-4 tw-border-b-gray-300 tw-border-b-[1px] tw-rounded-md tw-outline-none focus:tw-border-sky-500 focus:tw-duration-500 tw-text-xl">Submit</button>
							
						</div>
					</div>
				</form>
    
			</div>

  )
}

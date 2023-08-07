import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Edit() {

	const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

	const formik = useFormik({
		initialValues: {
			name: '',
			gender: '',
			email: '',
			phone: '',
			birthday: '',
			address: '',
		},

		validationSchema: Yup.object({
			name: Yup.string()
						.max(30, 'Must be 30 characters or less'),
			email: Yup.string()
						.email('Invalid email address'),
			phone: Yup.string()
						.max(11, "Please enter a valid mobile number.")
						.min(10, "Please enter a valid mobile number.")
						.matches(phoneRegExp, "Please enter a valid mobile number.")
		}),

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

			<div className=" container"> 
				<form action=""  onSubmit={formik.handleSubmit} className=' flex justify-center p-6'>	
					<div className=' flex flex-col gap-4 items-center w-1/2 min-w-[400px]'>

						<div className=" flex flex-col items-center gap-2">
							<div className=' w-20 h-20'>
								<img src="/logo/small.png" alt="logo" className=' rounded-xl'/>
							</div>
							<div className=' font-bold text-xl text-gray-600'>Minh Dung Nguyen</div> 
						</div>

						<div className=' flex flex-col gap-5 w-full'>
					
							<div className=' flex flex-col'>
								<input id='name' name="name" type="text" className=' w-full p-4 border-b-gray-300 border-b-[1px] rounded-md outline-none focus:border-sky-500 focus:duration-500 ' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}  placeholder={data.name} />
								{ formik.touched.name && formik.errors.name ? <div className=' text-red-500 text-sm ml-4'>{formik.errors.name}</div> : null} 	
							</div>

							<div className=" ">
								<label className=' ml-4 text-gray-400'>Gender</label>	
								<select id='gender' name="gender" className=' w-full p-4 border-b-gray-300 border-b-[1px] rounded-md outline-none focus:border-sky-500 focus:duration-500 ' value={formik.values.gender} onChange={formik.handleChange}   >
									<option value="Male">Male</option>
									<option value="Female">Female</option>
								</select>
							</div>

							<div className=" flex flex-col">		
								<input id='email' name="email" type="email" className=' w-full p-4 border-b-gray-300 border-b-[1px] rounded-md outline-none focus:border-sky-500 focus:duration-500 '  value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}  placeholder={data.email}/>
								{ formik.touched.email && formik.errors.email ? <div className=' text-red-500 text-sm ml-4'>{formik.errors.email}</div> : null}
							</div>

							<div className=" ">								
								<input id='phone' type="tel" name="phone" className=' w-full p-4 border-b-gray-300 border-b-[1px] rounded-md outline-none focus:border-sky-500 focus:duration-500 '  value={formik.values.phone} onChange={formik.handleChange}  onBlur={formik.handleBlur} placeholder={data.phone} />	
								{ formik.touched.phone && formik.errors.phone ? <div className=' text-red-500 text-sm ml-4'>{formik.errors.phone}</div> : null}
							</div>

							<div className="">		
								<label className=' ml-4 text-gray-400'>Birthday</label>			
								<input id='birthday' type="date" name="birthday" className=' w-full p-4 border-b-gray-300 border-b-[1px] rounded-md outline-none focus:border-sky-500 focus:duration-500 '  value={formik.values.birthday} onChange={formik.handleChange}  placeholder={data.birthday} />
							</div>

							<div className=" ">							
								<input id='address' type="text" name="address" className=' w-full p-4 border-b-gray-300 border-b-[1px] rounded-md outline-none focus:border-sky-500 focus:duration-500 '  value={formik.values.address} onChange={formik.handleChange}   placeholder={data.address} />											
							</div>

							<div className=" ">								
								<input id='change_pass' type="password" name="change_pass" className=' w-full p-4 border-b-gray-300 border-b-[1px] rounded-md outline-none focus:border-sky-500 focus:duration-500 '  value={formik.values.change_pass} onChange={formik.handleChange}   placeholder='Update password' />
							</div>

							<button type="submit" className=" w-full flex justify-center bg-slate-400 items-center p-4 border-b-gray-300 border-b-[1px] rounded-md outline-none focus:border-sky-500 focus:duration-500 text-xl">Submit</button>
							
						</div>
					</div>
				</form>
    
			</div>

  )
}

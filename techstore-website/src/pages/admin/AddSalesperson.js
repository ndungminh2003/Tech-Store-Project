import { React, useEffect, useState } from "react";
import CustomInput from "../../components/CustomInput";
import { useLocation, useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import {
  getAUser,
  createAUser,
  updateAUser,
  resetState,
} from "../../features/account/accountSlice";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

let schema = yup.object().shape({
  name: yup.string().required("Name is Required"),
  email: yup.string().required("Email is Required"),
  mobile: yup
    .string()
    .required("Enter phone number")
    .matches(phoneRegExp, "Phone number is not valid"),
  dateOfBirth: yup.date(),
  role: yup.string().required("Role is Required"),
  address: yup.string().required("Address is Required"),
});

const defaultSalespersonState = {
  name: "",
  email: "",
  mobile: "",
  dateOfBirth: "",
  role: "",
  address: "",
};

const AddSalesperson = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const getUserId = location.pathname.split("/")[3];
  const newSalesperson = useSelector((state) => state.account);

  const changeDateFormet = (date) => {
    const newDate = new Date(date).toLocaleDateString();
    let [day, month, year] = newDate.split("/");
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    return [year, month, day].join("-");
  };

  useEffect(() => {
    dispatch(resetState());
  }, []);
  useEffect(() => {
    if (getUserId !== undefined) {
      dispatch(getAUser(getUserId));
    } else {
      dispatch(resetState());
    }
  }, [getUserId]);

  const {
    isSuccess,
    isError,
    isLoading,
    createdUser,
    updatedUser,
    userDetail,
  } = newSalesperson;

  let salesperson = userDetail || defaultSalespersonState;

  salesperson = {
    name: salesperson.name,
    email: salesperson.email,
    mobile: salesperson.mobile,
    dateOfBirth: changeDateFormet(salesperson.dateOfBirth),
    role: salesperson.role,
    address: salesperson.address,
  };

  useEffect(() => {
    if (isSuccess && createdUser) {
      toast.success("Salesperson Added Successfullly!");
    }
    if (isSuccess && updatedUser) {
      toast.success("Salesperson Updated Successfullly!");
      navigate("/admin/list-salesperson");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: salesperson,
    validationSchema: schema,
    onSubmit: (values) => {
      console.log("values", values);
      if (getUserId !== undefined) {
        const data = { id: getUserId, accountData: values };
        dispatch(updateAUser(data));
        dispatch(resetState());
      } else {
        dispatch(createAUser(values));
        formik.resetForm();
        dispatch(resetState());
        // This is optional
        // setTimeout(() => {
        //   dispatch(resetState());
        // }, 1000);
      }
    },
  });

  return (
    <div>
      <h3 className="mb-4 title text-3xl font-bold">
        {getUserId !== undefined ? "Edit" : "Add"} Salesperson
      </h3>
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex gap-3 flex-col"
        >
          <div className=" h-16">
            <CustomInput
              type="text"
              label="Enter Salesperson Name"
              name="name"
              onChng={formik.handleChange("name")}
              onBlr={formik.handleBlur("name")}
              val={formik.values.name}
            />
            <div className="error">
              {formik.touched.name && formik.errors.name}
            </div>
          </div>

          <div className=" h-16">
            <CustomInput
              type="email"
              label="Enter Salesperson Email"
              name="email"
              onChng={formik.handleChange("email")}
              onBlr={formik.handleBlur("email")}
              val={formik.values.email}
            />
            <div className="error">
              {formik.touched.email && formik.errors.email}
            </div>
          </div>

          <div className=" h-16">
            <CustomInput
              type="number"
              label="Enter Phone Number"
              name="mobile"
              onChng={formik.handleChange("mobile")}
              onBlr={formik.handleBlur("mobile")}
              val={formik.values.mobile}
            />
            <div className="error">
              {formik.touched.mobile && formik.errors.mobile}
            </div>
          </div>

          <div className=" h-16">
            <CustomInput
              type="date"
              name="dateOfBirth"
              onChng={formik.handleChange("dateOfBirth")}
              onBlr={formik.handleBlur("dateOfBirth")}
              val={formik.values.dateOfBirth}
              id="date"
            />
            <div className="error">
              {formik.touched.dateOfBirth && formik.errors.dateOfBirth}
            </div>
          </div>

          <div className=" h-16">
            <select
              name="role"
              onChange={formik.handleChange("role")}
              onBlur={formik.handleBlur("role")}
              value={formik.values.role}
              className="block appearance-none w-full px-2 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded py-3 mb-3"
              id=""
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="salesperson">Salesperson</option>
            </select>
            <div className="error">
              {formik.touched.role && formik.errors.role}
            </div>
          </div>

          <div className=" h-16">
            <CustomInput
              type="text"
              label="Enter Salesperson Address"
              name="address"
              onChng={formik.handleChange("address")}
              onBlr={formik.handleBlur("address")}
              val={formik.values.address}
            />
            <div className="error">
              {formik.touched.address && formik.errors.address}
            </div>
          </div>
          
          <button
            className="inline-block align-middle text-center select-none font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-green-500 text-white hover:bg-green-600 border-0 rounded-3 my-5"
            type="submit"
          >
            {getUserId !== undefined ? "Edit" : "Add"} Salesperson
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSalesperson;

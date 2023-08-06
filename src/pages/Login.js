import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login, resetState } from "../features/auth/authSlice";

let schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
});
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });
  const authState = useSelector((state) => state.auth);

  const { user, isError, isSuccess, isLoading, message } = authState;
  useEffect(() => {
    localStorage.clear();
    // localStorage.removeItem("token");
    // localStorage.removeItem("user");
    dispatch(resetState());
  }, []);
  const role = user?.role !== undefined ? user.role : "";
  useEffect(() => {
    if (isSuccess && role === "admin") {
      navigate("admin");
    } else if (isSuccess && role === "user") {
      navigate("");
    } else {
      navigate("");
    }
  }, [user, isError, isSuccess, isLoading]);

  return (
    <div className="py-5" style={{ background: "#1e293b", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-[25%] bg-white rounded-[3px] mx-auto p-4">
        <h3 className="text-center title">Login</h3>
        <p className="text-center">Login to your account to continue.</p>
        <div className="error text-center">
          {message.message === "Rejected" ? "You are not an Admin" : ""}
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
          {/* <CustomInput
            type="text"
            label="Email Address"
            id="email"
            name="email"
            onChng={formik.handleChange("email")}
            onBlr={formik.handleBlur("email")}
            val={formik.values.email}
          /> */}
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
            onChng={formik.handleChange("email")}
            onBlr={formik.handleBlur("email")}
            val={formik.values.email}
          ></input>
          <div className="error mt-2">
            {formik.touched.email && formik.errors.email}
          </div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />

          <div className="error mt-2">
            {formik.touched.password && formik.errors.password}
          </div>
          <div className="mb-3 text-end">
            <Link to="forgot-password" className="">
              Forgot Password?
            </Link>
          </div>
          <div className="text-center">
            <button
              className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
              style={{ background: "#1e293b" }}
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

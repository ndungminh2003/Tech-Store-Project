import React, { useEffect } from "react";
import CustomInput from "../../components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login, resetAuthState } from "../../features/auth/authSlice";

let schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
});
const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      values = { ...values, role: "admin" };
      dispatch(login(values));
    },
  });
  const authState = useSelector((state) => state.auth);

  const { user, isError, isSuccess, isLoading, message } = authState;
  useEffect(() => {
    // localStorage.clear();
    // localStorage.removeItem("token");
    // localStorage.removeItem("user");
    // dispatch(resetAuthState());
  }, []);

  useEffect(() => {
    if (isSuccess && user?.role === "admin") {
      navigate("/admin");
    } else if (user?.role === undefined) {
      navigate("/admin-login");
    } else if (isSuccess && user?.role !== "admin") {
      navigate(-1);
    } else {
      navigate("/admin-login");
    }
  }, [user, isError, isSuccess, isLoading]);

  return (
    <div
      className="admin py-5"
      style={{ background: "#1e293b", minHeight: "100vh" }}
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-1/4 bg-white rounded-lg mx-auto p-6">
        <h3 className="text-center title text-3xl font-bold p-2">Login</h3>
        <p className="text-center mb-4">Login to your account to continue.</p>
        <div className="error text-center">
          {message.message === "Rejected" ? "You are not an Admin" : ""}
        </div>
        <form
          action=""
          onSubmit={formik.handleSubmit}
          className=" flex flex-col gap-2"
        >
          <CustomInput
            type="text"
            label="Email Address"
            id="email"
            name="email"
            onChng={formik.handleChange("email")}
            onBlr={formik.handleBlur("email")}
            val={formik.values.email}
          />
          <div className="error mt-2">
            {formik.touched.email && formik.errors.email}
          </div>
          <CustomInput
            type="password"
            label="Password"
            id="pass"
            name="password"
            onChng={formik.handleChange("password")}
            onBlr={formik.handleBlur("password")}
            val={formik.values.password}
          />
          <div className="error mt-2">
            {formik.touched.password && formik.errors.password}
          </div>
          <div className="mb-3 text-end">
            <Link to="forgot-password" className="">
              Forgot Password?
            </Link>
          </div>
          <button
            className="border-0 px-3 py-2 text-white font-bold w-full text-center text-decoration-none text-xl rounded-lg"
            style={{ background: "#1e293b" }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

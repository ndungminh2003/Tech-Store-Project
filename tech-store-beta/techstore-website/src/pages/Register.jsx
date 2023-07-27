import styles from "../styles/signin.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import LoginInput from "../components/LoginInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import CircledIconBtn from "../components/CircledIconBtn";
import register from "../features/user/userSlice";

const initialValues = {
  name: "",
  email: "",
  password: "",
  conf_password: "",
};

const RegisterValidation = Yup.object({
  name: Yup.string()
    .required("What's your name?")
    .min(2, "First name must be between 2 and 16 characters. ")
    .max(16, "First name must be between 2 and 16 characters. ")
    .matches(/^[aA-zZ]/, "Numbers and special characters are not allowed."),
  email: Yup.string()
    .required(
      "You'll need this when you log in and if you ever need to reset your password."
    )
    .email("Enter a valid email address."),
  password: Yup.string()
    .required(
      "Enter a combination of at least six numbers, letters and punctuation marks (such as ! and &)."
    )
    .min(6, "Password must be at least 6 characters.")
    .max(36, "Password can't be more than 36 characters"),
  conf_password: Yup.string()
    .required("Confirm your password")
    .oneOf([Yup.ref("password")], "Passwords must match."),
});

export default function Register() {
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: RegisterValidation,
    onSubmit: (values) => {
      console.log("Register Form Values:", values);
      dispatch(register(values));
      formik.resetForm();
    },
  });

  return (
    <>
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              We'd be happy to join us ! <Link href="/">Go Store</Link>
            </span>
          </div>
          <div className={styles.login__form}>
            <h1>Register</h1>
            <p>Get access to one of the best shopping services in Viet Nam.</p>
            <form onSubmit={formik.handleSubmit}>
              <LoginInput
                type="text"
                name="name"
                icon="user"
                placeholder="Full Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <div style={{ color: "red" }}>{formik.errors.name}</div>
              )}
              <LoginInput
                type="text"
                name="email"
                icon="email"
                placeholder="Email Address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              )}
              <LoginInput
                type="password"
                name="password"
                icon="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              )}
              <LoginInput
                type="password"
                name="conf_password"
                icon="password"
                placeholder="Re-type password"
                value={formik.values.conf_password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.conf_password && formik.errors.conf_password && (
                <div style={{ color: "red" }}>
                  {formik.errors.conf_password}
                </div>
              )}
              <button type="submit">Submit</button>
              <div className={styles.forgot}>
                <Link to="/login">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

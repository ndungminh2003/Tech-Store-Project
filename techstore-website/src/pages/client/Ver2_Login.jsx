import styles from "../../styles/signin.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import LoginInput from "../../components/Ver2_LoginInput";
import { useDispatch } from "react-redux";
import CircledIconBtn from "../../components/Ver2_CircledIconBtn";
import { login } from "../../features/user/userSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { resetState } from "../../features/user/userSlice";

const initialValues = {
  email: "",
  password: "",
};

const loginValidation = Yup.object({
  email: Yup.string()
    .required("Email address is required.")
    .email("Please enter a valid email address."),
  password: Yup.string().required("Please enter a password"),
});

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: loginValidation,
    onSubmit: (values) => {
      dispatch(login(values));
      navigate(from, { replace: true });
    },
  });
  useEffect(() => {
    dispatch(resetState());
  }, []);

  return (
    <>
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              We'd be happy to join us ! <Link to="/">Go Store</Link>
            </span>
          </div>
          <div className={styles.login__form}>
            <h1>Login</h1>
            <p>Get access to one of the best shopping services in Viet Nam.</p>
            <form onSubmit={formik.handleSubmit}>
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
              <CircledIconBtn type="submit" text="Login" />
              <div className={styles.forgot}>
                <Link to="/forgot">Forgot password ?</Link>
              </div>
              <div className={styles.forgot}>
                <Link to="/register">Register</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

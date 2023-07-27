import styles from "../styles/signin.module.scss";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";
import LoginInput from "../components/LoginInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import CircledIconBtn from "../components/CircledIconBtn";
import login from "../features/user/userSlice";

const initialvalues = {
  login_email: "",
  login_password: "",
  name: "",
  email: "",
  password: "",
  conf_password: "",
};

const loginValidation = Yup.object({
  login_email: Yup.string()
    .required("Email address is required.")
    .email("Please enter a valid email address."),
  login_password: Yup.string().required("Please enter a password"),
});

export default function Login() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialvalues);
  const { login_email, login_password } = user;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

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
            <Formik
              enableReinitialize
              initialValues={{ login_email, login_password }}
              validationSchema={loginValidation}
              onSubmit={(values) => {
                dispatch(login(values));
              }}
            >
              {() => (
                <Form>
                  <LoginInput
                    type="text"
                    name="login_email"
                    icon="email"
                    placeholder="Email address"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    name="login_password"
                    icon="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  <CircledIconBtn type="submit" text="Login" />
                  <div className={styles.forgot}>
                    <Link to="/forget">Forgot password ?</Link>
                  </div>
                  <div className={styles.forgot}>
                    <Link to="/register">Register</Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

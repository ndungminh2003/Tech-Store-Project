import styles from "./styles.module.scss";
import { BiUser } from "react-icons/bi";
import { SiMinutemailer } from "react-icons/si";
import { IoKeyOutline } from "react-icons/io5";
import { ErrorMessage, useField } from "formik";
export default function LoginInput({ icon, placeholder, ...props }) {
  console.log("props in LoginInput", props);
  return (
    <div className={`${styles.input}`}>
      {icon == "user" ? (
        <BiUser />
      ) : icon == "email" ? (
        <SiMinutemailer />
      ) : icon == "password" ? (
        <IoKeyOutline />
      ) : (
        ""
      )}
      <input
        type={props.type}
        name={props.name}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

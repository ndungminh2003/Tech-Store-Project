import styles from "./styles.module.scss";
import { BiUser } from "react-icons/bi";
import { SiMinutemailer } from "react-icons/si";
import { IoKeyOutline } from "react-icons/io5";
import { BiPhone } from "react-icons/bi";
export default function LoginInput({ icon, placeholder, ...props }) {
  return (
    <div className={`${styles.input}`}>
      {icon == "user" ? (
        <BiUser />
      ) : icon == "email" ? (
        <SiMinutemailer />
      ) : icon == "password" ? (
        <IoKeyOutline />
      ) : icon == "phone" ? (
        <BiPhone />
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

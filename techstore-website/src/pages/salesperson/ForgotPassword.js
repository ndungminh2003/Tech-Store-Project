import React from "react";
import CustomInput from "../../components/CustomInput";
import { useFormik } from "formik";

const ForgotPassword = () => {
  return (
    <div
      className="admin py-5"
      style={{ background: "#ffd333", minHeight: "100vh" }}
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-1/4 bg-white rounded-lg mx-auto p-6 flex flex-col gap-4">
        <h3 className="text-center text-xl font-bold title">Forgot Password</h3>
        <p className="text-center">
          Please Enter your register email to get reset password mail.
        </p>
        <form action="" className=" flex flex-col gap-4">
          <CustomInput
            type="email"
            label="Email Address"
            id="email"
            name="email"
            val="1"
          />

          <button
            className="border-0 px-3 py-2 text-white font-bold w-full rounded-lg"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Send Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

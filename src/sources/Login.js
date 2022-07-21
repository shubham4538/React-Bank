import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "axios";

import { LoginContext, DetailsContext } from "../App";

const schema = yup.object().shape({
  AccountNo: yup
    .number()
    .typeError("Enter an Account number")
    .min(1000000000000000, "Enter a valid number")
    .max(9999999999999999, "Enter a valid number")
    .required("Account number is required"),
  Password: yup.string().required(),
});

function Login() {
  const { isValid, setisValid } = useContext(LoginContext);
  const { userDetails, setUserDetails } = useContext(DetailsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);

    Axios.post("https://bank-react.herokuapp.com/login", data).then((res) => {
      if (res.data.message) {
        console.log(res.data.message);
        alert("Login credentials must match");
      } else {
        alert("Authentication Successfull");
        localStorage.setItem("bankDetails", res.data[0].acc_no);
        setisValid(true);
        setUserDetails(res.data[0]);
      }
    });
  };

  useEffect(() => {
    if (isValid) {
      navigate("/Home");
    }
  }, [isValid]);

  return (
    <div className="parent" style={{ minHeight: "100vh" }}>
      <div className="account" style={{ justifyContent: "center" }}>
        <fieldset>
          <legend className="px-2">Login</legend>
          <form
            className="create-box"
            onKeyPress={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="text-box">
              <h5>Account No.</h5>
              <input
                type="number"
                placeholder="Enter 12 digit Account number"
                {...register("AccountNo")}
              />
              <span role="alert">{errors.AccountNo?.message}</span>
            </div>

            <div className="text-box">
              <h5>Password</h5>
              <input
                type="password"
                autoComplete="off"
                {...register("Password")}
              />
              <span role="alert">{errors.Password?.message}</span>
            </div>
            <div className="text-box mt-4">
              <button type="submit" className="input">
                Submit
              </button>
            </div>
          </form>
        </fieldset>
        <div className="or">
          <hr className="first-hr" />
          <h6 className="mx-2">OR</h6>
          <hr className="second-hr" />
        </div>
        <Link to="/Create" style={{ width: "100%" }}>
          <div className="other-btn">Create</div>
        </Link>
      </div>
    </div>
  );
}

export default Login;

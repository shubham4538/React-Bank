import { useForm } from "react-hook-form";
import { useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "axios";
import Navbar from "./Navbar";
import { LoginContext, DetailsContext } from "../App";

function Deposit() {
  const { isValid } = useContext(LoginContext);
  const { userDetails } = useContext(DetailsContext);

  const schema = yup.object().shape({
    Password: yup.string().required("Enter Password!"),
    Amount: yup.number().typeError("Enter an Amount").max(5000).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (userDetails.password === data.Password) {
      data.number = userDetails.acc_no;
      console.log(data);
      Axios.post("https://bank-react.herokuapp.com/deposit", data).then(
        (res) => {
          alert(res.data);
          window.location.reload();
        }
      );
    } else {
      alert("Incorrect password");
    }
  };

  return isValid ? (
    <>
      <Navbar userDetails={userDetails} isValid={isValid} />
      <div className="parent">
        <div className="account">
          <fieldset>
            <legend className="legend">Deposit Amount</legend>
            <div className="create-box">
              <div className="text-box">
                <h5>Enter Password</h5>
                <input
                  type="password"
                  name="Password"
                  {...register("Password")}
                />
                <span>{errors["Password"]?.message}</span>
              </div>
              <div className="text-box">
                <h5>Amount To Deposit</h5>
                <input
                  type="number"
                  placeholder="Max: 5000"
                  name="Amount"
                  {...register("Amount")}
                />
                <span>{errors["Amount"]?.message}</span>
              </div>
              <div className="text-box mt-4">
                <button
                  type="submit"
                  className="input"
                  onClick={handleSubmit(onSubmit)}
                >
                  Submit
                </button>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </>
  ) : (
    <>
      <Navbar userDetails={userDetails} isValid={isValid} />
      <h1>You Need to Login First !!!</h1>
    </>
  );
}

export default Deposit;

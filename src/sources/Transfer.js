import { useForm } from "react-hook-form";
import { useEffect, useState, useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "axios";

import "../Body.css";
import Navbar from "./Navbar";
import { LoginContext, DetailsContext } from "../App";

const schema = yup.object().shape({
  to: yup
    .number()
    .required("Select an Account Number!")
    .typeError("Select an Account Number!"),
  Amount: yup.number().required().typeError("Enter an Amount"),
});

function Transfer() {
  const { isValid } = useContext(LoginContext);
  const { userDetails } = useContext(DetailsContext);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    Axios.get("https://bank-react.herokuapp.com/transactTo").then((res) => {
      setUserData(res.data);
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dummyData = userData?.filter((data) => {
    if (data.acc_no !== userDetails.acc_no) {
      data.acc_no = parseInt(data.acc_no);
      return data;
    }
  });

  const transferMoney = (data) => {
    data.from = userDetails.acc_no;
    console.log(typeof userDetails.acc_no);
    data.time = Date();
    data.transaction = "sent";
    console.log(data);

    Axios.post("https://bank-react.herokuapp.com/transfer", data).then(
      (res) => {
        if (res.data.err) {
          alert(res.data.err);
        } else {
          alert("Transfer Successful !!!");
          window.location.reload();
        }
      }
    );
  };

  return (
    <>
      <Navbar userDetails={userDetails} isValid={isValid} />
      <div className="parent">
        <div className="account">
          <fieldset>
            <legend>Money Transfer</legend>
            <form onSubmit={handleSubmit(transferMoney)} className="create-box">
              <div className="text-box">
                <h5>Account</h5>
                <select
                  name="account"
                  id="account"
                  {...register("to")}
                  style={{
                    height: "fit-content",
                  }}
                >
                  <option hidden value="">
                    Select
                  </option>
                  {dummyData?.map((value, key) => {
                    return (
                      <option key={key} value={value.acc_no}>
                        {value.acc_no}
                      </option>
                    );
                  })}
                </select>
                <span>{errors.to?.message}</span>
              </div>
              <div className="text-box">
                <h5>Amount</h5>
                <input type="number" {...register("Amount")}></input>
                <span>{errors.Amount?.message}</span>
              </div>
              <div className="text-box mt-4">
                <button type="submit" className="input">
                  Transfer
                </button>
              </div>
            </form>
          </fieldset>
        </div>
      </div>
    </>
  );
}

export default Transfer;

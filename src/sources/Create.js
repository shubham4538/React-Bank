import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Axios from "axios";

import tags from "./RenderTags";

function Create() {
  const [accountNumbers, setAccountNumbers] = useState([]);

  const schema = yup.object().shape({
    Username: yup.string().required(),
    Email: yup.string().email().required(),
    Phone: yup
      .number()
      .typeError("Enter a valid Phone number")
      .min(1000000000, "Enter a valid number")
      .max(9999999999, "Enter a valid number")
      .required("A phone number is required"),
    Password: yup.string().required(),
    Password_Second: yup
      .string()
      .oneOf([yup.ref("Password"), null], "Passwords must match")
      .required(),
    Amount: yup
      .number()
      .typeError("Enter a valid Amount")
      .max(50000, "Cannot Deposit over 50000")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    Axios.get("https://bank-react.herokuapp.com/transactTo").then((res) => {
      console.log(res.data);
      const dummyData = res.data?.map((data) => {
        return data.acc_no;
      });
      setAccountNumbers(dummyData);
    });
  }, []);

  const generateAccNo = () => {
    const acc_num = Math.floor(
      1000000000000000 + Math.random() * 9000000000000000
    );
    return acc_num;
  };

  const navigate = useNavigate();
  const onSubmit = (data) => {
    data.image =
      "https://res.cloudinary.com/shubham4538/image/upload/v1655829691/React-bank/Blank/blank-profile_b5is0b.png";

    var newNum = generateAccNo();
    while (accountNumbers.includes(newNum)) {
      newNum = generateAccNo();
    }
    data.acc_no = newNum;

    Axios.post("https://bank-react.herokuapp.com/create", data).then((res) => {
      if (res.data.err) {
        alert("Creation Failed :(");
      } else {
        alert("Details Submitted Successfully");
        localStorage.setItem("bankDetails", res.data[0].acc_no);
        navigate("/Home");
      }
    });
  };

  return (
    <div className="parent" style={{ minHeight: "100vh" }}>
      <div className="account" style={{ justifyContent: "center" }}>
        <fieldset>
          <legend className="px-2">Create</legend>
          <form
            className="create-box"
            onKeyPress={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            {tags.inputs.map((input, key) => {
              return (
                <div key={key} className="text-box">
                  <h5>{input.label}</h5>
                  <input
                    type={input.type}
                    name={input.name}
                    placeholder={input.placeholder}
                    {...register(`${input.name}`)}
                    autoComplete="off"
                  />
                  <span role="alert">{errors[input.name]?.message}</span>
                </div>
              );
            })}
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
        <Link to="/Login" style={{ width: "100%" }}>
          <div className="other-btn">Login</div>
        </Link>
      </div>
    </div>
  );
}

export default Create;

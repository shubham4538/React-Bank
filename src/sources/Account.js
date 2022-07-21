import { useContext } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import { LoginContext, DetailsContext, ImageContext } from "../App";

function Account() {
  const { isValid } = useContext(LoginContext);
  const { userDetails } = useContext(DetailsContext);
  const imageError = useContext(ImageContext);

  return isValid ? (
    <>
      <Navbar userDetails={userDetails} isValid={isValid} />
      <div className="parent">
        <div className="account-page">
          <div className="personal-info">
            <div className="personal-info-left">
              <img
                className="userdp"
                src={userDetails.image}
                onError={imageError}
              />
              <h3>{userDetails.Username}</h3>
              <div>{userDetails.email}</div>
              <div>{userDetails.mobile}</div>
            </div>
            <div className="personal-info-right">
              <h4>Account Balance</h4>
              <h1>&#8377;{userDetails.acc_bal}</h1>
            </div>
          </div>
          <div className="account-info">
            <Link to={"/Transactions"}>
              <div className="transactions">
                <h4>Transactions</h4>
              </div>
            </Link>
            <Link to={"/Transfer"}>
              <div className="transfer">
                <h4>Transfer</h4>
              </div>
            </Link>
            <Link to={"/Deposit"}>
              <div className="amount">
                <h4>Deposit</h4>
              </div>
            </Link>
          </div>
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

export default Account;

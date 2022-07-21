import { useEffect, useState, useContext } from "react";
import { LoginContext, DetailsContext } from "../App";
import Navbar from "./Navbar";
import "../Body.css";
import Axios from "axios";

function Transactions() {
  const { isValid } = useContext(LoginContext);
  const { userDetails, setUserDetails } = useContext(DetailsContext);
  const [allDetails, setAllDetails] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    Axios.get("https://bank-react.herokuapp.com/transactTo").then((res) => {
      setAllDetails(res.data);
    });
    if (userDetails.transactions) {
      setTransactions(JSON.parse(userDetails.transactions));
    }
  }, [userDetails]);

  return isValid ? (
    <>
      <Navbar userDetails={userDetails} isValid={isValid} />
      <div className="parent" style={{ height: "90vh", overflow: "auto" }}>
        <div className="account" style={{ width: "700px", minWidth: "500px" }}>
          <h5 className="mt-2">
            Transaction data for Account of {userDetails.Username}
          </h5>
          <div className="transaction-scroll">
            <div className="transaction-box">
              {(() => {
                if (transactions.length !== 0) {
                  return transactions.map((value, key1) => {
                    return (
                      <div
                        key={key1}
                        className={
                          value.to
                            ? "transaction back-to"
                            : "transaction back-from"
                        }
                      >
                        <div className="trans-left">
                          <div className="trans-image">
                            {allDetails.map((user, key2) => {
                              if (
                                user.acc_no === value.from ||
                                user.acc_no === value.to
                              ) {
                                return (
                                  <img
                                    key={key2}
                                    className="userdp"
                                    src={user.image}
                                  />
                                );
                              }
                            })}
                          </div>
                          <div className="trans-details">
                            <div className="trans-account">
                              {value.to || value.from}
                            </div>
                            {allDetails.map((user, key2) => {
                              if (
                                user.acc_no === value.from ||
                                user.acc_no === value.to
                              ) {
                                return (
                                  <div key={key2} className="trans-name">
                                    {(value.to ? "To " : "From ") +
                                      user.Username}
                                  </div>
                                );
                              }
                            })}
                          </div>
                        </div>
                        {value.to ? (
                          <div className="trans-right to">-{value.amount}</div>
                        ) : (
                          <div className="trans-right from">
                            +{value.amount}
                          </div>
                        )}
                      </div>
                    );
                  });
                } else {
                  return (
                    <div
                      style={{
                        alignSelf: "center",
                        padding: "10px",
                        fontSize: "20px",
                        fontWeight: 600,
                        color: "#5d5d5d",
                      }}
                    >
                      No Transactions yet...
                    </div>
                  );
                }
              })()}
            </div>
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
export default Transactions;

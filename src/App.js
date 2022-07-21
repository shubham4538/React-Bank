import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Axios from "axios";

import Login from "./sources/Login";
import Create from "./sources/Create";
import Transfer from "./sources/Transfer";
import Transactions from "./sources/Transactions";
import Deposit from "./sources/Deposit";
import Main from "./sources/Main";
import Account from "./sources/Account";
import Settings from "./sources/Settings";

export const LoginContext = React.createContext();
export const DetailsContext = React.createContext();
export const ImageContext = React.createContext();

function App() {
  const username = localStorage.getItem("bankDetails");
  const [userDetails, setUserDetails] = useState({});
  const [isValid, setisValid] = useState(false);
  const url =
    "https://res.cloudinary.com/shubham4538/image/upload/v1655829691/React-bank/Blank/blank-profile_b5is0b.png";
  const imageError = (event) => {
    event.target.src = url;
  };

  useEffect(() => {
    if (username !== null) {
      Axios.post("https://bank-react.herokuapp.com/userDetails", {
        username: username,
      }).then((res) => {
        if (res.data.err) {
          console.log("err");
        } else {
          setUserDetails(res.data.details[0]);
          setisValid(true);
        }
      });
    }
  }, []);

  return (
    <LoginContext.Provider value={{ isValid, setisValid }}>
      <ImageContext.Provider value={imageError}>
        <DetailsContext.Provider value={{ userDetails, setUserDetails }}>
          <Router>
            <Routes>
              <Route path="/" exact element={<Main />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Create" element={<Create />} />
              <Route path="/Deposit" element={<Deposit />} />
              <Route path="/Home" element={<Account />} />
              <Route path="/Transfer" element={<Transfer />} />
              <Route path="/Transactions" element={<Transactions />} />
              <Route path="/Settings" element={<Settings />} />
            </Routes>
          </Router>
        </DetailsContext.Provider>
      </ImageContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;

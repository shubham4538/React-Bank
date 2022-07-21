import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import "../Styles/Navbar.css";
import Sidebar from "./Sidebar";
import { ImageContext } from "../App";

function Navbar({ userDetails, isValid }) {
  const [sidebar, setSidebar] = useState(false);
  const location = useLocation();
  const imageError = useContext(ImageContext);
  const currentLink = location.pathname;

  let loginDp = "";
  if (isValid) {
    loginDp = (
      <img
        onClick={() => setSidebar(!sidebar)}
        src={userDetails?.image}
        onError={imageError}
        className="userdp"
        style={{ width: "40px", height: "40px", margin: "7px" }}
      ></img>
    );
  } else {
    loginDp = (
      <Link to="/Login">
        <div className="btn">Login</div>
      </Link>
    );
  }

  return (
    <>
      <div>
        {isValid ? (
          <Sidebar
            sidebar={sidebar}
            setSidebar={setSidebar}
            userDetails={userDetails}
            isValid={isValid}
          />
        ) : (
          <></>
        )}
        <div className={sidebar ? "side-back back" : "side-back"}></div>
      </div>
      <nav className="navigation-bar">
        <img
          src={process.env.PUBLIC_URL + "/logo.png"}
          className="logo"
          alt=""
        />
        <h4 style={{ color: "#fff" }}>
          {currentLink.includes("/Home")
            ? "Home"
            : currentLink.includes("/Transactions")
            ? "Transactions"
            : currentLink.includes("/Transfer")
            ? "Transfer"
            : currentLink.includes("/Settings")
            ? "Settings"
            : currentLink.includes("/Deposit")
            ? "Deposit"
            : ""}
        </h4>
        {loginDp}
      </nav>
    </>
  );
}

export default Navbar;

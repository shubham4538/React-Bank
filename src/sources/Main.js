import { useContext } from "react";
import { Link } from "react-router-dom";
import "../Styles/bootstrap.css";
import "../Styles/bootstrap-icons.css";
import "../Styles/fontawesome-icons.css";
import "../App.css";
import "../Body.css";
import "../Styles/Settings.css";
import { LoginContext, DetailsContext } from "../App";

function Main() {
  const { isValid } = useContext(LoginContext);
  const { userDetails } = useContext(DetailsContext);

  if (isValid) {
    return (
      <>
        <div
          className="parent"
          style={{
            alignItems: "center !important",
            minHeight: "100vh !important",
          }}
        >
          <div className="account">
            <h1>Already Logged In !!!</h1>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="parent"
          style={{
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <div className="account">
            <h1 className="m-3">React Bank</h1>
            <Link to="/Login">
              <div className="btn">Login</div>
            </Link>
            <Link to="/Create">
              <div className="create">Create</div>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Main;

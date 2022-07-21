import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ImageContext } from "../App";
import "../Styles/Sidebar.css";

function Sidebar({ userDetails, setSidebar, sidebar }) {
  const location = useLocation();
  const currentLink = location.pathname;
  const imageError = useContext(ImageContext);

  const reload = () => {
    setSidebar(false);
    if (window.confirm("Are you sure you want to Log Out ?")) {
      localStorage.removeItem("bankDetails");
      window.location.reload();
    }
  };

  let hiddenNum = "";
  if (userDetails && userDetails.acc_no) {
    hiddenNum = userDetails.acc_no.toString();
    hiddenNum = "XXXX XXXX XXXX " + hiddenNum.substring(hiddenNum.length - 4);
  }

  document.onclick = function (e) {
    if (e.target.id !== "sidebar" && e.target.className !== "userdp") {
      setSidebar(false);
    }
  };

  return (
    <div id="sidebar" className={sidebar ? "sidebar show" : "sidebar"}>
      <div id="sidebar" className="side-user">
        {userDetails ? (
          <img
            src={userDetails.image}
            onError={imageError}
            className="userdp side-image"
          />
        ) : (
          ""
        )}
        {hiddenNum}
      </div>
      <div className="side-info">
        <Link
          to="/Home"
          onClick={() => setSidebar(false)}
          className={currentLink.includes("/Home") ? "active" : ""}
        >
          <div className="side-info-each">
            <h4>Home</h4>
            <i className="far fa-money-bill"></i>
          </div>
        </Link>
        <Link
          to="/Settings"
          onClick={() => setSidebar(false)}
          className={currentLink.includes("/Settings") ? "active" : ""}
        >
          <div className="side-info-each">
            <h4>Settings</h4>
            <i className="far fa-gear"></i>
          </div>
        </Link>
        <div onClick={reload} className="side-info-each">
          <h4>Log Out</h4>
          <i className="fas fa-power-off"></i>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;

import "./NavigationBar.css";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import hyundaiLogo from "../assets/hyundai-logo.webp";
import account from "../assets/user.webp";

function NavigationBar() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  // If it's mobile
  if (isMobile) {
    return (
      <div className="nav-container">
        <nav>
          <img className="hyundai-logo" src={hyundaiLogo} alt="logo"></img>
          <li className="company-name">
            <Link className="nav-item-company" to="/">
              HYUNDAI
            </Link>
          </li>
        </nav>
        <div className="clear-both"></div>
      </div>
    );
  }
  // Not mobile
  else {
    return (
      <div className="nav-container">
        <nav>
          <ul>
            <div>
              <img className="hyundai-logo" src={hyundaiLogo} alt="logo"></img>
              <li className="company-name">
                <Link className="nav-item-company" to="/">
                  HYUNDAI
                </Link>
              </li>
              <li style={{ float: "left" }}>
                <Link className="nav-item-company" to="/Vehicles">
                  VEHICLES
                </Link>
              </li>
              <li style={{ float: "left" }}>
                <Link className="nav-item-company" to="/ShoppingTools">
                  BUILD YOUR OWN
                </Link>
              </li>
              <li style={{ float: "left" }}>
                <Link className="nav-item-company" to="/ShoppingTools">
                  ABOUT
                </Link>
              </li>
            </div>

            <div className="nav-menu">
              <img
                src={account}
                width="20px"
                style={{ marginRight: "-10px" }}
              ></img>
              <li>
                <Link className="nav-item-company" to="/Owners">
                  MY HYUNDAI
                </Link>
              </li>
            </div>
          </ul>
        </nav>
        <div className="clear-both"></div>
      </div>
    );
  }
}

export default NavigationBar;

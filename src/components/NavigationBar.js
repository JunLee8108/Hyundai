import "./NavigationBar.css";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import hyundaiLogo from "../assets/hyundai-logo.webp"

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
            <img
              className="hyundai-logo"
              src={hyundaiLogo}
              alt="logo"
            ></img>
            <li className="company-name">
              <Link className="nav-item-company" to="/">
                HYUNDAI
              </Link>
            </li>

            <div className="nav-menu">
              <li>
                <Link className="nav-item-company" to="/Vehicles">
                  Vehicles
                </Link>
              </li>
              <li>
                <Link className="nav-item-company" to="/ShoppingTools">
                  Shopping Tools
                </Link>
              </li>
              <li>
                <Link className="nav-item-company" to="/Owners">
                  Owners
                </Link>
              </li>
              <li>
                <Link className="nav-item-company" to="/ContactUs">
                  Contact Us
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

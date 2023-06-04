import "./NavigationBar.css";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="nav-container">
      <nav>
        <img className="hyundai-logo" src="img/hyundai.png" alt="logo"></img>
        <li className="company-name">
          <Link className="nav-item-company" to="/">
            Hyundai
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
      </nav>
      <div className="clear-both"></div>
    </div>
  );
}

export default NavigationBar;

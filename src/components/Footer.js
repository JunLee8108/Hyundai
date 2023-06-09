import "./Footer.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';

function Footer() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  if (isMobile) {
    return (
        <div>
          <div className="footer-container">
            <div className="footer-item">
            <Link 
            to="/Vehicles"
            className="footer-link">
              <h1>Vehicles</h1>
              <div className="arrow-symbol">
              ▼
              </div>
              </Link>
              <div className="clean-both"></div>
            </div>
            <div className="footer-item">
              <h1>Shopping Tools</h1>
              <div className="arrow-symbol">
              ▼
              </div>
              <div className="clean-both"></div>
            </div>
            <div className="footer-item">
              <h1>Owners</h1>
              <div className="arrow-symbol">
              ▼
              </div>
              <div className="clean-both"></div>
            </div>
            <div className="footer-item">
              <h1>About</h1>
              <div className="arrow-symbol">
              ▼
              </div>
              <div className="clean-both"></div>
            </div>
          </div>
        </div>
      );
  }
  else  {
    return (
        <div>
          <div className="footer-container">
            <div className="footer-item">
              <h1>Vehicles</h1>
              <Link
              to="/Vehicles"
              className="footer-link"
              >
              <p>All Vehicles</p>
              </Link>
              <p>SUVs</p>
              <p>Sedans</p>
              <p>Electrified</p>
            </div>
            <div className="footer-item">
              <h1>Shopping Tools</h1>
              <p>Shop Hyundai</p>
            </div>
            <div className="footer-item">
              <h1>Owners</h1>
              <p>Login to MyHyundai</p>
            </div>
            <div className="footer-item">
              <h1>About</h1>
              <p>Our Company</p>
            </div>
          </div>
        </div>
      );
  }
}

export default Footer;

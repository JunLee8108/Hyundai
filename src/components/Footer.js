import "./Footer.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const navigate = useNavigate();

  if (isMobile) {
    return (
      <div>
        <div className="footer-container">
          <div className="footer-item">
            <Link to="/Vehicles" className="footer-link">
              <h1>Vehicles</h1>
            </Link>
            <div className="clean-both"></div>
          </div>
          <div className="footer-item">
            <Link to="ShoppingTools" className="footer-link">
              <h1>Shopping Tools</h1>
            </Link>
            <div className="clean-both"></div>
          </div>
          <div className="footer-item">
            <Link to="/Owners" className="footer-link">
              <h1>Owners</h1>
            </Link>
            <div className="clean-both"></div>
          </div>
          <div className="footer-item">
            <Link to="/About" className="footer-link">
              <h1>About</h1>
            </Link>
            <div className="clean-both"></div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="footer-container">
          <div className="footer-item">
            <h1>Vehicles</h1>
            <Link to="/Vehicles" className="footer-link">
              <p>All Vehicles</p>
            </Link>
          </div>
          <div className="footer-item">
            <Link to="/ShoppingTools" className="footer-link">
              <h1>Shopping Tools</h1>
              <p>Shop Hyundai</p>
            </Link>
          </div>
          <div className="footer-item">
            <h1>Owners</h1>
            <Link to="/Owners" className="footer-link">
              <p>Login to MyHyundai</p>
            </Link>
          </div>
          <div className="footer-item">
            <h1>About</h1>
            <Link to="/About" className="footer-link">
              <p>Our Company</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

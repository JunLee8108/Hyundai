import "./NavigationBar.css";
import { Link, useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import hyundaiLogo from "../assets/hyundai-logo.webp";
import account from "../assets/user.webp";
import menu from "../assets/main-menu.webp";
import deleteButton from "../assets/delete-button.webp";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

/////////////////// STYLED COMPONENTS
let NavLi = styled.li`
  box-sizing: border-box;
  display: inline;
  padding: 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  float: ${(props) => props.float};
  color: ${(props) => props.color};
  margin-top: 3px;
  transition: color 0.2s linear;

  &:hover {
    color: red;
  }
`;

let NavLiCompanyName = styled(NavLi)`
  margin-top: -8px;
  font-size: 30px;

  &:hover {
    color: red;
  }

  @media only screen and (max-width: 767px) {
    margin-top: -18px;
    font-size: 18px;
  }
`;
/////////////////// STYLED COMPONENTS

function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const modalImage = [menu, deleteButton];

  let [modal, setModal] = useState(false);
  let [imageNum, setImageNum] = useState(0);
  const [navbarColor, setNavbarColor] = useState(-1);

  const modalControl = () => {
    if (modal) {
      setModal(false);
      setImageNum(0);
    } else {
      setModal(true);
      setImageNum(1);
    }
  };

  const modalControlFalse = () => {
    setImageNum(0);
    setModal(false);
  };

  useEffect(() => {
    if (location.pathname.includes("Vehicles")) {
      setNavbarColor(1);
    } else if (location.pathname.includes("ShoppingTools")) {
      setNavbarColor(2);
    } else if (location.pathname.includes("About")) {
      setNavbarColor(3);
    } else {
      setNavbarColor(-1);
    }
  }, [location]);

  // If it's mobile
  if (isMobile) {
    return (
      <div className="nav-container-mobile">
        <nav>
          <img className="hyundai-logo" src={hyundaiLogo} alt="logo"></img>
          <NavLiCompanyName
            float="left"
            color="white"
            onClick={() => {
              navigate("/");
              modalControlFalse();
            }}
          >
            HYUNDAI
          </NavLiCompanyName>
          <li className="mobile-menu">
            <button onClick={modalControl}>
              <img src={modalImage[imageNum]} alt=""></img>
            </button>
          </li>
        </nav>
        <div className="clear-both"></div>
        {modal ? (
          <div className="nav-container-mobile-bg">
            <div className="nav-modal">
              <ul>
                <Link to="/Vehicles" className="modal-style">
                  <li onClick={modalControl}>Vehicles</li>
                </Link>
                <Link to="/ShoppingTools" className="modal-style">
                  <li onClick={modalControl}>Build Your Own</li>
                </Link>
                <Link to="/About" className="modal-style">
                  <li onClick={modalControl}>About Hyundai</li>
                </Link>
                <Link to="/Owners" className="modal-style">
                  <li onClick={modalControl}>Login to My Hyundai</li>
                </Link>
              </ul>
            </div>
          </div>
        ) : null}
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
              <NavLiCompanyName
                float="left"
                color="white"
                onClick={() => {
                  navigate("/");
                }}
              >
                HYUNDAI
              </NavLiCompanyName>
              <NavLi
                float="left"
                color={navbarColor === 1 ? "red" : "white"}
                onClick={() => {
                  navigate("/Vehicles");
                  if (location.pathname.includes("Vehicles")) {
                    navigate(0);
                  }
                }}
              >
                VEHICLES
              </NavLi>
              <NavLi
                float="left"
                color={navbarColor === 2 ? "red" : "white"}
                onClick={() => {
                  navigate("/ShoppingTools");
                  if (location.pathname.includes("ShoppingTools")) {
                    navigate(0);
                  }
                }}
              >
                BUILD YOUR OWN
              </NavLi>
              <NavLi
                float="left"
                color={navbarColor === 3 ? "red" : "white"}
                onClick={() => {
                  navigate("/About");
                  if (location.pathname.includes("About")) {
                    navigate(0);
                  }
                }}
              >
                ABOUT
              </NavLi>
            </div>

            <div className="nav-menu">
              <img
                src={account}
                width="20px"
                style={{ marginRight: "-10px", marginTop: "2px" }}
                alt="account-logo"
              ></img>
              <NavLi
                color="white"
                onClick={() => {
                  navigate("/Owners");
                }}
              >
                MY HYUNDAI
              </NavLi>
            </div>
          </ul>
        </nav>
        <div className="clear-both"></div>
      </div>
    );
  }
}

export default NavigationBar;

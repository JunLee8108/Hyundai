import "./NavigationBar.css";
import { Link, useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import hyundaiLogo from "../assets/hyundai-logo.webp";
import account from "../assets/user.webp";
import menu from "../assets/main-menu.webp";
import deleteButton from "../assets/delete-button.webp";
import { useEffect, useState } from "react";
import styled from "styled-components";

/////////////////// STYLED COMPONENTS
let NavLi = styled.li`
  box-sizing: border-box;
  display: inline;
  padding: 20px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  float: ${(props) => props.float};
  color: ${(props) => props.color};

  &:hover {
    color: red;
  }
`;

let NavLiCompanyName = styled.li`
  box-sizing: border-box;
  display: inline;
  padding: 20px;
  float: left;
  margin-top: -10px;
  font-size: 30px;
  font-weight: bold;
  color: white;
  cursor: pointer;

  &:hover {
    color: red;
  }

  @media screen and (max-width: 600px) {
    margin-top: -22px;
    font-size: 20px;
  }
`;
/////////////////// STYLED COMPONENTS

function NavigationBar() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 600px)");

  let [modal, setModal] = useState(false);

  const modalImage = [menu, deleteButton];
  let [imageNum, setImageNum] = useState(0);

  let [btnColor1, setBtnColor1] = useState("white");
  let [btnColor2, setBtnColor2] = useState("white");
  let [btnColor3, setBtnColor3] = useState("white");

  const modalControl = () => {
    if (modal) {
      setModal(false);
      setImageNum(0);
      document.body.style.overflow = "unset";
    } else {
      setModal(true);
      setImageNum(1);
      document.body.style.overflow = "hidden";
    }
  };

  const modalControlFalse = () => {
    setImageNum(0);
    setModal(false);
    document.body.style.overflow = "unset";
  };

  const buttonControl = (e) => {
    if (e == 0) {
      setBtnColor1("red");
      setBtnColor2("white");
      setBtnColor3("white");
    } else if (e == 1) {
      setBtnColor1("white");
      setBtnColor2("red");
      setBtnColor3("white");
    } else if (e == 2) {
      setBtnColor1("white");
      setBtnColor2("white");
      setBtnColor3("red");
    } else {
      setBtnColor1("white");
      setBtnColor2("white");
      setBtnColor3("white");
    }
  };

  let [fade, setFade] = useState("");
  useEffect(() => {
    let timer = setTimeout(() => {
      setFade("nav-modal-fade");
    }, 100);
    return () => {
      clearTimeout(timer);
      setFade("");
    };
  }, [modal]);

  // If it's mobile
  if (isMobile) {
    return (
      <div className="nav-container-mobile">
        <nav>
          <img className="hyundai-logo" src={hyundaiLogo} alt="logo"></img>
          <li className="company-name" onClick={modalControlFalse}>
            <Link className="nav-item-company" to="/">
              HYUNDAI
            </Link>
          </li>
          <li className="mobile-menu">
            <img src={modalImage[imageNum]} onClick={modalControl}></img>
          </li>
        </nav>
        <div className="clear-both"></div>
        {modal == true ? (
          <div className={"nav-modal " + fade}>
            <ul>
              <Link to="/Vehicles" className="modal-style">
                <li onClick={modalControl}>‣ Vehicles</li>
              </Link>
              <Link to="/ShoppingTools" className="modal-style">
                <li onClick={modalControl}>‣ Build Your Own</li>
              </Link>
              <Link to="/About" className="modal-style">
                <li onClick={modalControl}>‣ About Hyundai</li>
              </Link>
              <Link to="/Owners" className="modal-style">
                <li onClick={modalControl}>‣ Login to My Hyundai</li>
              </Link>
            </ul>
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
                onClick={() => {
                  navigate("/");
                  buttonControl(3);
                }}
              >
                HYUNDAI
              </NavLiCompanyName>
              <NavLi
                float="left"
                color={btnColor1}
                onClick={() => {
                  navigate("/Vehicles");
                  buttonControl(0);
                }}
              >
                VEHICLES
              </NavLi>
              <NavLi
                float="left"
                color={btnColor2}
                onClick={() => {
                  navigate("/ShoppingTools");
                  buttonControl(1);
                }}
              >
                BUILD YOUR OWN
              </NavLi>
              <NavLi
                float="left"
                color={btnColor3}
                onClick={() => {
                  navigate("/About");
                  buttonControl(2);
                }}
              >
                ABOUT
              </NavLi>
            </div>

            <div className="nav-menu">
              <img
                src={account}
                width="20px"
                style={{ marginRight: "-10px" }}
                alt="account-logo"
              ></img>
              <NavLi
                color="white"
                onClick={() => {
                  navigate("/Owners");
                  buttonControl(3);
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

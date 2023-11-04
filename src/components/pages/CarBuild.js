import { useParams } from "react-router-dom";
import { carAllData } from "../helpers/CarData";
import Page404 from "../helpers/Page404";
import styled from "styled-components";
import "../CarBuild.css";
import { useState, useEffect } from "react";

///////////////////////////// Styled div
let CarDataContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  opacity: 0;
  animation: flash 1s 0.1s forwards ease;
  @media screen and (max-width: 787px) {
    height: 100%;
    flex-wrap: wrap;
  }
`;

let Flexbox1 = styled.div`
  width: 40%;
  height: 83%;
  margin: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  @media screen and (max-width: 787px) {
    margin-top: 30px;
    width: 100%;
    height: 100%;
  }
`;

let Flexbox2 = styled.div`
  width: 60%;
  height: 80%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 787px) {
    width: 100%;
    height: 820px;
  }
`;

let TrimButton1 = styled.button`
  border: none;
  width: 110px;
  height: 50px;
  padding-right: 10px;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
    transition: all 0.2s linear;
  }

  &:not(:hover) {
    transition: all 0.2s linear;
  }
`;
///////////////////////////// Styled div

function CarBuild() {
  let { id } = useParams();
  let [keyNum, setKey] = useState(0);
  let [imgNum, setImg] = useState(0);
  let [buttonBgColor1, setButtonBgColor1] = useState("black");
  let [buttonBgColor2, setButtonBgColor2] = useState("white");
  let [buttonBgColor3, setButtonBgColor3] = useState("white");
  let [buttonColor1, setButtonColor1] = useState("white");
  let [buttonColor2, setButtonColor2] = useState("black");
  let [buttonColor3, setButtonColor3] = useState("black");

  const handleButton = (e) => {
    if (e == 0) {
      setButtonBgColor1("black");
      setButtonBgColor2("white");
      setButtonBgColor3("white");
      setButtonColor1("white");
      setButtonColor2("black");
      setButtonColor3("black");
    } else if (e == 1) {
      setButtonBgColor1("white");
      setButtonBgColor2("black");
      setButtonBgColor3("white");
      setButtonColor1("black");
      setButtonColor2("white");
      setButtonColor3("black");
    } else {
      setButtonBgColor1("white");
      setButtonBgColor2("white");
      setButtonBgColor3("black");
      setButtonColor1("black");
      setButtonColor2("black");
      setButtonColor3("white");
    }
  };

  let [fade, setFade] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      clearTimeout(timer);
      setFade("");
    };
  }, [keyNum]);

  // 404 Page
  if (id === "" || id > 3) {
    return <Page404 />;
  } else {
    return (
      <div
        style={{
          background:
            "linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%)",
        }}
      >
        <CarDataContainer>
          {/* Flexbox1 */}
          <Flexbox1>
            <h1 className="h1-title">{carAllData[id].year}</h1>
            <h1 className="h1-subtitle">{carAllData[id].name}</h1>

            {/* Different Trim */}
            <div className="trim">
              {/* SE */}
              <TrimButton1
                onClick={() => {
                  setKey(0);
                  handleButton(0);
                }}
                bg={buttonBgColor1}
                color={buttonColor1}
              >
                {carAllData[id].trim[0]}
              </TrimButton1>
              {/* SEL */}
              <TrimButton1
                onClick={() => {
                  setKey(1);
                  handleButton(1);
                }}
                bg={buttonBgColor2}
                color={buttonColor2}
              >
                {carAllData[id].trim[1]}
              </TrimButton1>
              {/* LIMITED */}
              <TrimButton1
                onClick={() => {
                  setKey(2);
                  handleButton(2);
                }}
                bg={buttonBgColor3}
                color={buttonColor3}
              >
                {carAllData[id].trim[2]}
              </TrimButton1>
            </div>

            <div className={"car-build-price " + fade}>
              <h4 style={{ marginBottom: "-15px" }}>Starting MSRP</h4>
              <h2 style={{ marginBottom: "-15px" }}>
                ${carAllData[id].price[keyNum]}
              </h2>
            </div>

            {/* Laptop View */}
            <div className="highlight">
              <KeyHighlights
                keyNum={keyNum}
                id={id}
                setKey={setKey}
              ></KeyHighlights>
            </div>
          </Flexbox1>

          {/* Flexbox2 */}
          <Flexbox2>
            <img
              src={carAllData[id].buildImg[imgNum]}
              style={{ width: "100%" }}
              alt="car"
            />

            {/* Color */}
            <div className="color">
              <button
                style={{ backgroundColor: carAllData[id].color[0] }}
                onClick={() => setImg(0)}
              ></button>
              <button
                style={{ backgroundColor: carAllData[id].color[1] }}
                onClick={() => setImg(1)}
              ></button>
              <button
                style={{ backgroundColor: carAllData[id].color[2] }}
                onClick={() => setImg(2)}
              ></button>
              <button
                style={{ backgroundColor: carAllData[id].color[3] }}
                onClick={() => setImg(3)}
              ></button>
            </div>

            {/* Mobile View */}
            <div className="highlight-mobile">
              <KeyHighlights
                keyNum={keyNum}
                id={id}
                setKey={setKey}
              ></KeyHighlights>
            </div>
          </Flexbox2>
        </CarDataContainer>
      </div>
    );
  }
}

function KeyHighlights(props) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
      clearTimeout(timer);
    };
  }, [props.keyNum]);

  // SE Model
  if (props.keyNum === 0) {
    return (
      <div className={"keyFeature-container " + fade}>
        <div className="title-margin">
          <h2>Key Features</h2>
        </div>
        <div className="key-flex-container">
          {carAllData[props.id].SEKey.map(function (a, i) {
            return <p key={i}>‣ {carAllData[props.id].SEKey[i]}</p>;
          })}
        </div>
      </div>
    );
  }
  // SEL Model
  else if (props.keyNum === 1) {
    return (
      <div className={"keyFeature-container " + fade}>
        <div className="title-margin">
          <h2>Key Features</h2>
        </div>
        <div className="key-flex-container">
          {carAllData[props.id].SELKey.map(function (a, i) {
            return <p key={i}>‣ {carAllData[props.id].SELKey[i]}</p>;
          })}
        </div>
      </div>
    );
  }
  // Limited Model
  else {
    return (
      <div className={"keyFeature-container " + fade}>
        <div className="title-margin">
          <h2>Key Features</h2>
        </div>
        <div className="key-flex-container">
          {carAllData[props.id].LimitedKey.map(function (a, i) {
            return <p key={i}>‣ {carAllData[props.id].LimitedKey[i]}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default CarBuild;

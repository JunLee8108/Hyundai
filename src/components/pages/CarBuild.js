import { useParams } from "react-router-dom";
import { carAllData } from "../helpers/CarData";
import Page404 from "../helpers/Page404";
import styled from "styled-components";
import "../CarBuild.css";
import { useState } from "react";

///////////////////////////// Styled div
let CarDataContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 787px) {
    height: 100%;
    flex-wrap: wrap;
  }
`;

let Flexbox1 = styled.div`
  width: 40%;
  height: 80%;
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
  height: 60%;
  margin: 1px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 787px) {
    width: 100%;
    height: 820px;
  }
`;
///////////////////////////// Styled div

function CarBuild() {
  let { id } = useParams();
  let [keyNum, setKey] = useState(0);
  let [imgNum, setImg] = useState(0);

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
              <button
                onClick={() => {
                  setKey(0);
                }}
                id="button1"
              >
                {carAllData[id].trim[0]}
              </button>
              <button
                onClick={() => {
                  setKey(1);
                }}
                id="button2"
              >
                {carAllData[id].trim[1]}
              </button>
              <button
                onClick={() => {
                  setKey(2);
                }}
                id="button3"
              >
                {carAllData[id].trim[2]}
              </button>
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
  // SE Model
  if (props.keyNum === 0) {
    return (
      <div style={{ width: "55%", height: "100%" }}>
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
      <div style={{ width: "55%", height: "100%" }}>
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
      <div style={{ width: "55%", height: "100%" }}>
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

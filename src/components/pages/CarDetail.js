import { useParams } from "react-router-dom";
import Page404 from "../helpers/Page404";
import { carAllData } from "../helpers/CarData";
import EachTrimDescription from "../helpers/EachTrimDescription";
import "../CarDetail.css";
import { useState } from "react";
import styled from "styled-components";
import GalleryModal from "../helpers/GalleryModal";

//////////////// Styled Component ////////////////
let DetailContainer = styled.div`
  width: 100%;
  height: 650px;
  max-height: 1000px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.bg});

  @media screen and (max-width: 787px) {
    flex-wrap: wrap;
    flex-direction: row;
    height: 350px;
  }
`;
//////////////// Styled Component ////////////////

function CarDetail() {
  let { id } = useParams();
  let [trimNum, setTrimNum] = useState(0);
  let [modal, setModal] = useState(false);
  let [imageNum, setImageNum] = useState(0);

  const handleTrim = () => {
    if (trimNum < 2) {
      setTrimNum((trimNum += 1));
    } else if (trimNum === 2) {
      setTrimNum((trimNum = 0));
    }
  };

  const handleModal = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };

  // 404 Error Page
  if (id === "" || id > 3) {
    return <Page404 />;
  }
  // Car Detail Page
  else {
    return (
      <div className="car-detail-container">
        <DetailContainer bg={carAllData[id].background}>
          <div className="detail-flexbox1">
            <h1 className="detail-title">
              {carAllData[id].year} {carAllData[id].name}
            </h1>
            <h3 className="detail-subtitle">{carAllData[id].description}</h3>
          </div>

          <div className="detail-flexbox2"></div>

          <div className="detail-flexbox3">
            <div className="detail-info-flex-container">
              <div className="detail-info-flexbox">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3 style={{ marginBottom: "0" }}>
                    {carAllData[id].detailTable[0]}
                  </h3>
                  <h4>{"$" + carAllData[id].price[0]}</h4>
                </div>
              </div>
              <div className="detail-info-flexbox">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3 style={{ marginBottom: "0" }}>
                    {carAllData[id].detailTable[1]}
                  </h3>
                  <h4>{carAllData[id].miles + " miles"}</h4>
                </div>
              </div>
              <div className="detail-info-flexbox">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3 style={{ marginBottom: "0" }}>
                    {carAllData[id].detailTable[2]}
                  </h3>
                  <h4>{carAllData[id].power + " hp"}</h4>
                </div>
              </div>
              <div className="detail-info-flexbox">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3 style={{ marginBottom: "0" }}>
                    {carAllData[id].detailTable[3]}
                  </h3>
                  <h4>{carAllData[id].option}</h4>
                </div>
              </div>
            </div>
          </div>
        </DetailContainer>

        {/* Mobile View */}
        <div className="detail-mid-container-mobile">
          <div className="detail-mid-flex-container">
            <div className="detail-mid-flexbox">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 className="detail-mobile-h4">
                  {carAllData[id].detailTable[0]}
                </h4>
                <h5 className="detail-mobile-h5">
                  {"$" + carAllData[id].price[0]}
                </h5>
              </div>
            </div>
            <div className="detail-mid-flexbox">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 className="detail-mobile-h4">
                  {carAllData[id].detailTable[1]}
                </h4>
                <h5 className="detail-mobile-h5">
                  {carAllData[id].miles + " miles"}
                </h5>
              </div>
            </div>
            <div className="detail-mid-flexbox">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 className="detail-mobile-h4">
                  {carAllData[id].detailTable[2]}
                </h4>
                <h5 className="detail-mobile-h5">
                  {carAllData[id].power + " hp"}
                </h5>
              </div>
            </div>
            <div className="detail-mid-flexbox">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 className="detail-mobile-h4">
                  {carAllData[id].detailTable[3]}
                </h4>
                <h5 className="detail-mobile-h5">
                  {carAllData[id].wheel + " inch wheels"}
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-bottom-container">
          <div className="detail-bottom-flex-container">
            <div className="detail-bottom-flexbox">
              <h1>{carAllData[id].trim[0]}</h1>
              <h4>The base trim with lots of great standard features.</h4>
              <h2>${carAllData[id].price[0]}</h2>
              <p>Starting MSRP</p>
              <center>
                <h3>Key Features</h3>
              </center>
              {carAllData[id].SEKey.map(function (a, i) {
                return <p key={i}>‣ {carAllData[id].SEKey[i]}</p>;
              })}
            </div>
            <div className="detail-bottom-flexbox">
              <h1>{carAllData[id].trim[1]}</h1>
              <h4>The balanced trim with plenty of must-have features.</h4>
              <h2>${carAllData[id].price[1]}</h2>
              <p>Starting MSRP</p>
              <center>
                <h3>Key Features</h3>
              </center>
              {carAllData[id].SELKey.map(function (a, i) {
                return <p key={i}>‣ {carAllData[id].SELKey[i]}</p>;
              })}
            </div>
            <div className="detail-bottom-flexbox">
              <h1>{carAllData[id].trim[2]}</h1>
              <h4>The premium trim that treats you with high-end features.</h4>
              <h2>${carAllData[id].price[2]}</h2>
              <p>Starting MSRP</p>
              <center>
                <h3>Key Features</h3>
              </center>
              {carAllData[id].LimitedKey.map(function (a, i) {
                return <p key={i}>‣ {carAllData[id].LimitedKey[i]}</p>;
              })}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <EachTrimDescription id={id} trimNum={trimNum} />
        <div className="detail-nextButton">
          <div style={{ width: "80%" }}></div>
          <div style={{ width: "20%" }}>
            <button onClick={handleTrim}>NEXT TRIM</button>
          </div>
        </div>

        {/* Car Image Gallery */}
        <div className="car-detail-gallery">
          <h1>{carAllData[id].name + " Gallery"}</h1>
          <div className="car-detail-gallery-flex">
            {carAllData[id].imgGallery.map(function (a, index) {
              return (
                <div className="car-detail-gallery-flexbox" key={index}>
                  <img
                    src={carAllData[id].imgGallery[index]}
                    onClick={() => {
                      setModal(true);
                      setImageNum(index);
                      document.body.style.overflow = "hidden";
                    }}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Gallery Modal */}
        {modal ? (
          <GalleryModal id={id} handleModal={handleModal} imageNum={imageNum} />
        ) : null}
      </div>
    );
  }
}

export default CarDetail;

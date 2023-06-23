import { useParams } from "react-router-dom";
import Page404 from "../helpers/Page404";
import { carAllData } from "../helpers/CarData";
import EachTrim from "../helpers/EachTrim";
import "../CarDetail.css";
import { useState } from "react";

function CarDetail() {
  let { id } = useParams();
  let [trimNum, setTrimNum] = useState(0);

  const handleTrim = () => {
    if (trimNum < 2) {
      setTrimNum((trimNum += 1));
    } else if (trimNum == 2) {
      setTrimNum((trimNum = 0));
    }
  };

  if (id == "" || id > 3) {
    return <Page404 />;
  }
  // IONIQ6
  else if (id == 0) {
    return (
      <>
        <div className="ioniq-detail-container background">
          <div className="detail-flexbox1">
            <h1 className="detail-title">
              {carAllData[id].year} {carAllData[id].name}
            </h1>
            <h3 className="detail-subtitle">The first-ever, all electric</h3>
          </div>

          <div className="detail-flexbox2"></div>

          <div className="detail-flexbox3">
            <div className="detail-info-flex-container">
              <div className="detail-info-flexbox">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3 style={{ marginBottom: "0" }}>Starting MSRP</h3>
                  <h4>$41,600</h4>
                </div>
              </div>
              <div className="detail-info-flexbox">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3 style={{ marginBottom: "0" }}>Range Up To</h3>
                  <h4>361 miles</h4>
                </div>
              </div>
              <div className="detail-info-flexbox">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3 style={{ marginBottom: "0" }}>Up To</h3>
                  <h4>320 hp/239 kW</h4>
                </div>
              </div>
              <div className="detail-info-flexbox">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3 style={{ marginBottom: "0" }}>Available</h3>
                  <h4>20 inch wheels</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="detail-mid-container-mobile">
          <div className="detail-mid-flex-container">
            <div className="detail-mid-flexbox">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 className="detail-mobile-h4">Starting MSRP</h4>
                <h5 className="detail-mobile-h5">$41,600</h5>
              </div>
            </div>
            <div className="detail-mid-flexbox">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 className="detail-mobile-h4">Range Up To</h4>
                <h5 className="detail-mobile-h5">361 miles</h5>
              </div>
            </div>
            <div className="detail-mid-flexbox">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 className="detail-mobile-h4">Up To</h4>
                <h5 className="detail-mobile-h5">320 hp/239 kW</h5>
              </div>
            </div>
            <div className="detail-mid-flexbox">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 className="detail-mobile-h4">Available</h4>
                <h5 className="detail-mobile-h5">20 inch wheels</h5>
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
        <EachTrim id={id} trimNum={trimNum} />
        <div className="detail-nextButton">
          <div style={{ width: "80%" }}></div>
          <div style={{ width: "20%" }}>
            <button onClick={handleTrim}>NEXT TRIM</button>
          </div>
        </div>
      </>
    );
  }
  // KONA
  else if (id == 1) {
    return (
      <>
        <div className="kona-detail-container background">
          <div className="detail-flexbox1">
            <h1 className="detail-title">
              {carAllData[id].year} {carAllData[id].name}
            </h1>
            <h3 className="detail-subtitle">Our all-electric small SUV</h3>
          </div>

          <div className="detail-flexbox2">
            <h1 className="detail-title"></h1>
          </div>

          <div className="detail-flexbox3">
            <div className="detail-info-flex-container">
              <div className="detail-info-flexbox">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3 style={{ marginBottom: "0" }}>Starting MSRP</h3>
                  <h4>$33,550</h4>
                </div>
              </div>
              <div className="detail-info-flexbox">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3 style={{ marginBottom: "0" }}>EPA-est.range</h3>
                  <h4>258 miles</h4>
                </div>
              </div>
              <div className="detail-info-flexbox">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3 style={{ marginBottom: "0" }}>Power</h3>
                  <h4>201 hp/150 kW</h4>
                </div>
              </div>
              <div className="detail-info-flexbox">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3 style={{ marginBottom: "0" }}>Standard</h3>
                  <h4>17 inch wheels</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="detail-mid-container-mobile">
          <div className="detail-mid-flex-container">
            <div className="detail-mid-flexbox">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 className="detail-mobile-h4">Starting MSRP</h4>
                <h5 className="detail-mobile-h5">$33,550</h5>
              </div>
            </div>
            <div className="detail-mid-flexbox">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 className="detail-mobile-h4">EPA-est.range</h4>
                <h5 className="detail-mobile-h5">258 miles</h5>
              </div>
            </div>
            <div className="detail-mid-flexbox">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 className="detail-mobile-h4">Power</h4>
                <h5 className="detail-mobile-h5">201 hp/150 kW</h5>
              </div>
            </div>
            <div className="detail-mid-flexbox">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 className="detail-mobile-h4">Standard</h4>
                <h5 className="detail-mobile-h5">17 inch wheels</h5>
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
        <EachTrim id={id} trimNum={trimNum} />
        <div className="detail-nextButton">
          <div style={{ width: "80%" }}></div>
          <div style={{ width: "20%" }}>
            <button onClick={handleTrim}>NEXT TRIM</button>
          </div>
        </div>
      </>
    );
  }
  // TUCSON
  else if (id == 2) {
    return (
      <>
        <div className="tucson-detail-container background">
          <div className="detail-flexbox1">
            <h1 className="detail-title">
              {carAllData[id].year} {carAllData[id].name}
            </h1>
            <h3 className="detail-subtitle">All-purpose hybrid SUV</h3>
          </div>
          <div className="detail-flexbox2">
            <h1 className="detail-title"></h1>
          </div>
          <div className="detail-flexbox3">
            <div className="detail-info-flex-container">
              <div className="detail-info-flexbox">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3 style={{ marginBottom: "0" }}>Starting MSRP</h3>
                  <h4>$31,350</h4>
                </div>
              </div>
              <div className="detail-info-flexbox">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3 style={{ marginBottom: "0" }}>Up To</h3>
                  <h4>38 MPG Hwy</h4>
                </div>
              </div>
              <div className="detail-info-flexbox">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3 style={{ marginBottom: "0" }}>Combined</h3>
                  <h4>226 hp</h4>
                </div>
              </div>
              <div className="detail-info-flexbox">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3 style={{ marginBottom: "0" }}>Standard</h3>
                  <h4>HTRAC AWD</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="detail-mid-container-mobile">
          <div className="detail-mid-flex-container">
            <div className="detail-mid-flexbox">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 className="detail-mobile-h4">Starting MSRP</h4>
                <h5 className="detail-mobile-h5">$31,350</h5>
              </div>
            </div>
            <div className="detail-mid-flexbox">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 className="detail-mobile-h4">Up To</h4>
                <h5 className="detail-mobile-h5">38 MPG Hwy</h5>
              </div>
            </div>
            <div className="detail-mid-flexbox">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 className="detail-mobile-h4">Combined</h4>
                <h5 className="detail-mobile-h5">226 hp</h5>
              </div>
            </div>
            <div className="detail-mid-flexbox">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 className="detail-mobile-h4">Standard</h4>
                <h5 className="detail-mobile-h5">HTRAC AWD</h5>
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
        <EachTrim id={id} trimNum={trimNum} />
        <div className="detail-nextButton">
          <div style={{ width: "80%" }}></div>
          <div style={{ width: "20%" }}>
            <button onClick={handleTrim}>NEXT TRIM</button>
          </div>
        </div>
      </>
    );
  }
  // SONATA
  else if (id == 3) {
    return (
      <>
        <div className="sonata-detail-container background">
          <div className="detail-flexbox1">
            <h1 className="detail-title">
              {carAllData[id].year} {carAllData[id].name}
            </h1>
            <h3 className="detail-subtitle">
              The hybrid sedan that reminds you why you love to drive.
            </h3>
          </div>

          <div className="detail-flexbox2">
            <h1 className="detail-title"></h1>
          </div>

          <div className="detail-flexbox3">
            <div className="detail-info-flex-container">
              <div className="detail-info-flexbox">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3 style={{ marginBottom: "0" }}>Starting MSRP</h3>
                  <h4>$28,250</h4>
                </div>
              </div>
              <div className="detail-info-flexbox">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3 style={{ marginBottom: "0" }}>Up To</h3>
                  <h4>54 MPG Hwy</h4>
                </div>
              </div>
              <div className="detail-info-flexbox">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3 style={{ marginBottom: "0" }}>Combined</h3>
                  <h4>192 hp</h4>
                </div>
              </div>
              <div className="detail-info-flexbox">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3 style={{ marginBottom: "0" }}>Available</h3>
                  <h4>17 inch wheels</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="detail-mid-container-mobile">
          <div className="detail-mid-flex-container">
            <div className="detail-mid-flexbox">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 className="detail-mobile-h4">Starting MSRP</h4>
                <h5 className="detail-mobile-h5">$28,250</h5>
              </div>
            </div>
            <div className="detail-mid-flexbox">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 className="detail-mobile-h4">Up To</h4>
                <h5 className="detail-mobile-h5">54 MPG Hwy</h5>
              </div>
            </div>
            <div className="detail-mid-flexbox">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 className="detail-mobile-h4">Combined</h4>
                <h5 className="detail-mobile-h5">192 hp</h5>
              </div>
            </div>
            <div className="detail-mid-flexbox">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h4 className="detail-mobile-h4">Available</h4>
                <h5 className="detail-mobile-h5">17 inch wheels</h5>
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
        <EachTrim id={id} trimNum={trimNum} />
        <div className="detail-nextButton">
          <div style={{ width: "80%" }}></div>
          <div style={{ width: "20%" }}>
            <button onClick={handleTrim}>NEXT TRIM</button>
          </div>
        </div>
      </>
    );
  }
}

export default CarDetail;

import "./HomeSection.css";
import { Link } from "react-router-dom";
import ioniq from "../assets/hyundai-ioniq-model.webp";
import kona from "../assets/kona-ev.webp";
import sonata from "../assets/sonata.webp";
import tucson from "../assets/tucson-hb.webp";
import { useState, useRef } from "react";

function HomeSection() {
  let [count, setCount] = useState(0);
  let [numForMiles, setNumForMile] = useState(0);
  let [numForAvailable, setNumAvailable] = useState(0);
  const milesOrMPG = ["miles", "MPG Hwy"];
  const available = [" inch wheels", ""];
  const carName = [
    "2023 IONIQ 6",
    "2023 KONA ELECTRIC",
    "2023 SONATA HYBRID",
    "2023 TUCSON HYBRID",
  ];
  const carType = [
    "Electric Sedan",
    "Electric SUV",
    "Hybrid Sedan",
    "Modern Compact SUV",
  ];
  const carPrice = ["41,600", "33,550", "28,250", "31,350"];
  const carPower = ["320", "201", "192", "226"];
  const carWheel = ["20", "17", "17", "HTRAC AWD"];
  const carMiles = ["361", "258", "54", "38"];
  const carImage = [ioniq, kona, sonata, tucson];

  const carInfoForward = () => {
    if (count < carImage.length - 1) {
      count += 1;
      setCount(count);
    }
    if (count == 0 || count == 1) {
      setNumForMile(0);
    } else {
      setNumForMile(1);
    }
    if (count == 3) {
      setNumAvailable(1);
    } else {
      setNumAvailable(0);
    }
  };

  const carInfoBackward = () => {
    if (count > 0 && count <= carImage.length - 1) {
      setCount((count -= 1));
    }
    if (count == 0 || count == 1) {
      setNumForMile(0);
    } else {
      setNumForMile(1);
    }
    if (count == 3) {
      setNumAvailable(1);
    } else {
      setNumAvailable(0);
    }
  };

  const carInfoRef = useRef(null);
  const clickToInfo = () => {
    carInfoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="home-top-background background-img">
        <div className="home-top-content">
          <h1>
            Your Car with, <span className="logo-style">Hyundai</span>
          </h1>
          <Link
          to="/Vehicles"
          >
          <button className="button-learn-more">LEARN MORE</button>
          </Link>
        </div>
      </div>

      <div className="home-bottom-background background-img">
        <div className="home-bottom-content home-top-content ">
          <h3>All-purpose hybrid SUV</h3>
          <h1>2023 TUCSON HYBRID</h1>
          <button className="button-learn-more" onClick={clickToInfo}>
            EXPLORE
          </button>
        </div>
      </div>

      {/* <div className="home-bottom-background2 background-img">
        <div className="home-bottom-content home-top-content ">
          <h3>all-electric small SUV</h3>
          <h1>2023 KONA ELECTRIC</h1>
          <button className="button-learn-more">LEARN MORE</button>
        </div>
      </div> */}

      <div className="home-bottom-background3 background-img">
        <div className="home-bottom-content home-top-content ">
          <h3>The first-ever, all electric</h3>
          <h1>2023 IONIQ 6</h1>
          <button className="button-learn-more" onClick={clickToInfo}>
            EXPLORE
          </button>
        </div>
      </div>

      <div className="home-middle-background" ref={carInfoRef}>
        <div className="home-middle-left align-center">
          <p onClick={carInfoBackward}>«</p>
          <img src={carImage[count]} alt="car-information"></img>
          <p onClick={carInfoForward}>»</p>
        </div>
        <div className="home-middle-right align-center">
          <table>
            <thead>
              <tr>
                <th className="car-name">{carName[count]}</th>
                <th>Starting at</th>
                <th>Up to</th>
                <th>Up to</th>
                <th>Available</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{carType[count]}</th>
                <td className="car-number">${carPrice[count]}</td>
                <td>
                  <span className="car-number">{carMiles[count]}</span>{" "}
                  {milesOrMPG[numForMiles]}
                </td>
                <td>
                  <span className="car-number">{carPower[count]}</span> hp
                </td>
                <td>
                  <span className="car-number">{carWheel[count]}</span>
                  {available[numForAvailable]}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;

import "./HomeSection.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import {carImage, carName, carType, carPrice, carMiles, carPower, carWheel, milesOrMPG, available} from "./helpers/CarData"

function HomeSection() {
  let [count, setCount] = useState(0);
  let [numForMiles, setNumForMile] = useState(0);
  let [numForAvailable, setNumAvailable] = useState(0);
  let navigate = useNavigate();
  
  const carInfoForward = () => {
    if (count < carImage.length - 1) {
      setCount((count += 1));
    } else if (count == carImage.length - 1) {
      setCount((count = 0));
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
    } else if (count == 0) {
      setCount((count = 3));
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
          <Link to="/Vehicles">
            <button className="button-learn-more">EXPLORE</button>
          </Link>
        </div>
      </div>

      <div className="home-bottom-background background-img">
        <div className="home-bottom-content home-top-content ">
          <h3>All-purpose hybrid SUV</h3>
          <h1>2023 TUCSON HYBRID</h1>
          <button className="button-learn-more" onClick={()=>navigate("/CarDetail/2")}>
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
          <button className="button-learn-more" onClick={()=>navigate("/CarDetail/0")}>
            EXPLORE
          </button>
        </div>
      </div>

      <div className="home-middle-background" ref={carInfoRef}>
        <div className="home-middle-left align-center">
          <div className="home-middle-left-flexbox1" onClick={carInfoBackward}>
            <p>«</p>
          </div>
          <div className="home-middle-left-flexbox2">
            <img src={carImage[count]} alt="car-information"></img>
          </div>
          <div className="home-middle-left-flexbox3" onClick={carInfoForward}>
            <p>»</p>
          </div>
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

import "./HomeSection.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  carImage,
  carName,
  carType,
  carPrice,
  carMiles,
  carPower,
  carWheel,
  milesOrMPG,
  available,
  carAllData,
} from "./helpers/CarData";

function HomeSection() {
  let [count, setCount] = useState(0);
  let [numForMiles, setNumForMile] = useState(0);
  let [numForAvailable, setNumAvailable] = useState(0);
  let navigate = useNavigate();

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

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

    if (count == 2) {
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

    if (count == 2) {
      setNumAvailable(1);
    } else {
      setNumAvailable(0);
    }
  };

  const carInfoRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const currentX = e.clientX;
    const diffX = startX - currentX;
    setDragOffset(diffX);

    if (Math.abs(diffX) > 500) {
      if (diffX > 0) {
        carInfoForward();
      } else {
        carInfoBackward();
      }
      setIsDragging(false);
      setDragOffset(0);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragOffset(0);
  };

  let [carFade, setCarFade] = useState("");
  let [infoFade, setInfoFade] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      setCarFade("carFade");
    }, 100);
    let timer2 = setTimeout(() => {
      setInfoFade("infoFade");
    }, 100);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      setCarFade("");
      setInfoFade("");
    };
  }, [count]);

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

      <div className="home-bottom-container">
        <div className="home-bottom-background background-img">
          <div className="home-bottom-content home-top-content ">
            <h3>All-purpose hybrid SUV</h3>
            <h1>2023 TUCSON HYBRID</h1>
            <button
              className="button-learn-more"
              onClick={() => navigate("/CarDetail/2")}
            >
              EXPLORE
            </button>
          </div>
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
          <button
            className="button-learn-more"
            onClick={() => navigate("/CarDetail/0")}
          >
            EXPLORE
          </button>
        </div>
      </div>

      <div className="home-middle-background" ref={carInfoRef}>
        <div className="home-middle-left align-center">
          <div
            className="home-middle-left-flexbox1"
            // onClick={carInfoBackward}
          >
            {/* <p>«</p> */}
          </div>
          <div
            className={"home-middle-left-flexbox2 " + carFade}
            style={{ transform: `translateX(${dragOffset}px)` }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {/* <img
              src={carAllData[count].img}
              alt="car-information"
              onClick={() => {
                navigate("/CarDetail/" + count);
              }}
              className="home-middle-left-img1"
            ></img> */}
            {carAllData.map((a, index) => {
              return (
                <div key={index}>
                  <img
                    src={carAllData[index].img}
                    alt="car-information"
                    onClick={(e) => {
                      // if (e.target.className === "home-middle-left-img1") {
                      //   navigate("/CarDetail/" + count);
                      // }
                      // console.log(e.target.className);
                      // navigate("/CarDetail/" + count);
                    }}
                    className={
                      index === count
                        ? "home-middle-left-img1"
                        : "home-middle-left-img2"
                    }
                  ></img>
                </div>
              );
            })}
          </div>
          <div
            className="home-middle-left-flexbox3"
            // onClick={carInfoForward}
          >
            {/* <p>»</p> */}
          </div>
        </div>

        <div className={"home-middle-right align-center " + infoFade}>
          <table>
            <thead>
              <tr>
                <th className="car-name">
                  {carAllData[count].year} {carAllData[count].name}
                </th>
                <th>Starting at</th>
                <th>Up to</th>
                <th>Up to</th>
                <th>Available</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{carAllData[count].type}</th>
                <td className="car-number">${carAllData[count].price[0]}</td>
                <td>
                  <span className="car-number">{carAllData[count].miles}</span>{" "}
                  {milesOrMPG[numForMiles]}
                </td>
                <td>
                  <span className="car-number">{carAllData[count].power}</span>{" "}
                  hp
                </td>
                <td>
                  <span className="car-number">{carAllData[count].wheel}</span>
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

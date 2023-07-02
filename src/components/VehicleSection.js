import "./VehicleSection.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { carAllData } from "./helpers/CarData";

function VehicleSection() {
  // Screen Transition
  let [fade, setFade] = useState("");
  useEffect(() => {
    let timer = setTimeout(() => {
      setFade("vehicle-section-visible");
    }, 100);

    return () => {
      clearTimeout(timer);
      setFade("");
    };
  }, []);

  return (
    <div className={"vehicle-section-container " + fade}>
      <div className="vehicle-top">
        <div className="vehicle-top-container">
          {carAllData.map(function (a, index) {
            return (
              <div className="vehicle-top-box" key={index}>
                <div className="vehicle-text-box">
                  {index > 1 ? (
                    <p>
                      <span style={{ color: "#00A7EB", fontSize: "20px", marginRight: "2px" }}>
                        🇭
                      </span>{" "}
                      HYBRID
                    </p>
                  ) : (
                    <p>⚡ ELECTRIFIED</p>
                  )}
                  <h1>
                    {carAllData[index].year}{" "}
                    <span className="color-navy">{carAllData[index].name}</span>
                  </h1>
                </div>
                <center>
                  <img src={carAllData[index].img} alt="car-IONIQ"></img>
                </center>
                <center>
                  <div style={{ textAlign: "center" }}>
                    <p style={{ color: "white" }}>
                      {"Starting at $" + carAllData[index].price[0]}
                    </p>
                    <Link to={"/CarDetail/" + index}>
                      <button className="vehicle-button">
                        <p>Explore</p>
                      </button>
                    </Link>
                    <Link to={"/CarBuild/" + index}>
                      <button className="vehicle-button">
                        <p>Build</p>
                      </button>
                    </Link>
                  </div>
                </center>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default VehicleSection;

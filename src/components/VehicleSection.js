import "./VehicleSection.css";
import { carAllData } from "./helpers/CarData";

import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

function VehicleSection() {
  const navigate = useNavigate();
  const [sort, setSort] = useState("");
  const [sortedData, setSortedData] = useState([]);
  const sortFunction = (type) => {
    setSort(type);
  };
  const clickIdentified = (target) => {
    const allButtons = document.querySelectorAll(".categorize-button");
    if (target.innerHTML === "All") {
      for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].style.color = "grey";
      }
      target.style.color = "red";
    } else if (target.innerHTML === "⚡ Electrified") {
      for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].style.color = "grey";
      }
      target.style.color = "orange";
    } else if (
      target.innerHTML ===
      '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="h" class="svg-inline--fa fa-h " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="color: rgb(135, 206, 235);"><path fill="currentColor" d="M320 256l0 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V192L64 192 64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-192 256 0z"></path></svg> Hybrid'
    ) {
      for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].style.color = "grey";
      }
      target.style.color = "skyblue";
    }
  };

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
  }, [sort]);

  useEffect(() => {
    setSortedData(carAllData);
  }, []);

  useEffect(() => {
    if (sort !== "") {
      if (sort === "All") {
        setSortedData(carAllData);
      } else {
        const dataSort = carAllData.filter((data) => data.engine === sort);
        setSortedData(dataSort);
      }
    }
  }, [sort]);

  return (
    <div className="vehicle-entire-container">
      <div className="vehicle-introduction">
        <p>
          Introducing Hyundai's Spectacular Lineup of All Vehicles – Where
          Quality Meets Innovation!
        </p>
      </div>

      {sortedData.length > 0 ? (
        <>
          <div className="vehicle-categorize-button">
            <h4>SORT:</h4>
            <button
              className="categorize-button"
              onClick={(e) => {
                sortFunction(e.target.innerHTML);
                clickIdentified(e.target);
              }}
            >
              All
            </button>
            <button
              className="categorize-button"
              onClick={(e) => {
                sortFunction("Electrified");
                clickIdentified(e.target);
              }}
            >
              ⚡ Electrified
            </button>
            <button
              className="categorize-button"
              onClick={(e) => {
                sortFunction("Hybrid");
                clickIdentified(e.target);
              }}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-h"
                style={{ color: "#87CEEB" }}
              />{" "}
              Hybrid
            </button>
          </div>

          <div className={"vehicle-section-container " + fade}>
            <div className="vehicle-top">
              <div className="vehicle-top-container">
                {sortedData.map(function (a, index) {
                  return (
                    <div className="vehicle-top-box" key={index}>
                      <div className="vehicle-text-box">
                        <p style={{ display: "inline", marginRight: "5px" }}>
                          {sortedData[index].engineIcon}
                        </p>
                        <p style={{ display: "inline" }}>
                          {sortedData[index].engine}
                        </p>

                        <h1>
                          {sortedData[index].year}{" "}
                          <span className="color-navy">
                            {sortedData[index].name}
                          </span>
                        </h1>
                      </div>
                      <center>
                        <img
                          src={sortedData[index].img}
                          alt="car-IONIQ"
                          onClick={() => {
                            if (sortedData[index].id === 3) {
                              navigate("/CarDetail/" + 2);
                            } else if (sortedData[index].id === 2) {
                              navigate("/CarDetail/" + 3);
                            } else {
                              navigate("/CarDetail/" + sortedData[index].id);
                            }
                          }}
                        ></img>
                      </center>
                      <center>
                        <div style={{ textAlign: "center" }}>
                          <p style={{ color: "white" }}>
                            {"Starting at $" + sortedData[index].price[0]}
                          </p>
                          <Link to={"/CarDetail/" + index}>
                            <button className="vehicle-button">
                              <p>EXPLORE</p>
                            </button>
                          </Link>
                          <Link to={"/CarBuild/" + index}>
                            <button className="vehicle-button">
                              <p>BUILD</p>
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
        </>
      ) : (
        <>
          <div className="vehicle-categorize-button">
            <h4>SORT:</h4>
            <button
              className="categorize-button"
              onClick={(e) => {
                sortFunction(e.target.innerHTML);
                clickIdentified(e.target);
              }}
            >
              All
            </button>
            <button
              className="categorize-button"
              onClick={(e) => {
                sortFunction("Electrified");
                clickIdentified(e.target);
              }}
            >
              ⚡ Electrified
            </button>
            <button
              className="categorize-button"
              onClick={(e) => {
                sortFunction("Hybrid");
                clickIdentified(e.target);
              }}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-h"
                style={{ color: "#87CEEB" }}
              />{" "}
              Hybrid
            </button>
          </div>

          <div className={"vehicle-section-container " + fade}>
            <div className="vehicle-top">
              <div className="vehicle-top-container">
                {carAllData.map(function (a, index) {
                  return (
                    <div className="vehicle-top-box" key={index}>
                      <div className="vehicle-text-box">
                        <p style={{ display: "inline" }}>
                          {carAllData[index].engine}
                        </p>

                        <h1>
                          {carAllData[index].year}{" "}
                          <span className="color-navy">
                            {carAllData[index].name}
                          </span>
                        </h1>
                      </div>
                      <center>
                        <img
                          src={carAllData[index].img}
                          alt="car-IONIQ"
                          onClick={() => {
                            navigate("/CarDetail/" + index);
                          }}
                        ></img>
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
        </>
      )}
    </div>
  );
}

export default VehicleSection;

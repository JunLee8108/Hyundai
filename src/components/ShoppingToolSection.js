import "./ShoppingToolSection.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { carAllData } from "./helpers/CarData";

function ShoppingToolSection() {
  let navigate = useNavigate();
  let [translateX, setTranslateX] = useState("");

  useEffect(() => {
    const BrowserWidth = document.body.scrollWidth;
    let timer;

    const onPageLoad = () => {
      if (BrowserWidth > 768) {
        timer = setTimeout(() => {
          setTranslateX("title-translateX");
        }, 900);
      } else {
        timer = setTimeout(() => {
          setTranslateX("title-translateX");
        }, 200);
      }
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
    }

    return () => {
      clearTimeout(timer);
      setTranslateX("");
      window.removeEventListener("load", onPageLoad);
    };
  }, []);

  return (
    <div className="shopping-container">
      <div className="container">
        <div className="title">
          <h1>
            Personalize your HYUNDAI model with our intuitive online tool.
          </h1>
        </div>
        <div className="flex-container">
          {carAllData.map(function (a, index) {
            return (
              <div
                className={"flexbox " + translateX}
                onClick={() => navigate("/CarBuild/" + index)}
                key={index}
              >
                <img
                  src={carAllData[index].shoppingToolImg}
                  alt="car-ioniq"
                ></img>
                <h3>{carAllData[index].year}</h3>
                <h1>{carAllData[index].name}</h1>
                <p>
                  {carAllData[index].trim[0] +
                    " | " +
                    carAllData[index].trim[1] +
                    " | " +
                    carAllData[index].trim[2]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShoppingToolSection;

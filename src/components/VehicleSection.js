import "./VehicleSection.css";
import ioniq from "../assets/hyundai-ioniq-model.webp";
import kona from "../assets/kona-ev.webp";
import tucsan from "../assets/tucson-hb.webp";
import sonata from "../assets/sonata.webp";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function VehicleSection() {
  let navigate = useNavigate();
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
          <div className="vehicle-top-box">
            <div className="vehicle-text-box">
              <p>⚡ ELECTRIFIED</p>
              <h1>
                2023 <span className="color-navy">IONIQ 6</span>
              </h1>
            </div>
            <center>
              <img src={ioniq} alt="car-IONIQ"></img>
            </center>
            <center>
              <div style={{ textAlign: "center" }}>
                <p style={{ color: "white" }}>Starting at $41,600</p>
                <Link to="/CarDetail/0">
                  <button className="vehicle-button">
                    <p>Explore</p>
                  </button>
                </Link>
                <Link to="/CarBuild/0">
                  <button className="vehicle-button">
                    <p>Build</p>
                  </button>
                </Link>
              </div>
            </center>
          </div>

          <div className="vehicle-top-box">
            <div className="vehicle-text-box">
              <p>⚡ ELECTRIFIED</p>
              <h1>
                2023 <span className="color-navy">KONA</span> ELECTRIC
              </h1>
            </div>
            <center>
              <img src={kona} alt="car-KONA"></img>
            </center>
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "white" }}>Starting at $33,550</p>
              <button
                className="vehicle-button"
                onClick={() => navigate("/CarDetail/1")}
              >
                <p>Explore</p>
              </button>
              <button
                className="vehicle-button"
                onClick={() => navigate("/CarBuild/1")}
              >
                <p>Build</p>
              </button>
            </div>
          </div>

          <div className="vehicle-top-box">
            <div className="vehicle-text-box">
              <p>HYBRID</p>
              <h1>
                2023 <span className="color-navy">TUCSON</span> HYBRID
              </h1>
            </div>
            <center>
              <img src={tucsan} alt="car-TUCSAN"></img>
            </center>
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "white" }}>Starting at $31,350</p>
              <button
                className="vehicle-button"
                onClick={() => navigate("/CarDetail/2")}
              >
                <p>Explore</p>
              </button>
              <button
                className="vehicle-button"
                onClick={() => navigate("/CarBuild/2")}
              >
                <p>Build</p>
              </button>
            </div>
          </div>

          <div className="vehicle-top-box">
            <div className="vehicle-text-box">
              <p>HYBRID</p>
              <h1>
                2023 <span className="color-navy">SONATA</span> HYBRID
              </h1>
            </div>
            <center>
              <img src={sonata} alt="car-SONATA"></img>
            </center>
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "white" }}>Starting at $28,250</p>
              <Link to="/CarDetail/3">
                <button className="vehicle-button">
                  <p>Explore</p>
                </button>
              </Link>
              <Link to="/CarBuild/3">
                <button className="vehicle-button">
                  <p>Build</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleSection;

import "./VehicleSection.css";
import ioniq from "../assets/hyundai-ioniq-model.webp";
import kona from "../assets/kona-ev.webp";
import tucsan from "../assets/tucson-hb.webp";
import sonata from "../assets/sonata.webp";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function VehicleSection() {
  let navigate = useNavigate();

  return (
    <div
      style={{
        background: "white",
      }}
    >
      <div className="vehicle-top">
        <div className="vehicle-top-container">
          <div className="vehicle-top-box">
            <img src={ioniq} alt="car-IONIQ"></img>
            <div className="vehicle-text-box">
              <p>⚡ ELECTRIFIED</p>
              <h1>
                2023 <span className="color-navy">IONIQ 6</span>
              </h1>
            </div>
            <div style={{ textAlign: "center" }}>
              <Link to="/CarDetail/0">
                <button className="vehicle-button">
                  <p>Explore</p>
                </button>
              </Link>
              <Link to="/CarBuild/0">
                <button className="vehicle-button">
                  <p>Budild</p>
                </button>
              </Link>
            </div>
          </div>

          <div className="vehicle-top-box">
            <img src={kona} alt="car-KONA"></img>
            <div className="vehicle-text-box">
              <p>⚡ ELECTRIFIED</p>
              <h1>
                2023 <span className="color-navy">KONA</span> ELECTRIC
              </h1>
            </div>
            <div style={{ textAlign: "center" }}>
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
                <p>Budild</p>
              </button>
            </div>
          </div>

          <div className="vehicle-top-box">
            <img src={tucsan} alt="car-TUCSAN"></img>
            <div className="vehicle-text-box">
              <p>HYBRID</p>
              <h1>
                2023 <span className="color-navy">TUCSAN</span> HYBRID
              </h1>
            </div>
            <div style={{ textAlign: "center" }}>
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
                <p>Budild</p>
              </button>
            </div>
          </div>

          <div className="vehicle-top-box">
            <img src={sonata} alt="car-SONATA"></img>
            <div className="vehicle-text-box">
              <p>HYBRID</p>
              <h1>
                2023 <span className="color-navy">SONATA</span> HYBRID
              </h1>
            </div>
            <div style={{ textAlign: "center" }}>
              <Link to="/CarDetail/3">
                <button className="vehicle-button">
                  <p>Explore</p>
                </button>
              </Link>
              <Link to="/CarBuild/3">
                <button className="vehicle-button">
                  <p>Budild</p>
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

import "./VehicleSection.css";
import ioniq from "../assets/hyundai-ioniq-model.webp";
import kona from "../assets/kona-ev.webp";
import tucsan from "../assets/tucson-hb.webp";
import sonata from "../assets/sonata.webp"

function VehicleSection() {
  return (
    <div style={{background: "radial-gradient(circle at 40.1% 80.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)"}}>
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
              <button className="vehicle-button">
                <p>Explore</p>
              </button>
              <button className="vehicle-button">
                <p>Budild</p>
              </button>
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
              <button className="vehicle-button">
                <p>Explore</p>
              </button>
              <button className="vehicle-button">
                <p>Budild</p>
              </button>
            </div>
          </div>

          <div className="vehicle-top-box">
            <img src={tucsan} alt="car-TUCSAN"></img>
            <div className="vehicle-text-box">
              <p>HYBRID</p>
              <h1>
                2023 <span className="color-navy">TUCSAN</span> Hybrid
              </h1>
            </div>
            <div style={{ textAlign: "center" }}>
              <button className="vehicle-button">
                <p>Explore</p>
              </button>
              <button className="vehicle-button"> 
                <p>Budild</p>
              </button>
            </div>
          </div>

          <div className="vehicle-top-box">
            <img src={sonata} alt="car-SONATA"></img>
            <div className="vehicle-text-box">
              <p>HYBRID</p>
              <h1>
                2023 <span className="color-navy">SONATA</span> Hybrid
              </h1>
            </div>
            <div style={{ textAlign: "center" }}>
              <button className="vehicle-button">
                <p>Explore</p>
              </button>
              <button className="vehicle-button">
                <p>Budild</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleSection;

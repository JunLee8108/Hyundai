import "./VehicleSection.css";
import ioniq from "../assets/hyundai-ioniq-model.webp";
import kona from "../assets/kona-ev.webp";
import tucsan from "../assets/tucson-hb.webp";

function VehicleSection() {
  return (
    <div>
      <div className="vehicle-top">
        <h1>ALL VEHICLES</h1>
        <div className="vehicle-top-container">
          <div className="vehicle-top-box">
            <img src={ioniq}></img>
            <div className="vehicle-text-box">
              <h1>
                2023 <span className="color-navy">IONIQ 6</span>
              </h1>
            </div>
          </div>

          <div className="vehicle-top-box">
            <img src={tucsan}></img>
            <div className="vehicle-text-box">
              <h1>
                2023 <span className="color-navy">TUCSAN</span> Hybrid
              </h1>
            </div>
          </div>

          <div className="vehicle-top-box">
            <img src={kona}></img>
            <div className="vehicle-text-box">
              <h1>
                2023 <span className="color-navy">KONA</span> Electric
              </h1>
            </div>
          </div>

          <div className="vehicle-top-box">
            <img src={kona}></img>
            <div className="vehicle-text-box">
              <h1>
                2023 <span className="color-navy">KONA</span> Electric
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleSection;

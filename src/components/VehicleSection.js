import "./VehicleSection.css";
import ioniq from "../assets/model-ioniq.png";
import kona from "../assets/model-kona.jpg";

function VehicleSection() {
  return (
    <div>
      <div className="vehicle-top">
        <h1>Models</h1>
        <div className="vehicle-top-container">
          <div className="vehicle-top-box">
            <img src={ioniq}></img>
            <div className="vehicle-text-box">
              <h1>IONIQ 6</h1>
            </div>
          </div>

          <div className="vehicle-top-box">
            <img src={kona}></img>
            <div className="vehicle-text-box">
              <h1>KONA Electric</h1>
            </div>
          </div>
        </div>

        <div className="vehicle-top-container">
        <div className="vehicle-top-box">
            <img src={kona}></img>
            <div className="vehicle-text-box">
              <h1>Kona Electric</h1>
            </div>
          </div>
          
          <div className="vehicle-top-box">
            <img src={kona}></img>
            <div className="vehicle-text-box">
              <h1>Kona Electric</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleSection;

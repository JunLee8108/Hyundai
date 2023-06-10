import "./HomeSection.css";
import { Link } from "react-router-dom";
import ioniq from "../assets/hyundai-ioniq-model.webp";

function HomeSection() {
  return (
    <div>
      <div className="home-top-background background-img">
        <div className="home-top-content">
          <h1>
            Your Car with, <span className="logo-style">Hyundai</span>
          </h1>
          <button className="button-learn-more">LEARN MORE</button>
        </div>
      </div>

      <div className="home-bottom-background background-img">
        <div className="home-bottom-content home-top-content ">
          <h3>All-purpose hybrid SUV</h3>
          <h1>2023 TUCSON HYBRID</h1>
          <button className="button-learn-more">LEARN MORE</button>
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
          <Link to="/Ioniq">
            <button className="button-learn-more">LEARN MORE</button>
          </Link>
        </div>
      </div>

      <div className="home-middle-background">
        <div className="home-middle-left align-center">
          <p>«</p>
          <img src={ioniq}></img>
          <p>»</p>
        </div>
        <div className="home-middle-right align-center">
          <table>
            <thead>
              <tr>
                <th className="car-name">2023 IONIQ 6</th>
                <th>Starting at</th>
                <th>Up to</th>
                <th>Up to</th>
                <th>Available</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Electric Sedan</th>
                <td className="car-number">$41,600</td>
                <td>
                  <span className="car-number">361</span> miles
                </td>
                <td>
                  <span className="car-number">320</span> hp
                </td>
                <td>
                  <span className="car-number">20</span> inch wheels
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

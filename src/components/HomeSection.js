import "./HomeSection.css";
import { Link } from "react-router-dom";
import ioniq from "../assets/hyundai-ioniq-model.webp"

function HomeSection() {
  return (
    <div>
      <div className="home-top-background background-img">
        <div className="home-top-content">
          <h1>Your Car with, <span className="logo-style">Hyundai</span></h1>
          <button className="button-learn-more">LEARN MORE</button>
        </div>
      </div>

      <div className="home-bottom-background background-img">
        <div className="home-bottom-content home-top-content ">
          <h1>2023 TUCSON HYBRID WITH 38 MPG</h1>
          <h3>All-purpose hybrid SUV</h3>
          <button className="button-learn-more">LEARN MORE</button>
        </div>
      </div>

      <div className="home-bottom-background2 background-img">
        <div className="home-bottom-content home-top-content ">
          <h1>2023 KONA ELECTRIC</h1>
          <h3>Our all-electric small SUV</h3>
          <button className="button-learn-more">LEARN MORE</button>
        </div>
      </div>

      <div className="home-bottom-background3 background-img">
        <div className="home-bottom-content home-top-content ">
        <h3>The first-ever, all electric 2023 IONIQ 6.</h3>
        <h1>2023 IONIQ 6</h1>
        <Link to="/Ioniq">
        <button className="button-learn-more">LEARN MORE</button>
        </Link>
        </div>
      </div>

      <div className="home-middle-background">
        <div className="home-middle-left">
          <img src={ioniq}></img>
        </div>

        <div className="home-middle-right">
          <div className="home-table">
            <table>
              <thead>
                <tr>
                  <th>2023 IONIQ 6</th>
                  <th>Starting at</th>
                  <th>Up to</th>
                  <th>Up to</th>
                  <th>Available</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Electric Sedan</td>
                  <td>$41,600</td>
                  <td>361 miles</td>
                  <td>320 hp</td>
                  <td>20 inch wheels</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;

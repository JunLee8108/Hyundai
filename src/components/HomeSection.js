import "./HomeSection.css";

function HomeSection() {
  return (
    <div>
      <div className="home-top-background background-img">
        <div className="home-top-content">
          <h1>Your Car with, Hyundai</h1>
          <button className="button-learn-more">LEARN MORE</button>
        </div>
      </div>

      <div className="home-middle-background">
        <div className="home-middle-left">
          <img src="img/hyundai-elantra.jpg"></img>
        </div>

        <div className="home-middle-right">
          <div className="home-table">
            <table>
              <thead>
                <tr>
                  <th>2023 Elantra</th>
                  <th>Starting at</th>
                  <th>Up to</th>
                  <th>Standard</th>
                  <th>Available</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Compact Sedan</td>
                  <td>$20,950</td>
                  <td>42 MPG Hwy</td>
                  <td>201 hp</td>
                  <td>18 inch wheels</td>
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

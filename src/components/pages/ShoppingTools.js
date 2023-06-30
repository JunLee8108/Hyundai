import "../ShoppingTools.css";
import ioniq from "../../assets/ioniq6-build-your-own.webp";
import kona from "../../assets/kona-build-your-own.webp";
import sonata from "../../assets/sonata-build-your-own.webp";
import tucson from "../../assets/tucson-build-your-own.webp";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function ShoppingTools(props) {
  let navigate = useNavigate();
  let [fade, setFade] = useState("");
  useEffect(() => {
    setFade("shopping-container-fade");

    return(()=>{setFade("");})
  }, []);


  return (
    <div className={"shopping-container " + fade}>
      <div className="container">
        <div className="title">
          <h1>Build Your Own Vehicle</h1>
        </div>
        <div className="flex-container">
          <div className="flexbox" onClick={() => navigate("/CarBuild/0")}>
            <img src={ioniq} alt="car-ioniq"></img>
            <h3>2023</h3>
            <h1>IONIQ 6</h1>
            <p>SE | SL | Limited</p>
          </div>
          <div className="flexbox" onClick={() => navigate("/CarBuild/1")}>
            <img src={kona} alt="car-kona"></img>
            <h3>2023</h3>
            <h1>KONA ELECTRIC</h1>
            <p>SE | SL | Limited</p>
          </div>
          <div className="flexbox" onClick={() => navigate("/CarBuild/3")}>
            <img src={sonata} alt="car-sonata"></img>
            <h3>2023</h3>
            <h1>SONATA HYBRID</h1>
            <p>Blue | SEL | Limited</p>
          </div>
          <div className="flexbox" onClick={() => navigate("/CarBuild/2")}>
            <img src={tucson} alt="car-tucson"></img>
            <h3>2023</h3>
            <h1>TUCSON HYBRID</h1>
            <p>Blue | SEL | Limited</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingTools;

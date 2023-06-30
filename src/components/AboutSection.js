import "./AboutSection.css";
import { useState, useEffect } from "react";

function AboutSection() {
  let [fade, setFade] = useState("");

  useEffect(()=> {
    setFade("about-container-fade");

    return(()=> {
      setFade("");
    })
  }, [])

  return (
    <div className={"about-container " + fade}>
      <div className="top-container">
        <div className="text">
          <h1>WE ARE HYUNDAI,</h1>
          <p>Where anything is possible.</p>
        </div>
      </div>
      {/* <div className="mid-container"></div> */}
    </div>
  );
}

export default AboutSection;

import "./AboutSection.css";
import { useState, useEffect } from "react";

function AboutSection() {
  let [fade, setFade] = useState("");

  // useEffect(() => {
  //   let timer = setTimeout(() => {
  //     setFade("about-container-fade");
  //   }, 1000);

  //   return () => {
  //     clearTimeout(timer);
  //     setFade("");
  //   };
  // }, []);

  useEffect(() => {
    let timer;
    const onPageLoad = () => {
      timer = setTimeout(() => {
        setFade("about-container-fade");
      }, 1000);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);

      // Remove the event listener when component unmounts
    }
    return () => {
      clearTimeout(timer);
      setFade("");
      window.removeEventListener("load", onPageLoad);
    };
  }, []);

  return (
    <div className="about-container">
      <div className="top-container">
        <div className={"text " + fade}>
          <h1>WE ARE HYUNDAI,</h1>
          <p>Where anything is possible.</p>
        </div>
      </div>
      {/* <div className="mid-container"></div> */}
    </div>
  );
}

export default AboutSection;

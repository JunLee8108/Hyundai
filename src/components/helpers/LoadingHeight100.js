import "./LoadingHeight100.css";

import BeatLoader from "react-spinners/BeatLoader";

export default function LoadingHeight100() {
  return (
    <>
      <div className="loading-height-container">
        <BeatLoader color="white" />
      </div>
    </>
  );
}

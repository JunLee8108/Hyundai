import "./OwnerSection.css";
import { useState } from "react";

function OwnerSection() {
  let [modal, setModal] = useState(false);

  const handleSubmit = (e) => {
    let id = document.querySelector("#loginID").value;
    let pw = document.querySelector("#loginPW").value;
    if (id === "") {
      e.preventDefault();
      setModal(true);
      // document.body.style.paddingRight = "15px";
      document.body.style.overflow = "hidden";
    } else if (pw === "") {
      e.preventDefault();
      setModal(true);
      document.body.style.overflow = "hidden";
      // document.body.style.paddingRight = "15px";
    }
  };

  return (
    <div className="Owner-container">
      <div className="owner-introduction">
        <p>Welcome to My Hyundai,</p>
      </div>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h1>HYUNDAI</h1>
          <label htmlFor="loginID">
            <p>Hyundai ID</p>
          </label>
          <input type="text" id="loginID" placeholder="ID*"></input>
          <label htmlFor="loginPW">
            <p>Password</p>
          </label>
          <input type="password" id="loginPW" placeholder="Password*"></input>
          <p className="underline">Forgot your password?</p>
          <center>
            <button type="submit" style={{ cursor: "pointer" }}>
              Login
            </button>
          </center>
          <p className="line">OR</p>
          <p className="owner-last-p">
            <span className="underline">Register</span> now to discover Hyundai.
          </p>
        </form>
      </div>

      {modal ? (
        <div className="login-modal-bg">
          <div className="login-modal">
            <p>Invalid ID or Password.</p>
            <p>Please check you ID or Password.</p>
            <button
              onClick={() => {
                setModal(false);
                document.body.style.overflow = "unset";
                document.body.style.paddingRight = "unset";
              }}
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default OwnerSection;

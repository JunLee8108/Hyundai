import "./OwnerSection.css";
import { useState } from "react";

function OwnerSection() {
  let [modal, setModal] = useState(false);

  const handleSubmit = (e) => {
    let id = document.querySelector("#loginID").value;
    let pw = document.querySelector("#loginPW").value;
    if (id == "") {
      e.preventDefault();
      setModal(true);
      document.body.style.overflow = "hidden";
    } else if (pw == "") {
      e.preventDefault();
      setModal(true);
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div
      style={{
        background:
          "radial-gradient(circle at 40.1% 80.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)",
      }}
    >
      <div className="Owner-container">
        <div className="login">
          <form onSubmit={handleSubmit}>
            <h2>MY HYUNDAI</h2>
            <label htmlFor="loginID">
              <p>Hyundai ID</p>
            </label>
            <input type="text" id="loginID"></input>
            <label htmlFor="loginPW">
              <p>Password</p>
            </label>
            <input type="password" id="loginPW"></input>
            <p className="underline">Forgot your password?</p>
            <center>
              <button type="submit">Login</button>
            </center>
            <p className="line">Or</p>
            <p>
              <span className="underline">Register</span> now to discover
              Hyundai.
            </p>
          </form>
        </div>

        {modal == true ? (
          <div className="login-modal">
            <p>Invalid ID or Password.</p>
            <p>Please check you ID or Password.</p>
            <button
              onClick={() => {
                setModal(false);
                document.body.style.overflow = "unset";
              }}
            >
              Close
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default OwnerSection;

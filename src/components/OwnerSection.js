import "./OwnerSection.css";

function OwnerSection() {
  return (
    <div>
      <div className="Owner-container">
        <div className="login">
          <form>
            <h2>MY HYUNDAI,</h2>
            <p>Hyundai ID</p>
            <input type="text"></input>
            <p>Password</p>
            <input type="password"></input>
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
      </div>
    </div>
  );
}

export default OwnerSection;

import "./OwnerSection.css";

function OwnerSection() {
  return (
    <div>
      <div className="Owner-container">
        <div className="login">
          <form>
            <h2>MY HYUNDAI</h2>
            <label htmlFor="loginID"><p>Hyundai ID</p></label>
            <input type="text" id="loginID"></input>
            <label htmlFor="loginPW"><p>Password</p></label>
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
      </div>
    </div>
  );
}

export default OwnerSection;

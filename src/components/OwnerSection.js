import "./OwnerSection.css"

function OwnerSection() {
    return (
        <div>
            <div className="Owner-container">
                <div className="login">
                    <form>
                        <h2>MYHYUNDAI.</h2>
                        <p>Hyundai ID</p>
                        <input type="text"></input>
                        <p>Password</p>
                        <input type="password"></input>
                        <p>Forgot your password?</p>
                        <button type="submit">Login</button>
                        <p className="line">Or</p>
                        <p><span className="register">Register</span> now to discover Hyundai</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default OwnerSection;
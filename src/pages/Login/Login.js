import './Login.css';

function App() {
  return (
    <div>
        <h1 style={{marginTop: "200px"}}>
            <center/>Welcome back!
        </h1>
        <h2 style={{fontSize: "20px"}}>
            <center/>Login to your account
        </h2>
        <div className="logpass">
            <form id="login-form">
                <div className="input">
                    <label for="email"></label>
                    <input type="text" id="email" name="email" required placeholder="Enter email" />
                </div>
                <div className="input">
                    <label for="pw"></label>
                    <input type="password" id="pw" name="pw" required placeholder="Enter password" />
                </div>
                <div className="input">
                    <button className="binput" type="submit" style={{fontSize: "20px"}}>Login</button>
                </div>
                {/* <script src="Login.js"></script> */}
                <h1 style={{fontSize: "20px", marginTop: "20px"}}>
                    OR
                </h1>
                <div className="reg">
                    Don't have an account? 
                    <button className="breg" onClick={() => window.location.href = '/Register'}>Register</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default App;
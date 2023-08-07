import './Login.css';
import bglogin from "./../../assets/bglogin.png"
import visible from "./../../assets/visible.svg"
import invisible from "./../../assets/invisible.svg"

function Login() {
  return (
    <div className='login-box' style={{backgroundImage:`url(${bglogin})`}}>
        <div className='login-title'>
            Welcome
        </div>
        <div className='login-label'>
            Login to your account
        </div>
        <div className="logpass">
            <form id="login-form">
                <div className="input">
                    <input type="text" required placeholder="Enter Username" />
                </div>
                <div className="input">
                    <input type="password" required placeholder="Enter password"/>
                </div>
                <div className='login-submit'>
                    <button type="submit" className='submit-button'>Login</button>
                </div>
                <div className='or'>
                    <div></div>
                    OR
                    <div id='ordiv'></div>
                </div>
                <div className="reg">
                    Don't have an account? 
                    <div onClick={() => window.location.href = '/register'}>Create Account</div>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Login;
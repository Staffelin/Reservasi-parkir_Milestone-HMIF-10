import './Register.css';
import bglogin from "./../../assets/bglogin.png"
import visible from "./../../assets/visible.svg"
import invisible from "./../../assets/invisible.svg"

function Login() {
  return (
    <div className='register-box' style={{backgroundImage:`url(${bglogin})`}}>
        <div className='register-title'>
            Register
        </div>
        <div className='login-label'>
            Create your new account
        </div>
        <div className="logpass">
            <form id="login-form">
                <div className="input">
                    <input type="text" required placeholder="Name" />
                </div>
                <div className="input">
                    <input type="text" required placeholder="Username" />
                </div>
                <div className="input">
                    <input type="number" required placeholder="Phone" />
                </div>
                <div className="input">
                    <input type="password" required placeholder="Enter password"/>
                </div>
                <div>
                    <button type="submit" className='submit-button'>Sign up</button>
                </div>
                <div className='or'>
                    <div></div>
                    OR
                    <div id='ordiv'></div>
                </div>
                <div className="reg">
                    Already have an Account? 
                    <div onClick={() => window.location.href = '/login'}>log in</div>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Login;
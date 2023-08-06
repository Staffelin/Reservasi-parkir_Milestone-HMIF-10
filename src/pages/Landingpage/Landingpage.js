import './Landingpage.css';
import logo from './Logo ITBPark.jpg';

function Landingpage() {
  return (
    <body>
        <div className="logo">
            <img src={logo}/>
        </div>
        <div style={{fontSize: "75px", fontWeight: "bold"}}>
            ITBPark
        </div>
        <div style={{fontSize: "25px"}}>
            <br/>Reserve your parking hassel-free with our
        </div>
        <div style={{fontSize: "25px", marginBottom: "20px"}}>
            advanced reservation system
        </div>
        <div>
            <button className="start" onClick={() => window.location.href = '/Login'}>Start {'>'}</button>
        </div>
    </body>
  );
}

export default Landingpage;

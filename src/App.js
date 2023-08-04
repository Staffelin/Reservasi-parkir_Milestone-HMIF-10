import './homestyle.css';
import MAPPIC from './MAPPIC.png';

function App() {
  return (
    <div>
      <div class="topnav">
          <a class="texte" style={{fontSize:"40px",fontFamily: "Avigea"}}>ITB Park</a>
          <a style={{fontFamily: "Poppins",fontSize:"24px",padding:"40px"}} href = "#home">Homepage</a>
          <a style={{fontFamily: "Poppins",fontSize:"24px",padding:"40px"}} href = "#parkspot">Parking Spot</a>
          <a style={{fontFamily: "Poppins",fontSize:"24px",padding:"40px"}} href = "#about">About</a>
      </div>
      <img src ={MAPPIC} class = "padding" alt = "Map Picture"/>
      <div style={{paddingLeft:"24px",color:"white"}}>
          <div class = "square" id = "home" style={{marginTop:"6.5cm"}}>
              <h2 style={{fontSize:"60px",fontFamily:"Poppins-Thicc",marginTop:"4cm",marginLeft:"10px",paddingTop:"1.1cm"}}>Book parkings easier!</h2>
              <p style={{fontFamily:"Poppins",fontSize:"20px",marginLeft:"10px"}}>Want to reserve a parking spot in ITB? Try this website to give you</p>
              <p style={{fontFamily:"Poppins",fontSize:"20px",lineHeight:"0px",marginLeft:"10px"}}>an access to ITB's parking spots and their quotas to increase the efficiency</p>
              <p style={{fontFamily:"Poppins",fontSize:"20px",marginLeft:"10px",paddingBottom:"20px"}}>of parking. Click the link below to order one ticket!</p>
              <a href = "#parkspot" style={{fontSize:"20px",fontFamily:"Arial",textDecoration: "none",padding:"15px",marginLeft:"7.5cm",backgroundColor: "rgb(255, 255, 255)",color:"rgb(0, 0, 0)",borderRadius:"15px",border: "5px solid darkblue"}}> Order now! </a>
          </div>
      </div>
      <div class ="square3" id="parkspot">
        <div style ={{fontFamily : "Poppins-Thicc",fontSize:"55px",textAlign:"center",paddingTop:"1cm",color:"#dfdfff"}}>
          Parking Spots
        </div>
        <div style={{color:"darkblue"}} class = "square2">
            <div class = "square1">
                <h2 style={{fontSize:"30px",fontFamily:"Arial",marginTop:"1cm",paddingTop:"0.5cm"}}>Parkir Sipil</h2>
                <a style = {{fontSize:"20px",fontFamily: "Poppins",display: "inline-block"}}>Kuota : 90 | Motor : Rp 2.000,00</a>
                <a href = "login.html" style={{fontSize:"20px",fontFamily:"Arial",textDecoration: "none",padding:"5px",backgroundColor:"#dfdfff",color:"darkblue",borderRadius:"15px",border:"5px solid darkblue",marginLeft: "22cm"}}>Order now </a>
            </div>
            <div class = "square1">
                <h2 style={{fontSize:"30px",fontFamily:"Arial",marginTop:"1cm",paddingTop:"0.5cm"}}>Parkir Seni Rupa</h2>
                <a style = {{fontSize:"20px",fontFamily: "Poppins",display: "inline-block"}}>Kuota : 90 | Motor : Rp 2.000,00</a>
                <a href = "login.html" style={{fontSize:"20px",fontFamily:"Arial",textDecoration: "none",padding:"5px",backgroundColor:"#dfdfff",color:"darkblue",borderRadius:"15px",border:"5px solid darkblue",marginLeft: "22cm"}}>Order now </a>
            </div>
            <div class = "square1">
                <h2 style={{fontSize:"30px",fontFamily:"Arial",marginTop:"1cm",paddingTop:"0.5cm"}}>Parkir Saraga</h2>
                <a style = {{fontSize:"20px",fontFamily: "Poppins",display: "inline-block"}}>Kuota : 90 | Motor : Rp 2.000,00</a>
                <a href = "login.html" style={{fontSize:"20px",fontFamily:"Arial",textDecoration: "none",padding:"5px",backgroundColor:"#dfdfff",color:"darkblue",borderRadius:"15px",border:"5px solid darkblue",marginLeft: "22cm"}}>Order now </a>
            </div>
        </div>
      </div>
      <div class = "square4" id="about">
        <div style ={{fontFamily : "Poppins-Thicc",fontSize:"55px",textAlign:"center",paddingTop:"0.4cm",color:"#dfdfff"}}>
          About
        </div>
        <div style ={{fontFamily : "Poppins",fontSize:"15px",textAlign:"center",paddingTop:"0.6cm",color:"#dfdfff"}}>
          Joe : 086969696969 (Telp) | 18422002@mahasiswa.itb.ac.id (Email)
        </div>
      </div>
    </div>
  );
}

export default App;

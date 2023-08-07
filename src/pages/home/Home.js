import { useEffect, useState } from "react"
import "./Home.css"
import Loading from "../../components/loading/Loading";
import Navbar from './../../components/navbar/NavBar';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { addData,editDataById } from "../../function";

const Home = () =>{
    const [Park,setPark]=useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://parkir-api.vercel.app/data/park')
            .then(response => response.json())
            .then(data => {
                setPark(data)
                setIsLoading(false)
            })
            .catch(error => console.error(error));
    }, []);

    const navigate = useNavigate();

    const navigateToReservation = () => {
        navigate('./../../reservation/');

    };

    const Card = () =>{
        return Park.map((park)=>{
            return(
                <div className="content-card" onClick={navigateToReservation}>
                    <label className="content-label" id="parkname">{park.name}</label>
                    <div className="content-box" style={{backgroundColor: crowd(park.car,park.bike)}}>
                        <div><img className="content-img" src={park.url_img}/></div>
                        <div className="info">Car<div className="info-value">{park.car}</div></div>
                        <div className="info">Bike<div className="info-value">{park.bike}</div></div>
                    </div>
                </div>
            )
        })
    }

    function crowd(car,bike){
        if (car>50 || bike>50){
            return "#00D22E"
        }
        else if ((car<=50 && car>10) || (bike<=50 && bike>10)){
            return "#F5DC00"
        }
        else{
            return "#F50000"
        }
    }

    function getLocation(id){
        const parkLoc = 
        document.getElementById("parkname").value = parkLoc
    }

    return(
        <div>
            <div className="profilebox">
                <div className="profile-img"><img className="profile"/></div>
                <div><input className="search" type="text" placeholder="Search"></input></div>
            </div>
            <div className="home-content">
                <Card/>
            </div>
            {isLoading && (<Loading/>)}
        </div>
    )
}

export default Home
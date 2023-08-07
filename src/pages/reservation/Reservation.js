import image from './../../assets/img.png';
import Home from "../../pages/home/Home";
import './Reservation.css';
import { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

function Reservation() {
  const [count, setCount] = useState(0);
  var price = 2000;
  var distance = 520;
  var time = 8;
  const navigate = useNavigate();
  const navigateToPayment = () => {
    navigate('./../../payment/'); }
  function checkState() {
    if ((document.getElementById('myRadio1').checked)||(document.getElementById('myRadio2').checked)||(document.getElementById('myRadio2').checked)
    ||(document.getElementById('myRadio3').checked)||(document.getElementById('myRadio4').checked)||(document.getElementById('myRadio5').checked)
    ||(document.getElementById('myRadio6').checked)) {
        navigateToPayment()
    } else {
        // call other function
    }
  }

  return (
    <main>
      <section className='Description'>
        <div className='Description__value'>
          <div className='desc-left'>
          <img src={image}></img>
          </div>
          <div className='desc-right'>
            <h3>Deskripsi</h3>
            <p>Parkir Seni Rupa</p>
            <h3>Location</h3>
            <p>Jalan Ganesha</p>
          </div>
        </div>
      </section>

      <section className="Reservation">
        <h2>Arrival Time</h2>
        <div className='reservation-time'>
          <div className='radio'>
            <input className='radio__input' type="radio" value="option1" name="myRadio" id="myRadio1"></input>
            <label className='radio__label' for="myRadio1">06:00 - 06:20</label>
            <input className='radio__input' type="radio" value="option2" name="myRadio" id="myRadio2"></input>
            <label className='radio__label' for="myRadio2">06:20 - 06:40</label>
            <input className='radio__input' type="radio" value="option3" name="myRadio" id="myRadio3"></input>
            <label className='radio__label' for="myRadio3">06:40 - 07:00</label>
          </div>
        </div>
        <div className='reservation-time'>
          <div className='radio'>
            <input className='radio__input' type="radio" value="option4" name="myRadio" id="myRadio4"></input>
            <label className='radio__label' for="myRadio4">07:00 - 07:20</label>
            <input className='radio__input' type="radio" value="option5" name="myRadio" id="myRadio5"></input>
            <label className='radio__label' for="myRadio5">07:20 - 07:40</label>
            <input className='radio__input' type="radio" value="option6" name="myRadio" id="myRadio6"></input>
            <label className='radio__label' for="myRadio6">07:40 - 08:00</label>
          </div>
        </div>
      </section>

      <section className='Details'>
        <div className='details-attribute' style={{marginTop:"50px"}}>
          <div>
            <p>Price</p>
            <p><b>Rp{price}</b></p>
          </div>
          <div>
            <p>Distance</p>
            <p><b>{distance}m</b></p>
          </div>
          <div>
            <p>Estimated Time</p>
            <p><b>{time} mins</b></p>
          </div>
        </div>
        <button className='button' onClick={checkState}>Book Now</button>
      </section>
    </main>
  );
}

export default Reservation;

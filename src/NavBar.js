import './Navbar.css';
import { useState } from 'react';
import homepic from "./pic/Home.svg"
import settingspic from "./pic/Vector.svg"
import tutorialpic from "./pic/menu.svg"
import helppic from "./pic/Help.svg"

const Navbar = () =>{
    return(
        <div className='box'>
            <div className='nav'>
                <div className='home'><img src={homepic}/></div>
                <div className='text'>Home</div>
            </div>
            <div className='nav'>
                <div className='tutorial'><img src={tutorialpic}/></div>
                <div className='text'>Tutorial</div>
            </div>
            <div className='nav'>
                <div className='help'><img src={helppic}/></div>
                <div className='text'>Help</div>
            </div>
            <div className='nav'>
                <div className='setting'><img src={settingspic}/></div>
                <div className='text'>Settings</div>
            </div>
        </div>
    )
}

export default Navbar
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../../pages/home/Home";
import { Admin, Reservation } from "../../pages";
import Landingpage from "./../../pages/Landingpage/Landingpage"
import Login from "../../pages/Login/Login"
import Register from "./../../pages/Register/Register"

const Routess = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Landingpage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/home" element={<Home />} />
                
            </Routes>
        </Router>
    )
}

export default Routess;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../../pages/home/Home";
import { Admin, Reservation } from "../../pages";
import NavBar from './../../components/navbar/NavBar';

const Routess = () => {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default Routess;
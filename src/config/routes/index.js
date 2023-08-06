import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./../../pages/home/Home";
import { Admin, Reservation } from "../../pages";

const Routess = () => {
    return (
        <Router>
            <Routes>
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default Routess;
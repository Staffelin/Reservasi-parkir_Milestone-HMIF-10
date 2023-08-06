import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Admin } from '../../pages'

const Routess = () => {
    return (
        <Router>
            <Routes>
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default Routess;
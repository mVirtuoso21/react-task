import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link to="" className="navbar-brand">Fake Store API</Link>
                <div className="navbar-collapse" id="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/registration" className="nav-link">Registration</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link">Dashboard</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};


export default Navbar;
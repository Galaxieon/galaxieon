import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="title">
                <h1>Galaxieon.com</h1>
            </div>
            <div className="nav">
                <div className="btn">
                    <Link to="/">
                        <i className="fas fa-home"></i>
                    </Link>
                </div>
                <div className="btn">
                    <Link to="/Todo-App">
                        <i className="fas fa-list-ol"></i>
                    </Link>
                </div>
                <div className="btn">
                    <Link to="/Quiz-App">
                        <i className="fas fa-question"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}

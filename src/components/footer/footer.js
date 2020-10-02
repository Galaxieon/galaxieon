import React, { Component } from "react";
import "./footer.css";
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <h3>
                    Developed By <span>Muhammad Semeer</span>
                    &nbsp;
                    <a
                        href="https://www.instagram.com/dream_dev_/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                </h3>
            </div>
        );
    }
}

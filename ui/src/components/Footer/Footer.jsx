import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";

export default function Footer({ onClick }) {
    return (
        <div className="footer">
            <span onClick={ onClick }>
                <button className="download">
                    Save album art <i className="bi bi-download"></i>
                </button>
            </span>
        </div>
    );
}
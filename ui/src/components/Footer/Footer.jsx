import React from "react";
import './Footer.css'

export default function Footer({ onClick }) {
    return (
        <div className="footer">
            <span>Save image(download + cloud) <button onClick={() => onClick()}>save</button></span>
        </div>
    )
}
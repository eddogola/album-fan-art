import React from "react";
import "./Cover.css";

export default function Cover({ b64Img }) {
    return (
        <div className="cover mt-4">
            <img className="img-fluid cover-img" src={ b64Img } alt="album-art" />
        </div>
    );
}